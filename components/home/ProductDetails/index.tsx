"use client";

import ProductDetailsSection from "./ProductDetailsSection";
import ProductImages from "./ProductImages";
import { motion } from "motion/react";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

function ProductDetails() {
  return (
    <motion.section 
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.6 }
      }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        {/* Product Images Section */}
        <motion.div
          className="col-span-1 lg:col-span-3"
          variants={fadeInLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <ProductImages />
        </motion.div>
        {/* Product Details Section */}
        <motion.div
          className="col-span-1 lg:col-span-4"
          variants={fadeInRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <ProductDetailsSection />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProductDetails;
