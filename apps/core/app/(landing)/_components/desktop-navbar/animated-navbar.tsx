import Link from "next/link";

const AnimatedNavBar = () => {
  return (
  
     
      <div className="flex items-center gap-2 pr-4">
        <Link href="/" className="text-sm font-normal">
          Browse
        </Link>
        <Link href="/" className="text-sm font-normal">
          All-Access
        </Link>
        <Link href="/" className="text-base font-medium text-primary-500">
          Become an author
        </Link>
      </div>
   
  );
};

export default AnimatedNavBar;
