
import Banner from "../Common/Banner";
import ShapeBottom from "../Common/ShapeBottom";
import Faq from "./Faq";
import Concept from "./Concept";
import {
  Images
} from "../../utils/assets";
import {
  HomeWrapper
} from "./styled";

const Startseite = (): JSX.Element => {
 
  return (
    <HomeWrapper>
      <Banner />
      <Faq />
      <ShapeBottom
        fillColor="#e6f0fb"
        bgColor="#fff"
        height={120}
      />
      <Concept />
    </HomeWrapper>
  );
};

export default Startseite;