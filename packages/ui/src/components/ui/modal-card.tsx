import { cn } from "@repo/ui/lib/utils";
import { forwardRef, ReactNode, useState } from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";

export interface ModalCardProps extends MotionProps {
  className?: string;
  id: string;
  modal: ReactNode;
  children: ReactNode;
  extpand?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const ModalCard = forwardRef<HTMLDivElement, ModalCardProps>(
  (
    { className, id, children, extpand, onClose, onOpen, modal, ...props },
    ref,
  ) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleClose = (id: string) => {
      setSelectedId(null);
      onClose?.();
    };

    const handleOpen = (id: string) => {
      setSelectedId(id);
      onOpen?.();
    };

    return (
      <>
        <motion.div
          ref={ref}
          onClick={() => handleOpen(id)}
          layoutId={id}
          className={cn(className)}
          {...props}
        >
          {children}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className={
                "fixed inset-0 z-[100] backdrop-blur bg-background/30 flex justify-center items-center"
              }
              initial={{
                backdropFilter: "blur(0px)",
                background: "transparent",
              }}
              animate={{
                backdropFilter: "blur(4px)",
                background: "hsl(var(--background) / 0.4)",
              }}
              transition={{ duration: 0.5 }}
              onClick={() => handleClose(id)}
            >
              <motion.div layoutId={selectedId} className={cn(className)}>
                {modal}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  },
);

ModalCard.displayName = "ModalCard";

export { ModalCard };
