import { useAppDispatch, useAppSelector } from "../store/hook";
import { counterActions } from "../store/reducers/postSlice";
import { Box, Button, Typography } from "@mui/material";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { counter } = useAppSelector((state) => state.counter);

  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={() => dispatch(counterActions.increment())}
      >
        +
      </Button>
      <Typography>{counter.value}</Typography>
      <Button
        variant="contained"
        onClick={() => dispatch(counterActions.decrement())}
      >
        -
      </Button>
    </Box>
  );
};

export default Counter;
