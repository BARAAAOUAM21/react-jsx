
import './App.css';
import imageInSrc from "./th.jpg"
import video from "./baraa.mp4"

function App() {
  return (
    <div>
    <div className="App">
      <div style={{maxWidth:"100vw"}}>

      <h1 className="title red">This is title</h1>
   <div className="imgs">
      <img className="imgInsrc" src={imageInSrc} alt="react"/>
      <img className="imgInsrc" src="/images/PH.jpg"alt="photo"/>
    </div>

    <video width={320} height={240} controls>
  <source src={video} type="video/mp4" />
</video>
    </div>
    </div>
    </div>

  );
}

export default App;
