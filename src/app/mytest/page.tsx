"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div
        className="top-0 left-0 right-0 h-10 fixed bg-red-600 origin-[0%]"
        style={{ scaleX }}
      />
      <div className="h-screen bg-orange-400 w-full"></div>
      <div className="h-screen bg-gray-500 w-full"></div>
      <div className="h-screen bg-orange-400 w-full"></div>
      <div className="h-screen bg-orange-400 w-full"></div>
      <div className="h-screen bg-orange-400 w-full"></div>
      <div className=" h-screen w-full"></div>;
    </div>
  );
}
