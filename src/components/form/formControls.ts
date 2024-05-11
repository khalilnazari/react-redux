export const controls = {
  login: [
    {
      id: 1,
      name: "email",
      type: "email",
      dataType: "string",
      label: "Email address",
      autoComplete: "off",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      dataType: "string",
      label: "Password",
      autoComplete: "current-password",
    },
  ],
};

export enum controlType {
  email = "email",
  password = "password",
}
