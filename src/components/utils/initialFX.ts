import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";

  const main = document.getElementsByTagName("main")[0];
  if (main) {
    main.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Simple animations (safe)
  gsap.fromTo(
    ".landing-info",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 0.2,
    }
  );
}