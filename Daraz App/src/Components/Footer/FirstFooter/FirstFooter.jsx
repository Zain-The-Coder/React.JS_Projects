import Links from "./Links";
import Section from "./Section";

function FirstFooter() {
  return (
    <footer className="bg-white py-10 px-6"> {/* Added padding and background */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between lg:justify-around gap-10">
        <Links />
        <Section />
      </div>
    </footer>
  );
}

export default FirstFooter;