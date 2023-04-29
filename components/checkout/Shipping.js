import { Box, Checkbox, Typography, FormControlLabel } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box margin="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography fontSize="20px" marginBottom="15px">
          Billing Info
        </Typography>
        <AddressForm
          type="billingInfo"
          values={values.billingInfo}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      <Box marginBottom="35px">
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingInfo.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingInfo.isSameAddress",
                  !values.shippingInfo.isSameAddress
                )
              }
            />
          }
        />
      </Box>
      {/* SHIPPING FORM */}
      {!values.shippingInfo.isSameAddress && (
        <Box marginBottom="45px">
          <Typography fontSize="20px" marginBottom="15px">
            Shipping Info
          </Typography>
          <AddressForm
            type="shippingInfo"
            values={values.shippingInfo}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
