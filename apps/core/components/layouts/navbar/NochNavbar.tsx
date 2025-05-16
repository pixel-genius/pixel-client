import Instagram from "@repo/icons/instagram";
import PixelIcon from "@repo/icons/pxiel";
import Twitter from "@repo/icons/twitter";
import YouTubeIcon from "@repo/icons/youtube";

import Link from "next/link";



function NochNavbar() {
  return (
   
      <nav className="dark:bg-gray-900 bg-slate-200 px-5 py-8 z-50 h-11 rounded-xl fixed top-12 -left-1/2 -right-1/2  w-[962px] mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
      <PixelIcon size={34} color="currentColor" />
    
    <a href="#" className="dark:text-white text-black text-sm">Browse</a>
    <a href="#" className="dark:text-white text-black text-sm">All-Access</a>
    <a href="#" className="dark:text-white text-black text-sm">Become an author</a>
  
  </div>
  <div className="flex items-center space-x-4">
    <a href="#" className="dark:text-white text-black text-sm">Sign up</a>
    <a href="#" className="dark:text-white text-black text-sm">Log in</a>
  </div>
      </nav>

  );
}

export default NochNavbar;
