import React, { ReactNode, useEffect, useState } from 'react';

export function UseLayoutEffectParent(props: {
  children: ReactNode;
  placeholder?: ReactNode;
}) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return props.placeholder ? <>{props.placeholder}</> : null;
  }

  return <>{props.children}</>;
}
