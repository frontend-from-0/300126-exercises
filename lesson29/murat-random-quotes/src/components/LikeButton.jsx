export function LikeButton ( {handleClick, isLiked} ) {
const heartIcon= isLiked? '❤️' : '🤍';

  return (
    <button onClick={handleClick} className="p-2 text-2xl hover:scale-110 transition-transform" > {heartIcon} </button>
  )
}