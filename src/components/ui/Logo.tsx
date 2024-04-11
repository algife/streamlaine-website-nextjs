/* eslint-disable @next/next/no-img-element */
export default function Logo() {
  return (
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Streamlaine Logo"
      />
      <div className="self-center whitespace-nowrap bg-gradient-to-b from-slate-100 to-slate-200 bg-clip-text text-2xl font-semibold text-transparent">
        Streaml
        <div className="inline bg-gradient-to-b from-sky-500 to-purple-500  bg-clip-text text-transparent ">
          ai
        </div>
        ne
      </div>
    </a>
  );
}
