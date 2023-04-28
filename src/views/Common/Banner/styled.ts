import styled from "styled-components";


export const BannerWrapper = styled.section`
  position: relative;
  overflow: hidden;
  height: 100vh;
  .bg {
    position: absolute;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    left: 0;
    top: 0;
    width: 100%;

    .lt {
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
      height: 100%;
      width: 50%;
    }
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    
    position: relative;
    display: flex;
    height: 100%;
    .qa {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      color: ${props => props.theme.colors.white};
      bottom: 100px;
      left: 10%;

      > h2 {
        font-weight: 700;
        font-size: 45px;
        color: ${props => props.theme.colors.white};
      }
      > p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
      }

      .icon {
        margin-top: 10px;
      }
    }
    .summary {
      width: 35%;
      margin-left: 100px;
      align-self: center;
      margin-top: -100px;
      h2 {
        font-weight: 700;
        font-size: 45px;
        color: ${props => props.theme.colors.white};
      }
      .desc {
        margin-top: 30px;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.theme.colors.white};
      }
      .form {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-top: 30px;
        button, input {
          outline: 0;
          border: 0;
          height: 45px;
          border-radius: 45px;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          cursor: pointer;
        }

        input {
          width: 315px;
          color: ${props => props.theme.colors.white};
          background-color: ${props => props.theme.colors.blue_second};
          display: flex;
          align-items: center;
          padding-left: 30px;
         
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
          width: 130px;
          background-color: ${props => props.theme.colors.white};
          color: ${props => props.theme.colors.purple_primary};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
      }
      
    }

    .cards {
      flex: 1;
      position: relative;
      h2 {
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        color: ${props => props.theme.colors.purple_primary};
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.theme.colors.purple_primary};
        margin-top: 30px;
      }
      button {
        height: 42px;
        border: 1.5px solid ${props => props.theme.colors.purple_primary};
        border-radius: 42px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.theme.colors.purple_primary};
        margin-top: 30px;
        cursor: pointer;
      }

      .card1 {
        position: absolute;
        bottom: -30px;
        right: 10%;
        padding: 40px 20px 170px;
        background: linear-gradient(180.39deg, #FFFFFF 27.72%, #ACCBEE 99.66%);
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        transform: rotate(-6.76deg);
        width: 534px;

        .func {
          padding-bottom: 130px;
        }
      }

      .card2 {
        position: absolute;
        bottom: -50px;
        right: 0;
        padding: 40px 20px 70px;
        background: ${props => props.theme.colors.white};
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        transform: rotate(6.76deg);
        width: 380px;
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