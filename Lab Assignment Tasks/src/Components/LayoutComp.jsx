export function Sidebar() {
  return (
    <aside className="bg-[#0f172a] text-gray-300 md:w-52 w-full p-4 md:p-6 flex-shrink-0">
      <ul className="list-none p-0">
        <li className="mb-4 font-bold text-white">🏠 Home</li>
        <li className="mb-4">My Analytics</li>
        <li className="mb-4">⚙️ Settings</li>
      </ul>
    </aside>
  );
}

export function Header() {
  return (
    <header className="p-4 md:p-6 bg-[#1e293b] text-white border-b-2 border-blue-500">
      <h2 className="text-xl md:text-2xl font-semibold">🚀 Pro Dashboard</h2>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="p-3 md:p-4 bg-[#1e293b] text-gray-400 text-center text-sm md:text-base">
      Built with ❤️ React.JS & TailwindCSS BY "Zain Ur Rehman | 2026"
    </footer>
  );
}
