interface ButtonProps {
  buttonAttributes: {
    buttonWidth?: string
    span?: string
    label?: string
    icon?: string // Optional icon property for each button
    iconPosition?: string // Optional icon position (e.g., CSS class)
  }[];
  onClick?: () => void
}

// Icons component
function Icons({ icon, iconPosition }: { icon: string; iconPosition?: string }) {
  return <img src={icon} className={iconPosition} alt="icon" />
}

// Button component
export default function Button({ buttonAttributes, onClick }: ButtonProps) {
  const defaultButtonStyle =
    'h-[36px] text-accent-white font-bold text-[0.875rem] bg-button-black border-2 rounded-3xl border-accent-gray flex justify-center items-center gap-1'

  return (
    <>
      {buttonAttributes.map((button, index) => (
        <button
          key={index}
          className={`${button.buttonWidth} ${button.span} ${defaultButtonStyle}`}
          onClick={onClick}
        >
          {button.icon && <Icons icon={button.icon} iconPosition={button.iconPosition} />}
          {button.label}
        </button>
      ))}
    </>
  )
}
