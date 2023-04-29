import { Box, TextField } from "@mui/material";
import { getIn } from "formik";

const AddressForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
    >
      <TextField
        type="text"
        label="First Name"
        fullWidth
        sx={{ gridColumn: "span 2" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
      />
      <TextField
        type="text"
        label="Last Name"
        fullWidth
        sx={{ gridColumn: "span 2" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
      />
      <TextField
        type="text"
        label="Country"
        fullWidth
        sx={{ gridColumn: "span 4" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
      />
      <TextField
        type="text"
        label="Street Address"
        fullWidth
        sx={{ gridColumn: "span 2" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
      />
      <TextField
        type="text"
        label="Street Address 2 (optional)"
        fullWidth
        sx={{ gridColumn: "span 2" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
      />
      <TextField
        type="text"
        label="City"
        fullWidth
        sx={{ gridColumn: "span 2" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
      />
      <TextField
        type="text"
        label="Province"
        fullWidth
        sx={{ gridColumn: "span 1" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.province}
        name={formattedName("province")}
        error={formattedError("province")}
        helperText={formattedHelper("province")}
      />
      <TextField
        type="text"
        label="Postal Code"
        fullWidth
        sx={{ gridColumn: "span 1" }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.postalCode}
        name={formattedName("postalCode")}
        error={formattedError("postalCode")}
        helperText={formattedHelper("postalCode")}
      />
    </Box>
  );
};

export default AddressForm;
