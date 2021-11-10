import * as React from 'react';
import {Center, Spinner} from '@chakra-ui/react';

export function Progress() {
  return (
    <Center h="100%">
      <Spinner />
    </Center>
  );
}
