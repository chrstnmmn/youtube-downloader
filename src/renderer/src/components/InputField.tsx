interface Inputprops {
  inputs: { placeholder: string; width: string }[]
}

export default function InputField({ inputs }: Inputprops) {
  const style: string =
    'h-[2.25rem] rounded-3xl bg-button-black border-2 border-accent-gray outline-none px-5 text-[1rem] font-extralight text-center text-accent-white placeholder:text-accent-gray select-none'

  return (
    <>
      {inputs.map((input, index) => (
        <input key={index} placeholder={input.placeholder} className={input.width + style}></input>
      ))}
    </>
  )
}
