import { Box, Alert, AlertTitle } from "@mui/material";

const Error = () => {
  return (
    <Box m="90px auto" width="80%" height="52vh">
      <Alert severity="error" sx={{ fontSize: "16px" }}>
        <AlertTitle>Error</AlertTitle>
        Sorry there was an error in the order process
      </Alert>
    </Box>
  );
};

export default Error;
