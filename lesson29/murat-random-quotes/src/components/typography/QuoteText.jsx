export function QuoteText ( {children, className=""} ) {
  return (
    <p className={`text-lg text-emerald-50 ${className}`}> {children} </p>
  )
}