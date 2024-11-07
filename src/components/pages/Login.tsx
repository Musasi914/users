import { memo, useState } from "react";
import Button from "../atoms/button/Button";
import useAuth from "../../hooks/useAuth";
import Toast from "../molecules/Toast";

export default memo(function Login() {
  const [userId, setUserId] = useState("");
  const { isLoading, login } = useAuth();
  const onClickgetUserInfo = () => login(userId);
  return (
    <div className="py-10">
      <div className="mx-auto bg-white shadow-2xl p-6 max-w-96 space-y-3 relative">
        <h2 className="border-b border-slate-700 text-xl text-center mb-6 pb-2">
          ユーザー管理アプリ
        </h2>
        <input
          type="text"
          className="border block w-full p-3 border-gray-400 rounded-md"
          placeholder="ユーザーID"
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button
          onClick={onClickgetUserInfo}
          disabled={isLoading || userId === ""}
        >
          ログイン
        </Button>
        {isLoading && (
          <div
            className="flex justify-center items-center absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 w-full h-full bg-white bg-opacity-80"
            aria-label="読み込み中"
            role="status"
          >
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
          </div>
        )}
      </div>
      <Toast state="success" />
    </div>
  );
});
