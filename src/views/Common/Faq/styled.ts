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

    > p {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: ${props => props.theme.colors.blue_primary};
      margin-top: 20px;
    }

    .accordion {
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      .one {
        .title {
          display: flex;
          justify-content: space-between;
          background-color: ${props => props.theme.colors.white};
          border-radius: 15px;
          padding: 15px 26px;
          align-items: center;
          cursor: pointer;
          > h5 {
            color: ${props => props.theme.colors.blue_primary};
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
          }

          > span {
            transition: all .5s ease;
          }
          
        }

        .detail {
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: ${props => props.theme.colors.blue_primary};
          height: 0;
          overflow: hidden;
          transition: all .5s ease;
        }

        &.opened {
          .title {
            > span {
              transform: rotate(180deg);
            }
          }
          .detail {
            height: auto;
            padding-top: 20px;
          }
        }
      }
    }

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      width: 760px;
      margin: 0 auto;
    }
  }
`