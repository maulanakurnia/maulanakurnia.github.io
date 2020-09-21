import { IconButton } from "@chakra-ui/core";
import { useState, useEffect, useMemo } from "react";
import { TiArrowUpThick } from "react-icons/ti";

export const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 350) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 350) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  });

  return (
    <IconButton
      aria-label="back-to-top"
      icon={<TiArrowUpThick />}
      position="fixed"
      bottom="20px"
      right="10px"
      borderRadius="50%"
      onClick={scrollTop}
      display={showScroll ? "flex" : "none"}
    />
  );
};
