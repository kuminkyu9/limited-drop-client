const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-16 border-t border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="font-black text-xl mb-4 tracking-tighter">LIMITED DROP</div>
          <p className="text-xs text-gray-500 font-light leading-relaxed">한정판 래플 & 선착순 커머스 플랫폼</p>
        </div>
        <div className="flex flex-col space-y-2.5 text-[13px] text-gray-400">
          <span className="text-white font-bold mb-1 text-sm uppercase">Customer Service</span>
          <a href="#" className="hover:text-white transition">고객센터</a>
          <a href="#" className="hover:text-white transition">이용약관</a>
          <a href="#" className="hover:text-white transition">개인정보처리방침</a>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 tracking-widest">
        © 2026 LIMITED DROP. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
