
const iconsList = [
  { icon: './src/assets/minimize.svg' },
  { icon: './src/assets/maximize.svg' },
  { icon: './src/assets/close.svg' }
]

function Icons({ icon }: { icon: string }) {
  return <img src={icon} className="pointer-events-none" />
}

function TitleBarButtons() {
  return (
    <div className="flex flex-row gap-[.5rem]  select-none">
      {iconsList.map((iconImg, index) => (
        <button key={index} className="no-drag p-1">
          <Icons icon={iconImg.icon}></Icons>
        </button>
      ))}
    </div>
  )
}

export default function TitleBar() {
  return (
    <>
      <header className="top-0 w-[100vw] px-3 py-2 flex justify-end drag">
      <TitleBarButtons></TitleBarButtons>
      </header>
    </>
  )
}
