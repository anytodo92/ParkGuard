import styled from "styled-components";

export const ContactFormWrapper = styled.section`
  padding: 25px 0 65px;
  background-color: ${props => props.theme.colors.blue_third};

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .alert {
    padding: 17px 30px 17px 30px;
    margin-bottom: 20px;
    &.alert-danger {
     color: #f1416c;
     background-color: #fff5f8;
    }
    &.alert-success {
      color: #50cd89;
      background-color: #e8fff3;
    }
  }

  h1 {
    display: flex;
    justify-content: center;
    > p {
      position: relative;
      font-weight: 700;
      font-size: 45px;
      line-height: 49px;
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

  .yform {
    margin-top: 20px;
    .form {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 28px;
      row-gap: 10px;

      .col {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        
        > .group {
          > label {
            font-size: 18px;
            font-weight: 700;
            line-height: 27px;
            color: ${props => props.theme.colors.blue_primary};

            > sup {
              font-weight: 700;
              color: ${props => props.theme.colors.red_primary};
            }
          }

          input, select, textarea {
            outline: 0;
            border: 0;
            width: 100%;
            height: 48px;
            background-color: ${props => props.theme.colors.white};
            border-radius: 15px;
            padding: 0 12px;
            color: ${props => props.theme.colors.black_primary};
            margin-top: 5px;
          }

          textarea {
            height: 308px;
            padding: 15px;
          }
        }
      }
    }

    .mark {
      font-weight: 400;
      color: #333;
      font-size: 18px;
      line-height: 27px;
      margin-top: 20px;
      > sup {
        font-weight: 700;
        color: ${props => props.theme.colors.red_primary};
      }
    }
    
    button {
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

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    h1 {
      font-size: 28px;
      line-height: 42px;
      text-align: center;
    }
    .yform {
      .form {
        row-gap: 13px;
        grid-template-columns: 1fr 1fr;
        .col {
          row-gap: 13px;
          &:first-child {
            padding-right: 22px;
          }

          .group {
            > label {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }

      button {
        font-size: 16px;
        width: 188px;
        height: 38px;
        margin-top: 18px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_lg}) {
    .content {
      width: calc(${props => props.theme.maxWidth}px - 340px);
      margin: 0 auto;
    }
  }
`