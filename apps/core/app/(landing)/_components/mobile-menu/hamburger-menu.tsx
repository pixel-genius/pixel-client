"use client";

import {
  IconCrown,
  IconFileDescription,
  IconFileText,
  IconHelpCircle,
  IconMenuDeep,
  IconShieldLock,
  IconUserPlus,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

import Link from "next/link";

import { Typography } from "@repo/ui/components/atoms/typography";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="z-50 fixed bg-primary p-4 rounded-full top-4 right-4 lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IconX color="white" stroke={2} />
        ) : (
          <IconMenuDeep color="white" stroke={2} />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-full w-[250px] bg-card shadow-lg z-40"
            >
              <div className="p-6 pt-20">
                <nav>
                  <div>
                    <Typography
                      variant="heading/xs"
                      weight="bold"
                      className="mb-3"
                    >
                      Platform
                    </Typography>
                    <ul className="space-y-4 mb-6">
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-accent/20 focus:bg-accent/30 active:bg-accent/40 transition w-full"
                          aria-label="all-access pass"
                        >
                          <IconCrown size={24} className="text-primary" />
                          <Typography
                            variant="label/xs"
                            className="hover:underline"
                          >
                            All-Access Pass
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-accent/20 focus:bg-accent/30 active:bg-accent/40 transition w-full"
                          aria-label="become an author"
                        >
                          <IconUserPlus size={24} className="text-primary" />
                          <Typography
                            variant="label/xs"
                            className="hover:underline"
                          >
                            Become an author
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-accent/20 focus:bg-accent/30 active:bg-accent/40 transition w-full"
                          aria-label="terms & licensing"
                        >
                          <IconFileText size={24} className="text-primary" />
                          <Typography
                            variant="label/xs"
                            className="hover:underline"
                          >
                            Terms & Licensing
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-accent/20 focus:bg-accent/30 active:bg-accent/40 transition w-full"
                          aria-label="help center"
                        >
                          <IconHelpCircle size={24} className="text-primary" />
                          <Typography
                            variant="label/xs"
                            className="hover:underline"
                          >
                            Help center
                          </Typography>
                        </Link>
                      </li>
                    </ul>
                    <hr className="my-4 border-t border-muted" />
                    <Typography
                      variant="heading/xs"
                      weight="bold"
                      className="mb-3"
                    >
                      Legal
                    </Typography>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-accent/20 focus:bg-accent/30 active:bg-accent/40 transition w-full"
                          aria-label="privacy policy"
                        >
                          <IconShieldLock size={24} className="text-primary" />
                          <Typography
                            variant="label/xs"
                            className="hover:underline"
                          >
                            Privacy policy
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-accent/20 focus:bg-accent/30 active:bg-accent/40 transition w-full"
                          aria-label="terms & conditions"
                        >
                          <IconFileDescription
                            size={24}
                            className="text-primary"
                          />
                          <Typography
                            variant="label/xs"
                            className="hover:underline"
                          >
                            Terms & Conditions
                          </Typography>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
