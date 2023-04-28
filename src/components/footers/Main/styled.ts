import styled from "styled-components";

export const FooterWrapper = styled.footer`
  
  overflow: hidden;
  width: 100%;
  color: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndexes.footer_layout};
  padding-top: 120px;
  margin-top: -120px;
  .content {
    position: relative;
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  .card {
    position: absolute;
    bottom: -70px;
    right: 100px;
    padding: 40px 20px 130px;
    background: #FFFFFF;
    box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    transform: rotate(6.76deg);
    width: 360px;

    > h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 40px;
      color: ${props => props.theme.colors.purple_primary};
    }
    > p {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: ${props => props.theme.colors.purple_primary};
      margin-top: 30px;
    }
    > button {
      height: 42px;
      border: 1.5px solid ${props => props.theme.colors.purple_primary};
      border-radius: 42px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: ${props => props.theme.colors.purple_primary};
      margin-top: 30px;
      cursor: pointer;
    }
  }

  > section {
    &:nth-child(1) {
      padding: 30px 0 40px;
      background-color: #003664;

      .content {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 35px;
        
        .col {
          > h2 {
            font-weight: 500;
            font-size: 22px;
            line-height: 33px;
            color: ${props => props.theme.colors.white};
          }
          > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: ${props => props.theme.colors.white};
            &:nth-child(2) {
              margin-top: 17px;
            }
          }
        }
      }
    }

    &:nth-child(2) {
      background-color: #0E4E84;
      
      .content {
        display: flex;
        padding: 20px 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        color: ${props => props.theme.colors.white};
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    > section {
      &:nth-child(1) {
        padding: 20px 0;
        .content {
          grid-template-columns: 200px 200px 200px;

          
        }
      }
      &:nth-child(2) {
        
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .content {
      margin: 0 auto;
      width: ${props => props.theme.maxWidth}px;
    }
  }
`