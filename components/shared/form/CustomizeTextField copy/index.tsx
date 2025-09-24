"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CustomizeTextFieldProps {
  label: string;
  placeholder?: string;
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
  options: {
    value: string;
    label: string;
  }[];
}

function CustomizeSelectField({
  label,
  placeholder,
  select,
  setSelect,
  options,
}: CustomizeTextFieldProps) {
  return (
    <div className="relative  h-[45px] ">
      <label className="absolute -top-3 left-4 bg-white px-2 text-12 text-black-500">
        {label}
      </label>

      <Select value={select} onValueChange={setSelect}>
        <SelectTrigger className="w-full cursor-pointer  !h-[45px]  border-black/10 rounded-[10px]">
          <SelectValue placeholder={placeholder || "Select an option"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem
              className="cursor-pointer hover:bg-gray-100 transition-all duration-300"
              key={opt.value}
              value={opt.value}
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CustomizeSelectField;
