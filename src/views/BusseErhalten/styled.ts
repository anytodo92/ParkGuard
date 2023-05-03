import styled from "styled-components";
import { Images } from "../../utils/assets";

export const BusseErhaltenWrapper = styled.div`
  .accordion {
    padding-bottom: 100px;
  }

  .banner {
    .bg {
      .lt {
        height: 58%;
      }
    }
    .content {
      .summary {
        margin-top: 135px;
        padding-bottom: 340px;
      }
      .qa {
        top: unset;
        bottom: 50px;
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