import Content from "../../components/Content/Content";
import NavBar from "../../components/NavBar/NavBar";
import Slogan from "../../components/Slogan/Slogan";

type Props = {
  isMobile: boolean;
};

const LandingPage = ({ isMobile }: Props) => {
  return (
    <>
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </>
  );
};

export default LandingPage;
