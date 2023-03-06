// TODO: make good looking 404 page or add serverside redirecting

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return null;
}
