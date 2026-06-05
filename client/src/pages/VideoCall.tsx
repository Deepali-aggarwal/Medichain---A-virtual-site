import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function VideoCall() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [partnerId, setPartnerId] = useState<string | null>(null);
  const [looking, setLooking] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    const s = io('http://localhost:5000');
    setSocket(s);

    s.on('doc-found', ({ partnerId: pid }) => {
      setPartnerId(pid);
      setLooking(false);
      startCall(s, pid);
    });

    s.on('offer', async ({ from, offer }) => {
      setPartnerId(from);
      const pc = createPeerConnection(s, from);
      pcRef.current = pc;
      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      s.emit('answer', { to: from, answer });
    });

    s.on('answer', async ({ answer }) => {
      if (pcRef.current) {
        await pcRef.current.setRemoteDescription(new RTCSessionDescription(answer));
      }
    });

    s.on('ice-candidate', async ({ candidate }) => {
      if (pcRef.current && candidate) {
        try {
          await pcRef.current.addIceCandidate(new RTCIceCandidate(candidate));
        } catch (e) { /* ignore */ }
      }
    });

    s.on('peer-disconnected', () => {
      setPartnerId(null);
      if (pcRef.current) { pcRef.current.close(); pcRef.current = null; }
    });

    return () => { s.close(); };
  }, []);

  const createPeerConnection = (s: Socket, pid: string) => {
    const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
    pc.onicecandidate = (e) => {
      if (e.candidate) s.emit('ice-candidate', { to: pid, candidate: e.candidate });
    };
    pc.ontrack = (e) => {
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = e.streams[0];
    };
    if (localVideoRef.current?.srcObject) {
      (localVideoRef.current.srcObject as MediaStream).getTracks().forEach((t) => pc.addTrack(t, localVideoRef.current!.srcObject as MediaStream));
    }
    return pc;
  };

  const startCall = async (s: Socket, pid: string) => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (localVideoRef.current) localVideoRef.current.srcObject = stream;
    const pc = createPeerConnection(s, pid);
    pcRef.current = pc;
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    s.emit('offer', { to: pid, offer });
  };

  const findDoctor = async () => {
    setLooking(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (localVideoRef.current) localVideoRef.current.srcObject = stream;
    socket?.emit('find-doc');
  };

  const endCall = () => {
    if (pcRef.current) { pcRef.current.close(); pcRef.current = null; }
    if (localVideoRef.current?.srcObject) {
      (localVideoRef.current.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
    }
    setPartnerId(null);
    setLooking(false);
  };

  return (
    <div style={{ background: '#f0f2f5', minHeight: '100vh' }}>
      <Navbar />
      <div className="container py-5 text-center">
        <h2 className="mb-4" style={{ color: '#3f396d' }}>Video Consultation</h2>
        <div className="row justify-content-center mb-4">
          <div className="col-md-5 mb-3">
            <video ref={localVideoRef} autoPlay muted playsInline style={{ width: '100%', borderRadius: 12, background: '#000', height: 300, objectFit: 'cover' }} />
            <p className="mt-2 fw-bold">You</p>
          </div>
          <div className="col-md-5 mb-3">
            <video ref={remoteVideoRef} autoPlay playsInline style={{ width: '100%', borderRadius: 12, background: '#000', height: 300, objectFit: 'cover' }} />
            <p className="mt-2 fw-bold">{partnerId ? 'Doctor' : 'Waiting...'}</p>
          </div>
        </div>
        <div>
          {!partnerId && !looking && (
            <button onClick={findDoctor} className="c-btn py-3 px-5 rounded-pill">Find a Doctor Now</button>
          )}
          {looking && <p className="text-muted fs-5">Looking for an available doctor...</p>}
          {partnerId && (
            <button onClick={endCall} className="btn btn-danger py-3 px-5 rounded-pill">End Call</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
