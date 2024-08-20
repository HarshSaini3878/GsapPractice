// Create a new timeline
const tl = gsap.timeline();

// Add the first animation to the timeline
tl.to(".box", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360 // Corrected syntax
});

// Add the second animation to the timeline
tl.to(".box2", {
  x: 100,
  duration: 2,
  y: 200,
  rotate: 360, // Corrected syntax
}, "-=1"); // Overlap with the previous animation by 1 second

// Add the third animation to the timeline
tl.to(".text", {
  color: "red",
  duration: 2,
  fontSize: "30px",
  y: 200,
  opacity: 1,
  stagger: 1 // Corrected syntax
}, "+=0.5"); // Start after a 0.5 second delay from the previous animation

// Add the fourth animation to the timeline
tl.to(".circle", {
  backgroundColor: "red",
  duration: 2,
  y: 300,
  opacity: 1,
  yoyo: true, // Enables yoyo effect
  repeat: 5, // Set to -1 for infinite repetition, or specify a number for a fixed number of repeats
  stagger: 1
}, "-=1.5"); // Overlap with the previous animation by 1.5 seconds
