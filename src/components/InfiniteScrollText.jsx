import { useEffect, useRef } from "react";
import gsap from "gsap";

const InfiniteScrollText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const container = containerRef.current;
    const textWidth = text.offsetWidth;

    // Duplikasi teks untuk efek seamless
    text.innerHTML += text.innerHTML;

    gsap.to(text, {
      x: `-${textWidth / 2}px`, // Geser setengah dari panjang teks yang diduplikasi
      duration: 20,
      ease: "linear",
      repeat: -1
    });
  }, []);

  return (
    <div ref={containerRef} className="whitespace-nowrap w-[200%] text-black/70 bg-[#fff] h-10 flex items-center z-[9999]">
      <div ref={textRef} className="inline-block text-[10px]">
        {"     "} {""} Fashion Berkelanjutan, Bumi Lebih Nyaman! &nbsp; • &nbsp; Fashion Berkelanjutan, Bumi Lebih Nyaman! &nbsp; • &nbsp; Fashion Berkelanjutan, Bumi Lebih Nyaman! &nbsp; • &nbsp; 
      </div>
    </div>
  );
};

export default InfiniteScrollText;
