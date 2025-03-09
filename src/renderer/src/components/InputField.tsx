function Input() {
  const style: string =
    'h-[2.25rem] rounded-3xl bg-button-black border-2 border-accent-gray outline-none px-5 text-[1rem] font-extralight text-center text-accent-white placeholder:text-accent-gray select-none'

  const inputLists = [
    {
      placeholder: 'Enter a YouTube link (e.g., https://www.youtube.com/watch?v=xyz)',
      width: 'w-[47.5rem] '
    },
    {
      placeholder: 'Enter download location (e.g., /Users/yourname/Videos)',
      width: 'w-[27.125rem] '
    }
  ]

  return (
    <>
      {inputLists.map((input, index) => (
        <input key={index} placeholder={input.placeholder} className={input.width + style}></input>
      ))}
    </>
  )
}

export default function InputField() {
  return Input()
}
