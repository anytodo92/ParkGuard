import {
  SimpleTextWrapper
} from "./styled";

type SimpleTextProps = {
  data: {
    title: string;
    description: string;
    linkText?: string;
  }
}

const SimpleText = ({ data }: SimpleTextProps): JSX.Element => {
  return (
    <SimpleTextWrapper className="simple-text">
      <div className="content">
        <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        {data.linkText&&
          <a href="#">Termin verinbaren</a>
        }
      </div>
    </SimpleTextWrapper>
  );
}
export default SimpleText;