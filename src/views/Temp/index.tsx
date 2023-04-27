import Banner from "../Common/Banner";
import ShapeBottom from "../Common/ShapeBottom";
import Payment from "./Payment";
import {
  TempWrapper
} from "./styled";

const Temp = (): JSX.Element => {
  const bannerData = {
    title: "Verstoss<br />#100100-181",
  };
  return (
    <TempWrapper>
      <Banner page="temp" data={bannerData} />
      <Payment />
      <ShapeBottom
        fillColor="#fff"
        bgColor="#e6f0fb"
        height={50}
      />
    </TempWrapper>
  );
}

export default Temp;