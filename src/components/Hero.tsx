import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/1e43f80d-c35d-4a57-9141-8ae2abf6097e/files/4f764b4b-57f1-44e8-95bd-235c0dda0fe7.jpg"
          alt="Байкал, Забайкальский национальный парк"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ЗАБАЙКАЛЬЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Национальный парк на берегах Байкала — дикая природа, горные хребты и бескрайняя тайга
        </p>
        <button className="mt-8 mx-auto px-8 py-3 bg-white text-black uppercase tracking-wide text-sm font-medium hover:bg-transparent hover:text-white border border-white transition-all duration-300">
          Спланировать поездку
        </button>
      </div>
    </div>
  );
}