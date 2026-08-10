"use client";

// "Hospital Directory" — interactive city filter + 7 hospital cards.
// Clicking a city filters the grid and updates the count. Matches /hospitals.
import { useState } from "react";

import Link from "next/link";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

interface Hospital {
  slug: string;
  name: string;
  subtitle?: string;
  grade: string;
  description: string;
  location: string;
  specialties: string;
  pills: string[];
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  image: string;
  city: string;
}

const CITIES = ["All Cities", "Beijing", "Shanghai", "Guangzhou", "Chengdu", "Hainan"];

const HOSPITALS: Hospital[] = [
  {
    slug: "shanghai-proton-heavy-ion",
    name: "Shanghai Proton & Heavy Ion Center",
    grade: "Grade A Tertiary",
    description:
      "China's first tumor specialty medical institution offering both proton and heavy ion advanced radiotherapy, treating over 50 conditions",
    location: "Shanghai",
    specialties: "Heavy Ion Therapy, Proton Therapy",
    pills: ["First in China", "9,317+ Cases", "50+ Conditions"],
    stat1: { value: "9,317 cases", label: "Total Treated" },
    stat2: { value: "1,000+/year", label: "Annual Volume" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-shanghai-proton.jpg",
    city: "Shanghai",
  },
  {
    slug: "ruijin-hainan",
    name: "Ruijin Hospital Hainan",
    subtitle: "Ruijin Hospital Hainan Branch, SJTU School of Medicine",
    grade: "National Regional Medical Center",
    description:
      "The only public medical institution in Lecheng Pilot Zone, transferring Shanghai Ruijin Hospital resources, main channel for international innovative drugs entering China",
    location: "Hainan Boao",
    specialties: "Oncology, Cardiology, Neuroscience",
    pills: ["Four Licensed Policies", "219 Licensed Drugs", "Major Diseases on Island"],
    stat1: { value: "219 items", label: "Licensed Drugs/Devices" },
    stat2: { value: "151 items", label: "First in China" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-ruijin-hainan.jpg",
    city: "Hainan",
  },
  {
    slug: "longhua",
    name: "Longhua Hospital",
    subtitle: "Longhua Hospital Affiliated to Shanghai University of TCM",
    grade: "Grade A Tertiary",
    description:
      "One of the four earliest TCM clinical bases nationwide, with significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy",
    location: "Shanghai",
    specialties: "TCM Oncology, Orthopedics, Nephrology",
    pills: ["#1 TCM Performance", "2 TCM Masters", "1,750 Beds"],
    stat1: { value: "5.36M+", label: "Outpatient Visits" },
    stat2: { value: "96,800", label: "Discharged Patients" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-longhua.jpg",
    city: "Shanghai",
  },
  {
    slug: "sun-yat-sen-memorial",
    name: "Sun Yat-sen Memorial Hospital",
    subtitle: "Sun Yat-sen Memorial Hospital, SYSU",
    grade: "Grade A Tertiary",
    description:
      "Founded in 1835, birthplace of Western medicine in China, breast tumor center with 57% breast-conserving rate",
    location: "Guangzhou",
    specialties: "Breast Oncology, Cardiology, Urology",
    pills: ["First Western Hospital in China", "7 National Key Disciplines", "4 Organ Transplants"],
    stat1: { value: "7", label: "National Key Disciplines" },
    stat2: { value: "17", label: "Clinical Key Specialties" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-sun-yatsen.jpg",
    city: "Guangzhou",
  },
  {
    slug: "guanghua",
    name: "Guanghua Hospital",
    subtitle: "Guanghua Hospital Affiliated to Shanghai University of TCM",
    grade: "Grade A Tertiary",
    description:
      "One of the four earliest TCM clinical bases nationwide, with significant advantages in TCM treatment of malignant tumors, bone degenerative diseases, nephropathy",
    location: "Shanghai",
    specialties: "Joint Disease, Rheumatology, TCM-Integrated",
    pills: ["#1 TCM Performance", "2 TCM Masters", "1,750 Beds"],
    stat1: { value: "5.36M+", label: "Outpatient Visits" },
    stat2: { value: "96,800", label: "Discharged Patients" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-guanghua.jpg",
    city: "Shanghai",
  },
  {
    slug: "beijing-gaobo",
    name: "Beijing Gaobo Hospital",
    grade: "International Research Hospital",
    description:
      "Beijing's first international research hospital, focusing on solid tumors, hematologic diseases, and brain science, with deep cooperation with Mass General Brigham and Mayo Clinic",
    location: "Beijing",
    specialties: "Solid Tumors, Hematologic Diseases, Neuroscience",
    pills: ["Beijing's First International Research Hospital", "179 Clinical Trials", "Serving 10+ Countries"],
    stat1: { value: "100,000㎡", label: "Total Building Area" },
    stat2: { value: "500 beds", label: "Planned Beds" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-beijing-gaobo.jpg",
    city: "Beijing",
  },
  {
    slug: "shenzhen-hengsheng",
    name: "Shenzhen Hengsheng Hospital",
    grade: "National Tertiary General Hospital",
    description:
      "National Grade 3 comprehensive hospital, Fosun Health member, integrating medical care, research, teaching, rehabilitation and preventive healthcare, with ART qualification",
    location: "Shenzhen Bao'an",
    specialties:
      "Reproductive Medicine, Gastroenterology, Orthopaedics, International Medical Center",
    pills: ["Fosun Health Member", "ISO15189 Accredited", "ART Qualification"],
    stat1: { value: "1,100+", label: "Staff" },
    stat2: { value: "38", label: "Departments" },
    image: "/sites/www-medkungfu-com-363c9bc1/shared/images/hospital-shenzhen-hengsheng.webp",
    city: "Shenzhen",
  },
];

function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <li className="group relative" role="listitem">
      <Link
        href={`/hospitals/${hospital.slug}`}
        aria-label={`View Details - ${hospital.name}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1B4D3E]/20 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7CB342]/25"
      >
        <div
          className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#1B4D3E] to-[#2E7D5A] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg"
          aria-label="Featured Hospital"
        >
          <Icons.star className="h-3 w-3" aria-hidden="true" />
          Featured
        </div>
        <figure className="h-52 overflow-hidden relative">
          <img
            src={hospital.image}
            alt={`${hospital.name} - ${hospital.grade}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#1B4D3E] shadow-md">
            {hospital.grade}
          </div>
        </figure>
        <article className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-1 group-hover:text-[#1B4D3E] transition-colors duration-300">
            {hospital.name}
          </h3>
          {hospital.subtitle && (
            <p className="text-sm text-gray-500 mb-3">{hospital.subtitle}</p>
          )}
          <ul className="flex flex-wrap gap-2 mb-4 list-none" role="list">
            {hospital.pills.map((pill) => (
              <li
                key={pill}
                className="px-2.5 py-1 bg-[#1B4D3E]/10 text-[#1B4D3E] text-xs rounded-md font-medium"
                role="listitem"
              >
                {pill}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {hospital.description}
          </p>
          <dl className="space-y-2.5 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Icons.mapPin className="mr-2 text-[#1B4D3E] flex-shrink-0 h-4 w-4" />
              <dt className="sr-only">Location</dt>
              <dd className="truncate">{hospital.location}</dd>
            </div>
            <div className="flex items-start text-sm text-gray-600">
              <Icons.award className="mr-2 text-[#1B4D3E] flex-shrink-0 mt-0.5 h-4 w-4" />
              <dt className="sr-only">Specialties</dt>
              <dd className="line-clamp-2">{hospital.specialties}</dd>
            </div>
          </dl>
          <dl className="grid grid-cols-2 gap-3 mb-5 p-3 bg-gradient-to-br from-[#1B4D3E]/5 to-[#2E7D5A]/5 rounded-xl border border-[#1B4D3E]/10">
            <div className="text-center">
              <dt className="text-lg font-bold text-[#1B4D3E]">{hospital.stat1.value}</dt>
              <dd className="text-xs text-gray-500">{hospital.stat1.label}</dd>
            </div>
            <div className="text-center">
              <dt className="text-lg font-bold text-[#1B4D3E]">{hospital.stat2.value}</dt>
              <dd className="text-xs text-gray-500">{hospital.stat2.label}</dd>
            </div>
          </dl>
          <span className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B4D3E] py-3 text-center font-medium text-white shadow-md transition-all duration-300 group-hover:bg-[#143D30] group-hover:shadow-lg">
            View Details
            <Icons.arrowRight className="group-hover:translate-x-1 transition-transform duration-300 h-4 w-4" aria-hidden="true" />
          </span>
        </article>
      </Link>
    </li>
  );
}

export function HospitalDirectory() {
  const [city, setCity] = useState("All Cities");

  const filtered =
    city === "All Cities" ? HOSPITALS : HOSPITALS.filter((h) => h.city === city);

  return (
    <section
      aria-labelledby="hospitals-list-heading"
      className="container-custom px-4 py-16"
    >
      <nav aria-label="City filter" className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center" role="list">
          {CITIES.map((c) => {
            const active = c === city;
            return (
              <button
                key={c}
                aria-pressed={active}
                role="listitem"
                onClick={() => setCity(c)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#1B4D3E] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-[#1B4D3E]/10 hover:text-[#1B4D3E] border border-gray-200"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="text-center mb-8" role="status" aria-live="polite">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-[#1B4D3E]">{filtered.length}</span>{" "}
          hospitals
          {city !== "All Cities" ? ` in ${city}` : ""}
        </p>
      </div>

      <h2 id="hospitals-list-heading" className="sr-only">
        Hospital Directory
      </h2>

      {filtered.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none" role="list">
          {filtered.map((hospital) => (
            <Reveal key={hospital.slug} y={30} className="flex">
              <HospitalCard hospital={hospital} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-[#1A1A2E] mb-2">
            No hospitals found
          </p>
          <p className="text-gray-500">Try selecting a different city filter</p>
        </div>
      )}
    </section>
  );
}
