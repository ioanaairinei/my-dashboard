import { MutableRefObject, RefObject, useEffect } from "react";

export interface UseIntersectionObserverProps {
  target: RefObject<HTMLDivElement | null>;
  onIntersect: ([], observerElement: any) => void;
  threshold?: number;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.1, //10% of target is visible in viewport, we trigger onIntersect
  rootMargin = "0px",
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    });

    const current = target.current;
    observer.observe(current as HTMLElement);

    return () => {
      observer.unobserve(current as HTMLElement);
    };
  });
};

export default useIntersectionObserver;
