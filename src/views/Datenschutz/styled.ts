import styled from "styled-components";

export const DatenschutzWrapper = styled.div`  
  .banner {
    height: auto;
    .summary {
      margin-top: 200px;
      margin-left: 80px;
      padding-bottom: 100px;
    }
  }
  .rich-text {
    background-color: ${props => props.theme.colors.white};

    .content {
      margin: 0 ${props => props.theme.margins.primary}px;
      padding: 80px 0 120px;
    }

    .txt {
      letter-spacing: 0.6px;
      color: ${props => props.theme.colors.blue_primary};
      font-size: 18px;
      line-height: 27px;
      font-weight: 700;
      strong {
        font-weight: 700;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop_ml}) {
    .rich-text {
      .content {
        width: ${props => props.theme.maxWidth}px;
        margin: 0 auto;  
      }
    }
  }
`;