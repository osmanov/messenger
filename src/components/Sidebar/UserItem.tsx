import * as React from 'react';
import {Flex, Box, Text, Avatar, AvatarBadge} from '@chakra-ui/react';
import {IUser} from '../../utils/users';
import {useActiveUser} from '../../context';

export function UserItem({
  name,
  instrument,
  id,
  isOnline,
}: IUser & {isOnline: boolean}) {
  const {setId, id: activeId} = useActiveUser();
  const isActive = activeId === id;
  return (
    <Flex
      p={3}
      onClick={() => {
        setId(id);
      }}
      bg={isActive ? 'blue.400' : 'white'}
      color={isActive ? 'white' : 'black'}
      cursor="pointer"
      _hover={{
        background: isActive ? '' : 'gray.100',
      }}
    >
      <Avatar>
        <AvatarBadge boxSize="1.25em" bg={isOnline ? 'green.500' : 'tomato'} />
      </Avatar>
      <Box ml="3">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm">{instrument}</Text>
      </Box>
    </Flex>
  );
}
