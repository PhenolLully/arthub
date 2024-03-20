import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: 'white', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1>Arthub</h1>
      </nav>
      <div style={{ paddingTop: '50px' }}> {/* Adjust the paddingTop to match the height of your nav */}
        {/* Your page content */}
        </div>
    </>
  );
}

export default App;
