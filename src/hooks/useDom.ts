import { MutableRefObject, useEffect, useState } from "react";

/**
 * @returns boolean
 * @description helpful when you want to track when a specific DOM element comes into view or goes out of sight
 */
export function useOnScreen(ref: MutableRefObject<any>, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);

  return isVisible;
}

export function useScroll() {
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