import './App.scss';
import Home from './components/home/Home';
import Header from './views/Header';
import content from './api/content.json';
import Skills from './views/Skills';

function App() {
  const { author, title, presentation } = content;
  return (
      <div className="App">
        <Header/>
         <Home
          author={ author }
          title={ title }
          presentation={ presentation }/>
        <Skills />
      </div>
  );
}
export default App;
