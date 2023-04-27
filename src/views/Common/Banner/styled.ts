import styled from "styled-components";


export const BannerWrapper = styled.section`
  position: relative;
  overflow: hidden;
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
    padding-top: 200px;
    position: relative;
    display: flex;
    column-gap: 50px;
    .summary {
      flex: 0 1 40%;
      padding-bottom: 100px;
      h2 {
        font-weight: 700;
        font-size: 45px;
        line-height: 45px;
        color: ${props => props.theme.colors.white};
      }
      .desc {
        margin-top: 30px;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.theme.colors.white};
      }
      .func {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-top: 30px;
        button {
          outline: 0;
          border: 0;
          height: 45px;
          border-radius: 45px;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          cursor: pointer;

          &.light-blue {
            width: 315px;
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.blue_second};
            display: flex;
            align-items: center;
            padding-left: 30px;
          }
          &.white {
            width: 130px;
            background-color: ${props => props.theme.colors.white};
            color: ${props => props.theme.colors.purple_primary};
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .qa {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        color: ${props => props.theme.colors.white};
        margin-left: -20%;
        p {
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
        }

        .icon {
          margin-top: 10px;
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
        left: 15%;
        padding: 40px 20px 300px;
        background: linear-gradient(180.39deg, #FFFFFF 27.72%, #ACCBEE 99.66%);
        box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        transform: rotate(-6.76deg);
        width: 534px;
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