import styled from "styled-components";

export const FormWrapper = styled.section`

  background-color: ${props => props.theme.colors.blue_third};
  padding-bottom: 70px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    
    .tabbar {
      list-style: none;
      display: flex;
      justify-content: center;
      column-gap: 40px;
      > li {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #646464;
        padding: 0 5px;
        cursor: pointer;
        &.sel {
          font-weight: 700;
          color: ${props => props.theme.colors.blue_primary};
          border-bottom: 2px solid ${props => props.theme.colors.blue_primary};
        }
      }
    }

    .tab-content {
      .mark {
        color: #333333;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        sup {
          color: #d70000;
          font-weight: 700;
        }
      }

      #submit_opinion,
      #order_payment {
        padding: 10px;
        display: none;
        &.active {
          display: block;
        }

        .yform {
          margin-top: 10px;
          .form {
            display: grid;
            column-gap: 27px;
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

                .entry-box {
                  display: flex;
                  column-gap: 10px;
                  width: 100%;

                  .form-group {
                    width: 100%;
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
                  height: 308px;
                  padding: 15px;
                }
              }
            }
          }

          .func {
            margin-top: 10px;
            button {
              width: 200px;
              height: 45px;
              border-radius: 15px;
              border: 0;
              outline: 0;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              font-weight: 700;
              font-size: 18px;
              line-height: 22px;
              cursor: pointer;
            }
            .file {
              position: relative;
              .form-group {
                opacity: 0;
              }
              button {
                position: absolute;
                top: 0;
                border: 1px solid ${props => props.theme.colors.blue_primary};
                color: ${props => props.theme.colors.blue_primary};
                background-color: transparent;
              }
            }
            .submit {
              button {
                background-color: ${props => props.theme.colors.blue_primary};
                color: ${props => props.theme.colors.white};
              }
            }
          }

          .desc {
            color: #646464;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            margin-top: 20px;
          }
        }
      }

      #submit_opinion {
        .yform {
          .form {
            grid-template-columns: 1fr;

            textarea {
              height: 230px!important;
            }
          }
          .func {
            display: flex;
            flex-direction: column;
            row-gap: 30px;
          }
        }
      }
      #order_payment {
        padding: 40px 0 0;
        .yform {

          .form {
            grid-template-columns: 1fr;
          }
          .func {
            display: flex;
            justify-content: flex-start;
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .content {
      .tab-content {
        #submit_opinion {
          .yform {
            .func {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
          }
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-bottom: 150px;
    .content {
      padding: 0 70px;

      .tab-content {
        #submit_opinion {
          .yform {
            .form {
              grid-template-columns: 0.8fr 0.8fr 1fr;
            }
          }
        }
        #order_payment {
          padding: 40px 300px 0;
          .yform {

            .form {
              grid-template-columns: 1fr 1fr;
            }
          }
        }
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