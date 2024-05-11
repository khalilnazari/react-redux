import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { controls } from "../../components/form/formControls";
import FormControl from "../../components/form/FormControl";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { authActions } from "../../store/reducers/authSlice";

type LoginControlType = {
  id: number;
  name: string;
  type: string;
  dataType: string;
  value?: string;
};

const Login = () => {
  let loginControls: LoginControlType[] = controls.login;
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);

  if (token) {
    console.log("You are login");
  }

  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  Object.keys(formData).map((el) => {
    loginControls = loginControls.map((control) => {
      if (el === control.name) {
        // @ts-ignore
        control.value = formData[el];
      }
      return control;
    });
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authActions.setAuth(formData));
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: "30px", marginTop: "100px" }}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h5">Login</Typography>
        </Box>

        <Box>
          <form onSubmit={handleSubmit}>
            {loginControls.map((control) => (
              <Box key={control.id} sx={{ marginBottom: "20px" }}>
                <FormControl {...control} on handleChange={handleChange} />
              </Box>
            ))}
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ padding: "15px 0" }}
                fullWidth
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
