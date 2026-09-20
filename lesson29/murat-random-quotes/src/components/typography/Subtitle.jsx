export function Subtitle ( {element="span", children} ) {
  switch (element) {
    case 'h2': return (
      <h2 className="text-sm text-end text-emerald-400 "> {children} </h2>
    )
    default: return (
      <span className="text-sm block text-end text-emerald-400 "> {children} </span>
    )
  }
}