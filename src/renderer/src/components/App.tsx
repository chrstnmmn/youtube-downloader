/* React Components */
import Logo from './Logo'
import InputField from './InputField'
import Button from './Button'
import QualityOptions from './QualityOption'

/* React Hooks */
import { useState } from 'react'

/* Assets */
import downloadIcon from '../assets/download.svg'

function InputFieldSection() {
  return (
    <>
      <div className="grid grid-cols-4 gap-1 items-center justify-center">
        <InputField
          inputs={[
            {
              placeholder: 'Enter a YouTube link (e.g., https://www.youtube.com/watch?v=xyz)',
              span: 'col-span-4 ',
              width: 'w-[40.875rem]'
            },
            {
              placeholder: 'Enter download location (e.g., /Users/yourname/Videos)',
              span: 'col-span-3 ',
              width: 'w-[30.5625rem]'
            }
          ]}
        ></InputField>
        <Button
          buttonAttributes={[
            {
              buttonWidth: 'w-[9.9375rem] ',
              span: 'col-start-4 col-end-4',
              label: 'Select Location',
              icon: './src/assets/folder.svg',
              iconPosition: '-translate-y-[2px]'
            }
          ]}
        ></Button>
      </div>
      <div className="flex justify-center items-center gap-1">
        <h3 className="text-accent-gray text-[0.875rem]">Select Quality: </h3>
        <QualityOptions></QualityOptions>
      </div>
    </>
  )
}

function ProgressSection({ percentValue = 100 }: { percentValue?: number }) {
  // Ensure percentValue is between 0 and 100
  const clampedPercentValue = Math.min(100, Math.max(0, percentValue))

  // Use inline styles for dynamic width
  const progressBarWidth = {
    width: `${clampedPercentValue}%`
  }

  const ProgressBar = () => {
    return (
      <div
        id="GradientStroke"
        className="w-[40.8rem] h-[1.1rem] px-[.2rem] rounded-full bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_#FF1462_23deg,_#FFE53F_180deg,_#E50004_331deg)] shadow-glow flex items-center"
      >
        <div
          id="Border"
          className="w-full h-[.9rem] rounded-full bg-button-black border-2 border-accent-gray overflow-hidden flex items-center"
        >
          <div
            id="ProgressBar"
            className="h-[.7rem] bg-accent-white border-2 border-button-black rounded-full"
            style={progressBarWidth}
          ></div>
        </div>
      </div>
    )
  }

  const DownloadLabel = () => {
    const dlName: string =
      "Downloading: 80's Tokyo Funky Lofi Playlist 🎧 | Broadcasting Beyond | Relax & Chill & Study to.f616.mp4"
    const eta: string = 'ETA: 10:40'
    const progress: string = 'Progress: 69%'
    return (
      <div>
        <ul className="w-[40.8rem] text-accent-white text-[10px] font-normal text-nowrap flex items-center gap-2">
          <li className="w-[32.5rem]">{dlName}</li>
          <li>{eta}</li>
          <li>{progress}</li>
        </ul>
      </div>
    )
  }

  const StateButton = () => {
    return (
      <div className="flex flex-row gap-1 pt-3">
        <Button
          buttonAttributes={[
            {
              buttonWidth: 'w-[5.75rem] ',
              span: '',
              label: 'Cancel',
              icon: './src/assets/cancel.svg',
              iconPosition: '-translate-y-[1  px]'
            }
          ]}
        ></Button>
        <Button
          buttonAttributes={[
            {
              buttonWidth: 'w-[5.5rem] ',
              span: '',
              label: 'Pause',
              icon: './src/assets/pause.svg',
              iconPosition: '-translate-y-[1  px]'
            }
          ]}
        ></Button>
      </div>
    )
  }

  return (
    <div className=" flex flex-col items-center">
      <DownloadLabel></DownloadLabel>
      <ProgressBar></ProgressBar>
      <StateButton></StateButton>
    </div>
  )
}

// const [isDLClicked, setIsDLClicked] = useState(false)

// const handleDownload = () => {
//   setIsDLClicked(true)
// }

function DownloadButton() {
  const DownloadIcon = () => {
    return <img src={downloadIcon}></img>
  }

  return (
    <div className="w-[8.5rem] h-[3rem] bg-[conic-gradient(from_180deg_at_50%_50%,#FF1462_23.146873712539673deg,#FFE53F_180deg,#E50004_330.9468698501587deg)] shadow-glow my-4 rounded-full flex justify-center items-center">
      <button
        // onClick={handleDownload}
        className="text-accent-white text-sm font-extrabold w-[8.19rem] h-[2.75rem] bg-button-black border-2 border-accent-gray rounded-full flex items-center justify-center gap-1"
      >
        <DownloadIcon></DownloadIcon>
        Download
      </button>
    </div>
  )
}

function App() {
  // isDLClicked ? console.log("Clicked") : console.log("Not Clicked")

  return (
    <>
      <section className="w-[100vw] flex flex-col justify-center items-center no-drag gap-2 select-none">
        <Logo></Logo>
        {/* <InputFieldSection></InputFieldSection>
        <DownloadButton></DownloadButton> */}
        <ProgressSection></ProgressSection>
      </section>
    </>
  )
}

export default App
