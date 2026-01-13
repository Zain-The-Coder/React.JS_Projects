import Countergame from "./Components/Countergame";
import Form from "./Components/Form";
import Layout from "./Components/Layout";
import PlayGround from "./Components/PlayGround";
import StudentCard from "./Components/StudentCard";
import Todo from "./Components/Todo";

function FinalTouch () {
    return (
        <>
        <section className="mt-[10px]">
            <h2 className="text-[30px] text-center underline">Level 1 – React Fundamentals</h2>
            <h2 className="font-bold ml-[20px] mt-[10px]">Task 1: React Playground App</h2>
            <StudentCard />
        </section>
        <section>
            <h2 className="font-bold ml-[20px] mt-[10px]">Task 2: Emoji Counter Game</h2>
            <Countergame />
        </section>
        <section>
            <h2 className="text-[30px] text-center underline">Level 2 – Forms & State</h2>
            <h2 className="font-bold ml-[20px] mt-[10px]">Task 3: Mini Signup form</h2>
            <Form />
        </section>
        <section>
            <h2 className="font-bold ml-[20px] mt-[10px]">Task 4: Mini Todo Application</h2>
            <Todo />
        </section>
        <section>
            <h2 className="text-[30px] text-center underline">Level 3 – React In Depth</h2>
            <h2 className="font-bold ml-[20px] mt-[10px]">Task 3: Component Composition</h2>   
                <Layout children="This is passed as children to the Layout component."/>
                    <h2>Main Content Area</h2>
                    <p>This is passed as children to the Layout component.</p>
        </section>
        </>
    )
}
export default FinalTouch ;