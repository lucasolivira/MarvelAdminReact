import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--bg)",
        }}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
