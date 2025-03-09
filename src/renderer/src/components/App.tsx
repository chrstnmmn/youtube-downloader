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

function App() {
  return (
    <>
      <Logo />
      <InputField
        inputs={[
          {
            placeholder: 'Enter a YouTube link (e.g., https://www.youtube.com/watch?v=xyz)',
            width: 'w-[47.5rem] '
          },
          {
            placeholder: 'Enter download location (e.g., /Users/yourname/Videos)',
            width: 'w-[27.125rem] '
          }
        ]}
      ></InputField>
    </>
  )
}

export default App
