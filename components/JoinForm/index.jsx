import scale from "../../utils/votingScale";
import Select from "react-select";

export default function JoinForm({ roomId }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white flex flex-col gap-2 justify-center items-center"
    >
      <div className="flex flex-col w-3/6">
        <label className="text-sm text-gray-700 font-bold" htmlFor="username">
          How would you like to be called?
        </label>
        <input
          id="username"
          name="username"
          className="border-2 border-gray-400 rounded-lg px-3 
              bg-white text-black text-center"
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col w-3/6">
        <label className="text-sm text-gray-700 font-bold" htmlFor="uuidRoomId">
          Room Id
        </label>
        <input
          id="uuidRoomId"
          className="border-2 border-gray-400 rounded-lg px-3 
              bg-gray-200 text-gray-500 text-center"
          type="text"
          disabled
          value={roomId}
        />
      </div>
      <div className="flex flex-col w-3/6">
        <label
          className="text-sm text-gray-700 font-bold"
          htmlFor="scale-select"
        >
          Choose the scale you want to work with
        </label>
        <Select
          isSearchable={false}
          options={scale}
          id="scale-select"
          instanceId="scale-select"
        />
      </div>
      <input
        className="bg-amber-500 py-1 px-4 rounded-lg text-center cursor-pointer
              text-white font-bold uppercase hover:bg-amber-700"
        type="submit"
        value="Join Room 🚀"
      />
      {/* groomit.vercel.app/room/id */}
      <input
        className="border-2 border-gray-500 py-1 px-4 rounded-lg text-center cursor-pointer
              text-gray-500 font-bold uppercase hover:border-black hover:text-black"
        type="button"
        value="Copy invite ID"
      />
    </form>
  );
}
