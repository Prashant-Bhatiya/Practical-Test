import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variant="link"
          cursor={"pointer"}
          minW={0}
        >
          {" "}
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <MenuList>
          <MenuItem fontSize={"small"}>Login</MenuItem>
          <MenuItem fontSize={"small"}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Profile;
