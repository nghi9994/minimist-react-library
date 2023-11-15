import { useEffect, useState } from "react";
import { useEventListener } from "./useDom";

/**
 * @returns boolean
 * @description check window is scrolling or not
 */
export function useScrolling() {
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
 * @description scroll to element or specific position
 */
export function useScrollTo() {
  const scrollToElement = (element: any) => {
    if (!element) return;
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (top?: number, left?: number) => {
    window.scrollTo({
      top: top || 0,
      left: left || 0,
      behavior: "smooth",
    });
  };

  return { scrollToElement, scrollTo };
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
