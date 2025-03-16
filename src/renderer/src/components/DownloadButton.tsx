import downloadIcon from '../assets/download.svg'

function DownloadIcon() {
  return <img src={downloadIcon}></img>
}

export default function DownloadButton() {
  return (
    <div className="w-[8.5rem] h-[3rem] bg-[conic-gradient(from_180deg_at_50%_50%,#FF1462_23.146873712539673deg,#FFE53F_180deg,#E50004_330.9468698501587deg)] shadow-glow my-4 rounded-full flex justify-center items-center">
      <button className="text-accent-white text-sm font-extrabold w-[8.19rem] h-[2.75rem] bg-button-black border-2 border-accent-gray rounded-full flex items-center justify-center gap-1">
        <DownloadIcon></DownloadIcon>
        Download
      </button>
    </div>
  )
}
  