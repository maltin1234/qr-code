import "./App.css";
import qr from "./images/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className=" column-first-qr">
          <img className="img" alt="" src={qr}></img>
        </div>

        <div className="column-second-text">
          <div className="row-text-header">
            <h3 className="text">Ehenderit eiusmod</h3>
          </div>
          <div className="row-text">
            <p className="text">
              Sit aute. Duis qui irure sit quis mollit incididunt nostrud mollit
              aliquip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
