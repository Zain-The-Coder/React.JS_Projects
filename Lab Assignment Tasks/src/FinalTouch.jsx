import CardGenerator from "./Components/CardGenerator";
import Countergame from "./Components/Countergame";
import FakeStore from "./Components/FakeStore";
import Form from "./Components/Form";
import JokeGenerator from "./Components/JokeGenerator";
import Layout from "./Components/Layout";
import StudentCard from "./Components/StudentCard";
import Todo from "./Components/Todo";

function FinalTouch() {
  return (
    <>
      <section className="mt-6 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-6">Level 1 – React Fundamentals</h2>
        <div className="grid gap-6 sm:grid-cols-1 ">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold mb-4 text-lg md:text-xl">Task 1: React Playground App</h3>
            <StudentCard />
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold mb-4 text-lg md:text-xl">Task 2: Emoji Counter Game</h3>
            <Countergame />
          </div>
        </div>
      </section>

      <section className="mt-10 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-6">Level 2 – Forms & State</h2>
        <div className="grid gap-6 sm:grid-cols-1">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold mb-4 text-lg md:text-xl">Task 3: Mini Signup Form</h3>
            <Form />
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold mb-4 text-lg md:text-xl">Task 4: Mini Todo Application</h3>
            <Todo />
          </div>
        </div>
      </section>

      <section className="mt-10 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-6">Level 3 – React In Depth</h2>

        <div className="grid gap-6 sm:grid-cols-1">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold mb-4 text-lg md:text-xl">Task 5: Component Composition</h3>
            <Layout />
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-bold mb-4 text-lg md:text-xl">Task 6: Product Card Generator</h3>
            <CardGenerator />
          </div>
        </div>
      </section>

 <section className="mt-10 px-4 md:px-8 mb-10">
  <h2 className="text-2xl md:text-3xl text-center underline font-semibold mb-6"> Level 4 – Effects And Data Fetching</h2>

  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col">
      <h3 className="font-bold mb-4 text-lg md:text-xl"> Task 7: Fake Store Viewer</h3>
      <FakeStore />
    </div>

    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col">
      <h3 className="font-bold mb-4 text-lg md:text-xl"> Task 8: Random Joke Generator</h3>
      <JokeGenerator />
    </div>
  </div>
</section>

    </>
  );
}

export default FinalTouch;
