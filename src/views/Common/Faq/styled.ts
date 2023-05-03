import styled from "styled-components";

export const FaqWrapper = styled.section`
  background-color: ${props => props.theme.colors.blue_third};
  padding: 100px 0 40px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    > h1 {
      > p {
        position: relative;
        font-weight: 700;
        font-size: 29px;
        line-height: 34px;
        color: ${props => props.theme.colors.blue_primary};
        padding-bottom: 3px;
        &:after {
          content: '';
          position: absolute;
          display: inline-block;
          top: 32px;
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
    }

    .accordion {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      .one {
        background-color: ${props => props.theme.colors.white};
        border-radius: 15px;
        .title {
          display: flex;
          justify-content: space-between;
          
          padding: 15px 26px;
          align-items: center;
          cursor: pointer;
          > h5 {
            color: ${props => props.theme.colors.blue_primary};
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
          }

          > span {
            transition: all .5s ease;
            flex-shrink: 0;
          }
          
        }

        .detail {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: #646464;
          height: 0;
          overflow: hidden;
          transition: all .5s ease;
          padding: 0 40px 0px 40px;
        }

        &.opened {
          .title {
            > span {
              transform: rotate(180deg);
            }
          }
          .detail {
            height: auto;
            padding-bottom: 20px;
          }
        }
      }
    }

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      width: 780px;
      margin: 0 auto;

      > h1 {
        > p {
          font-size: 45px;
          line-height: 49px;
          &:after {
            top: 47px;
          }
        }
      }

      > p {
        font-size: 18px;
        line-height: 22px;
      }

      .accordion {
        .one {
          .title {
            > h5 {
              font-size: 18px;
              line-height: 22px;
            }
          }
          .detail {
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
    }
  }
`