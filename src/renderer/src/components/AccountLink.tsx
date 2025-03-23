import githubIcon from '../assets/github.svg'

function Icon() {
  return <img src={githubIcon}></img>
}

export default function AccountLink() {
  const link: string = 'https://github.com/chrstnmmn'

  return (
    <a
      href={link}
      className="text-accent-white text-[1rem] underline font-medium flex items-center justify-center gap-1 "
    >
      <Icon></Icon>
      chrstnmmn
    </a>
  )
}
