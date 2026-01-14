import { useState } from "react";

function JokeGenerator() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the bicycle fall over? It was two-tired!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "Why did the math book look sad? Because it had too many problems.",
        "Why did the coffee file a police report? It got mugged.",
        "Why don't eggs tell jokes? They might crack up.",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "Why did the computer go to the doctor? It caught a virus.",
        "Why can't your nose be 12 inches long? Because then it would be a foot!",
        "Why did the cookie go to the hospital? Because it felt crummy.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "Why did the chicken join a band? Because it had the drumsticks.",
        "Why did the cow go to space? To see the moooon.",
        "Why was the math lecture so long? The professor kept going off on a tangent.",
        "Why did the smartphone go to school? It wanted to be smarter.",
        "Why don't some couples go to the gym? Because some relationships don't work out.",
        "Why did the belt go to jail? For holding up a pair of pants!",
        "Why was the broom late? It swept in.",
        "Why can't you give Elsa a balloon? Because she will let it go!"
    ];

    const [joke, setJoke] = useState("");

    const generateJoke = () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setJoke(jokes[randomIndex]);
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">😂 Random Joke Generator</h1>
                <p className="text-gray-700 text-center mb-6 p-4 bg-gray-50 rounded-lg min-h-[80px]">
                    {joke || "Click the button below to see a joke!"}</p>
                <button onClick={generateJoke} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200">
                    Generate Joke</button>
            </div>
        </div>
    );
}

export default JokeGenerator;
