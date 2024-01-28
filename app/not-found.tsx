import ArrowedLink from "./_components/arrrowedLink";
import ParticlesBackground from "./_components/particlesBackground";
import TerminalText from "./_components/terminalText";

export default function NotFound() {
  return (
    <div>
      <ParticlesBackground />
      <div className="flex min-w-screen min-h-screen justify-center items-center px-5">
        <div className="flex flex-col w-full items-center">
          <div className="z-10 text-9xl font-extrabold mb-5 italic mt-20">
            404
          </div>
          <TerminalText />
          <div className="z-10 mt-14">
            <ArrowedLink link="/" title="return home" stay />
          </div>
        </div>
      </div>
    </div>
  );
}
