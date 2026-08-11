import type { SupportedLanguage } from "@/lib/i18n/translations";

export interface TranslateResult {
  success: boolean;
  translatedText?: string;
  error?: string;
  suggestion?: string;
  source?: "cache" | "llm" | "mock";
}

const langDisplay: Record<SupportedLanguage, string> = {
  en: "英文",
  zh: "中文",
  ru: "俄语",
};

export async function translate(
  text: string,
  targetLang: SupportedLanguage,
  sourceLang: SupportedLanguage = "en"
): Promise<TranslateResult> {
  if (sourceLang === targetLang) {
    return { success: true, translatedText: text, source: "cache" };
  }

  if (process.env.ENABLE_LLM !== "true") {
    return {
      success: false,
      error: `自动翻译需要开启 LLM（ENABLE_LLM=true）。当前环境未开启。`,
      suggestion: `请使用确定性指令：把 <翻译key> 的${langDisplay[targetLang]}改成 <翻译后文本>，例如「把 hero.title 的俄语改成 Привет」。`,
    };
  }

  return {
    success: false,
    error: "LLM 翻译暂未实现（当前批次仅保证本地正则 + Studio 输入框闭环）。",
    suggestion: `请使用确定性指令，或先设置 ENABLE_LLM=true 并等待后续批次完成后再使用。`,
  };
}
