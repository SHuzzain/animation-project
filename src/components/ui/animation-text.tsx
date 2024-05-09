import { Variants, motion } from "framer-motion";
type Props = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

const defualtAnimtion: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AnimationText = ({ text, el: Wrapper = "p", className }: Props) => {
  const Element = Wrapper as keyof JSX.IntrinsicElements;
  return (
    <Element className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.01 }}
        aria-hidden
      >
        {text.split("").map((char, index) => (
          <motion.span variants={defualtAnimtion} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Element>
  );
};

export default AnimationText;
