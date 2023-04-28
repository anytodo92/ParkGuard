import {
  PaymentWrapper
} from "./styled";

const Payment = (): JSX.Element => {
  return (
    <PaymentWrapper>
      <div className="content">
        <div className="desc">
          <p>
          Durch unser Sicherheitspersonal wurde eine Widerrechtliche Handlung festgestellt. Führen Sie die Zahlung aus oder bestellen Sie einen Einzahlungsschein.
          <br /><br />
          Der Betrag von CHF 40.- muss innert 10 Tagen beglichen sein. Wir behalten es uns vor rechtliche Schritte einzuleiten.
          </p>
          <div className="func">
            <a href="#">Mit Kreditkarte bezahlen</a>
            <a href="#">Einzahlungsschein bestellen</a>
          </div>
        </div>
        <div className="info">
          <div className="detail">
            <p>
              <label>Kennzeichen:</label>
              <span>AG 118261</span>
            </p>
            <p className="mt-4">
              <label>Liegenschaft:</label>
              <span>Baregg Center AG<br />Dorfstrasse 3 - 38</span>
            </p>
            <p>
              <label>Parkfeld:</label>
              <span>3</span>
            </p>
            <p className="mt-4">
              <label>Erfasst:</label>
              <span>12.10.2022 - 10:05</span>
            </p>
            <p>
              <label>Fälligkeit:</label>
              <span className="cl-red">22.10.2022</span>
            </p>
            <p className="mt-4">
              <label>Infos</label>
              <span>Audi Q5, Schwarz</span>
            </p>
          </div>
          <div className="pic">
            <img width={259} height={229} />
          </div>
        </div>
      </div>
    </PaymentWrapper>
  );
}

export default Payment;