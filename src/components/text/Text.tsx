type Props = { children: React.ReactNode };

function Text({ children }: Props) {
  return <p className="mb-4">{children}</p>;
}

export default Text;
