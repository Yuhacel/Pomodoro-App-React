import Mainbar from './Mainbar';
import Navbar from "./Navbar";


// underContent şuan acil değil, gerekirse Mainbar kısmının altına "Underbar" olarak gelecek


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Mainbar />
        
      </div>
    </div>    
  );
}

export default App;
