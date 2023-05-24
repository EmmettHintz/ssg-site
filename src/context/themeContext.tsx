import React, { ReactNode } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const MyThemeContext = React.createContext<ThemeContext>({} as ThemeContext);

interface MyThemeProviderProps {
  children: ReactNode;
}

export const MyThemeProvider: React.FC<MyThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <MyThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
};
