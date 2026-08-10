"use client";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function HospitalIntroSection() {
  const { lang } = useLanguage();
  const isZh = lang === "zh";
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6 text-center">
            {isZh ? "医院简介" : "Hospital Introduction"}
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-4">
              {isZh
                ? "北京高博医院位于中关村生命科学园，总建筑面积约10万平方米，规划床位500张。作为北京市首个国际研究型医院及全国首家以疑难重症诊疗、临床研究和生物医药产业转化为战略目标的国际研究型医院，医院于2023年9月试运营。"
                : "Beijing Gaobo Hospital is located in Zhongguancun Life Science Park, with a total building area of about 100,000 square meters and 500 planned beds. As Beijing&apos;s first international research hospital and the nation&apos;s first international research hospital with strategic goals of difficult and critical disease diagnosis, clinical research and biomedical industry transformation, the hospital began trial operations in September 2023."}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {isZh
                ? "医院以&quot;小门诊、大科研&quot;为特色，聚焦实体肿瘤、血液系统疾病、脑科学三大核心领域。医院已全面开展黑色素瘤与肉瘤内科、消化肿瘤科、胸部肿瘤科、血液肿瘤免疫治疗科等特色诊疗服务，累计启动临床试验179项。"
                : "The hospital features &quot;small clinic, big research&quot;, focusing on three core areas: solid tumors, hematologic diseases, and brain science. The hospital has fully launched specialized diagnosis and treatment services including melanoma and sarcoma internal medicine, digestive oncology, thoracic oncology, and hematologic tumor immunotherapy, with a total of 179 clinical trials launched."}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {isZh
                ? "医院已服务来自俄罗斯、土耳其、巴基斯坦、韩国等10余国患者，并与美国麻总百瀚（Mass General Brigham）、梅奥诊所（Mayo Clinic）等世界顶级医疗机构建立深度合作关系。"
                : "The hospital has served patients from more than 10 countries including Russia, Turkey, Pakistan, and South Korea, and has established deep cooperation with world-class medical institutions such as Mass General Brigham and Mayo Clinic in the United States."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
