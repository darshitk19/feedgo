import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isTransitioning } = usePageTransition();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 relative">
        {children}

        {/* Blur overlay — plays BEFORE route changes */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              key="page-transition-overlay"
              className="fixed inset-0 z-[100] pointer-events-none"
              style={{ backgroundColor: "hsl(var(--background) / 0.3)" }}
              initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
              animate={{
                backdropFilter: "blur(16px)",
                opacity: 1,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              exit={{
                backdropFilter: "blur(0px)",
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
            />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
