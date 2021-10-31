import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useActiveUser } from "../../context";
import { useGetMessagesByUserId } from "../../utils/message";

import { useScroll, Info } from "./Body";
import { MessageItem } from "./MessageItem";
import { Progress } from "../common/Progress";

export function MessageList() {
  const { id, meta } = useActiveUser();
  const { data, isLoading } = useGetMessagesByUserId(id as string);
  const { toBottom } = useScroll();
  const areMessagesExisted = !!data?.length;
  React.useLayoutEffect(() => {
    if (areMessagesExisted) {
      toBottom();
    }
  }, [areMessagesExisted, toBottom]);
  const height = id ? "77%" : "100%";
  if (!areMessagesExisted && meta) {
    return (
      <Box h={height}>
        {isLoading ? <Progress /> : <Info>Say Hi to {meta.name}👋</Info>}
      </Box>
    );
  }
  return (
    <Flex
      className="scrollable-area"
      h={height}
      alignItems="end"
      justifyContent="end"
      overflow="scroll"
      flexFlow="row wrap"
      p={5}
    >
      <Box>
        {data?.map((message, key) => {
          return <MessageItem {...message} key={key} />;
        })}
      </Box>
    </Flex>
  );
}
