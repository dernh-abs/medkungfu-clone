// "Patient Stories" — 2 patient testimonial cards with avatar photo,
// region badge, condition, and quote. Matches /stories.
import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Story {
  name: string;
  image: string;
  region: string;
  age: string;
  condition: string;
  quote: string;
}

const STORIES: Story[] = [
  {
    name: "Mr. Ahmad",
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/story-ahmad.jpg",
    region: "Middle East",
    age: "55 years old",
    condition: "Localized Prostate Cancer • Heavy Ion Therapy",
    quote:
      "The entire process was seamless. MedKungFu handled everything from my visa to my hospital appointments.",
  },
  {
    name: "Ms. Sarah",
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/story-sarah.jpg",
    region: "Southeast Asia",
    age: "42 years old",
    condition: "Recurrent Lymphoma • CAR-T Cell Therapy",
    quote:
      "I was given a second chance at life. The technology here is truly world-class.",
  },
];

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={story.image}
          alt={story.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Icons.playCircle className="text-white h-12 w-12" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs font-bold px-2 py-1 rounded">
            {story.region}
          </span>
          <span className="text-gray-400 text-sm">{story.age}</span>
        </div>
        <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">{story.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{story.condition}</p>
        <div className="relative">
          <Icons.quote className="absolute -top-2 -left-2 text-[#1B4D3E]/20 h-6 w-6" />
          <p className="text-gray-700 italic pl-6 border-l-2 border-[#1B4D3E]/30">
            &quot;{story.quote}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export function PatientStoriesSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {STORIES.map((story) => (
        <Reveal key={story.name} y={20} className="flex">
          <StoryCard story={story} />
        </Reveal>
      ))}
    </div>
  );
}
