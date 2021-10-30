import * as React from "react";
import {
  Flex,
  Box,
  Text,
  Spinner,
  Avatar,
  AvatarBadge,
  Center,
} from "@chakra-ui/react";
import { useUsers } from "../../utils/users";
import { useActiveUser } from "../../context";

export function Sidebar() {
  const { isLoading, data: users } = useUsers();
  const { setId, id: activeId } = useActiveUser();
  if (isLoading) {
    return (
      <Center h="100%">
        <Spinner />
      </Center>
    );
  }
  return (
    <>
      {users?.map(({ id, name, instrument }, num) => {
        const isActive = activeId === id;
        return (
          <Flex
            key={id}
            p={3}
            onClick={() => {
              setId(id);
            }}
            bg={isActive ? "blue.400" : "white"}
            color={isActive ? "white" : "black"}
            cursor="pointer"
            _hover={{
              background: isActive ? "" : "gray.100",
            }}
          >
            <Avatar>
              <AvatarBadge
                boxSize="1.25em"
                bg={num % 2 ? "green.500" : "tomato"}
              />
            </Avatar>
            <Box ml="3">
              <Text fontWeight="bold">{name}</Text>
              <Text fontSize="sm">{instrument}</Text>
            </Box>
          </Flex>
        );
      })}
    </>
  );
}
