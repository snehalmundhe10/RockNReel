
import './App.css';
import Video from './Video';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__top">
        <img 
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
      
        {/* <h1>Reels</h1> */}
      </div>
      <br/>
      <div className="app__videos"> 
          {/* Container of app videos */}
         <Video
         channel='cleversnehal'
         avatarSrc=''
         song='Test song by Snehal'
         url='https://scontent-bos3-1.cdninstagram.com/v/t50.2886-16/133082951_424219708771675_3496559754095320856_n.mp4?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=Y8x-5zc2j7kAX_BPivj&oe=5FF3263E&oh=9f8c9c97e89f90b3cdec310bc7a7c7e6'
         likes={950}
         shares={30}
         />
         <Video/>
         <Video/>
      </div> 
    </div>
  );
}

export default App;
