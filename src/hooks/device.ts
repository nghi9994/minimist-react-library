import { useEffect, useRef, useState } from "react";

/**
 * @returns object {isMobile}
 * @description detect which device you are using
 */
export function useDeviceDetect() {
  const [isMobile, setMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}

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
