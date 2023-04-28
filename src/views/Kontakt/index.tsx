import Banner from "../Common/Banner";
import SimpleText from "../Common/SimpleText";
import Cards from "../Common/Cards";
import ShapeTop from "../Common/ShapeTop";
import ContactForm from "./ContactForm";
import { Icons } from "../../utils/assets";
import {
  KontaktWrapper
} from "./styled";

const Kontakt = (): JSX.Element => {
  const bannerData = {
    title: "Der erste Schritt zu<br />mehr freien Parkplätzen",
    description: `
      Nehem Sie mit uns Kontakt auf und wir demonstrieren Ihnen das volle Potenzial der ParkGuard Lösung. Wir sind zu den üblichen Bürozeiten für Sie erreichbar.
    `,

    intro1: {
      title: "Mehr freie Parkplätze dank ParkGuard",
      description: `
      Durch ParkGuard kann das richterliche Parkverbot auf privatem Grund unkompliziert durchgesetzt werden.
      <br /><br />
      Unsere digitale Tool-Landschaft reduziert den Aufwand<br />
      auf ein Minimum. Für alle administrativen Schritte sind<br />
      wir für Sie da.
      `
    },

    intro2: {
      title: "Keine Fixkosten",
      description: `
      Der Einsatz von ParkGuard ist für Sie kostenlos. Sie profitieren doppelt! Freie Parkplätze und zusätzliche Einnahmen durch die ausgestellten Umtriebsenschädigungen.
      `,
    }

  };

  const textData1 = {
    title: "<p>Wir beraten Sie gerne</p>",
    description: `
    Nehmen Sie mit Kontakt auf - gerne präsentieren wir Ihnen während einer kostenlosen Demo alle Prozesse und Features von ParkGuard im Detail.
    `
  };

  const list = [
    {
      title: "Kontakt",
      description: `
      info@parkguard.ch<br />+41 41 123 12 12
      `,
      iconUrl: Icons.KontaktUrl,
    },
    {
      title: "Bürozeiten",
      description: `
      Montag bis Freitag<br />08:00 - 12:00 | 13:00 - 17:00
      `,
      iconUrl: Icons.BurozeitenUrl,
    },
    {
      title: "Standort",
      description: `
      Leimatt B<br />6317 Zug
      `,
      iconUrl: Icons.StandortUrl,
    },
  ]

  return (
    <KontaktWrapper>
      <Banner page="kontakt" data={bannerData} />
      <SimpleText data={textData1} />
      <Cards list={list} />
      <ShapeTop
        fillColor="#fff"
        bgColor="#e6f0fb"
        height={100}
      />
      <ContactForm />
    </KontaktWrapper>
  );
}

export default Kontakt;