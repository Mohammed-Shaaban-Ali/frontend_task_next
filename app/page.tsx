import ProductDetails from "@/components/home/ProductDetails";
import ProductTitle from "@/components/home/ProductTitle";
import RatingAndReviews from "@/components/home/RatingAndReviews";
import SimilarItems from "@/components/home/SimilarItems";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <section>
      <Navbar />
      <ProductTitle title="Product Details" />
      <ProductDetails />
      <RatingAndReviews />
      <SimilarItems />

      <Footer />
    </section>
  );
}

export default page;
