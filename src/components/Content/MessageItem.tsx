import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { parseTextLinesToArray, IMessage } from "../../utils/message";

export function MessageItem({ date, text }: IMessage) {
  return (
    <Box textAlign="right">
      <Box
        key={date.toString()}
        borderRadius="6"
        borderEndEndRadius="0"
        p={2}
        bg="white"
        mb={3}
        display="inline-block"
        textAlign="left"
      >
        <Text fontSize="xs" color="gray.300">
          {new Date(date).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
        {parseTextLinesToArray(text).map((line, key) => {
          return <Box key={key}>{line}</Box>;
        })}
      </Box>
    </Box>
  );
}
