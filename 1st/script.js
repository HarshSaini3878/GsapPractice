gsap.to(".box", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360, // Corrected syntax
  });
  
gsap.to(".box2", {
    x: 100,
    duration: 2,
    y:200,
    delay: 1,
    rotate: 360, // Corrected syntax
  });
  
  
  gsap.to(".text", {
    color:"red",
    duration: 2,
    fontSize:"30px",
    y:200,
    delay: 1,
    opacity:"1",
   stagger:1, // Corrected syntax
  });
  gsap.to(".circle", {
    backgroundColor: "red",
    duration: 2,
    y: 300,
    delay: 1,
    opacity: 1,
    yoyo: true, // Enables yoyo effect
    repeat: -1, // Set to -1 for infinite repetition, or specify a number for a fixed number of repeats
    stagger: 1,
  });
  
  