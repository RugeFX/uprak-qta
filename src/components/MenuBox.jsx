import React from "react";
import { motion } from "framer-motion";

const MenuBox = ({ favorite, image, name, desc, price, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 100, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, ease: "easeOut" }}
      className="grid h-[30rem] w-72 grid-flow-row flex-wrap justify-items-center gap-2 rounded-xl border border-gray-300 bg-white p-3 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
    >
      <div className="flex h-fit w-full justify-start">
        {favorite && (
          <span className="w-1/3 rounded-xl border-2 border-yellow-400 bg-yellow-200 text-center text-yellow-500">
            Favorite
          </span>
        )}
      </div>
      <img
        src={image}
        alt="Menu item"
        className="h-60 w-60 rounded-full object-cover"
      />
      <div className="flex h-full w-full flex-col justify-between">
        <span className="text-xl font-bold">{name}</span>
        <p className="text-md h-16 overflow-y-scroll">{desc}</p>
        <span className="text-xl font-bold">Rp.{price}</span>
      </div>
    </motion.div>
  );
};

export default MenuBox;
