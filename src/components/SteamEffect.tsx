const SteamEffect = () => {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-8 bg-gradient-to-t from-cream/40 to-transparent rounded-full animate-steam"
          style={{
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SteamEffect;
