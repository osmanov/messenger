import {useMutation, UseQueryOptions, useQuery} from 'react-query';
export interface IMessage {
  text: string;
  date: Date;
}

interface IContents {
  [userId: string]: IMessage[];
}

function getAllUsersMessages(): Promise<IContents> {
  return new Promise(res => {
    setTimeout(() => {
      res(
        JSON.parse(
          localStorage.getItem('allUsersMessages') as string,
        ) as IContents,
      );
    }, 1);
  });
}
async function fetchGetMessagesByUserId(userId: string): Promise<IMessage[]> {
  const allUsersMessages = (await getAllUsersMessages()) || {};
  const messages = (allUsersMessages[userId] as IMessage[]) || [];
  return Promise.resolve(messages);
}
interface IPutMessageInput {
  text: string;
  userId: string;
}
interface IPutMessageOutput extends IMessage {
  userId: string;
}
async function putMessage({
  text,
  userId,
}: IPutMessageInput): Promise<IPutMessageOutput> {
  let allUsersMessages = (await getAllUsersMessages()) || {};
  const prevMessages = allUsersMessages[userId];
  const newMessage = {text, date: new Date()};
  if (prevMessages) {
    allUsersMessages[userId] = [...(prevMessages as IMessage[]), newMessage];
  } else {
    allUsersMessages[userId] = [newMessage];
  }
  localStorage.setItem('allUsersMessages', JSON.stringify(allUsersMessages));
  return {...newMessage, userId};
}

export function useGetMessagesByUserId(userId: string) {
  return useQuery(['messagesByUserId', userId], () =>
    fetchGetMessagesByUserId(userId),
  );
}

export function usePutMessage(options?: UseQueryOptions<IPutMessageOutput>) {
  const mutation = useMutation((data: IPutMessageInput) => {
    return putMessage(data);
  }, options);
  return mutation;
}

//split text by '\n'
export function parseTextLinesToArray(str: string) {
  return str.split('\n');
}
