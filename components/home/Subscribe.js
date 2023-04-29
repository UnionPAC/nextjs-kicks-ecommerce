import { Box, Typography, InputBase, Divider } from "@mui/material";

const Subscribe = () => {
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <Typography variant="h3" mb="5px">
        Stay Up To Date On The Latest Drops
      </Typography>
      <Typography fontSize="15px">
        and receive 10% off your first order
      </Typography>
      <Box
        p="2px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="60%"
        backgroundColor="#F2F2F2"
        borderRadius="2px"
      >
        <InputBase placeholder="Enter email" sx={{ ml: 2, flex: 1 }} />
        <Divider orientation="vertical" sx={{ height: 30, m: 1 }} />
        <Typography sx={{ padding: "10px 15px", cursor: "pointer" }}>
          Sign Up
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
