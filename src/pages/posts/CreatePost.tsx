import { Box, Button, CircularProgress, Container } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import FormControl from "../../components/form/FormControl";
import { PostType } from "./PostDetail";
import { useCreatePostMutation } from "../../api/postApi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hook";
import { ControlType } from "../../components/form/controlType";
import { mapDataToControls } from "../../utils/formUtils";

const CreatePost = () => {
  const postControls = JSON.parse(
    JSON.stringify(
      useAppSelector((state) => state.formControls.postControls).filter(
        (control) => control.name !== "createdAt"
      )
    )
  );
  const [createPost, { isLoading, isError, error }] = useCreatePostMutation();
  const [formData, setFormData] = useState<PostType | {}>({});

  const postControlsWithValues: ControlType[] = mapDataToControls<
    PostType,
    ControlType
  >(formData, postControls);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createPost(formData);
    setFormData({});
  };

  return (
    <Container maxWidth="md">
      {isError && <Box>{JSON.stringify(error)}</Box>}
      <form onSubmit={handleSubmit}>
        {postControlsWithValues.map((control) => (
          <Box sx={{ marginBottom: "20px", mt: 2 }} key={control.id}>
            <FormControl {...control} handleChange={handleChange} />
          </Box>
        ))}
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "right" }}>
          <Button component={Link} to="/posts" variant="outlined">
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            sx={{ width: "150px" }}
          >
            {isLoading ? <CircularProgress size={22} /> : "Create Post"}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreatePost;
