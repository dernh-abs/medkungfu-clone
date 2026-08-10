// "Advantageous Medical Projects" hero for the /projects page.
import { Reveal } from "../shared/Reveal";

export function ProjectsHero() {
  return (
    <Reveal className="text-center mb-16">
      <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4 font-montserrat">
        Advantageous Medical Projects
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Access to China&apos;s most advanced medical technologies and specialized
        treatments.
      </p>
    </Reveal>
  );
}
