import { TextField } from "@mui/material";

export const EmailField = (props: any) => {
  const { name, label, autoComplete, value, handleChange } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      type="email"
      autoComplete={autoComplete}
      value={value}
      onChange={handleChange}
      fullWidth
    />
  );
};

export const PasswordField = (props: any) => {
  const { name, label, autoComplete, value, handleChange } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      type="password"
      autoComplete={autoComplete}
      value={value}
      onChange={handleChange}
      fullWidth
    />
  );
};
