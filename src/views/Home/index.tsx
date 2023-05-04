
import Banner from "../Common/Banner";
import ShapeBottom from "../Common/ShapeBottom";
import Faq from "../Common/Faq";
import Concept from "./Concept";
import {
  Images, Icons,
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
      arrowIcon: Icons.ArrowDownLightBlueUrl
    },

    intro1: {
      title: "Wir kümmern uns um Falschparker",
      description: `
        Die komplette digitale Lösung - kostenlos!
        <br />
        Zusammenarbeit starten ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corporis autem tempora perspiciatis expedita quibusdam!
      `,
      buttonText: "Zusammenarbeit",
      buttonUrl: "/kontakt",
    },

    intro2: {
      title: "Wie funktioniert’s?",
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corpo
      `,
      buttonText: "Unsere Lösung",      
      buttonUrl: "/unsere-losung",
    }

  };


  const accordionData = {
    title: "<p>FAQ Umtriebsentschädigung</p>",
    description: `
      Hier finden sie Antworten zu den am häufisten gestellten Fragen in Bezug auf Umtriebsentschätdgungen, 
      ausgestellt durch Park Guard. Für weiter Fragen bitten wir Sie, das Kontaktformular zu verwenden und 
      wir melden uns schnellstmöglich bei Ihnen.
    `,
    list: [
      {
        id: 1,
        title: "Was ist eine Umtriebsenschädigung?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 2,
        title: "Was geschieht, wenn die Umtriebsentschädigung nicht fristgerecht beglichen wird?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 3,
        title: "Was sind berechtigte Einwände?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 4,
        title: "Wie reiche ich einen Einwand ein?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
    ]
  }
  return (
    <HomeWrapper>
      <Banner data={bannerData} page="home" />
      <Faq data={accordionData} />
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