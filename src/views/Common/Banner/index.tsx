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
          <h2>{data.title}</h2>
          <div className="desc" dangerouslySetInnerHTML={{ __html: data.description }}></div>
          {(data.form)&&
            <div className="form">
              <input placeholder={data.form.placeholder} />
              <button>{data.form.buttonText}</button>
            </div>
          }
          {data.bottom&&
            <div className="qa">
              <h2>{data.bottom.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: data.bottom.description }}>
              </p>
              <span className="icon">
                <img src={Icons.ArrowDownLightBlueUrl} />
              </span>
            </div>
          }
          
        </div>
        <div className="cards">
          <div className="card1">
            <h2>{data.intro1.title}</h2>
            {data.intro1.description&&
              <p dangerouslySetInnerHTML={{ __html: data.intro1.description }}>
              </p>
            }
            {data.intro1.buttonText&&
              <button>{data.intro1.buttonText}</button>
            }
          </div>
          <div className="card2">
            <h2>{data.intro2.title}</h2>
            {data.intro2.description&&
              <p dangerouslySetInnerHTML={{ __html: data.intro2.description }}>
              </p>
            }
            {data.intro2.buttonText&&
              <button>{data.intro2.buttonText}</button>
            }
          </div>
        </div>
      </div>

    </BannerWrapper>
  );
}

export default Banner;