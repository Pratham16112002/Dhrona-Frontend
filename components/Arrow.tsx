import React from "react";
import { Box } from "@mui/material";

interface ArrowProps {
  direction?: "up" | "down" | "left" | "right";
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Arrow: React.FC<ArrowProps> = ({
  direction = "right",
  size = 24,
  color = "currentColor",
  onClick,
}) => {
  const getRotation = () => {
    switch (direction) {
      case "up":
        return "rotate(-90deg)";
      case "down":
        return "rotate(90deg)";
      case "left":
        return "rotate(180deg)";
      case "right":
      default:
        return "rotate(0deg)";
    }
  };

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: onClick ? "pointer" : "default",
        transform: getRotation(),
        transition: "transform 0.2s ease-in-out",
        "&:hover": onClick ? { transform: `${getRotation()} scale(1.1)` } : {},
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Box>
  );
};

export default Arrow;
