import { useState } from "react";
import {
  FormWrapper
} from "./styled";

const Form = (): JSX.Element => {
  const [curTab, setCurTab] = useState<number>(2);
  return (
    <FormWrapper>
      <div className="content">
        <ul className="tabbar">
          <li
            className={`${curTab === 1 ? 'sel' : ''}`}
            data-target="submit_opinion"
            onClick={() => setCurTab(1)}
          >
            Einwand einreichen
          </li>
          <li
            className={`${curTab === 2 ? 'sel' : ''}`}
            data-target="order_payment"
            onClick={() => setCurTab(2)}
          >
            Einzahlungsschein bestellen
          </li>
        </ul>
        <div className="tab-content">
          <div
            id="submit_opinion"
            className={`${curTab === 1 ? 'active' : ''}`}
          >
            <div className="mark"><sup>*</sup> Pflichtfelder</div>
            <div className="yform">
              <form>
                <div className="form">
                  <div className="col">
                    <div className="group">
                      <label>Vorname / Nachname <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Strasse / Nr. <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Telefon <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="group">
                      <label>E-Mail <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>PLZ / ORT <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group" style={{ width: "50%" }}>
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Land <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
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
                <div className="desc">Anhang (z.B. Rechung / Parkerlaubnis / etc.)</div>
                <div className="func">
                  <div className="file">
                    <div className="form-group">
                      <label className="control-label"></label>
                      <input type="file" className="form-control" />
                    </div>
                    <button>Datei auswählen</button>
                  </div>
                  <div className="submit">
                    <button>Absenden</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            id="order_payment"
            className={`${curTab === 2 ? 'active' : ''}`}
          >
            <div className="mark"><sup>*</sup> Pflichtfelder</div>
            <div className="yform">
              <form>
                <div className="form">
                  <div className="col">
                    <div className="group">
                      <label>Firma</label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Strasse / Nr. <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Telefon <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Geburtsdatum <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="group">
                      <label>Vorname / Nachname <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>PLZ / ORT <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group" style={{ width: "50%" }}>
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Land <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label>Land <sup>*</sup></label>
                      <div className="entry-box">
                        <div className="form-group">
                          <label className="control-label"></label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desc">Anhang (z.B. Rechung / Parkerlaubnis / etc.)</div>
                <div className="func">
                  <div className="submit">
                  <button className="blue">Absenden</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </FormWrapper>
  );
}

export default Form;