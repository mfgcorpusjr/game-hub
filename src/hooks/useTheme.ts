import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
