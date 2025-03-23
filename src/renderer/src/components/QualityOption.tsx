import { useState } from 'react'

const qualityLists = [
  { qualityLabel: '360p', value: 'low' },
  { qualityLabel: '720p', value: 'medium' },
  { qualityLabel: '1080p', value: 'high' },
  { qualityLabel: '4K', value: 'highest' }
]

function QualityOptButton({
  qualityLabel,
  isActive,
  onClick
}: {
  qualityLabel: string
  isActive: boolean
  onClick: () => void
}) {
  const buttonClassName = isActive
    ? 'text-button-black bg-accent-white font-extrabold text-[.75rem] border-2 border-accent-white px-3 py-[.2rem] border rounded-3xl'
    : 'text-accent-white bg-button-black font-extrabold text-[.75rem] px-3 py-[.2rem] border-2 border-accent-gray rounded-3xl'

  return (
    <button className={buttonClassName} onClick={onClick}>
      {qualityLabel}
    </button>
  )
}

export default function QualityOptions() {
  const [selectedQuality, setSelectedQuality] = useState<string | null>(null)

  const handleClick = (qualityLabel: string) => {
    setSelectedQuality(qualityLabel === selectedQuality ? null : qualityLabel)
  }

  return (
    <>
      {qualityLists.map((options, index) => (
        <QualityOptButton
          key={index}
          qualityLabel={options.qualityLabel}
          isActive={options.qualityLabel === selectedQuality}
          onClick={() => handleClick(options.qualityLabel)}
        />
      ))}
    </>
  )
}
