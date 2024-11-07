import { useLoginUserContext } from "../../hooks/useLoginUserContext";

export default function Home() {
  const { loginUser } = useLoginUserContext();
  console.log(loginUser);
  return (
    <h1 className="text-3xl text-red-700 font-bold md:text-black xl:text-red-50">
      home
    </h1>
  );
}
