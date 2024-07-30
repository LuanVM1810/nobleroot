import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";

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
    <h1 className="font-montserrat overflowy-y-auto overflow-x-hidden text-white h-screen px-4 pt-2 pb-6 bg-gradient-to-b from-purple-900 to-purple-700">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </h1>
  );
}
