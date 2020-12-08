import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import ThemeContext from './components/Context';

function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <Routes />
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
