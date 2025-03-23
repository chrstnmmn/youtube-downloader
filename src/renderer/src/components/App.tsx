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

function ProgressSection({
  percentValue = 69,
  setDownloading
}: {
  percentValue?: number
  setDownloading: (value: boolean) => void
}) {
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
        className="w-[40.8rem] h-[1rem] px-[.2rem] rounded-full linear-gradient shadow-glow flex items-center justify-center"
      >
        <div
          id="Border"
          className="w-[40.8rem] h-[.8rem] rounded-full bg-button-black border-2 border-accent-gray overflow-hidden flex items-center"
        >
          <div
            id="ProgressBar"
            className="h-[.6rem] bg-accent-white border-2 border-button-black rounded-full"
            style={progressBarWidth}
          ></div>
        </div>
      </div>
    )
  }

  const DownloadLabel = () => {
    let progressValue: number = percentValue
    const etaValue: string = '04:30'

    const dlName: string =
      "Downloading: 80's Tokyo Funky Lofi Playlist 🎧 | Broadcasting Beyond | Relax & Chill & Study to.f616.mp4"
    const eta: string = `ETA: ${etaValue}`
    const progress: string = `Progress: ${progressValue}%`
    return (
      <div>
        <ul className="w-[40.8rem] text-accent-white text-[10px] font-normal text-nowrap flex items-center gap-2">
          <li className="w-[32.5rem] overflow-hidden text-ellipsis whitespace-nowrap pr-[8rem]">
            {dlName}
          </li>
          <li>{eta}</li>
          <li>{progress}</li>
        </ul>
      </div>
    )
  }

  const StateButton = ({ setDownloading }: { setDownloading: (value: boolean) => void }) => {
    const [isPauseClick, setPauseClick] = useState(false)

    const CancelButton = () => {
      setDownloading(false)
      console.log('Cancelled')
    }
    const PauseButton = () => {
      setPauseClick(true)
      console.log('Paused')
    }
    const ResumeButton = () => {
      setPauseClick(false)
      console.log('Resumed')
    }

    return (
      <div className="flex flex-row gap-1 pt-3">
        <Button
          buttonAttributes={[
            {
              buttonWidth: 'w-[5.75rem] ',
              label: 'Cancel',
              icon: './src/assets/cancel.svg'
            }
          ]}
          onClick={CancelButton}
        ></Button>
        <Button
          buttonAttributes={[
            {
              buttonWidth: isPauseClick ? 'w-[6.0625rem] ' : 'w-[5.5rem] ',
              label: isPauseClick ? 'Resume' : 'Pause',
              icon: isPauseClick ? './src/assets/resume.svg' : './src/assets/pause.svg'
            }
          ]}
          onClick={isPauseClick ? ResumeButton : PauseButton}
        ></Button>
      </div>
    )
  }

  return (
    <div className=" flex flex-col items-center">
      <DownloadLabel></DownloadLabel>
      <ProgressBar></ProgressBar>
      <StateButton setDownloading={setDownloading}></StateButton>
    </div>
  )
}

function DownloadButton({ setDownloading }: { setDownloading: (value: boolean) => void }) {
  const DownloadIcon = () => {
    return <img src={downloadIcon}></img>
  }

  const SetDownload = () => {
    setDownloading(true)
    console.log("Now donwloading")
  }

  return (
    <div className="w-[8.4rem] h-[2.9rem] linear-gradient shadow-glow mt-2 rounded-full flex justify-center items-center">
      <button
        onClick={SetDownload}
        className="text-accent-white text-sm font-extrabold w-[8.19rem] h-[2.75rem] bg-button-black border-2 border-accent-gray rounded-full flex items-center justify-center gap-1"
      >
        <DownloadIcon></DownloadIcon>
        Download
      </button>
    </div>
  )
}

function RenderPage() {
  const [isDownloading, setDownloading] = useState(false)
  const inputSection = (
    <>
      <InputFieldSection></InputFieldSection>
      <DownloadButton setDownloading={setDownloading}></DownloadButton>
    </>
  )

  const downloadSection = <ProgressSection setDownloading={setDownloading}></ProgressSection>

  return isDownloading ? downloadSection : inputSection
}

function App() {
  return (
    <section className="w-[100vw] flex flex-col justify-center items-center no-drag gap-2 select-none">
      <Logo></Logo>
      <RenderPage></RenderPage>
    </section>
  )
}

export default App
