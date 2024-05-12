import { TextField } from "@mui/material";

export const EmailField = (props: any) => {
  const { name, label, autoComplete, value, handleChange, readonly } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      type="email"
      autoComplete={autoComplete}
      value={value || ""}
      onChange={handleChange}
      fullWidth
      InputProps={{
        readOnly: readonly || false,
      }}
    />
  );
};

export const PasswordField = (props: any) => {
  const { name, label, autoComplete, value, handleChange, readonly } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      type="password"
      autoComplete={autoComplete}
      value={value || ""}
      onChange={handleChange}
      fullWidth
      InputProps={{
        readOnly: readonly || false,
      }}
    />
  );
};

export const StandardTextField = (props: any) => {
  const { name, label, autoComplete, value, handleChange, readonly } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      type="text"
      autoComplete={autoComplete}
      value={value || ""}
      onChange={handleChange}
      fullWidth
      InputProps={{
        readOnly: readonly || false,
      }}
    />
  );
};

export const ParagraphField = (props: any) => {
  const { name, label, autoComplete, value, handleChange, readonly } = props;
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      type="text"
      autoComplete={autoComplete}
      value={value}
      onChange={handleChange}
      fullWidth
      multiline
      rows={4}
      InputProps={{
        readOnly: readonly || false,
      }}
    />
  );
};
