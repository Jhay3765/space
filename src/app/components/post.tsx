import { useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";
type Props = {
  children: React.ReactNode;
};
export const Post = ({ children }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <div
      ref={ref}
      className={classNames(
        " text-3xl max-w-2xl flex flex-col transition-colors",
        isInView ? "text-white" : "text-transparent"
      )}
    >
      {children}
    </div>
  );
};
