export function Button ({ title, handleClick, className = "" }) {
  return (
    <button 
      onClick={handleClick} 
      className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${className}`}
    >
      {title}
    </button>
  )
}