import {
  Box,
  Button,
  CircularProgress,
  Container,
  Skeleton,
  Snackbar,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../api/postApi";
import FormControl from "../../components/form/FormControl";
import { ControlType } from "../../components/form/controlType";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppSelector } from "../../store/hook";
import { isFormDataChanged, mapDataToControls } from "../../utils/formUtils";

export type PostType = {
  title?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  createdAt?: string | undefined;
  id?: number;
};
let postControlsWithValue: ControlType[] = [];

const PostDetail = () => {
  const postControls = JSON.parse(
    JSON.stringify(useAppSelector((state) => state.formControls.postControls))
  );

  // hooks
  const params = useParams();
  const navigate = useNavigate();

  // API functions
  const { data: post, isLoading, isError, error } = useGetPostQuery(params.id);
  const [updatePost, { isError: isUpdateError, isLoading: isUpdateLoading }] =
    useUpdatePostMutation();
  const [deletePost, { isError: isDeleteError, isLoading: isDeleteLoading }] =
    useDeletePostMutation();

  // status
  const [formData, setFormData] = useState<PostType | {}>({});
  const [postToControl, setPostToControl] = useState(true);
  let isUpdateEnabled = false;

  // functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updatePost({ ...formData, id: post.id });
  };

  const handleDelete = async (id: number) => {
    await deletePost({ id });
    navigate("/posts");
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
    return <Container>{JSON.stringify(error)}</Container>;
  }

  if (postToControl) {
    console.log("only first time");
    postControlsWithValue = mapDataToControls<PostType, ControlType>(
      post,
      postControls
    );
    setPostToControl(false);
  }

  if (Object.keys(formData).length > 0) {
    postControlsWithValue = mapDataToControls<PostType, ControlType>(
      formData,
      postControlsWithValue
    );
  }

  isUpdateEnabled = isFormDataChanged<PostType>(post, formData);

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

      {isDeleteError && (
        <Snackbar
          open={true}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message="Couldn't delete. try again.."
          color="error"
        />
      )}

      <form onSubmit={handleSubmit}>
        {postControlsWithValue.map((control) => {
          return (
            <Box sx={{ marginBottom: "20px" }} key={control.id}>
              <FormControl {...control} handleChange={handleChange} />
            </Box>
          );
        })}

        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            type="submit"
            variant="outlined"
            onClick={() => handleDelete(post.id)}
            sx={{ width: "150px" }}
            disabled={isDeleteLoading}
          >
            {isDeleteLoading ? <CircularProgress size={22} /> : "Delete"}
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "150px" }}
            disabled={!isUpdateEnabled}
          >
            {isUpdateLoading ? (
              <CircularProgress
                sx={{
                  color: "#fff",
                }}
                size={22}
              />
            ) : (
              "Update"
            )}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default PostDetail;
