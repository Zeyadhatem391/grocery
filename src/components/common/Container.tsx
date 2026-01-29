export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container max-w-[1140px] mx-auto px-2">{children}</div>
  );
}
