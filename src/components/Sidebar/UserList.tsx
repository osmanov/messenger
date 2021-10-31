import * as React from "react";
import { useUsers } from "../../utils/users";
import { Progress } from "../common/Progress";
import { UserItem } from "./UserItem";

export function UserList() {
  const { isLoading, data: users } = useUsers();

  if (isLoading) {
    return <Progress />;
  }
  return (
    <>
      {users?.map((item, num) => {
        return <UserItem {...item} isOnline={!!(num % 2)} key={item.id} />;
      })}
    </>
  );
}
