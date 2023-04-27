
import Banner from "../Common/Banner";
import ShapeBottom from "../Common/ShapeBottom";
import Faq from "../Common/Faq";
import Concept from "./Concept";
import {
  Images
} from "../../utils/assets";
import {
  HomeWrapper
} from "./styled";

const Startseite = (): JSX.Element => {
  const bannerData = {
    title: "Park-Busse erhalten?",
    description: `
      Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
    `,
    form: {
      placeholder: "Verstoss Nr. eingeben ...",
      buttonText: "Zur Busse",
    },
    bottom: {
      title: "Fragen?",
      description: `
        Hier finden Sie Antworten zu den Fragen<br />in Bezug auf Umtriebsentschädigungen ...
      `,
    },

    intro1: {
      title: "Wir kümmern uns um Falschparker",
      description: `
        Die komplette digitale Lösung - kostenlos!
        <br />
        Zusammenarbeit starten ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corporis autem tempora perspiciatis expedita quibusdam!
      `,
      buttonText: "Zusammenarbeit"
    },

    intro2: {
      title: "Wie funktioniert’s?",
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corpo
      `,
      buttonText: "Unsere Lösung"
    }

  };
  return (
    <HomeWrapper>
      <Banner data={bannerData} page="home" />
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