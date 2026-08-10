# MedKungFu /login Page Specification

**Source DOM:** `docs/research/www-medkungfu-com-363c9bc1/login-7e93fba0/rendered.html`
**Route:** `src/app/login/page.tsx`
**Note:** Has SiteHeader + SiteFooter. Content is a centered gradient card.

## Structure (INTERACTION MODEL: click-driven login/signup toggle)
- `<main role="main" aria-label="Login Page" class="min-h-screen bg-gradient-to-br from-[#1B4D3E] to-[#2E7D5A] flex items-center justify-center px-4">`
- Card: `bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md` (Reveal):
  - Header `text-center mb-8`: H1 `text-2xl font-bold text-[#1A1A2E] mb-2` + P `text-gray-500 text-sm`
  - Form `space-y-5`:
    - Field: `<label class="block text-sm font-medium text-gray-700 mb-2">` + `<div class="relative">` icon `absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400` (20px) + input `w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#00A9E0] focus:ring-1 focus:ring-[#00A9E0] outline-none transition-colors`
    - Submit: `w-full bg-[#1B4D3E] text-white py-3 rounded-lg font-medium hover:bg-[#2E7D5A] transition-colors disabled:opacity-50`
  - Toggle `mt-6 text-center`: `text-[#1B4D3E] text-sm hover:underline`

## Login mode (default)
- H1 "Welcome Back" / P "Sign in to access your account"
- Email (mail icon) placeholder "Enter your email" type email required
- Password (lock icon) placeholder "Enter your password" type password required minlength 6
- Submit "Sign In"
- Toggle "Don't have an account? Sign up"

## Signup mode (click "Sign up")
- H1 "Create Account" / P "Register to get started"
- Username (user icon) placeholder "Enter your username" type text required — input focus uses `focus:border-[#1B4D3E] focus:ring-[#1B4D3E]` (note: differs from email/password which use #00A9E0)
- Email (mail icon) + Password (lock icon) — same as login
- Submit "Sign Up"
- Toggle "Already have an account? Sign in"

## Icons
mail, lock, user — all in shared map.

## Behavior
- Toggle switches between login/signup. Submit is a demo (no real auth) — preventDefault; could show a simple message.
