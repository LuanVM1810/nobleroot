import Content from "../../components/Content/Content";
import Courses from "../../components/Courses/Courses";
import Membership from "../../components/Membership/Membership";
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
      <Courses />
      <Membership />
      <Content />
    </>
  );
};

export default LandingPage;
