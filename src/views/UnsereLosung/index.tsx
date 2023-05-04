import Banner from "../Common/Banner";
import Faq from "../Common/Faq";
import SimpleText from "../Common/SimpleText";
import Cards from "../Common/Cards";
import ShapeTop from "../Common/ShapeTop";

import { Icons } from "../../utils/assets";
import {
  UnsereLosungWrapper
} from "./styled";

const UnsereLosung = (): JSX.Element => {
  const bannerData = {
    title: "Die digitale<br />Komplettlösung",
    description: `
      Von der Registrierung von Falschparker, über Lenkerabklärung bis hin zur Verrechnung. Unsere Tools decken den gesamten Prozess ab, damit ihre privaten Parkplätze in Zukunft wieder den berechtigten Personen zur Verfügung stehen.
    `,

    intro1: {
      title: "Mehr freie Parkplätze dank ParkGuard",
      description: `
      Durch ParkGuard kann das richterliche Parkverbot auf privatem Grund unkompliziert durchgesetzt werden.
      <br /><br />
      Unsere digitale Tool-Landschaft reduziert den Aufwand auf ein Minimum. Für alle administrativen Schritte sind wir für Sie da.
      `
    },

    intro2: {
      title: "Keine Fixkosten",
      description: `
      Der Einsatz von ParkGuard ist für Sie kostenlos. Sie profitieren doppelt! Freie Parkplätze und zusätzliche Einnahmen durch die ausgestellten Umtriebsenschädigungen.
      `,
    }

  };

  const accordionData = {
    title: "<p>Das Wichtigste in Kürze</p>",
    description: `
      Hier finden sie Antworten zu den am häufisten gestellten Fragen in Bezug auf Umtriebsentschätdgungen, 
      ausgestellt durch Park Guard. Für weiter Fragen bitten wir Sie, das Kontaktformular zu verwenden und 
      wir melden uns schnellstmöglich bei Ihnen.
    `,
    list: [
      {
        id: 1,
        title: "Vorteile einer Zusammenarbeit",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 2,
        title: "Welche Probleme werden gelöst?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 3,
        title: "Wie genau funktioniert ParkGuard?",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 4,
        title: "Kosten und Einnahmemöglichkeiten",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
      {
        id: 5,
        title: "Voraussetzungen für eine Zusammenarbeit",
        content: `
        Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
        `,
      },
    ]
  };

  const textData1 = {
    title: "<p>Die ParkGuard Komponente</p>",
    description: `
    Die ParkGuard Lösung besteht aus drei Komponenten. Diese drei Tools dienen zur Erfassung und Abwicklung von fälschlich parkierten Fahrzeugen.
    `
  };

  const textData2 = {
    title: "<p>Kostenlose Demo?</p>",
    description: `
    Sie wünschen eine kostenlose Demo? Nehmen Sie mit uns Kontakt auf und wir vereinbaren einen Termin um Ihnen die Möglichkeiten von ParkGuard im Detail zu erläutern.
    `,
    linkText: "Termin verinbaren",
  };

  const list = [
    {
      title: "Erfassungs App",
      description: `
      Verstösse werden mittels mobile App erfasst. Die App führt das Kontrollpersonal intuitiv durch den Erfassungs-Prozess. Alle nötigen Daten werden festgehalten und an unser Backoffice übermittelt.
      `,
      iconUrl: Icons.ErfassungsAppUrl,
    },
    {
      title: "Zahlungs Terminal",
      description: `
      Mittels der am Fahrzeug hinterlassenen Verstoss-Quittung erhält der Falschparker eine Anleitung inkl. Link, zum Begleichen der Umtriebsenschädigung oder zur Erfassung einer Beschwerde.
      `,
      iconUrl: Icons.ZahlungsTerminalUrl,
    },
    {
      title: "Backoffice",
      description: `
      Über das Backoffice werden erfasste Verstösse verwaltet. Hier findet die Lenkerabklärung, das Mahnwesen und das Beschwerdenmanagement stadt. Zusätzlich bietet das Backoffice diverse Reportin- und Auswertungsmöglichkeiten.
      `,
      iconUrl: Icons.BackofficeUrl,
    },
  ]

  return (
    <UnsereLosungWrapper>
      <Banner page="unsere-losung" data={bannerData} />
      <SimpleText data={textData1} />
      <Cards list={list} />
      <ShapeTop
        fillColor="#fff"
        bgColor="#e6f0fb"
        height={100}
      />
      <Faq data={accordionData} />
      <SimpleText data={textData2} />
    </UnsereLosungWrapper>
  );
}

export default UnsereLosung;