import trollFace from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="flex items-center h-[65px] bg-linear-to-r from-[#672280] to-[#A626D3] text-white p-5">
      <img src={trollFace} className="h-full mr-[6px]" />
      <h1 className="text-xl mr-auto">Meme Generator</h1>
    </header>
  );
}
