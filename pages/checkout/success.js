import { Box, Alert, AlertTitle } from "@mui/material";

const Success = () => {
  return (
    <Box m="90px auto" width="80%" height="52vh">
      <Alert severity="success" sx={{ fontSize: "16px" }}>
        <AlertTitle>Order Success</AlertTitle>
        We are processing your Order —{" "}
        <strong>Thanks for choosing KICKS!</strong>
      </Alert>
    </Box>
  );
};

export default Success;
