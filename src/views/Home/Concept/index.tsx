import {
  ConceptWrapper
} from "./styled";

const Concept = (): JSX.Element => {
  const list: any[] = [
    {
      id: 1,
      title: "Welche Probleme werden<br />mit ParkGuard gelöst?",
      content: `
      Bislang wurde man für unberechtiges Parkieren lediglich auf öffentlichem Grund gebüsst, da der Aufwand oftmals zu gross war Falschparker:innen zur Rechenschaft zu ziehen, die Ihre Besucherparkplätze blockieren. Hier kommen wir ins Spiel - wir helfen Ihnen die nötie rechtliche Grundlage zu schaffen und stellen Ihnen unsere digitale Werkzeugkiste zur Verfügung.
      `,
    },
    {
      id: 2,
      title: "Wie funktioniert<br />ParkGuard?",
      content: `
      Bislang wurde man für unberechtiges Parkieren lediglich auf öffentlichem Grund gebüsst, da der Aufwand oftmals zu gross war Falschparker:innen zur Rechenschaft zu ziehen, die Ihre Besucherparkplätze blockieren. Hier kommen wir ins Spiel - wir helfen Ihnen die nötie rechtliche Grundlage zu schaffen und stellen Ihnen unsere digitale Werkzeugkiste zur Verfügung.
      `,
    },
    {
      id: 3,
      title: "Was sind die Vorteile<br />von ParkGuard",
      content: `
      Bislang wurde man für unberechtiges Parkieren lediglich auf öffentlichem Grund gebüsst, da der Aufwand oftmals zu gross war Falschparker:innen zur Rechenschaft zu ziehen, die Ihre Besucherparkplätze blockieren. Hier kommen wir ins Spiel - wir helfen Ihnen die nötie rechtliche Grundlage zu schaffen und stellen Ihnen unsere digitale Werkzeugkiste zur Verfügung.
      `,
    },
  ];
  return (
    <ConceptWrapper>
      <div className="content">
        <h1>
          <p>
            Was ist ParkGuard?
          </p>
        </h1>
        <div className="list">
          {list.map((data, index) =>
            <div className="one">
              <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
              <p>{data.content}</p>
            </div>
          )}
        </div>
        <div className="func">
          <a href="#">Unsere Lösung</a>
        </div>
      </div>
    </ConceptWrapper>
  );
}

export default Concept;