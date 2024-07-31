import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function App() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width != undefined && windowSize.width < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);
  return (
    <h1 className="font-montserrat overflowy-y-auto overflow-x-hidden text-white h-screen px-4 pt-2 pb-6 bg-gradient-to-b from-purple-900 to-purple-700 md:px-20">
      <Routes>
        <Route path="/" element={<LandingPage isMobile={isMobile} />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </h1>
  );
}
