import Banner from "../Common/Banner";
import ShapeBottom from "../Common/ShapeBottom";
import Payment from "./Payment";
import Form from "./Form";
import Faq from "../Common/Faq";
import {
  DetailWrapper
} from "./styled";

const Detail = (): JSX.Element => {
  const bannerData = {
    title: "Verstoss<br />#100100-181",
  };
  const accordionData = {
    title: "<p>Beurteilung und Behandlung von Einwände</p>",
    list: [
      {
        id: 1,
        title: "Was sind berechtigte Einwände?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 2,
        title: "Wie werden Einwände behandelt?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
    ]
  };
  return (
    <DetailWrapper>
      <Banner page="detail" data={bannerData} />
      <Payment />
      <ShapeBottom
        fillColor="#fff"
        bgColor="#e6f0fb"
        height={40}
      />
      <Faq data={accordionData} />
      <Form />
    </DetailWrapper>
  );
}

export default Detail;