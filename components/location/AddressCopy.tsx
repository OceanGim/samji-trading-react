'use client'

export default function AddressCopy() {
  const handleCopy = () => {
    navigator.clipboard.writeText('경기도 의정부시 고산동 996-3 고산한강 듀클래스 B동 923호')
    alert('주소가 복사되었습니다.')
  }

  return (
    <button
      onClick={handleCopy}
      className="mt-2 text-sm text-accent hover:text-accent-hover transition-colors"
    >
      주소 복사하기
    </button>
  )
}