import { useEffect, useState } from "react";
import Header from "./component/Header";

export default function Home() {
  const [memes, setMemes] = useState([])
    const [meme, setMeme] = useState({
        topText:"One does",
        bottomText:"Walk",
        imageUrl:"http://i.imgflip.com/1bij.jpg",
    });

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        setMemes(data.data.memes)
      })
    }, [])
    function handlechange (event){
      const {value, name} = event.currentTarget
      setMeme(prevMeme => ({
        ...prevMeme,
       [name]: value,
      }))
    }
  return (
    <div>
      <Header />
      <main className="mx-auto p-9 max-w-[600px]">
        <div className="grid grid-cols-2 gap-[17px] mb-[17px]">
          <label>
            Top Text
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              className="w-full mt-[5px] rounded-[5px] border border-[#D5D4D8] indent-[5px] min-h-10 font-[Karla]"
              onChange={handlechange}
              value={meme.topText}
            />
          </label>

          <label>
            Bottom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              className="w-full mt-[5px] rounded-[5px] border border-[#D5D4D8] indent-[5px] min-h-10 font-[Karla]"
              value={meme.bottomText}
              onChange={handlechange}

            />
          </label>

          <button className="col-span-2 rounded-[5px] bg-linear-to-r from-[#711F8D] to-[#A818DA] text-white border-0 cursor-pointer min-h-10 font-[Karla]">
            Get a new meme image 🖼
          </button>
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <img
            src={meme.imageUrl}
            className="max-w-full h-auto rounded-[3px]"
          />

          <span className="absolute text-center my-[15px] px-[5px] font-[Impact] text-[2rem] uppercase text-white tracking-[1px] meme-text top-0">
           {meme.topText}
          </span>

          <span className="absolute text-center my-[15px] px-[5px] font-[Impact] text-[2rem] uppercase text-white tracking-[1px] meme-text bottom-0">
           {meme.bottomText}
          </span>
        </div>
      </main>
    </div>
  );
}
