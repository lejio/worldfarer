import LogoutButton from "./LogoutButton";

export default function MainNavbar() {
  return (
    <nav className="w-full flex flex-row justify-between items-center font-zxproto p-5">
        <h2 className="hover:cursor-default transition-color duration-300 font-bold hover:text-green-800 dark:hover:text-green-600 text-[#888888] dark:text-gray-400">World Farer</h2>
        
        <LogoutButton />
    </nav>
  );
}
