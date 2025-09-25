import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import HomeMotionWrapper from "@/components/home/HomeMotionWrapper";
import React from "react";
import ProductTitle from "@/components/home/ProductTitle";
import ProductDetails from "@/components/home/ProductDetails";
import RatingAndReviews from "@/components/home/RatingAndReviews";
import SimilarItems from "@/components/home/SimilarItems";
import { ProductDetailsData } from "@/constants/Products";
import { generateSeoMetadata } from "@/lib/generateSeoMetadata";

type Props = {};
export async function generateMetadata() {
  return generateSeoMetadata({
    title: `${ProductDetailsData.title} | TinyTales`,
    description: `${ProductDetailsData.title} - Buy now for $${ProductDetailsData.price}. Originally $${ProductDetailsData.originalPrice} (${ProductDetailsData.discount}% off). Rated ${ProductDetailsData.rating} stars by ${ProductDetailsData.reviews} customers.`,
    keywords: [
      ProductDetailsData.title,
      ProductDetailsData.category,
      "men shirt",
      "long sleeve shirt",
      "wrinkle free shirt",
      "stretch shirt",
    ],
    images: ProductDetailsData.images.map((img) => img.src),
  });
}

function Page({}: Props) {
  return (
    <HomeMotionWrapper>
      <section>
        <Navbar />
        <ProductTitle title="Product Details" />
        <ProductDetails />
        <RatingAndReviews />
        <SimilarItems />
        <Footer />
      </section>
    </HomeMotionWrapper>
  );
}

export default Page;
