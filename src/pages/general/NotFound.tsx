import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        margin: "100px 0",
      }}
    >
      <Box>
        <Typography sx={{ marginBottom: "20px" }} variant="h3">
          Opps!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sorry, but we couldn't find the page your looking for.
        </Typography>
      </Box>
      <Button to="/" component={Link} variant="outlined">
        Return to home page
      </Button>
    </Container>
  );
};

export default NotFound;
