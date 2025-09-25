"use client";
import { useState } from "react";
import { Heart, Lock, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import loveAdd from "@/public/icons/love-add.svg";
import loveAddFill from "@/public/icons/love-add-fill.svg";
import bagAdd from "@/public/icons/bag-add.svg";
import bagAddFill from "@/public/icons/bag-add-fill.svg";
import shoppingbag from "@/public/icons/shoppingbag.svg";
import CustomizeSelectField from "@/components/shared/form/CustomizeTextField copy";
import Image from "next/image";
import { motion } from "motion/react";
import {
  staggerContainerInView,
  staggerItemInView,
  buttonHover,
  buttonTap,
  scaleInView,
} from "@/lib/animations";
import { ProductDetailsData } from "@/constants/Products";

type Props = {};

function ProductDetailsSection({}: Props) {
  const [selectType, setSelectType] = useState<string>("cotton");
  const [selectSize, setSelectSize] = useState<string>("S");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(
    ProductDetailsData.isFavorited
  );
  const [isLocked, setIsLocked] = useState(ProductDetailsData.isLocked);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };
  return (
    <motion.div
      className="col-span-1 lg:col-span-4 w-full flex flex-col  gap-3"
      variants={staggerContainerInView}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center justify-between gap-3"
        variants={staggerItemInView}
      >
        <span className="border border-primary text-primary text-14 font-semibold px-5 h-9 flex items-center justify-center rounded-full  ">
          T-Shirt
        </span>

        {/* Action Buttons */}
        <div className="flex gap-2 ms-auto">
          {/* Lock/Unlock Button */}
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Button
              onClick={() => setIsLocked(!isLocked)}
              variant={"outline"}
              size={"icon"}
              aria-label={"Lock"}
            >
              <Image src={isLocked ? bagAddFill : bagAdd} alt="" />
            </Button>
          </motion.div>

          {/* Favorite Button */}
          <motion.div whileHover={buttonHover} whileTap={buttonTap}>
            <Button
              onClick={() => setIsFavorited(!isFavorited)}
              variant={"outline"}
              size={"icon"}
            >
              <Image src={isFavorited ? loveAddFill : loveAdd} alt="" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Product Title */}
      <motion.h2
        className="text-24 font-semibold text-black-500 leading-tight max-w-[520px]"
        variants={staggerItemInView}
      >
        {ProductDetailsData.title}
      </motion.h2>

      {/* Price */}
      <motion.div className="space-y-1" variants={staggerItemInView}>
        <div className="flex items-center gap-3">
          <span className="text-20 font-semibold text-black-500">
            ${ProductDetailsData.price.toFixed(2)}
          </span>
          <span className="text-16 text-black-200 line-through">
            {" "}
            ${ProductDetailsData.originalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-12 text-black-300">
          This price is exclusive of taxes.
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-black-500 text-14  max-w-[520px]"
        variants={staggerItemInView}
      >
        Lorem ipsum dolor sit, consectetur adipiscing elit, sed diam nonummy
        Lorem ipsum dolor sit amet, diam nonummy
      </motion.p>

      {/* line */}
      <motion.div
        className="h-px w-full bg-black-50 my-4"
        variants={staggerItemInView}
      />

      {/* Product Options */}
      <motion.div
        className="space-y-6 w-full md:max-w-[300px]"
        variants={staggerItemInView}
      >
        {/* Type Selector */}
        <CustomizeSelectField
          select={selectType}
          setSelect={setSelectType}
          placeholder="Select an option"
          label="Type"
          options={[
            { value: "cotton", label: "Cotton" },
            { value: "polyester", label: "Polyester" },
            { value: "blend", label: "Cotton Blend" },
          ]}
        />
        {/* Size Selector */}
        <CustomizeSelectField
          select={selectSize}
          setSelect={setSelectSize}
          placeholder="Select an option"
          label="Size"
          options={[
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },
          ]}
        />
      </motion.div>

      {/* Colors */}
      <motion.div className="space-y-3" variants={staggerItemInView}>
        <h3 className="text-20 font-semibold text-black-500">Colors</h3>
        <motion.div
          className="flex items-center gap-3 flex-wrap"
          variants={staggerContainerInView}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {ProductDetailsData.colors.map((color, index) => (
            <motion.div
              key={color.name}
              className="flex flex-col"
              variants={staggerItemInView}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="button"
                onClick={() => setSelectedColor(color.name)}
                className={`w-11 h-11 md:w-14 md:h-14 bg-gray hover:bg-gray-200 transition-all duration-300 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                  selectedColor === color.name
                    ? "border-black"
                    : " border-transparent"
                }`}
              >
                <div
                  style={{ backgroundColor: color.value }}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full"
                ></div>
              </button>
              <span
                className={`text-14 font-semibold text-black-300  mx-auto ${
                  selectedColor === color.name ? "block" : "opacity-0"
                }`}
              >
                {color.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Quantity and Add to Cart */}
      <motion.div className="space-y-3" variants={staggerItemInView}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h3 className="text-20 font-semibold text-black-500">Quantity</h3>
            <p className="text-16 text-black-200">
              (${ProductDetailsData.price.toFixed(2)} for Piece)
            </p>
          </div>
        </div>

        <div className="flex items-center w-full flex-col md:flex-row gap-4 justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center w-full gap-5">
            <motion.div
              className="flex items-center bg-gray rounded-[12px] h-14 p-2"
              variants={scaleInView}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => handleQuantityChange(-1)}
                className="w-10 h-10 flex cursor-pointer
                 items-center rounded-md justify-center bg-white hover:bg-gray-50 transition-colors"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <Minus className="w-4 h-4" />
              </motion.button>
              <span className="w-16 text-center font-medium">
                {quantity.toString().padStart(2, "0")}
              </span>
              <motion.button
                onClick={() => handleQuantityChange(1)}
                className="w-10 h-10 flex cursor-pointer
                 items-center rounded-md justify-center bg-white hover:bg-gray-50 transition-colors"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Total Price */}
            <motion.span
              className="text-24 font-semibold text-black-500"
              key={quantity}
              initial={{ scale: 1.2, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              ${(ProductDetailsData.price * quantity).toFixed(2)}
            </motion.span>
          </div>

          {/* Add to Cart Button */}
          <motion.div
            className="w-full flex items-center "
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <Button
              className="w-full md:w-[230px] ms-auto
            "
            >
              Add To Cart
              <Image
                src={shoppingbag}
                width={24}
                height={24}
                alt="shoppingbag"
              />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductDetailsSection;
