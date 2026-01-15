import { useEffect, useState } from "react";

function Countergame() {
  const [increase, setIncrease] = useState(0);
  const [emoji, setEmoji] = useState("😢");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (increase > 9) {
      setEmoji("🎉");
      setMsg("You Reached Above 10!");
    } else if (increase > 5) {
      setEmoji("😊");
      setMsg("");
    } else if (increase > 3) {
      setEmoji("🙂");
      setMsg("");
    } else {
      setEmoji("😢");
      setMsg("");
    }
  }, [increase]);

  return (
    <section className="flex flex-col items-center justify-center p-4 w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center shadow-lg rounded-xl p-6 mb-6 w-48 sm:w-56">
        <span className="text-6xl mb-2">{emoji}</span>
        <p className="text-2xl font-semibold">{increase}</p>
        <p className="text-sm text-gray-600">{msg}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button onClick={() => setIncrease(0)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition w-24">Reset</button>
        <button onClick={() => (increase > 0 ? setIncrease(increase - 1) : increase)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition w-24">Decrease</button>
        <button onClick={() => setIncrease(increase + 1)} 
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition w-24">Increase</button>
      </div>
    </section>
  );
}

export default Countergame;
