import Pokemons from "./Pokemon";


function App() {
  return (
    <div className="container">
      <Header />
      <Pokemons />
      <Footer />
    </div>
  );
}

export default App;

function Header(){
  return(
    <div className="header">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Images</li>
        <li>services</li>
      </ul>
    </div>
  )
}
function Footer(){
  return(
    <div className="footer">
      <p>thank you for you visiting</p>
    </div>
  )
}