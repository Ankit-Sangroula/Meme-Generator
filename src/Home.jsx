import Header from "./component/Header";

export default function Home() {
    return (
        <div>

            <Header/>
        <main className="mx-auto p-9 max-w-[600px]">
        
            <div className="grid grid-cols-2 gap-[17px] mb-[17px]">
                <label>
                    Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        className="w-full mt-[5px] rounded-[5px] border border-[#D5D4D8] indent-[5px] min-h-10 font-[Karla]"
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        className="w-full mt-[5px] rounded-[5px] border border-[#D5D4D8] indent-[5px] min-h-10 font-[Karla]"
                    />
                </label>

                <button className="col-span-2 rounded-[5px] bg-linear-to-r from-[#711F8D] to-[#A818DA] text-white border-0 cursor-pointer min-h-10 font-[Karla]">
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="relative flex flex-col justify-center items-center">
                <img
                    src="http://i.imgflip.com/1bij.jpg"
                    className="max-w-full h-auto rounded-[3px]"
                />

                <span className="absolute text-center my-[15px] px-[5px] font-[Impact] text-[2rem] uppercase text-white tracking-[1px] [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000,2px_2px_5px_#000] top-0">
                    One does not simply
                </span>

                <span className="absolute text-center my-[15px] px-[5px] font-[Impact] text-[2rem] uppercase text-white tracking-[1px] [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000,2px_2px_5px_#000] bottom-0">
                    Walk into Mordor
                </span>
            </div>
        </main>
        </div>

    )
}

