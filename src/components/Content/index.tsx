import * as React from "react";
import {
  Box,
  Hide,
  Textarea,
  Flex,
  Tag,
  Center,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useActiveUser, useLayout } from "../../context";
import {
  usePutMessage,
  useGetMessagesByUserId,
  parseTextLinesToArray,
} from "../../utils/message";
import { useQueryClient } from "react-query";

function Header() {
  const { setId, meta } = useActiveUser();
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
interface IInfo {
  children: React.ReactNode;
}
function Info({ children }: IInfo) {
  return (
    <Center h="100%" color="white">
      <Tag>{children}</Tag>
    </Center>
  );
}
function Messages() {
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
        {isLoading ? (
          <Center h="100%">
            <Spinner />
          </Center>
        ) : (
          <Info>Say Hi to {meta.name}👋</Info>
        )}
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
          return (
            <Box textAlign="right" key={key}>
              <Box
                key={message.date.toString()}
                borderRadius="6"
                borderEndEndRadius="0"
                p={2}
                bg="white"
                mb={3}
                display="inline-block"
                textAlign="left"
              >
                {parseTextLinesToArray(message.text).map((line, key) => {
                  return <Box key={key}>{line}</Box>;
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}
function useScroll() {
  return {
    toBottom: () => {
      const el = document.querySelector(".scrollable-area") as HTMLDivElement;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    },
  };
}
function Body() {
  const { id } = useActiveUser();
  const { toBottom } = useScroll();
  const { isMobileSidebarStretched } = useLayout();
  React.useEffect(() => {
    if (id) {
      toBottom();
    }
  }, [id, toBottom]);
  return (
    <>
      {id ? (
        <Messages />
      ) : isMobileSidebarStretched ? null : (
        <Info>Select a chat to start messaging</Info>
      )}
    </>
  );
}

function Footer() {
  const queryClient = useQueryClient();
  const [value, setValue] = React.useState<string>("");
  const { id } = useActiveUser();
  const mutationPut = usePutMessage({
    onSuccess: () => {
      queryClient.invalidateQueries(["messagesByUserId", id]);
      setValue("");
    },
  });
  const handleSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      const text = (e.target as HTMLTextAreaElement).value.trim();
      if (text !== "") {
        mutationPut.mutate({ text, userId: id as string });
      }
    }
  };
  return (
    <Box
      h="15%"
      display="flex"
      alignItems="center"
      paddingX={5}
      bg="white"
      borderTop="1px"
      borderColor="gray.300"
    >
      <form style={{ width: "100%" }} onKeyDown={(e) => handleSubmit(e)}>
        <Textarea
          name="message"
          placeholder="Write a message..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </Box>
  );
}

export const Content = () => {
  const { id } = useActiveUser();
  return (
    <>
      {id ? <Header /> : null}
      <Body />
      {id ? <Footer /> : null}
    </>
  );
};
