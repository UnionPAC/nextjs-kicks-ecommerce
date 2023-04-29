import { Box, Typography, TextField } from "@mui/material";

const Payment = ({ values, errors, touched, handleChange, handleBlur }) => {
  return (
    <Box m="35px 0">
      <Typography fontSize="20px" marginBottom="15px">
        Contact Info
      </Typography>
      <TextField
        type="text"
        label="Email"
        fullWidth
        sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name="email"
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email}
      />
      <TextField
        type="text"
        label="Phone Number"
        fullWidth
        sx={{ gridColumn: "span 4" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phoneNum}
        name="phoneNum"
        error={!!touched.phoneNum && !!errors.phoneNum}
        helperText={touched.phoneNum && errors.phoneNum}
      />
    </Box>
  );
};

export default Payment;
