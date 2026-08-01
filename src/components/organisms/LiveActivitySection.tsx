'use client';

import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Card from '../molecules/Card';
import Badge from '../atoms/Badge';

interface Mission {
  id: string;
  title: string;
  description?: string;
  type?: string;
  current_day: number;
  target_days: number | null;
  target_minutes: number;
  minutes_done: number;
  progress_percentage?: number;
  is_completed?: boolean;
}

export default function LiveActivitySection() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    async function fetchLiveActivity() {
      try {
        const res = await fetch('/api/live-activity');
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setMissions(json.data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveActivity();
  }, []);

  return (
    <div id="activity" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 scroll-mt-20">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
          My <span className="text-orange-600">Live Activity</span>
        </h2>
        <p className="text-gray-800 font-bold text-base sm:text-lg max-w-2xl mx-auto">
          Live Data from my custom app (
          <a
            href="https://run-mem.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 underline font-extrabold transition-colors"
          >
            mem.exe
          </a>
          )
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse py-6">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </Card>
          ))}
        </div>
      ) : error ? (
        <Card className="text-center py-8">
          <p className="text-gray-700 font-extrabold text-base">
            Unable to load live activity data at the moment.
          </p>
        </Card>
      ) : missions.length === 0 ? (
        <Card className="text-center py-8">
          <p className="text-gray-700 font-extrabold text-base">
            No active missions today.
          </p>
        </Card>
      ) : (
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {missions.map((mission) => (
                <div
                  key={mission.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0"
                >
                  <Card className="flex flex-col justify-between gap-3 h-full p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-black leading-snug line-clamp-2">
                        {mission.title}
                      </h3>
                      <Badge variant="primary" className="!px-2.5 !py-0.5 !text-xs shrink-0">
                        {mission.target_days
                          ? `Day ${mission.current_day}/${mission.target_days}`
                          : `Day ${mission.current_day}`}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-black/15 text-xs sm:text-sm font-extrabold">
                      <span className="text-gray-700">Progress</span>
                      <Badge variant="secondary" className="!px-2.5 !py-0.5 !text-xs shrink-0">
                        {mission.minutes_done} / {mission.target_minutes} min
                      </Badge>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 w-10 h-10 flex items-center justify-center bg-[repeating-linear-gradient(-45deg,#f97316,#f97316_5px,#fb923c_5px,#fb923c_10px)] text-white border-2 border-black rounded-full outline outline-1 outline-black/35 outline-offset-[-3px] select-none hover:opacity-90 active:scale-95 z-20 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 w-10 h-10 flex items-center justify-center bg-[repeating-linear-gradient(-45deg,#f97316,#f97316_5px,#fb923c_5px,#fb923c_10px)] text-white border-2 border-black rounded-full outline outline-1 outline-black/35 outline-offset-[-3px] select-none hover:opacity-90 active:scale-95 z-20 cursor-pointer"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
