import { useEffect, useState } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import UserCard from "../molecules/UserCard";
import { createPortal } from "react-dom";
import ModalContent from "../molecules/ModalContent";
import useSelectedUser from "../../hooks/useSelectedUser";

export default function UserManagement() {
  const [showModal, setShowModal] = useState(false);
  const { getUser, isLoading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectedUser();
  useEffect(() => getUser(), []);
  const onClickUser = (id: number) => {
    onSelectUser({ users, id });
    setShowModal(true);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">UserManage</h1>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 w-11/12">
        {isLoading ? (
          <p>loading</p>
        ) : (
          users.map((user) => (
            <UserCard
              id={user.id}
              onClick={() => onClickUser(user.id)}
              key={user.id}
              username={user.username}
              name={user.name}
            />
          ))
        )}
      </div>
      {showModal &&
        createPortal(
          <ModalContent
            selectedUser={selectedUser!}
            isShowModal={showModal}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </div>
  );
}
