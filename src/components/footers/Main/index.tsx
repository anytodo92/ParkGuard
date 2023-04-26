import {
  Images,
  Icons,
} from "../../../utils/assets";
import {
  FooterWrapper
} from "./styled";

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <section>
        <div className="content">
          <div className="col">
            <h2>Adresse</h2>
            <p>ParkGuard<br />Leimatt B<br />6317 Zug</p>
          </div>
          <div className="col">
            <h2>Kontakt</h2>
            <p>T +41 58 123 45 67<br />kontakt@parkguard.ch</p>
          </div>
          <div className="col">
            <h2>Rechtliches</h2>
            <p><a className="link" href="/impressum">Impressum</a></p>
            <p><a className="link" href="/datenschutz">Datenschutz</a></p>
            <p>AGB</p>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <div className="txt">&copy;Copyright 2022 - ParkX AG</div>          
        </div>
      </section>
      <div className="content">
        <div className="card">
          <h2>Interessiert?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a rerum distinctio, non commodi consectetur facilis nostrum
          </p>
          <button>Kontaktieren</button>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
