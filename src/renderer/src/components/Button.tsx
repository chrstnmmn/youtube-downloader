interface ButtonProps {
  buttonAttribrutes: {
    buttonWidth: string;
    span: string;
    label: string
  }[]
}

let svgIcons: { icon: ['./assets/download.svg', './assets/folder.svg', './assets/github.svg'] }

export default function Button({ buttonAttribrutes }: ButtonProps) {
  const defaultButtonStyle =
    ' h-[36px] text-accent-white font-bold text-[0.875rem] bg-button-black border-2 rounded-3xl border-accent-gray flex justify-center items-center gap-2'

  return (
    <>
      {buttonAttribrutes.map((button, index) => (
        <button key={index} className={button.buttonWidth + button.span + defaultButtonStyle}>
          {button.label}
        </button>
      ))}
    </>
  )
}
