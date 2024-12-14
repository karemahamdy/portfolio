// src/_components/magicui/icon-cloud.tsx
'use client';

import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon, SimpleIcon } from "react-icon-cloud";
import { useEffect, useState } from "react";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function IconCloud({ iconSlugs }: { iconSlugs: string[] }) {
  const [icons, setIcons] = useState<SimpleIcon[]>([]);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const { simpleIcons } = await fetchSimpleIcons({ slugs: iconSlugs });
        setIcons(Object.values(simpleIcons));
      } catch (error) {
        console.error("Failed to fetch icons:", error);
      }
    };

    loadIcons();
  }, []); // Empty dependency array to load only once

  // Simplified icon rendering without theme dependency
  const renderedIcons = icons.map((icon) =>
    renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: any) => e.preventDefault(),
      },
    })
  );

  // Prevent server-side rendering
  if (typeof window === 'undefined' || renderedIcons.length === 0) {
    return null;
  }

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}

