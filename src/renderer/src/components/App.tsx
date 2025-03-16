import Logo from './Logo'
import InputField from './InputField'
import Button from './Button'

function App() {
  return (
    <section className="flex flex-col justify-center items-center no-drag">
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
          buttonAttribrutes={[
            {
              buttonWidth: 'w-[9.9375rem] ',
              span: 'col-start-4 col-end-4',
              label: 'Select Location'
            }
          ]}
        ></Button>
      </div>
    </section>
  )
}

export default App
