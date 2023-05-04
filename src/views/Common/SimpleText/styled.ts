import styled from "styled-components";

export const SimpleTextWrapper = styled.section`
  padding: 70px 0;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    padding: 0;
    > h1 {
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

    > p {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: ${props => props.theme.colors.blue_primary};
      margin-top: 20px;
      max-width: 810px;
    }

    > a {
      display: inline-flex;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: ${props => props.theme.colors.white};
      height: 42px;
      border-radius: 42px;
      padding: 0 30px;
      background-color: ${props => props.theme.colors.blue_primary};
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      margin-top: 40px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      padding: 0 100px;
      > h1 {
        > p {
          font-size: 45px;
          line-height: 49px;
          &:after {

          }
        }
      }
      > p {
        font-size: 18px;
        line-height: 22px;
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