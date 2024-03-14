const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 200, y: 10 },
        { x: 350, y: -15 }
    ]
};

const tl = gsap.timeline(); // Using gsap.timeline() instead of TimelineLite

tl.to(".Paper-Plan", {
    duration: 1, // Duration in seconds
    bezier: flightPath,
    ease: "power1.inOut" // Using string-based ease instead of the EasePack
});
