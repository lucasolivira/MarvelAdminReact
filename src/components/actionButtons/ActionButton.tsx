import { useState } from "react";

interface props {
  label: string;
  onPress: () => void;
  disabled: boolean;
  variant?: "blue" | "white";
}

export default function ActionButton({
  label,
  onPress,
  disabled,
  variant,
}: props) {
  const backgroundColor = variant === "white" ? "#FFFFFF" : "#007BFF";
  const textColor = variant === "white" ? "#007BFF" : "#FFFFFF";
  const opacity = disabled ? 0.5 : 1;
  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        opacity,
        width: "auto",
        height: "32px",
        margin: "5px",
        display: "flex",
        alignItems: "center",
      }}
      className="MyButton"
      onClick={onPress}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
