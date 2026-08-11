"use client";
// CityStrip — Stage D 改造：heading 和 cities 从 ContentRuntime 读取，
// doc === null 时回退到 HOME_PAGE_SEED（与原硬编码值一致）。
import { useSectionData } from "@/lib/executor/use-content-runtime";
import { HOME_PAGE_SEED } from "@/lib/content/seed-data";
import type { CityStripSection } from "@/lib/content/content-schema";

import { Icons } from "../shared/icons";

const FALLBACK: CityStripSection = HOME_PAGE_SEED.sections.cityStrip;

export function CityStrip() {
  const section = useSectionData("home", "cityStrip", FALLBACK);
  const heading = section.heading;
  const cities = section.cities;

  return (
    <nav aria-label="Service locations" className="bg-[#1B4D3E] py-6">
      <div className="container-custom px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
            <Icons.mapPin className="h-[18px] w-[18px] text-[#7CB342]" />
            <span className="font-medium">{heading}</span>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-2 list-none">
            {cities.flatMap((city, i) => {
              const items = [
                <li
                  key={`city-${city.name}`}
                  className={`text-sm md:text-base font-medium ${
                    city.dimmed ? "text-white/50" : "text-white"
                  }`}
                >
                  {city.name}
                </li>,
              ];
              if (i < cities.length - 1) {
                items.push(
                  <li
                    key={`sep-${i}`}
                    className="text-[#7CB342] mx-1"
                    aria-hidden="true"
                  >
                    ·
                  </li>
                );
              }
              return items;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
