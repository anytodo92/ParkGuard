import { Images, Icons } from "../../../utils/assets";
import {
  BannerWrapper
} from "./styled";

type BannerPropsType = {
  data: any,
  page: string,
};

const Banner = ({ data, page }: BannerPropsType): JSX.Element => {
  return (
    <BannerWrapper className={page}>
      <div
        className="bg"
        style={{
          backgroundImage: `url(${Images.LightBlueBgUrl})`
        }}
      >
        <div
          className="lt"
          style={{
            backgroundImage: `url(${Images.BlueBgUrl})`
          }}
        >
        </div>
        <div className="rt">
          
        </div>
      </div>
      <div className="content">
        <div className="summary">
          <h2>Park-Busse erhalten?</h2>
          <div className="desc">
            Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Füllen Sie die nachfolgenden Informationen aus um zu den Details Ihres Verstosses zu gelangen.
          </div>
          <div className="func">
            <button className="light-blue">Verstoss Nr. eingeben ...</button>
            <button className="white">Zur Busse</button>
          </div>
          <div className="qa">
            <h2>Fragen?</h2>
            <p>
              Hier finden Sie Antworten zu den Fragen<br />
              in Bezug auf Umtriebsentschädigungen ...
            </p>
            <span className="icon">
              <img src={Icons.ArrowDownLightBlueUrl} />
            </span>
          </div>
        </div>
        <div className="cards">
          <div className="card1">
            <h2>
              Wir kümmern uns um Falschparker 
            </h2>
            <p>
              Die komplette digitale Lösung - kostenlos!
              <br />
              Zusammenarbeit starten ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corporis autem tempora perspiciatis expedita quibusdam!
            </p>
            <button>Zusammenarbeit</button>
          </div>
          <div className="card2">
            <h2>Wie funktioniert’s?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum saepe architecto porro quidem quia necessitatibus ea corpo
            </p>
            <button>Unsere Lösung</button>
          </div>
        </div>
      </div>

    </BannerWrapper>
  );
}

export default Banner;