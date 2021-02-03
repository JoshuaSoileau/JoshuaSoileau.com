import React from "react";
import { useSpring, animated, config } from "react-spring";

const FadeIn = ({ children, delay = 0 }) => {
  const styles = useSpring({
    config: config.molasses,
    delay,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default FadeIn;
