export default function StatItem({ icon: Icon, label, value, suffix = '+' }) {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <Icon className="text-3xl sm:text-4xl md:text-5xl text-[#FF4500] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
      <div className="text-white text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight drop-shadow-md">
        {label}
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FF4500] mt-1 drop-shadow-md">
        {value}{suffix}
      </div>
    </div>
  );
}
