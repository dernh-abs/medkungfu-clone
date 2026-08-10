import { Icons } from "../shared/icons";

export function CityStrip() {
  return (
    <nav aria-label="Service locations" className="bg-[#1B4D3E] py-6">
      <div className="container-custom px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
            <Icons.mapPin className="h-[18px] w-[18px] text-[#7CB342]" />
            <span className="font-medium">SERVING PATIENTS IN</span>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-2 list-none">
            <li className="text-sm md:text-base font-medium text-white">Shanghai</li>
            <li className="text-[#7CB342] mx-1" aria-hidden="true">·</li>
            <li className="text-sm md:text-base font-medium text-white">Guangzhou</li>
            <li className="text-[#7CB342] mx-1" aria-hidden="true">·</li>
            <li className="text-sm md:text-base font-medium text-white">Hainan</li>
            <li className="text-[#7CB342] mx-1" aria-hidden="true">·</li>
            <li className="text-sm md:text-base font-medium text-white/50">Beijing</li>
            <li className="text-[#7CB342] mx-1" aria-hidden="true">·</li>
            <li className="text-sm md:text-base font-medium text-white/50">Shenzhen</li>
            <li className="text-[#7CB342] mx-1" aria-hidden="true">·</li>
            <li className="text-sm md:text-base font-medium text-white/50">Chengdu</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
