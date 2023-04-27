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
    <BusseErhaltenWrapper>
      <Banner data={bannerData} page="busse-erhalten" />
      <Faq data={accordionData} />
    </BusseErhaltenWrapper>
  )
}

export default BusseErhalten;