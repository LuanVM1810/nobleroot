import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";

export default function App() {
  return (
    <h1 className="font-montserrat overflowy-y-auto overflow-x-hidden text-white h-screen px-4 pt-4 pb-8 bg-gradient-to-b from-purple-900 to-purple-700">
      <NavBar />
      <Slogan />
      <Content />
    </h1>
  );
}
