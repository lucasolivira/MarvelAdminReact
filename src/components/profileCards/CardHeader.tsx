import { useTheme } from "../../src/contexts/ThemeContext";

interface props {
  children: React.ReactNode;
}

export default function CardHeader({ children }: props) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className="CardHeader"
      style={{
        backgroundColor: isDarkMode ? "#343a40" : "#e9ecef",
        color: isDarkMode ? "#f8f9fa" : "#121212",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
