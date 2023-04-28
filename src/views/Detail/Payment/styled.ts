import styled from "styled-components";

export const PaymentWrapper = styled.section`
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
    padding: 60px 70px 90px;

    .info {
      border: 2px solid ${props => props.theme.colors.blue_third};
      border-radius: 15px;
      padding: 20px;
      display: flex;
      flex-direction: column-reverse;
      row-gap: 20px;
      .detail {
        flex: 1;
        p {
          display: flex;
          align-items: flex-start;
          color: ${props => props.theme.colors.blue_primary};

          &:nth-child(1) {
            > label, > span {
              font-weight: 700;
              font-size: 20px;
              line-height: 30px;
            }
          }
          > label, > span {
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            &.cl-red {
              color: #f90000;
            }
          }
          > label {
            width: 40%;
            font-weight: 700;
          }
        }
      }
    }
    .desc {
      padding-top: 25px;
      > p {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: ${props => props.theme.colors.blue_primary};
      }

      .func {
        display: flex;
        align-items: center;
        column-gap: 25px;
        margin-top: 50px;
        a {
          border: 0;
          outline: 0;
          color: ${props => props.theme.colors.white};
          background-color: ${props => props.theme.colors.blue_primary};
          padding: 0 30px;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          display: inline-flex;
          align-items: center;
          height: 45px;
          border-radius: 15px;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      grid-template-columns: 1fr 1fr;
      .info {
        flex-direction: row;
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