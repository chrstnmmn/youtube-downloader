import youtubeLogo from '../assets/youtubedownloadlogo.svg'
import InputField from './InputField'

function Logo() {
  return (
    <img
      src={youtubeLogo}
      className="w-[13.67844rem] h-[3.98269rem] select-none pointer-events-none"
    />
  )
}

function MainPage() {
  return (
    <div className="flex  flex-col items-center justify-center  gap-1 w-[100%] h-[100vh]">
      <Logo />
      <InputField></InputField>
    </div>
  )
}

function App() {
  return <MainPage></MainPage>
}

export default App
