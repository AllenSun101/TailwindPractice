import Image from "next/image";

export default function Home() {
  // min-h-screen flex flex-col justify-center items-center: center align horizontally and vertically
  // flex flex-col justify-center items-center: center align horizontally

  var dark = true;
  
  return (
    <div className={"" + (dark ? "bg-blue-100" : "bg-red-100")}>
      <div className="text-green-400 text-6xl min-h-screen flex flex-col justify-center items-center">
        <button className="bg-white relative after:absolute after:bg-green-300 after:inset-0 text-slate-900 group p-10
        hover:opacity-50 duration-300 flex items-center gap-4 after:z-0 after:blur">
          <h1 className="z-10">BUTTON</h1>
          <span className="z-10 h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300"></span>
        </button>
        <button className="bg-white relative after:absolute after:bg-green-300 after:inset-0 text-slate-900 group p-10
        hover:opacity-50 duration-300 flex items-center gap-4 after:z-0 after:blur">
          <h1 className="z-10">BUTTON</h1>
          <span className="z-10 h-10 w-10 bg-amber-800 group-hover:animate-spin duration-300"></span>
        </button>
      </div>
    </div>
  );
}
