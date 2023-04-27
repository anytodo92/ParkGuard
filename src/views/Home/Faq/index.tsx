import { useState } from "react";
import { Icons } from "../../../utils/assets";
import {
  FaqWrapper
} from "./styled";

interface FaqData {
  id: number;
  title: string;
  content: string;
}
const Faq = (): JSX.Element => {
  const [openedIdList, setOpenedIdList] = useState<number[]>([]); 
  const list: FaqData[] = [
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
  return (
    <FaqWrapper>
      <div className="content">
        <h1>
          <p>FAQ Umtriebsentschädigung</p>
        </h1>
        <p>
          Hier finden sie Antworten zu den am häufisten gestellten Fragen in Bezug auf Umtriebsentschätdgungen, 
          ausgestellt durch Park Guard. Für weiter Fragen bitten wir Sie, das Kontaktformular zu verwenden und 
          wir melden uns schnellstmöglich bei Ihnen.
        </p>
        <div className="accordion">
          {list.map((data, index) =>
            <div
              key={index}
              className={`one ${openedIdList.includes(data.id) ? 'opened' : ''}`}
              onClick={() => {
                if (openedIdList.includes(data.id)) {
                  const list = openedIdList.filter(d => d !== data.id);
                  console.log(list);
                  setOpenedIdList([...list]);
                } else {
                  console.log(openedIdList);
                  setOpenedIdList([...openedIdList, data.id]);
                }
              }}
            >
              <div className="title">
                <h5>{data.title}</h5>
                <span>
                  <img src={Icons.ArrowDownLightBlueUrl} width="16" height="9" />
                </span>        
              </div>
              <div
                className="detail"
                dangerouslySetInnerHTML={{ __html: data.content }}>
              </div>
            </div>
          )}
        </div>
      </div>
    </FaqWrapper>
  );
}

export default Faq;