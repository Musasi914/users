export default function Button({
  children,
  onClick,
  disabled,
}: {
  children: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  console.log(disabled);
  return (
    <button
      onClick={onClick}
      className="bg-emerald-700 text-white py-2 px-2 w-full rounded-md transition hover:opacity-60 disabled:opacity-60"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
