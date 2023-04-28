import styled from "styled-components";

export const CardsWrapper = styled.section`
  padding: 70px 0 60px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    padding: 0 100px;
    
    .list {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 20px;
      row-gap: 20px;
      .one {
        border: 2px solid ${props => props.theme.colors.blue_third};
        border-radius: 30px;
        padding: 30px 47px 50px 35px;
        .top {
          display: flex;
          align-items: center;
          column-gap: 24px;
          > h2 {
            font-weight: 700;
            font-size: 30px;
            line-height: 36px;
            color: ${props => props.theme.colors.blue_primary};
          }
        }

        > p {
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: ${props => props.theme.colors.blue_primary};
          margin-top: 20px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    .content {
      .list {
        grid-template-columns: 1fr 1fr
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      .list {
        grid-template-columns: 1fr 1fr 1fr
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`