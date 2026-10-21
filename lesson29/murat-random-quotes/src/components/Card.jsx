export const Card = ({ children, isLiked }) => {
  return (
    <div
      className={`relative text-center bg-emerald-950 p-6 rounded-2xl border shadow-2xl max-w-md w-full h-[230px] flex flex-col justify-between transition-all duration-300 ${
        isLiked
          ? 'border-red-500/80 shadow-red-950/50'
          : 'border-emerald-800/40 shadow-emerald-900/50'
      }`}
    >
      {children}
    </div>
  );
};