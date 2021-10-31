import * as React from "react";
import { Box, Textarea } from "@chakra-ui/react";
import { useActiveUser } from "../../context";
import { usePutMessage } from "../../utils/message";
import { useQueryClient } from "react-query";

export function Footer() {
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
