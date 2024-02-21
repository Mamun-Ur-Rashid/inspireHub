

"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Avatar, Stack } from "@mui/material";

// icons
import Link from "next/link";
import logo from '@/asserts/ih.png'

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  
  {
    route: "Category",
    pathname: "/categories/news?category=all-news",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <>
      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image className="" src={logo} width={50} height={50} alt="logo" />
            <Box className='text-2xl ml-2'>
                InspireHub
            </Box>

            <Box className="w-full text-center">
              {navItems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Stack
                direction="row"
                sx={{
                  "& svg": {
                    color: "white",
                  },
                }}
              >
               <Avatar alt="Travis Howard" src="" Avatar />
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;