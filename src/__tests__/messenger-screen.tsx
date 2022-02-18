import {App} from '../App';
import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import * as React from 'react';
import {fetchGetUsers, IUser} from '../utils/users';
import userEvent from '@testing-library/user-event';

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByText(/loading/i)]);
type TRenderMessengerScreen = {
  users?: IUser[];
};
async function renderMessengerScreen({users}: TRenderMessengerScreen = {}) {
  if (users === undefined) {
    users = await fetchGetUsers();
  }

  const utils = await render(<App />);
  return {
    ...utils,
    users,
  };
}

test('renders an app with sidebar users', async () => {
  const {users} = await renderMessengerScreen();
  await waitForLoadingToFinish();
  users.forEach(user => {
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});

test('renders an app with no selected chat', async () => {
  await renderMessengerScreen();
  const noActiveUserMessage = screen.getByText(
    'Select a chat to start messaging',
  );
  expect(noActiveUserMessage).toBeInTheDocument();
});

async function selectUser(user?: IUser) {
  const userFirstItem = screen.getByText(`${user?.name}`);
  userEvent.click(userFirstItem);
}
test('renders an app with selected chat', async () => {
  const {users} = await renderMessengerScreen();
  const user = users?.[0];
  await selectUser(user);
  const activeUserNoMessage = await screen.findByText(
    `Say Hi to ${user.name}👋`,
  );
  expect(activeUserNoMessage).toBeInTheDocument();
});

function writeAndSendMessageByEnter(message: string) {
  const textarea = screen.getByPlaceholderText('Write a message...');
  fireEvent.change(textarea, {target: {value: message}});
  fireEvent.keyDown(textarea, {
    key: 'Enter',
    code: 'Enter',
    charCode: 13,
    keyCode: 13,
  });
}
test('render first 2 messages', async () => {
  await act(async () => {
    const {users} = await renderMessengerScreen();
    const user = users?.[0];
    await selectUser(user);
    writeAndSendMessageByEnter('How is it going Chino?');
    writeAndSendMessageByEnter('This is me, Thomas');
  });
  const messageItems = await screen.findAllByTestId('message-item');
  expect(messageItems.length).toBe(2);
});
