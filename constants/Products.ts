import Product1Image from "@/public/images/Product1.png";
import Product2Image from "@/public/images/Product2.png";
import Product3Image from "@/public/images/Product3.png";
import { StaticImageData } from "next/image";
export type IProduct = {
  id: number;
  title: string;
  price: string;
  originalPrice: string | null;
  discount: string | null;
  rating: number;
  reviews: number;
  category: string;
  image: string | StaticImageData;
  colors: string[];
  isLocked: boolean;
  isFavorited: boolean;
};

export const Products: IProduct[] = [
  {
    id: 1,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow...",
    price: "AED 900",
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    category: "Dresses",
    image: Product1Image,
    colors: ["black", "blue", "red", "green", "yellow"],
    isLocked: false,
    isFavorited: false,
  },
  {
    id: 2,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow...",
    price: "AED 900",
    originalPrice: "AED 1200",
    discount: "25% OFF",
    rating: 4.5,
    reviews: 2910,
    category: "Dresses",
    image: Product2Image,
    colors: ["brown"],
    isLocked: false,
    isFavorited: false,
  },
  {
    id: 3,
    title:
      "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow...",
    price: "AED 900",
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 2910,
    category: "Dresses",
    image: Product3Image,
    colors: ["brown", "cream"],
    isLocked: true,
    isFavorited: true,
  },
];
