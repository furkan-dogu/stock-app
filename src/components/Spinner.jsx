import { Box } from "@mui/material";
import spinner from "../assets/loading.gif";

const Spinner = () => {
  return (
    <Box
      component="img"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
      }}
      alt="Loading..."
      src={spinner}
    />
  );
};

export default Spinner;
