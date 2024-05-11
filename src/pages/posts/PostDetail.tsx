import {
  Box,
  Button,
  CircularProgress,
  Container,
  Skeleton,
  Snackbar,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetPostQuery, useUpdatePostMutation } from "../../api/postApi";
import { controls } from "../../components/form/formControls";
import FormControl from "../../components/form/FormControl";
import { ControlType } from "../../components/form/controlType";
import { ChangeEvent, FormEvent, useState } from "react";

type PostType = {
  title?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  createdAt?: string | undefined;
  id?: number;
};

const PostDetail = () => {
  let postControls: ControlType[] = controls.post;
  const params = useParams();
  const { data: post, isLoading, isError, error } = useGetPostQuery(params.id);
  const [updatePost, { isError: isUpdateError, isLoading: isUpdateLoading }] =
    useUpdatePostMutation();
  const [formData, setFormData] = useState<PostType | {}>({ id: params.id });
  const [postToControl, setPostToControl] = useState(true);
  let isUpdateEnabled = false;

  const addPostToControls = (data: any) => {
    postControls = postControls.map((control) => {
      Object.keys(data).map((key) => {
        if (control.name === key) {
          // @ts-ignore
          control.value = data[key];
        }
      });

      return control;
    });
  };

  if (!isError && !isLoading && postToControl) {
    addPostToControls(post);
    setPostToControl(false);
  }

  if (Object.keys(formData).length > 0) {
    addPostToControls(formData);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    updatePost(formData);
  };

  if (isLoading) {
    return (
      <Container>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
        <Skeleton variant="rounded" height={60} />
      </Container>
    );
  }

  if (isError) {
    <Container>{JSON.stringify(error)}</Container>;
  }

  isUpdateEnabled = isUpdated(post, formData);

  return (
    <Container maxWidth="md">
      {isUpdateError && (
        <Snackbar
          open={true}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message="Couldn't update. try again.."
          color="error"
        />
      )}

      <form onSubmit={handleSubmit}>
        {postControls.map((control) => (
          <Box sx={{ marginBottom: "20px" }} key={control.id}>
            <FormControl {...control} handleChange={handleChange} />
          </Box>
        ))}
        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ padding: "15px 30px" }}
            disabled={!isUpdateEnabled}
          >
            {isUpdateLoading ? "upading..." : "Update"}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default PostDetail;

function isUpdated(postData: any, formData: any) {
  const postStr: string[] = [];
  const formStr: string[] = [];

  Object.keys(postData).forEach((postKey) => {
    Object.keys(formData).forEach((formKey) => {
      if (postKey === formKey) {
        postStr.push(postData[postKey]);
        formStr.push(formData[formKey]);
      }
    });
  });

  if (postStr.join("") === formStr.join("")) {
    return false;
  }
  return true;
}
