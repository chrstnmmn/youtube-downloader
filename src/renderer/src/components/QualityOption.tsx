const qualityLists = [
  { qualityLabel: '360', value: 'low' },
  { qualityLabel: '720', value: 'medium' },
  { qualityLabel: '1080', value: 'high'},
  { qualityLabel: '4K', value: 'highest' }
]

function QualityOptButton({ qualityLabel }: { qualityLabel: string }) {
  return (
    <button className="text-accent-white font-extrabold text-[.75rem] px-3 py-[.2rem] border-2 border-accent-gray rounded-3xl  ">
      {qualityLabel}
    </button>
  )
}

export default function QualityOptions() {
  return (
    <>
      {qualityLists.map((options, index) => (
        <QualityOptButton key={index} qualityLabel={options.qualityLabel}></QualityOptButton>
      ))}
    </>
  )
}
