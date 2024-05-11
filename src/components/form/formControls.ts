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

  post: [
    {
      id: 2,
      name: "title",
      type: "text",
      dataType: "string",
      label: "Post title",
      autoComplete: "off",
    },
    {
      id: 3,
      name: "description",
      type: "paragraph",
      dataType: "string",
      label: "Post description",
      autoComplete: "off",
    },
    {
      id: 4,
      name: "image",
      type: "text",
      dataType: "string",
      label: "ImageUrl",
      autoComplete: "off",
    },
    {
      id: 5,
      name: "createdAt",
      type: "date",
      dataType: "string",
      label: "Create date",
      autoComplete: "off",
      readonly: true,
    },
  ],
};

export enum controlType {
  email = "email",
  password = "password",
  standardTextField = "text",
  paragraph = "paragraph",
  date = "date",
}
