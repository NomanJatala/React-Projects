import { useState, useEffect } from "react";

export default function MemeGenerator() {
    // 
    // Meme Generator
    const [meme_State, setMeme_State] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        
    });

    // handling the input text
    //   fetching the meme image
    const [url_State, setUrl_State] = useState();
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((json) => setUrl_State(json.data.memes[count].url));
    }, [count]);
    
    // window size
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
      }


      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleChange(event) {
        const { value, name } = event.currentTarget;
      setMeme_State((prevMeme) => ({
          ...prevMeme,
          [name]: value,
      }));
  }
  
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="form bg-white p-8 rounded shadow-md flex flex-col gap-4 w-full max-w-md">
          <label className="flex flex-col font-semibold text-gray-700">
            Top Text
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
              value={meme_State.topText}
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex flex-col font-semibold text-gray-700">
            Bottom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
              value={meme_State.bottomText}
              className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme relative mt-8 w-full max-w-md">
          <img src={url_State} className="w-full rounded" />
          <span className="top absolute left-1/2 top-4 transform -translate-x-1/2 text-white text-2xl font-bold drop-shadow-lg uppercase tracking-wide">
            {meme_State.topText}
          </span>
          <span className="bottom absolute left-1/2 bottom-4 transform -translate-x-1/2 text-white text-2xl font-bold drop-shadow-lg uppercase tracking-wide">
            {meme_State.bottomText}
          </span>
        </div>
        <div>The width is {windowSize}px</div>
      </main>
    </div>
  );
}
