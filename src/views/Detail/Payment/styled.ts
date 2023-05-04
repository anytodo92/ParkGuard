import styled from "styled-components";

export const PaymentWrapper = styled.section`
  .mt-15 {
    margin-top: 15px;
  }

  padding: 80px 0 60px; 
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column-reverse;
    column-gap: 20px;
    row-gap: 30px;
    
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
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
      flex: 1;
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
        flex-direction: column;
        column-gap: 25px;
        row-gap: 25px;
        margin-top: 50px;
        button {
          width: 100%;
          outline: 0;
          padding: 0 30px;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          display: inline-flex;
          align-items: center;
          height: 45px;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          text-align: center;
          cursor: pointer;

          &.o-line {
            border: 1px solid ${props => props.theme.colors.blue_primary};
            color: ${props => props.theme.colors.blue_primary};
            background-color: transparent;
          }

          &.blue {
            border: 0;
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.blue_primary};
          }
        }
      }
    }
  }


  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      padding: 60px 70px 90px;
      flex-direction: row;
      .info {
        border: 2px solid ${props => props.theme.colors.blue_third};
        border-radius: 15px;
        padding: 20px;
      }
      .desc {
        .func {
          flex-direction: row;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;

      .info {
        flex-direction: row;
      }
    }
  }
`