import React from "react";
import { useSpring, animated, config } from "react-spring";

const Rotate = ({ children, delay = 0 }) => {
  const offset = Math.random() * 100;
  const styles = useSpring({
    loop: true,
    // delay,
    config: {
      duration: 3500 + offset * 100,
      // mass: 100,
      // tension: 80,
      // friction: 280,
    },
    from: {
      rotateZ: 0 + offset,
    },
    to: {
      rotateZ: 360 + offset,
    },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default Rotate;
