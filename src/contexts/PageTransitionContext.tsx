import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface PageTransitionContextType {
  isTransitioning: boolean;
  navigateWithTransition: (to: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  navigateWithTransition: () => {},
});

export const usePageTransition = () => useContext(PageTransitionContext);

const TRANSITION_DURATION = 210; // ms — fast blur transition

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = useCallback(
    (to: string) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      // Wait for the overlay animation to fully play, THEN navigate
      setTimeout(() => {
        navigate(to);
        // Small delay to let the new page mount before removing overlay
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION);
    },
    [navigate, isTransitioning]
  );

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, navigateWithTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
};
