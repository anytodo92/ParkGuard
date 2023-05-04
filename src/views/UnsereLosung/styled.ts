import styled from "styled-components";

export const UnsereLosungWrapper = styled.div`
  .banner {
    .bg {
      .lt {
        height: 100%;
      }
      > .shape-bot {
        display: none;
      }
    }
    .content {      
      .summary {
        padding-bottom: 100px;
        margin-top: 130px;
      }
      .cards {
        display: none;
      }
    }
  }
  .accordion {
    padding-top: 30px;
  }
  .simple-text {
    &:nth-of-type(2) {
      padding-bottom: 0px;
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    .banner {
      height: 680px;
      
      .content {
        .summary {
          padding-bottom: 170px;
          margin-left: 40px;
          margin-top: 200px;
        }
        .cards {
          display: block;
          .card1 {
            padding-bottom: 280px;
          }
        }
      }
    }
  }


`