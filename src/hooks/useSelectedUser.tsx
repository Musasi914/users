import { useState } from "react";
import { User } from "../types/user";

type Props = {
  users: User[];
  id: number;
};

export default function useSelectedUser() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = ({ id, users }: Props) => {
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
    console.log(targetUser);
  };

  return { onSelectUser, selectedUser };
}
