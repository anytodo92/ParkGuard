import { Images, Icons } from "../../../utils/assets";
import { Link } from "react-router-dom";
import {
  BannerWrapper
} from "./styled";

type BannerPropsType = {
  data: any,
  page: string,
};

const Banner = ({ data, page }: BannerPropsType): JSX.Element => {
  return (
    <BannerWrapper className={`banner ${page}`}>
      <div className="bg">
        <div className="lt">
          <div className="shape-bot" style={{ backgroundColor: "transparent", transform: 'rotateY(180deg)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="40px">
              <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" fill="#00003A"></path>
            </svg>
          </div>
        </div>
        <div className="rt"></div>
        <div className="shape-bot" style={{ backgroundColor: "transparent", transform: 'rotateY(180deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="40px">
            <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" fill="#5C8BBF"></path>
          </svg>
        </div>
      </div>
      <div className="content">
        {data.bottom&&
          <div className="qa">
            <h2>{data.bottom.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.bottom.description }}>
            </p>
            <span className="icon">
              <img src={data.bottom.arrowIcon} />
            </span>
          </div>
        }
        <div className="summary">
          <h2 dangerouslySetInnerHTML={{ __html: data.title }}></h2>
          {data.description&&
            <div className="desc" dangerouslySetInnerHTML={{ __html: data.description }}></div>
          }
          {(data.form)&&
            <div className="form">
              <form method="get" action="/detail" encType="application/x-www-from-urlencoded">
                <div className="wrapper">
                  <input name="v" placeholder={data.form.placeholder} />
                  <button type="submit">{data.form.buttonText}</button>
                </div>
              </form>
            </div>
          }
        </div>

        <div className="cards">
          {(data.intro1 && data.intro2)&&
            <>
              <div className="card1">
                <h2>{data.intro1.title}</h2>
                {data.intro1.description&&
                  <p dangerouslySetInnerHTML={{ __html: data.intro1.description }}>
                  </p>
                }
                {data.intro1.buttonText&&
                  <div className="func">
                    <Link to={data.intro1.buttonUrl}>{data.intro1.buttonText}</Link>
                  </div>
                }
              </div>
              <div className="card2">
                <h2>{data.intro2.title}</h2>
                {data.intro2.description&&
                  <p dangerouslySetInnerHTML={{ __html: data.intro2.description }}>
                  </p>
                }
                {data.intro2.buttonText&&
                  <div className="func">
                    <Link to={data.intro2.buttonUrl}>{data.intro2.buttonText}</Link>
                  </div>
                }
              </div>
            </>
          }
        </div>
      </div>

    </BannerWrapper>
  );
}

export default Banner;