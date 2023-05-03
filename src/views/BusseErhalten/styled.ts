import styled from "styled-components";
import { Images } from "../../utils/assets";

export const BusseErhaltenWrapper = styled.div`
  .accordion {
    padding-bottom: 100px;
  }

  .banner {
    .bg {
      .lt {
        background-image: none;
        background-color: #00003A;
        height: 100%;
      }
      > .shape-bot {
        display: none;
      }
    }
    .content {
      .summary {
        margin-top: 135px;
        padding-bottom: 340px;
      }
      .qa {
        top: unset;
        bottom: 90px;
        transform: translate(-50%);
      }
      .cards {
        display: none!important;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .banner {
      .bg {
        .lt {
          height: 100%;
          background-image: url(${Images.BlueBgUrl});
          background-color: transparent;
        }
      }
      .content {
        .summary {
          margin-top: 0;
          padding-bottom: 0;
        }
        .qa {
          right: 15%;
          left: unset;
          bottom: unset;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`