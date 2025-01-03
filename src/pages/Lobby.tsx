export default function Lobby() {
  return (
    <div className="mx-[auto] my-[0] max-w-[1200px] h-screen flex justify-center ">
      <div className="w-[1200px] flex text-[white] flex-col gap-[65px] px-[25px] py-[50px]">
        <h1 className="text-3xl">Lobby</h1>
        <button className="w-1/5  text-[large] p-[10px] bg-[black] text-[white] cursor-pointer border-[1px] border-[solid] rounded-[5px]">
          Create Room
        </button>
      </div>
    </div>
  );
}
