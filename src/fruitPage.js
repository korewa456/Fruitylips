import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function FruitPage({ item }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-screen h-screen justify-center items-center gap-24"
        style={{ background: item.background }}
      >
        <div className="flex-shrink-0 w-96">
          <div className="text-7xl">{item.title}</div>
          <div className="text-lg">{item.description}</div>
          <Link to={item.productPage}>
            <button className="btn mt-6">Taste Drive</button>
          </Link>
        </div>

        <img
          className="pr-24 h-60 lg:h-96 overflow-auto"
          src={item.icon.default}
        />
      </motion.div>
    </AnimatePresence>
  );
}
