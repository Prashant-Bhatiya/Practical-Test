import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import Profile from "./Profile";
import { BsCart3 } from "react-icons/bs";
import CartCounter from "./CartCounter";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to={"/"}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <img
                className="IMGLOGO"
                src="https://i.ibb.co/JRCCrgB/Kabra.jpg"
                alt="Kabra Logintech"
              />
            </Text>
          </Link>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Link to={"/cart"}>
            <Box
              position={"relative"}
              padding={"0 0.5rem 0 0"}
              marginTop={"6px"}
            >
              <CartCounter />
              <Icon as={BsCart3} boxSize={"2rem"} />
            </Box>
          </Link>

          <Profile />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
