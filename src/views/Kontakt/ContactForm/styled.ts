import styled from "styled-components";

export const ContactFormWrapper = styled.section`
  padding: 25px 0 65px;
  background-color: ${props => props.theme.colors.blue_third};

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    padding: 0;
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
    justify-content: flex-start;
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
            color: #777;
            margin-top: 5px;
          }

          textarea {
            height: 320px;
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
      background-color: transparent;
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
      width: 200px;
      height: 42px;
      border-radius: 15px;
      background-color: ${props => props.theme.colors.blue_primary};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      border: 0;
      outline: 0;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      padding: 0 120px 0 160px;
    }
    h1 {
      justify-content: center;
      > p {
        font-size: 45px;
        line-height: 49px;
      }
    }
    .yform {
      .form {
        row-gap: 13px;
        grid-template-columns: 0.5fr 1fr;
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
            textarea {
              max-width: 600px;
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

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`