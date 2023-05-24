import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { MyThemeProvider, MyThemeContext } from "~/context/themeContext";
import { useContext } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const { theme } = useContext(MyThemeContext);
  const isDarkMode = theme === 'dark';
  
  return (
    <MyThemeProvider>
      <div className={`h-full ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Component {...pageProps} />
      </div>
    </MyThemeProvider>
  );
};

export default api.withTRPC(MyApp);
