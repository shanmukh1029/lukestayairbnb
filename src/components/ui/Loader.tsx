import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Loader({ onComplete }: { onComplete: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftMaskRef = useRef<HTMLDivElement>(null);
    const rightMaskRef = useRef<HTMLDivElement>(null);
    const textLeftRef = useRef<HTMLDivElement>(null);
    const textRightRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power4.inOut" },
                onComplete: () => {
                    document.body.style.overflow = 'auto'; // Restore scrolling
                    onComplete(); // Notify parent
                }
            });

            // Initial setup
            gsap.set(leftMaskRef.current, { width: "50%" });
            gsap.set(rightMaskRef.current, { width: "50%" });

            const progressObj = { value: 0 };

            // Number counter animation
            tl.to(progressObj, {
                value: 100,
                duration: 3,
                ease: "power2.inOut",
                onUpdate: () => {
                    setProgress(Math.round(progressObj.value));
                }
            }, 0)
                // Text fade in
                .to([textLeftRef.current, textRightRef.current, counterRef.current], {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out"
                }, 0)
                // Line drop
                .to(lineRef.current, {
                    scaleY: 1,
                    duration: 1.5,
                    ease: "expo.inOut"
                }, 1.5)
                // Reveal the background
                .to([leftMaskRef.current, rightMaskRef.current], {
                    width: 0,
                    duration: 1.8,
                    ease: "expo.inOut",
                    stagger: 0
                }, 2.5)
                // Text fades out as panels open
                .to([textLeftRef.current, textRightRef.current, counterRef.current, lineRef.current], {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.in"
                }, 2.5)
                // Hide loader container
                .to(containerRef.current, {
                    display: "none",
                    duration: 0
                });

        }, containerRef);

        return () => {
            document.body.style.overflow = 'auto';
            ctx.revert();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden flex items-center justify-center bg-transparent"
        >
            <div
                ref={leftMaskRef}
                className="absolute top-0 left-0 h-full bg-charcoal-900 border-r border-charcoal-800 z-[100]"
            />
            <div
                ref={rightMaskRef}
                className="absolute top-0 right-0 h-full bg-charcoal-900 border-l border-charcoal-800 z-[100]"
            />

            {/* Central Line */}
            <div
                ref={lineRef}
                className="absolute top-0 left-1/2 w-[1px] h-full bg-ivory-50/20 z-[102] origin-top scale-y-0 -translate-x-1/2"
            />

            {/* Brand Text Left */}
            <div
                ref={textLeftRef}
                className="absolute z-[103] top-[30%] left-[8%] md:left-[10%] opacity-0 translate-y-10"
            >
                <div className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-ivory-50/60 font-semibold font-sans">
                    Edition 004
                </div>
            </div>

            {/* Brand Text Right */}
            <div
                ref={textRightRef}
                className="absolute z-[103] top-[55%] right-[8%] md:right-[10%] opacity-0 translate-y-10"
            >
                <div className="text-3xl md:text-5xl font-sans font-black tracking-[-0.02em] text-ivory-50 uppercase">
                    LuxeStay
                </div>
            </div>

            {/* Percentage Counter Bottom Left */}
            <div
                ref={counterRef}
                className="absolute z-[103] bottom-0 left-0 w-[48%] overflow-hidden opacity-0 translate-y-10 flex items-end justify-start"
            >
                <div className="text-[15vw] sm:text-[15vw] md:text-[12rem] lg:text-[16rem] font-sans font-black tracking-[-0.05em] text-ivory-50 leading-[0.75] m-0 p-0 translate-y-[12%] -translate-x-[2%] whitespace-nowrap">
                    {progress}%
                </div>
            </div>
        </div>
    );
}
