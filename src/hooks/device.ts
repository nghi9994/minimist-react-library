import { useEffect, useRef, useState } from "react";

/**
 * @param eventType
 * @param callback
 * @param element optional DOM to add event listener
 * @returns void
 * @description helpful in situations where you want to handle events
 */
export function useEventListener(
  eventType: keyof WindowEventMap,
  callback: Function,
  element = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

/**
 * @param maxWidth
 * @returns boolean
 * @description used for css responsive
 */
export function useResponsive({
  minWidth = 0,
  maxWidth,
}: {
  minWidth?: number;
  maxWidth: number;
}) {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  const resizeHandler = () => {
    const currentWindowWidth = window.innerWidth;
    const isDesiredWidth =
      currentWindowWidth >= minWidth && currentWindowWidth <= maxWidth;
    setState({ windowWidth: currentWindowWidth, isDesiredWidth });
  };

  useEventListener("resize", resizeHandler);

  return state.isDesiredWidth;
}

/**
 * @returns boolean
 * @description check window is scrolling or not
 */
export function useScroll() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scrollingHandler = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", scrollingHandler);

    return () => window.removeEventListener("scroll", scrollingHandler);
  }, [isScrolling]);

  return isScrolling;
}

/**
 * @returns object {width, height}
 * @description helpful in situations where you want to make a responsive design
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}
