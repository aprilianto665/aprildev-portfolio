export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-4 sm:mx-8 lg:mx-auto mb-12 text-center">
      <div className="bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_6px,#fcfbf9_6px,#fcfbf9_12px)] border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] outline outline-1 outline-black/30 outline-offset-[-4px] p-4 sm:p-6">
        <p className="text-sm sm:text-base font-extrabold text-black">
          © {currentYear} Muhammad Aprilianto. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
