import { ReactNode } from "react";

interface props {
  variant?: "default" | "compact";
  children: ReactNode;
}

export default function Card({ variant, children }: props) {
  const ClassCard = variant === "default" ? "default" : "compact";
  return (
    <div
      className={ClassCard}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderStyle: "solid",
        borderColor: "#dcdcdcff",
        borderWidth: "thin",
        borderRadius: "20px",
        overflow: "hidden",
        height: "400px",
        width: "350px",
        margin: "2%",
      }}
    >
      {children}
    </div>
  );
}
