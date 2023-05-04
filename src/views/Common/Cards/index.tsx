import {
  CardsWrapper
} from "./styled";

interface Card {
  title: string;
  description: string;
  iconUrl: string;
}
type CardsProps = {
  list: Card[]
}

const Cards = ({ list }: CardsProps): JSX.Element => {
  return (
    <CardsWrapper className="cards">
      <div className="content">
        <div className="list">
          {list.map((data, index) =>
            <div className="one">
              <div className="top">
                <div className="pic">
                  <img src={data.iconUrl} />
                </div>
                <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>
          )}
        </div>
      </div>
    </CardsWrapper>
  );
}
export default Cards;