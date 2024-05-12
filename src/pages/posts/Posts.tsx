// import { postApi } from "../../api/postApi";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { useGetPostsQuery } from "../../api/postApi";
import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";

type PostType = {
  createdAt: string;
  description: string;
  id: number;
  image: string;
  title: string;
};

const PostCard = (post: PostType) => {
  const description = post.description.substring(0, 100);
  return (
    <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
      <Paper sx={{ padding: "10px 10px 20px 10px", height: "100%" }}>
        {post.image ? (
          <img
            src={post.image}
            style={{ width: "100%", borderRadius: "3px" }}
            alt="post image"
          />
        ) : (
          <Skeleton variant="rounded" height={60} />
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">{post.title}</Typography>
          <Typography gutterBottom variant="body1">
            {description}
          </Typography>
          <Button
            component={Link}
            fullWidth
            to={`/posts/${post.id}`}
            variant="outlined"
            sx={{ mt: "auto" }}
          >
            View
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

const Posts = () => {
  // const getPosts = postApi.endpoints.getPosts.useQuery("");
  const { data: posts, isLoading, isError, error } = useGetPostsQuery("");

  if (isError) {
    <Box sx={{ display: "flex" }}>{JSON.stringify(error)}</Box>;
  }

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

  return (
    <Container>
      {/* <CreatePost /> */}
      <Box
        sx={{
          border: "1px solid #eee",
          padding: "10px",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
      >
        <Button variant="outlined" component={Link} to="/posts/create">
          Create Post
        </Button>
      </Box>
      <Grid container spacing={5} alignContent="stretch" direction="row">
        {posts.map((post: PostType) => (
          <PostCard key={post.id} {...post} />
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
