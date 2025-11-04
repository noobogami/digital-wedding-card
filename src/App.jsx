import { useState } from 'react';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <div className="app">
      {/* Music Player - Fixed position */}
      <MusicPlayer shouldPlay={envelopeOpened} />

      {/* Main Content - Single Card */}
      <main>
        <Hero onEnvelopeOpen={() => setEnvelopeOpened(true)} />
      </main>
    </div>
  );
}

export default App;

