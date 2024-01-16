import { Alert, Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/material";
import spinner from "../assets/loading.gif";

export const ErrorMsg = () => {
  return <Alert severity="error" sx={{my:3}}>Data can not be fetched</Alert>;
};

export const NoDataMsg = () => {
  return <Alert severity="warning" sx={{my:3}}>No data found to show.</Alert>;
};

export const Spinner = () => {
    return (
      <Box
        component="img"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 280,
        }}
        alt="Loading..."
        src={spinner}
      />
    );
};

const TableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width="100%" height={60} />
      <Skeleton variant="rectangular" width="100%" height={0} />
    </Stack>
  );
};

export default TableSkeleton;
