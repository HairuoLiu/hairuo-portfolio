import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar(): JSX.Element {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/hairuo-portfolio/";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-4 flex justify-between items-center"
      style={{
        background: isHome
          ? "linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0) 100%)"
          : "rgba(10,10,10,0.95)",
        backdropFilter: isHome ? "none" : "blur(10px)",
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
        <span className="font-display text-xl md:text-2xl text-white">
          Hairuo
          <span className="text-primary">.</span>
        </span>
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        {!isHome && (
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            返回展架
          </Link>
        )}
        {isHome && (
          <span className="text-xs text-white/30 tracking-widest uppercase hidden md:block">
            Photography Portfolio
          </span>
        )}
      </div>
    </motion.nav>
  );
}
