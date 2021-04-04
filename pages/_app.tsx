import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    // instead of data attribute
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 py-14 lg:mb-0 md:mb-16 sm:px-20 md:px-12 lg:px-16 xl:px-48">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-black lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
