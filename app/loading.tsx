import ParticlesBackground from "./_components/particlesBackground";

export default function Loading() {
  return (
    <div className="flex min-w-screen min-h-screen justify-center items-center">
      <ParticlesBackground />
      <div className="loader z-20"></div>
    </div>
  );
}
