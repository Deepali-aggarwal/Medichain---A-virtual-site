declare module 'aos' {
  interface AosOptions {
    duration?: number;
    offset?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    startEvent?: string;
    animatedClassName?: string;
    initClassName?: string;
    disableMutationObserver?: boolean;
    debounceDelay?: number;
    throttleDelay?: number;
    disable?: string | boolean | (() => boolean);
  }
  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  };
  export default AOS;
}
