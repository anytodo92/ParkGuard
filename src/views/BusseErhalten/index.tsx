import Banner from "../Common/Banner";
import Faq from "../Common/Faq";
import {
  BusseErhaltenWrapper
} from "./styled";

const BusseErhalten = (): JSX.Element => {
  const bannerData = {
    title: "Park-Busse erhalten?",
    description: `
      Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
    `,
    form: {
      placeholder: "Verstoss Nr. eingeben ...",
      buttonText: "Zur Busse",
    },
  };
  return (
    <BusseErhaltenWrapper>
      <Banner data={bannerData} page="busse-erhalten" />
      <Faq />
    </BusseErhaltenWrapper>
  )
}

export default BusseErhalten;