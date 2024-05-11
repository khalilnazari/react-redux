import {
  EmailField,
  ParagraphField,
  PasswordField,
  StandardTextField,
} from "./Controls";
import { controlType } from "./formControls";

const FormControl = (props: any) => {
  const { type } = props;

  switch (type) {
    case controlType.email:
      return <EmailField {...props} />;

    case controlType.password:
      return <PasswordField {...props} />;

    case controlType.standardTextField:
      return <StandardTextField {...props} />;

    case controlType.date:
      return <StandardTextField {...props} />;

    case controlType.paragraph:
      return <ParagraphField {...props} />;

    default:
      return <>incorrect form element</>;
  }
};

export default FormControl;
