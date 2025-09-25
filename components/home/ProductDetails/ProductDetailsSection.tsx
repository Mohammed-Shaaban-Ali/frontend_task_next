import { useState } from "react";
import { Heart, Lock, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

import CustomizeSelectField from "@/components/shared/form/CustomizeTextField copy";
type Props = {};

function ProductDetailsSection({}: Props) {
  const [selectType, setSelectType] = useState<string>("cotton");
  const [selectSize, setSelectSize] = useState<string>("S");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "red", value: "#ef4444", label: "Red" },
    { name: "blue", value: "#3b82f6", label: "Blue" },
    { name: "brown", value: "#a3a3a3", label: "Brown" },
    { name: "lightblue", value: "#60a5fa", label: "Light Blue" },
    { name: "gray", value: "#6b7280", label: "Gray" },
  ];

  const price = 300;
  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };
  return (
    <div className="col-span-1 lg:col-span-4 w-full flex flex-col  gap-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 ">
        <span className="border border-primary text-primary text-14 font-semibold px-5 h-9 flex items-center justify-center rounded-full  ">
          T-Shirt
        </span>

        {/* Action Buttons */}
        <div className="flex gap-2 ms-auto">
          {/* Lock/Unlock Button */}
          <Button variant={"outline"} size={"icon"} aria-label={"Lock"}>
            <Lock className={`text-primary`} size={14} />
          </Button>

          {/* Favorite Button */}
          <Button variant={"outline"} size={"icon"}>
            <Heart size={14} className={`text-primary`} />
          </Button>
        </div>
      </div>

      {/* Product Title */}
      <h2 className="text-24 font-semibold text-black-500 leading-tight max-w-[520px]">
        J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
      </h2>

      {/* Price */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="text-20 font-semibold text-black-500">
            ${price.toFixed(2)}
          </span>
          <span className="text-16 text-black-200 line-through">$400.00</span>
        </div>
        <p className="text-12 text-black-300">
          This price is exclusive of taxes.
        </p>
      </div>

      {/* Description */}
      <p className="text-black-500 text-14  max-w-[520px]">
        Lorem ipsum dolor sit, consectetur adipiscing elit, sed diam nonummy
        Lorem ipsum dolor sit amet, diam nonummy
      </p>

      {/* line */}
      <div className="h-px w-full bg-black-50 my-4"></div>
      {/* Product Options */}
      <div className="space-y-6 max-w-[300px]">
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
      </div>

      {/* Colors */}
      <div className="space-y-3">
        <h3 className="text-20 font-semibold text-black-500">Colors</h3>
        <div className="flex items-center gap-3 flex-wrap">
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col">
              <button
                type="button"
                onClick={() => setSelectedColor(color.name)}
                className={`w-14 h-14 bg-gray hover:bg-gray-200 transition-all duration-300 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                  selectedColor === color.name
                    ? "border-black"
                    : " border-transparent"
                }`}
              >
                <div
                  style={{ backgroundColor: color.value }}
                  className="w-8 h-8 rounded-full"
                ></div>
              </button>
              <span
                className={`text-14 font-semibold text-black-300  mx-auto ${
                  selectedColor === color.name ? "block" : "opacity-0"
                }`}
              >
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h3 className="text-20 font-semibold text-black-500">Quantity</h3>
            <p className="text-16 text-black-200">
              (${price.toFixed(2)} for Piece)
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-4 justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center w-full gap-5">
            <div className="flex items-center bg-gray rounded-[12px] h-14 p-2 ">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-10 h-10 flex cursor-pointer
                 items-center rounded-md justify-center bg-white hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-16 text-center font-medium">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-10 h-10 flex cursor-pointer
                 items-center rounded-md justify-center bg-white hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Total Price */}
            <span className="text-24 font-semibold text-black-500">
              ${(price * quantity).toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full md:w-[230px]">
            Add To Cart
            <ShoppingBag className="w-5 h-5 " />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsSection;
