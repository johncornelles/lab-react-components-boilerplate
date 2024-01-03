import './App.css';
import GallaryFooter from './components/gallaryFooter';
import Header from './components/header';
import ImageReturner from "./components/Imagereturner"
import ImageData from './components/ImageData';

function App() {
  const imageData = ImageData()
  return (
    <>
      <Header/>
      <ImageReturner imageData={imageData}/>
      <GallaryFooter/> 
    </>
  )
}

export default App;
