interface ButtonProps {
  buttonAttribrutes: {
    buttonWidth: string
    label: string
  }[]
}

let svgLocation: {location: ['./assets/download.svg', './assets/folder.svg', './assets/github.svg']}

export default function Button({ buttonAttribrutes }: ButtonProps) {
  const defaultButtonStyle = " h-[36px] text-accent-white font-bold text-[0.875rem] bg-button-black border-2 rounded-3xl border-accent-gray flex justify-center items-center gap-2"

  return (
    <>
      {buttonAttribrutes.map((button, index) => (
        <button key={index} className={button.buttonWidth + defaultButtonStyle}>
          {/* {svgLocation.location.map((index) => (
            <img key={index} src={[index]} />
          ))} */}

          {button.label}
        </button>
      ))}
    </>
  )
}
