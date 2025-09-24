"use client";

import ProductDetailsSection from "./ProductDetailsSection";
import ProductImages from "./ProductImages";

type Props = {};

function ProductDetails({}: Props) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        {/* Product Images Section */}
        <ProductImages />
        {/* Product Details Section */}
        <ProductDetailsSection />
      </div>
    </section>
  );
}

export default ProductDetails;
