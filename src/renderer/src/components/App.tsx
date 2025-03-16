import youtubeLogo from '../assets/youtubedownloadlogo.svg'
import TitleBar from './Titlebar'

function Logo() {
  return <img src={youtubeLogo} className="select-none pointer-events-none my-5" />
}

function App() {
  return (
    <>
      <TitleBar></TitleBar>
    </>
  )
}

export default App
