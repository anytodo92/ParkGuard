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

type AccordionProps = {
  data: {
    title: string,
    description: string,
    list: FaqData[],
  }
}
const Faq = ({ data }: AccordionProps): JSX.Element => {
  const [openedIdList, setOpenedIdList] = useState<number[]>([]); 
  
  return (
    <FaqWrapper className="accordion">
      <div className="content">
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}>
        </h1>
        {data.description&&
          <p dangerouslySetInnerHTML={{ __html: data.description }}>
          </p>
        }
        <div className="accordion">
          {data.list.map((data, index) =>
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