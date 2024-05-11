import { EmailField, PasswordField } from "./Controls";
import { controlType } from "./formControls";

const FormControl = (props: any) => {
  const { type } = props;

  switch (type) {
    case controlType.email:
      return <EmailField {...props} />;

    case controlType.password:
      return <PasswordField {...props} />;

    default:
      return <>incorrect form element</>;
  }
};

export default FormControl;
