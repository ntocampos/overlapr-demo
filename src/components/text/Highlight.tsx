type Props = {
  children: React.ReactNode;
};

function Highlight({ children }: Props) {
  return (
    <span className="font-mono text-sm tracking-wide text-slate-600 font-semibold">
      <Backtick />
      {children}
      <Backtick />
    </span>
  );
}

function Backtick() {
  return <span className="text-pink-500 font-bold">`</span>;
}

export default Highlight;
