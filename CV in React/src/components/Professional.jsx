import { Heading } from "./Heading";
import { Paragraph } from "./Heading";

export function Professional () {
    return (
        <>
        <main className=" w-[75%] m-auto mt-[20px]">
        <section>
            <Heading text="About Me" />
        <p className="pl-[10px] w-[90%] font-[poppins] pt-[5px] italic text-[18px]">I am a student passionate about web development and programming,
             currently learning the MERN stack to build full-stack applications. 
             I enjoy exploring new technologies, creating projects,
              and solving complex problems, which helps me continuously improve my skills
               and stay up-to-date in the rapidly evolving tech world.
                My curiosity and dedication drive me to take on challenges and develop 
                practical solutions that can make an impact.</p>
        </section>
        <section>
          <Heading text="Education" />
            <Paragraph bold="Metriculation | Secondary Education" unbold="Metropolis Education System | 2023 - 2025  |  90.3%  |  A+ Grade" />
        <Paragraph bold="Intermediate" unbold="Adamjee Govt Science College Karachi  | 2025 - Present" />
    <Paragraph bold="MERN Stack Development" unbold="Saylani Mass IT Training  | 2025 - Present" />
        </section>
        <section>
            <Heading text="Technical Skills" />
        </section>
        </main>
        </>
    )
}