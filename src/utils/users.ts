import { useQuery } from "react-query";
export interface IUser {
  id: string;
  name: string;
  instrument: string;
}
function fetchGetUsers(): Promise<IUser[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        { id: "1", name: "Tomas Haake", instrument: "drums" },
        { id: "2", name: "Tom Morello", instrument: "guitar" },
        { id: "3", name: "Chino Moreno", instrument: "singer" },
        { id: "4", name: "Mike Patton", instrument: "singer" },
        { id: "5", name: "Björk", instrument: "singer" },
        { id: "6", name: "Aurora Aksnes", instrument: "singer" },
      ]);
    }, 1000);
  });
}

export function useUsers() {
  return useQuery("users", fetchGetUsers);
}
