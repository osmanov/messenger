import {App} from '../App';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import * as React from 'react';
import {fetchGetUsers, IUser} from '../utils/users';
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

test('renders an app with users', async () => {
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
// TODO next render app with selected chat
