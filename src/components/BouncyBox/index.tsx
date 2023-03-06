import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";
import { animated, useTransition } from "react-spring";
import { easings } from "@react-spring/web";
import { useIsomorphicLayoutEffect } from "@/hooks";

type AnimKeys = {
  y: number;
  opacity?: number;
};

type Props = PropsWithChildren<{
  delay?: number;
  duration?: number;
  from?: AnimKeys;
  enter?: AnimKeys;
  leave?: AnimKeys;
}>;

export function BouncyBox({
  delay = 0,
  duration = 800,
  from = { y: 50, opacity: 0 },
  enter = { y: 0, opacity: 1 },
  leave = { y: -100, opacity: 0 },
  children,
}: Props) {
  const router = useRouter();
  const { pathname } = useRouter();

  const [bodyTransitions, bodyTransitionApi] = useTransition(
    [children],
    () => ({
      from,
      enter,
      leave,
      exitBeforeEnter: true,
      delay,
      config: {
        easing: easings.easeInOutCubic,
        duration,
      },
    })
  );

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const isNavigatedToSamePage = pathname === url;

      if (isNavigatedToSamePage) return;

      bodyTransitionApi.start({
        to: {
          y: -20,
          opacity: 0,
        },
        delay,
        config: {
          easing: easings.easeInOutCubic,
          duration: 300,
        },
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    bodyTransitionApi.start();
  }, []);

  return bodyTransitions((styles, children) => (
    <animated.div style={{ ...styles, willChange: "transform" }}>
      {children}
    </animated.div>
  ));
}
