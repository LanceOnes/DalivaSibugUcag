import UserList from "./components/UserList";
import AddUserFormModal from "./components/AddUserFormModal";
import { useModal } from "../../hooks/useModal";

const UserMainPage = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  return (
    <>
      <AddUserFormModal isOpen={isOpen} onClose={closeModal}/>
      <UserList onAddUser={openModal} />
    </>
  );
};

export default UserMainPage;