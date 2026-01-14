import CardGenerator from "./Components/CardGenerator";
import Countergame from "./Components/Countergame";
import FakeStore from "./Components/FakeStore";
import Form from "./Components/Form";
import JokeGenerator from "./Components/JokeGenerator";
import Layout from "./Components/Layout";
import PlayGround from "./Components/PlayGround";
import ProductCard from "./Components/ProductCard";
import StudentCard from "./Components/StudentCard";
import Todo from "./Components/Todo";

function FinalTouch() {
  return (
    <>
      <section className="mt-4 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-4">
          Level 1 – React Fundamentals
        </h2>

        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 1: React Playground App</h3>
          <StudentCard />
        </div>

        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 2: Emoji Counter Game</h3>
          <Countergame />
        </div>
      </section>

      <section className="mt-8 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-4">
          Level 2 – Forms & State
        </h2>

        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 3: Mini Signup Form</h3>
          <Form />
        </div>

        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 4: Mini Todo Application</h3>
          <Todo />
        </div>
      </section>

      <section className="mt-8 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-4">
          Level 3 – React In Depth
        </h2>

        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 5: Component Composition</h3>
          <Layout />
        </div>
        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 6: Product Card Generator</h3>
          <CardGenerator />
        </div>
      </section>

      <section className="mt-8 px-4 md:px-8 mb-8">
        <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-4">Level 4 – Effects And Data Fetching</h2>
        <div className="mb-6 p-4 bg-white shadow-md rounded-lg">
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 7: Fake Store Viewer</h3>
          <FakeStore />
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg md:text-xl">Task 8: Random Joke Generator</h3>
          <JokeGenerator />
        </div>
      </section>

    </>
  );
}

export default FinalTouch;
