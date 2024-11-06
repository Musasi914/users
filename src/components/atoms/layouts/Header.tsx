import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-6  bg-teal-600 text-white py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-lg md:text-2xl transition hover:opacity-60"
        >
          ユーザー管理アプリ
        </Link>
        <div className="flex gap-5">
          <Link to="home" className="transition hover:opacity-60">
            home
          </Link>
          <Link
            to="home/user_management"
            className="transition hover:opacity-60"
          >
            usermanagement
          </Link>
          <Link to="home/setting" className="transition hover:opacity-60">
            setting
          </Link>
        </div>
      </nav>
    </header>
  );
}
