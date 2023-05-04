import {
  ContactFormWrapper,
} from "./styled";

const ContactForm = (): JSX.Element => {
  return (
    <ContactFormWrapper>
      <div className="content">
        <h1><p>Hinterlassen Sie eine Nachricht</p></h1>
        <div className="yform">
          <form>
            <div className="form">
              <div className="col">
                <div className="group">
                  <label>Firma</label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="group">
                  <label>Vorname / Nachname <sup>*</sup></label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="group">
                  <label>E-Mail <sup>*</sup></label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="group">
                  <label>Telefon <sup>*</sup></label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="group">
                  <label>Nachricht</label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mark"><sup>*</sup>Pflichtfelder</div>
            <div>
              <button>Absenden</button>
            </div>
          </form>
        </div>
      </div>
    </ContactFormWrapper>
  );
};

export default ContactForm;