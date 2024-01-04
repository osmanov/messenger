import * as React from 'react';
import {Hide, Flex, Text} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {useActiveUser} from '../../context';

export function Header() {
  const {setId, meta} = useActiveUser();
  return (
    <Flex
      bg="white"
      h="8%"
      borderBottom="1px"
      borderColor="gray.300"
      p={2}
      alignItems="center"
    >
      <Hide above="sm">
        <ArrowBackIcon
          cursor="pointer"
          onClick={() => {
            setId(null);
          }}
          mr={2}
        />
      </Hide>
      <Text fontWeight="bold">{meta?.name}</Text>
    </Flex>
  );
}
