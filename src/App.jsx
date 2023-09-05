
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import TopBar from "./components/TopBar";
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
function App() {
  return (
    <div>
   <TopBar />
   <Welcome />
   <AllTheBooks />
   <Footer />
   </div>
  );
}

export default App;
