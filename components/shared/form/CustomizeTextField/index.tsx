"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface CustomizeTextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomizeTextField({
  name,
  label,
  placeholder,
  type = "text",
  disabled = false,
  className,

  onChange,
}: CustomizeTextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    const registerProps = register(name);
    if (registerProps.onChange) registerProps.onChange(e);
  };

  const { ...registerProps } = register(name);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-14 text-start text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
      <div>
        <div className="relative">
          <Input
            id={name}
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              isPassword && "pr-10", // space for password icon
              error && "border-red-300 focus-visible:ring-red-300",
              "h-10 bg-gray-50"
            )}
            {...registerProps}
            onChange={handleInputChange}
          />

          {/* Show/Hide Password Icon */}
          {isPassword && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-gray-400 z-10"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
        {error && (
          <p className="text-12 text-red-400 ps-2">{error.message as string}</p>
        )}
      </div>
    </div>
  );
}

export default CustomizeTextField;
