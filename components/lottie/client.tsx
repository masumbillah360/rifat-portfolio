"use client";
import React, { useRef, useState, useEffect } from "react";
import { LottiePlayer } from "lottie-web";

type LottieProps = {
  animationPath: string;
};

const LottieClient = ({ animationPath }: LottieProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
    setMount(true);
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: animationPath,
      });

      return () => animation.destroy();
    }
  }, [lottie, animationPath]);

  if (!mount) {
    return null;
  }
  return <div ref={ref}></div>;
};

export default LottieClient;
