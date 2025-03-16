import Logo from './Logo'
import InputField from './InputField'
import Button from './Button'
import QualityOptions from './QualityOption'
import DownloadButton from './DownloadButton'

function App() {
  return (
    <section className="flex flex-col justify-center items-center no-drag gap-2">
      <Logo></Logo>
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
      <DownloadButton></DownloadButton>
    </section>
  )
}

export default App
