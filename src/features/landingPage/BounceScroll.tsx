import React, { useEffect, useRef, useState } from "react";
interface BounceOnScrollProps {
  children: React.ReactNode;
}
const BounceOnScroll: React.FC<BounceOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // 50% sichtbar
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={` grid grid-cols-1 transition-all duration-500 ease-in-out  ${
        isVisible ? "lg:animate-bounce" : ""
      } `}
    >
      {children}
    </div>
  );
};

export default BounceOnScroll;
