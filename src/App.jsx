import { useState } from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Onboarding from './Components/Onboarding';

// Set VITE_API_URL in .env to point at your backend.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost/google-api/save_business.php';

export default function App() {
  const [started, setStarted] = useState(false);

  const start = () => { setStarted(true); window.scrollTo({ top: 0 }); };
  const exit = () => { setStarted(false); window.scrollTo({ top: 0 }); };

  const save = async (payload) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      return result.status === 'success'
        ? { ok: true }
        : { ok: false, message: result.message || 'The server rejected the request.' };
    } catch {
      return { ok: false, message: 'Could not reach the server. Check your connection and try again.' };
    }
  };

  return (
    <>
      <Navbar onStart={start} />
      {started ? <Onboarding onSave={save} onExit={exit} /> : <Landing onStart={start} />}
    </>
  );
}
