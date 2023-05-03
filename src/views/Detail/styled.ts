import styled from "styled-components";

export const DetailWrapper = styled.div`
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
    padding-top: 55px;
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    .banner {
      height: auto;
      .bg {
        background-position: center 0;
      }
      .content {
        .summary {
          margin-top: 200px;
          margin-left: 75px;
          padding-bottom: 50px;
        }
      }
    }
  }
`