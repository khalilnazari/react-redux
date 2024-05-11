import { Box, CircularProgress, Container, Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../api/postApi";
import { controls } from "../../components/form/formControls";
import FormControl from "../../components/form/FormControl";
import { ControlType } from "../../components/form/controlType";

const PostDetail = () => {
  let postControls: ControlType[] = controls.post;
  const params = useParams();
  const { data: post, isLoading, isError, error } = useGetPostQuery(params.id);

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

  postControls = postControls.map((control) => {
    Object.keys(post).map((key) => {
      if (control.name === key) {
        control.value = post[key];
      }
    });

    return control;
  });

  return (
    <Container maxWidth="md">
      <form>
        {postControls.map((control) => (
          <Box sx={{ marginBottom: "20px" }} key={control.id}>
            <FormControl {...control} />
          </Box>
        ))}
      </form>
    </Container>
  );
};

export default PostDetail;
