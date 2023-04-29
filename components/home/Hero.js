import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import image1 from "../../public/nelson-ndongala-kKObh7tUPNc-unsplash.jpg";

const Hero = () => {
  return (
    <Box overflow="auto">
      <Image
        src={image1}
        alt="hero image 1"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
      />
      <Box
        position="absolute"
        top="40%"
        left="5%"
        height="200px"
        width="800px"
        color="white"
      >
        <Typography variant="h1" fontWeight="bold">
          Shop the world's most curated sneaker marketplace.
        </Typography>
        <Button
          href="#shop"
          sx={{
            padding: "10px 30px",
            border: "2px solid white",
            color: "white",
            margin: "30px 0",
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
