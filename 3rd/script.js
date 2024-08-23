// gsap.registerPlugin(ScrollTrigger);

// // Vertical scrolling for pages 1 and 2
// gsap.to("#container", {
//   scrollTrigger: {
//     trigger: "#container",
//     pin: true,
//     scrub: 1,
//     end: "+=200vh", // Adjust this based on the height of your vertical pages
//   }
// });

// // Horizontal scrolling for page 3
// gsap.to("#horizontal-content", {
//   x: () => -(document.querySelector("#horizontal-content").scrollWidth - window.innerWidth) + "px",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#page3",
//     start: "top top",
//     end: () => "+=" + document.querySelector("#horizontal-content").scrollWidth,
//     scrub: 1,
//     pin: true, // Pin the horizontal content in place during horizontal scroll
//   }
// });
