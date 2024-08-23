gsap.registerPlugin(ScrollTrigger);

gsap.from("#box1", {
  rotate: 360,
  opacity: 0,
  scale: 0,
  delay:1,
  scrollTrigger: {
    trigger: "#box1",
    start: "top 80%",  // Animation starts when the top of #box1 hits 80% of the viewport height
    end: "top 30%",    // Animation ends when the top of #box1 hits 30% of the viewport height
    scrub: 1,          // Smoothly scrubs the animation based on scroll position
  }
});

gsap.from("#box2", {
  rotate: 360,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: "#box2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  }
});

gsap.from("#box3", {
  rotate: 360,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: "#box3",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  }
});
