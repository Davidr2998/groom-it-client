import { useState, useEffect } from "react";

export default function Header() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserName(user);
    }
  }, []);

  return (
    <header
      className="w-full h-16 bg-amber-500 shadow-sm
      flex items-center justify-center text-white px-8"
    >
      <h1 className="text-4xl font-bold uppercase">Groom it</h1>
    </header>
  );
}
