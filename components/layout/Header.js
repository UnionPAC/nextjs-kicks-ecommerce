import { useEffect, useState } from "react";
import { Box, Badge, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../redux/reducers";
import { useRouter } from "next/router";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);

  // const [styles, setStyles] = useState({
  //   bgcolor: "white",
  //   color: "black",
  // });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosY = window.scrollY;
  //     if (scrollPosY > 1000) {
  //       setStyles({ bgcolor: "white", color: "black" });
  //     } else {
  //       setStyles({
  //         bgcolor: "transparent",
  //         color: "white",
  //       });
  //     }
  //   };

  //   // add the event listener when the component mounts
  //   window.addEventListener("scroll", handleScroll);

  //   // remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    // Main Header Box
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      sx={{ bgcolor: "rgba(255, 255, 255, 1)", color: "black" }}
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      padding="12px 0px 5px"
    >
      {/* Secondary Header Box */}
      <Box
        display="flex"
        width="80%"
        alignItems="center"
        justifyContent="space-between"
        margin="auto"
      >
        {/* Logo Box */}
        <Link href="/">
          <Typography
            fontSize="45px"
            fontWeight="bold"
            sx={{
              color: "#222",
              fontFamily: "Sedgwick Ave Display",
              letterSpacing: "10px",
            }}
          >
            KICKS
          </Typography>
        </Link>
        {/* Icon Box */}
        <Box
          display="flex"
          columnGap="30px"
          justifyContent="space-between"
          zIndex="2"
        >
          <IconButton size="large" sx={{ color: "black" }}>
            <SearchOutlinedIcon style={{ fontSize: "24px" }} />
          </IconButton>
          <IconButton size="large" sx={{ color: "black" }}>
            <PersonOutlineIcon style={{ fontSize: "24px" }} />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            invisible={cart.length === 0}
            color="secondary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            overlap="circular"
          >
            <IconButton
              size="large"
              sx={{ color: "black" }}
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <ShoppingBagOutlinedIcon style={{ fontSize: "24px" }} />
            </IconButton>
          </Badge>

          <IconButton size="large" sx={{ color: "black" }}>
            <MenuOutlinedIcon style={{ fontSize: "24px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
