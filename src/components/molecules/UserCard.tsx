type UserProps = {
  id: number;
  username: string;
  name: string;
  onClick: (id: number) => void;
};

export default function UserCard({ username, name, onClick, id }: UserProps) {
  return (
    <div className="text-center shadow-lg rounded-md bg-white">
      <button className="p-5 w-full h-full" onClick={() => onClick(id)}>
        <img
          src="https://picsum.photos/300"
          alt=""
          className="rounded-full max-w-xs w-5/6 mx-auto"
        />
        <p>{username}</p>
        <p>{name}</p>
      </button>
    </div>
  );
}
