import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AvatarCreation from "../components/AvatarCreate";
import JoinForm from "../components/JoinForm";
import Layout from "../layout";
import socket from "../utils/socket";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const uuid = uuidv4();
    setRoomId(uuid);
  }, []);

  function handleConnection() {
    socket.emit("join", { username: "tmchein", room: "test" }, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      router.push(`/room/${roomId}`);
    });
  }

  return (
    <Layout>
      <div className="w-full h-full grid grid-cols-2">
        <div className="col-start-1 col-end-2 flex items-center">
          <img src="/img/landing-bg.svg" alt="Groom it team image" />
        </div>
        <div className="col-start-2 col-end-3 w-full h-full flex flex-col justify-center items-center gap-8">
          <AvatarCreation />
          <JoinForm roomId={roomId} />
        </div>
      </div>
    </Layout>
  );
}
