import { useCallback, useEffect, useRef, useState } from "react";

import { Observable } from "./observable";

export function useObservable(observable: Observable) {
  const versionRef = useRef(0);
  useEffect(() => {
    versionRef.current++;
  }, [observable]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setVersion] = useState("");

  useEffect(() => {
    const s = observable.subscribe((version) => {
      setVersion(`${versionRef.current}_${version}`);
    });

    return () => {
      observable.unSubscribe(s);
    };
  }, [observable]);
}

export function useMethod() {
  useCallback(() => {}, []);
}
