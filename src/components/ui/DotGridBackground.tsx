type Props = { headline?: string; containerClass?: string };

export const DotsGridBackground = ({ headline, containerClass }: Props) => {
  return (
    <div
      className={`${containerClass} relative flex h-[50rem] w-full items-center justify-center bg-black bg-grid-white/[0.2]`}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <p className="sm:text-7xl relative z-20 bg-gradient-to-b from-neutral-700 to-neutral-400 bg-clip-text py-8 text-4xl font-bold text-transparent">
        {headline}
      </p>
    </div>
  );
};
