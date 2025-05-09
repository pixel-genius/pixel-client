import Xicon from "@repo/icons/x";
import { BaseInput } from "@repo/ui/components";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useRef, useImperativeHandle } from "react";

export interface SearchBarProps {
  onClose: () => void;
}

export interface RefSearchHandle {
  focus: () => void;
}

const Searchbar = forwardRef<RefSearchHandle, SearchBarProps>((props, ref) => {
  const { onClose } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle<RefSearchHandle, RefSearchHandle>(ref, () => {
    return {
      focus() {
        inputRef.current?.focus();
      },
    };
  }, []);

  return (
    <motion.div
      className="flex items-center w-full"
      key="search"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Search Input */}
      <div className="relative w-full">
        <BaseInput
          id="input-search-product"
          placeholder="Type anything to search..."
          className="w-full text-white border-none bg-transparent outline-none"
        />
      </div>

      <Xicon color="white" onClick={() => onClose()} className="ml-4 text-sm" />
    </motion.div>
  );
});

Searchbar.displayName = "SearchBar";

export default Searchbar;
