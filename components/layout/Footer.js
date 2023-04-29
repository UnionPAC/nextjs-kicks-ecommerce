import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box marginTop="70px" padding="40px 0" bgcolor="black">
      <Box
        display="flex"
        width="80%"
        margin="auto"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        color="rgb(143, 143, 143)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Link href="/">
            <Typography variant="h3" fontWeight="bold" mb="30px" color="white">
              KICKS
            </Typography>
          </Link>

          <Typography>
            The ultimate online destination for sneaker enthusiasts. We offer a carefully curated
            selection of premium quality sneakers from the hottest brands. Shop
            our latest drops, limited-edition releases, and classic styles with
            lightning-fast shipping. Join our community of like-minded
            sneakerheads on social media and take your sneaker game to the next
            level.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            About Us
          </Typography>
          <Link href="#shipping-returns">
            <Typography mb="20px">Shipping & Returns</Typography>
          </Link>
          <Link href="#support">
            <Typography mb="20px">Support</Typography>
          </Link>
          <Link href="#kicks-instagram">
            <Typography mb="20px">Instagram</Typography>
          </Link>
          <Link href="#kicks-facebook">
            <Typography mb="20px">Facebook</Typography>
          </Link>
          <Link href="#kicks-twitter">
            <Typography mb="20px">Twitter</Typography>
          </Link>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            New Releases
          </Typography>
          <Link href="#">
            <Typography mb="20px">Air Jordan 4 'Thunder' 2023</Typography>
          </Link>
          <Link href="#">
            <Typography mb="20px">
              Run The Jewels x Nike Dunk High SB '4/20'
            </Typography>
          </Link>
          <Link href="#">
            <Typography mb="20px">Air Jordan 3 'Wizards'</Typography>
          </Link>
          <Link href="#">
            <Typography mb="20px">
              Wmns Air Jordan 1 High 'Washed Pink'
            </Typography>
          </Link>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color="white">
            Trending
          </Typography>
          <Link href="#">
            <Typography mb="20px">Air Jordans</Typography>
          </Link>
          <Link href="#">
            <Typography mb="20px">Nike Dunks</Typography>
          </Link>
          <Link href="#">
            <Typography mb="20px">Corteiz x Nike</Typography>
          </Link>
          <Link href="#">
            <Typography mb="20px">
              BAD BUNNY X CAMPUS LIGHT 'CLOUD WHITE'
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
