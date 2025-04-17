import { useEffect, useRef, RefObject } from 'react';
// Import our anime.js wrapper
import anime, { AnimeParams } from '@/lib/external/anime';

/**
 * Hook for using anime.js with React components
 * @param params The animation parameters
 * @param dependencies Dependencies array for the animation (similar to useEffect)
 * @returns A ref to attach to the target element
 */
export function useAnime<T extends HTMLElement = HTMLDivElement>(
  params: AnimeParams,
  dependencies: any[] = []
): RefObject<T> {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    // If targets is not specified, use the referenced element
    const animeParams: AnimeParams = {
      ...params,
      targets: params.targets || targetRef.current,
    };

    const animation = anime(animeParams);

    return () => {
      // Cleanup: pause the animation when component unmounts
      animation.pause();
    };
  }, dependencies);

  return targetRef;
}

/**
 * Creates a staggered animation for child elements
 * @param params The animation parameters
 * @param dependencies Dependencies array for the animation
 * @returns A ref to attach to the parent element
 */
export function useAnimeStagger<T extends HTMLElement = HTMLDivElement>(
  params: AnimeParams & { childSelector?: string },
  dependencies: any[] = []
): RefObject<T> {
  const targetRef = useRef<T>(null);
  const { childSelector = '> *', ...animeParams } = params;

  useEffect(() => {
    if (!targetRef.current) return;

    const targets = targetRef.current.querySelectorAll(childSelector);
    
    const animation = anime({
      ...animeParams,
      targets,
    });

    return () => {
      animation.pause();
    };
  }, dependencies);

  return targetRef;
}

/**
 * Creates a timeline of animations
 * @param animations Array of animation objects
 * @param timelineParams Timeline parameters
 * @param dependencies Dependencies array for the animation
 */
export function useAnimeTimeline(
  animations: (AnimeParams & { offset?: string | number })[],
  timelineParams: any = {},
  dependencies: any[] = []
): void {
  useEffect(() => {
    const timeline = anime.timeline(timelineParams);
    
    animations.forEach(animation => {
      timeline.add(animation);
    });

    return () => {
      timeline.pause();
    };
  }, dependencies);
}

export default useAnime;