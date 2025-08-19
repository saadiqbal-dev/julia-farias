import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/button";

interface MobileDropdownProps {
  sections: Array<{
    label: string;
    id: string;
  }>;
}

export const MobileDropdown = React.memo(
  ({ sections }: MobileDropdownProps) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = React.useCallback(
      () => setIsMenuOpen((prev) => !prev),
      []
    );
    const closeMenu = React.useCallback(() => setIsMenuOpen(false), []);

    const handleSectionClick = React.useCallback(
      (sectionId: string) => {
        closeMenu();
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      },
      [closeMenu]
    );

    return (
      <>
        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="bg-secondary-light-4 rounded-full hover:bg-secondary-light-4 active:bg-secondary-light-4 text-[#f8f1e4] size-[44px] p-2.5 lg:hidden flex items-center justify-center relative z-50"
        >
          {isMenuOpen ? (
            <svg
              key="close"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              key="menu"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <div className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </div>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop - inspired by dialog */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed inset-0 z-40 bg-[rgba(244,233,224,0.72)] backdrop-blur-xs lg:hidden"
                onClick={closeMenu}
              />

              {/* Header replica - properly centered */}
              <header className="flex z-[60] max-w-[min(1100px,calc(100vw-32px))] h-[60px] w-full fixed top-[21px] left-1/2 -translate-x-1/2 py-2 px-6 justify-between items-center rounded-full bg-primary-light-1-b lg:hidden">
                <a
                  href="/"
                  className="text-primary-dark-2 font-poppins text-xl font-light tracking-[-0.5px]"
                  onClick={closeMenu}
                >
                  Júlia Farias
                </a>

                <button
                  onClick={closeMenu}
                  className="bg-secondary-light-4 rounded-full text-[#f8f1e4] size-[44px] p-2.5 flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </header>

              {/* Mobile Menu - floating island */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -8,
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="fixed top-24 left-4 right-4 z-50 bg-primary-light-1-b rounded-3xl shadow-2xl border border-primary-light-2/30 overflow-hidden lg:hidden"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(139, 92, 67, 0.15), 0 0 0 1px rgba(248, 241, 228, 0.5)",
                }}
              >
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.03,
                        delayChildren: 0.05,
                      },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.02,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  className="p-6"
                >
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                        closed: {
                          opacity: 0,
                          y: -8,
                          scale: 0.98,
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        backgroundColor: "rgba(248, 241, 228, 0.6)",
                        transition: { duration: 0.15 },
                      }}
                      whileTap={{
                        backgroundColor: "rgba(240, 229, 216, 0.8)",
                      }}
                      className="w-full flex items-center justify-center py-4 text-primary-dark-2 font-poppins text-lg font-normal tracking-[-0.2px] rounded-2xl transition-colors hover:text-primary-dark-4"
                    >
                      {section.label}
                    </motion.button>
                  ))}

                  {/* Contact Button - No separator */}
                  <motion.div
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      },
                      closed: {
                        opacity: 0,
                        y: -8,
                        scale: 0.98,
                      },
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="pt-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Button
                        variant="outline"
                        className="max-w-full w-full"
                        onClick={closeMenu}
                      >
                        ENTRAR EM CONTATO
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }
);

MobileDropdown.displayName = "MobileDropdown";
