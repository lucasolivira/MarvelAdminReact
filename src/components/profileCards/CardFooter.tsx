import { useTheme } from "../../src/contexts/ThemeContext";

interface props {
  children: React.ReactNode;
}

export default function CardFooter({ children }: props) {
  const { isDarkMode } = useTheme();
  return (
    <div
      className="CardFooter"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "40%",
        alignItems: "center",
        backgroundColor: isDarkMode ? "#343a40" : "#e9ecef",
        color: isDarkMode ? "#f8f9fa" : "#121212",
        padding: "0px 14px",
      }}
    >
      {children}
    </div>
  );
}
