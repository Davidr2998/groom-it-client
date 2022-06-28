import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen">
      <Header />
      <main className="h-[calc(100%-64px)]">{children}</main>
    </div>
  );
}
