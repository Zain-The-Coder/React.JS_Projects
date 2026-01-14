import React from 'react';

export function Header () {
    return (
  <header style={{ padding: '20px', background: '#1e293b', color: 'white', borderBottom: '2px solid #3b82f6' }}>
    <h2 style={{ margin: 0 }}>🚀 Pro Dashboard</h2>
  </header>
    )
};

export function Sidebar () {
    return (
        <>
        <main className='flex'>
  <aside style={{ width: '200px', background: '#0f172a', color: '#94a3b8', padding: '20px' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ marginBottom: '15px', color: 'white', fontWeight: 'bold' }}>🏠 Home</li>
      <li style={{ marginBottom: '15px' }}>📈 Analaytics</li>
      <li style={{ marginBottom: '15px' }}>⚙️ My Settings</li>
    </ul>
  </aside>
  <section className='w-[50%] text-center m-auto'>
    <h3 className='text-[24px] font-bold'>DESCRIPTION</h3>
    <p className='text-[20px] italic capitalize text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia tempore unde temporibus optio dolor, consequatur architecto, totam non perspiciatis impedit aspernatur dolores, quae dolorem rerum reprehenderit expedita odio saepe?</p>
    <p className='text-[20px] italic capitalize text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quasi eveniet corrupti odit assumenda libero. Numquam obcaecati hic, dolorem nam illum atque illo est error, tempore assumenda voluptatibus ipsa. Facere!</p>
  </section>
  </main>
  </>

    )
};

export function Footer () {
    return (
  <footer style={{ padding: '15px', background: '#1e293b', color: '#64748b', textAlign: 'center', fontSize: '0.9rem' }}>
    Built with ❤️ using Component Composition | 2026
  </footer>
    )
  }

