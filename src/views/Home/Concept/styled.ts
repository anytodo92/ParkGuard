import styled from "styled-components";

export const ConceptWrapper = styled.section`
  padding: 90px 0 120px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    > h1 {
      display: flex;
      justify-content: flex-start;
      padding: 0 25px;
      > p {
        position: relative;
        font-weight: 700;
        font-size: 30px;
        line-height: 34px;
        color: ${props => props.theme.colors.blue_primary};
        padding-bottom: 3px;
        &:after {
          content: '';
          position: absolute;
          display: inline-block;
          bottom: 0;
          left: 0;
          width: 70px;
          border-bottom: 4px solid ${props => props.theme.colors.blue_primary};
        }
      }
      
    }
    .list {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 20px;
      row-gap: 20px;
      margin-top: 45px;
      .one {
        border: 2px solid ${props => props.theme.colors.blue_third};
        border-radius: 30px;
        padding: 30px 25px;

        > h2 {
          font-weight: 700;
          font-size: 30px;
          line-height: 34px;
          color: ${props => props.theme.colors.blue_primary};
        }

        > p {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: ${props => props.theme.colors.blue_primary};
          margin-top: 20px;
        }
      }
    }
    .func {
      display: flex;
      justify-content: flex-start;
      margin-top: 35px;
      a {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.theme.colors.white};
        padding: 0 30px;
        height: 42px;
        border-radius: 42px;
        background-color: ${props => props.theme.colors.blue_primary};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
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
      > h1 {
        justify-content: center;
        > p {
          font-size: 45px;
          line-height: 49px;
          padding: 0;
        }
      }
      .list {
        grid-template-columns: 1fr 1fr 1fr;
        .one {
          padding: 30px 47px 50px 35px;
          > p {
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
      .func {
        justify-content: center;
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