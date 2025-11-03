import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="app">
      {/* Music Player - Fixed position */}
      <MusicPlayer />

      {/* Main Content - Single Card */}
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

