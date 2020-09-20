import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";

const wavingSequence = [0.0, 18.0, -8.0, 18.0, -4.0, 10.0, 0, 0];

const animation: MotionProps = {
  transition: { delay: 0.8, duration: 1, loop: Infinity, type: "tween" },
  animate: { rotate: wavingSequence },
};

const AnimationWave = styled(motion.span)`
  display: inline-block;
  transform-origin: 70% 70%;
`;

export const WavingHand: React.FC = () => (
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  <AnimationWave {...animation} role="img" aria-labelledby="halo">
    👋
  </AnimationWave>
);

WavingHand.displayName = "WavingHand";
