import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type AuthTab = "login" | "signup";

const LoginMain = () => {
  const [tab, setTab] = useState<AuthTab>("login"); // 기본값: 로그인
  
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* --- Navbar --- */}
      <Navbar search={() => {console.log('go search');}} />
  
      <div className="flex min-h-200 flex-col items-center justify-center bg-white">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold tracking-[0.15em]">LIMITED DROP</h1>
          <p className="mt-2 text-xs text-gray-500">한정판 래플 &amp; 선착순 커머스</p>
        </div>
        <div className="w-full max-w-md">
          <div className="mb-6 grid grid-cols-2 border border-black text-sm">
            <button
              onClick={() => setTab("login")}
              className={
                tab === "login"
                  ? "bg-black py-3 font-semibold text-white cursor-pointer"
                  : "bg-white py-3 font-semibold text-gray-900 cursor-pointer"
              }
            >
              로그인
            </button>
            <button
              onClick={() => setTab("signup")}
              className={
                tab === "signup"
                  ? "bg-black py-3 font-semibold text-white cursor-pointer"
                  : "bg-white py-3 font-semibold text-gray-900 cursor-pointer"
              }
            >
              회원가입
            </button>
          </div>
          {tab === "login" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

const LoginForm = () => {
  return (
    <form className="space-y-4">
      {/* 이메일 */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          이메일
        </label>
        <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-100 px-3 py-3 text-sm">
          <Mail className="h-4 w-4 text-gray-400" />
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 비밀번호 */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          비밀번호
        </label>
        <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-100 px-3 py-3 text-sm">
          <Lock className="h-4 w-4 text-gray-400" />
          <input
            type="password"
            placeholder="●●●●●●"
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        className="mt-2 w-full bg-black py-3 text-sm font-semibold text-white hover:bg-gray-900 cursor-pointer"
      >
        로그인
      </button>
    </form>
  );
};

const SignupForm = () => {
  return (
    <form className="space-y-4">
      {/* 이름 */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          이름
        </label>
        <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-100 px-3 py-3 text-sm">
          <User className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="홍길동"
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 이메일 */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          이메일
        </label>
        <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-100 px-3 py-3 text-sm">
          <Mail className="h-4 w-4 text-gray-400" />
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 비밀번호 */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          비밀번호
        </label>
        <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-100 px-3 py-3 text-sm">
          <Lock className="h-4 w-4 text-gray-400" />
          <input
            type="password"
            placeholder="●●●●●●"
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
        <p className="mt-1 text-[11px] text-gray-400">최소 6자 이상</p>
      </div>

      {/* 비밀번호 확인 */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          비밀번호 확인
        </label>
        <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-100 px-3 py-3 text-sm">
          <Lock className="h-4 w-4 text-gray-400" />
          <input
            type="password"
            placeholder="●●●●●●"
            className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* 회원가입 버튼 */}
      <button
        type="submit"
        className="mt-2 w-full bg-black py-3 text-sm font-semibold text-white hover:bg-gray-900 cursor-pointer"
      >
        회원가입
      </button>
    </form>
  );
};

export default LoginMain;
