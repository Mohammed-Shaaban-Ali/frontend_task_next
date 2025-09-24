import { IProduct } from "@/constants/Products";
import React from "react";
import { Heart, Lock, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = { product: IProduct };

function ProductCard({ product }: Props) {
  const [isFavorited, setIsFavorited] = React.useState(
    product.isFavorited || false
  );
  const [isLocked, setIsLocked] = React.useState(product.isLocked || false);
  return (
    <div className="max-w-[188px] md:max-w-[288px] space-y-3 group">
      {/* Image Container */}
      <div className="relative w-full p-2 md:p-4 pb-2 rounded-[20px] border border-black/5">
        <div className="flex items-center justify-between gap-3 mb-2">
          {/* Discount Badge */}
          {product.discount && (
            <span className="border border-black-50 text-primary text-14 font-bold px-2 h-8 flex items-center justify-center rounded-[8px]  ">
              {product.discount}
            </span>
          )}
          {/* Action Buttons */}
          <div className="flex gap-2 ms-auto">
            {/* Lock/Unlock Button */}
            <Button
              onClick={() => setIsLocked(!isLocked)}
              variant={"outline"}
              size={"icon"}
              aria-label={isLocked ? "Unlock" : "Lock"}
            >
              <Lock
                className={` ${!isLocked && "text-primary"}`}
                size={14}
                fill={isLocked ? "black" : "none"}
              />
            </Button>

            {/* Favorite Button */}
            <Button
              onClick={() => setIsFavorited(!isFavorited)}
              variant={"outline"}
              size={"icon"}
              aria-label={isFavorited ? "Unfavorite" : "Favorite"}
            >
              <Heart
                size={14}
                className={` ${!isFavorited && "text-primary"}`}
                fill={isFavorited ? "black" : "none"}
              />
            </Button>
          </div>
        </div>

        {/* Product Image */}
        <div className="flex items-center h-full justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={187}
            height={187}
            className="object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          {/* Category */}
          <p className="text-12 font-semibold text-black-300 ">
            {product.category}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star size={18} className="text-primary fill-primary" />
            <span className="text-12 font-semibold text-black-500 ">
              {product.rating}
            </span>
            <span className="text-12  text-black-300 ">
              ({product.reviews?.toLocaleString()})
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-14 font-medium text-black-500  line-clamp-2 leading-tight">
          {product.title}
        </h3>

        <div className="flex items-center justify-between gap-2">
          {/* Price */}
          <div className="flex items-center gap-1">
            <span className="text-16 font-semibold text-black-500 ">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-12 font-semibold text-black-200 line-through pt-1">
                {product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Options */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 rounded-full "
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
              {product.colors.length > 3 && (
                <span className="text-14 text-black-500 font-medium">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
