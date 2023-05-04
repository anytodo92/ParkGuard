import styled from "styled-components";
import { Images } from "../../../utils/assets";

export const BannerWrapper = styled.section`
  position: relative;
  height: auto;
  .bg {
    position: absolute;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${Images.LightBlueBgMobileUrl});
    left: 0;
    top: 0;
    width: 100%;

    .lt {
      position: relative;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
      background-image: url(${Images.BlueBgMobileUrl});
      height: 58%;
      width: 100%;
    }

    .shape-bot {
      position: absolute;
      bottom: -39px;
      width: 100%;
    }
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    
    position: relative;
    display: flex;
    flex-direction: column;
    
    .qa {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      color: ${props => props.theme.colors.white};
      width: 100%;
      left: 50%;
      top: 38%;
      transform: translate(-50%, -50%);
      > h2 {
        font-weight: 700;
        font-size: 35px;
        color: ${props => props.theme.colors.white};
      }
      > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
      }

      .icon {
        margin-top: 10px;
      }
    }
    .summary {
      width: 100%;
      
      margin-top: 200px;
      padding-bottom: 390px;
      h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        color: ${props => props.theme.colors.white};
      }
      .desc {
        margin-top: 30px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${props => props.theme.colors.white};
      }
      .form {
        margin-top: 30px;
        .wrapper {
          display: flex;
          align-items: center;
          column-gap: 10px;
        }

        button, input {
          
          outline: 0;
          border: 0;
          height: 45px;
          border-radius: 45px;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
        }

        input {
          flex: 1;
          color: ${props => props.theme.colors.white};
          background-color: ${props => props.theme.colors.blue_second};
          display: flex;
          align-items: center;
          padding-left: 20px;
         
          &::placeholder {
            color: ${props => props.theme.colors.white};
            opacity: 1;
          }

          &:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: ${props => props.theme.colors.white};
          }

          &::-ms-input-placeholder { /* Microsoft Edge */
            color: ${props => props.theme.colors.white};
          }
        }
        button {
          flex: 0.7;
          width: 130px;
          min-width: 100px;
          background-color: ${props => props.theme.colors.white};
          color: ${props => props.theme.colors.purple_primary};
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }

    .cards {
      flex: 1;
      position: relative;
      padding-bottom: 70px;
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 30px;
        color: ${props => props.theme.colors.purple_primary};
      }
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${props => props.theme.colors.purple_primary};
        margin-top: 30px;
      }
      a {
        height: 42px;
        border: 1.5px solid ${props => props.theme.colors.purple_primary};
        border-radius: 42px;
        padding: 0 20px;
        display: inline-flex;
        align-items: center;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.theme.colors.purple_primary};
        margin-top: 30px;
        cursor: pointer;
        background-color: transparent;
        text-decoration: none;
      }

      .card1 {
        
        padding: 40px 20px;
        background: linear-gradient(180.39deg, #FFFFFF 27.72%, #ACCBEE 99.66%);
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        
        margin-top: -150px;

        
      }

      .card2 {
        
        padding: 40px 20px;
        background: linear-gradient(178.74deg, #FFFFFF 6.9%, #BED7F2 140.8%);
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        margin-top: 25px;
        
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 100vh;
    overflow: hidden;
  
    .bg {
      position: absolute;
      height: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      background-image: url(${Images.LightBlueBgUrl});
      left: 0;
      top: 0;
      width: 100%;

      .lt {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        background-image: url(${Images.BlueBgUrl});
        height: 100%;
        width: 50%;

      }

      .shape-bot {
        display: none;
      }
    }
    .content {
      flex-direction: row;
      height: 100%;

      .qa {
        position: absolute;
        bottom: 100px;
        left: 8%;
        top: unset;
        width: auto;
        transform: unset;

        > h2 {
          font-size: 45px;
        }
        > p {
          font-size: 18px;
          line-height: 22px;
        }
      }

      .summary {
        width: 35%;
        margin-top: -100px;
        align-self: center;
        margin-left: 50px;
        padding-bottom: 0;

        h2 {
          font-size: 45px;
          line-height: 45px;
        }

        .desc {
          font-size: 18px;
          line-height: 22px;
        }
        .form {
          input, button {
            flex: unset;
            font-size: 20px;
            line-height: 24px;
          }
          input {
            width: 315px;
            padding-left: 30px;
          }
        }
      }

      .cards {
        padding-bottom: 0;
       
        .card1 {
          position: absolute;
          bottom: -30px;
          right: 10%;
          transform: rotate(-6.76deg);
          padding: 40px 20px 300px;
          width: 434px;
          margin-top: 0;
        }
        .card2 {
          position: absolute;
          bottom: -50px;
          right: 0;
          transform: rotate(6.76deg);
          padding: 40px 20px 70px;
          width: 280px;
          margin-top: 0;
        }
      }
    }
  }

  @media(min-width: 1200px) {
    .content {
      .qa {
        left: 10%;
      }
      .summary {        
        margin-left: 100px;
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      .cards {
        h2 {
          font-size: 40px;
          line-height: 40px;
        }

        p {
          font-size: 18px;
          line-height: 22px;
        }
        .card1 {
          width: 534px;
        }
        .card2 {
          width: 380px;
        }
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }

`