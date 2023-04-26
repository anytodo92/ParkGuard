
import Banner from "../Common/Banner";
import Faq from "./Faq";
import ShapeBottom from "../Common/ShapeBottom";
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
    </HomeWrapper>
  );
};

export default Startseite;