import styled from "styled-components";

export const KontaktWrapper = styled.div`
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
  .simple-text {
    &:nth-of-type(2) {
      padding-bottom: 0px;
    }
    .content {
      padding: 0;
    }
  }
  .cards {
    .content {
      padding: 0;
    }
    .list {
      .one {
        padding-bottom: 30px;
      }
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
    .simple-text {
      .content {
        padding: 0 120px;
      }
    }
    .cards {
      .content {
        padding: 0 120px;
      }
    }
  }
`