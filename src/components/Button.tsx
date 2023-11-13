type Props = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: Props) {
  return (
    <button
      className="px-3 py-2 rounded-lg bg-indigo-500 shadow-lg shadow-indigo-500/50 font-bold text-white hover:shadow-indigo-600/50 hover:bg-indigo-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transition-all"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
