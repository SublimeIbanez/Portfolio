import React from "react";
import { clamp, roundTo } from "../../lib/utils";

export enum Section {
  About = "About",
  Experience = "Experience",
  Projects = "Projects",
}

type SectionVisibility = {
  section: Section;
  isVisible: boolean;
  elementHeight: number;
  distanceFromViewportTop: number;
  distanceFromViewportBot: number;
  visiblePixels: number;
  elementVisiblePercent: number;
  viewportPercent: number;
};

export type SectionInfoMap = Partial<Record<Section, SectionVisibility | null>>;

type SectionElementMap = Partial<Record<Section, HTMLElement | null>>;

export const useSectionVisibility = (sections: readonly Section[]) => {
  const sectionRefs = React.useRef<SectionElementMap>({});
  const [sectionInfoMap, setSectionInfoMap] = React.useState<SectionInfoMap>(
    {},
  );

  const setSectionRef = React.useCallback(
    (section: Section) => (element: HTMLElement | null) => {
      sectionRefs.current[section] = element;
    },
    [],
  );

  const calculateSectionInfo = React.useCallback(
    (section: Section): SectionVisibility | null => {
      const element = sectionRefs.current[section];
      if (!element) {
        return null;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const visibleTop = clamp(rect.top, 0, viewportHeight);
      const visibleBot = clamp(rect.bottom, 0, viewportHeight);
      const visiblePixels = Math.max(0, visibleBot - visibleTop);

      const elementHeight = rect.height;
      const isVisible = visiblePixels > 0;

      const elementVisiblePercent =
        elementHeight > 0 ? roundTo((visiblePixels / elementHeight) * 100) : 0;
      const viewportPercent =
        viewportHeight > 0
          ? roundTo((visiblePixels / viewportHeight) * 100)
          : 0;

      return {
        section,
        isVisible,
        elementHeight,
        distanceFromViewportTop: roundTo(rect.top),
        distanceFromViewportBot: roundTo(rect.bottom),
        visiblePixels: roundTo(visiblePixels),
        elementVisiblePercent,
        viewportPercent,
      };
    },
    [],
  );

  const getVisibleSections = React.useCallback(
    (): SectionVisibility[] =>
      sections
        .map(calculateSectionInfo)
        .filter((item) => item !== null && item.isVisible)
        .sort(
          (a, b) => a!.distanceFromViewportTop - b!.distanceFromViewportTop,
        ) as SectionVisibility[],
    [calculateSectionInfo, sections],
  );

  React.useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ticking) {
        return;
      }
      ticking = true;

      window.requestAnimationFrame(() => {
        const visibleSections: SectionVisibility[] = getVisibleSections();
        const nextMap: SectionInfoMap = {};

        visibleSections.forEach((info) => {
          nextMap[info.section] = info;
        });
        setSectionInfoMap(nextMap);
        ticking = false;
      });
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [getVisibleSections]);

  return {
    setSectionRef,
    sectionInfoMap,
    getVisibleSections,
  };
};
