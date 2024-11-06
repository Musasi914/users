import { User } from "../../types/user";

export default function ModalContent({
  isShowModal,
  onClose,
  selectedUser,
}: {
  isShowModal: boolean;
  onClose: () => void;
  selectedUser: User;
}) {
  return (
    <div
      className="fixed inset-0 bg-gray-200 bg-opacity-50 grid place-items-center"
      aria-modal={isShowModal}
    >
      <div className="w-1/2 bg-white p-6">
        <p id="userdetail" className="mb-5 text-center">
          ユーザー詳細
        </p>
        <div aria-labelledby="userdetail">
          <fieldset>
            <label>
              <p>名前</p>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="w-full border border-gray-200 rounded-md p-2 mb-2"
                value={selectedUser.username}
              />
            </label>
            <label>
              <p>フルネーム</p>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full border border-gray-200 rounded-md p-2 mb-2"
                value={selectedUser.name}
              />
            </label>
            <label>
              <p>mail</p>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="w-full border border-gray-200 rounded-md p-2 mb-2"
                value={selectedUser.email}
              />
            </label>
            <label>
              <p>tel</p>
              <input
                type="text"
                name="tel"
                placeholder="tel"
                className="w-full border border-gray-200 rounded-md p-2 mb-2"
                value={selectedUser.phone}
              />
            </label>
          </fieldset>
        </div>
        <button
          onClick={onClose}
          className="border-gray-500 block bg-slate-600 text-white p-2 rounded-lg mt-5"
        >
          Close
        </button>
      </div>
    </div>
  );
}
