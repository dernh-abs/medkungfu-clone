"use client";

// Login / sign-up card for /login — toggles between the two modes.
// Demo form (no real auth): submit is simulated. Matches the source.
import { useState, type FormEvent } from "react";

import { RU } from "@/lib/i18n/ru";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

import { Icons } from "../shared/icons";
import { Reveal } from "../shared/Reveal";

const inputBase =
  "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none transition-colors";
const inputFocus = "focus:border-[#00A9E0] focus:ring-1 focus:ring-[#00A9E0]";
const inputBrandFocus = "focus:border-[#1B4D3E] focus:ring-1 focus:ring-[#1B4D3E]";

export function AuthCard() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const { lang } = useLanguage();
  // The source /ru/login only translates the Email label; everything else
  // stays English there, and /login keeps English in zh mode.
  const emailLabel = lang === "ru" ? (RU["Email"] ?? "Email") : "Email";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo — no real authentication.
    const form = e.currentTarget;
    form.reset();
  };

  const isLogin = mode === "login";

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#1A1A2E] mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-gray-500 text-sm">
          {isLogin ? "Sign in to access your account" : "Register to get started"}
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <Icons.user className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className={`${inputBase} ${inputBrandFocus}`}
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {emailLabel}
          </label>
          <div className="relative">
            <Icons.mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              className={`${inputBase} ${inputFocus}`}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Icons.lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="password"
              className={`${inputBase} ${inputFocus}`}
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#1B4D3E] text-white py-3 rounded-lg font-medium hover:bg-[#2E7D5A] transition-colors disabled:opacity-50"
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => setMode(isLogin ? "signup" : "login")}
          className="text-[#1B4D3E] text-sm hover:underline"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}

export function AuthPage() {
  return (
    <main
      role="main"
      aria-label="Login Page"
      className="min-h-screen bg-gradient-to-br from-[#1B4D3E] to-[#2E7D5A] flex items-center justify-center px-4"
    >
      <Reveal className="w-full max-w-md">
        <AuthCard />
      </Reveal>
    </main>
  );
}
