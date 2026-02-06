gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Scroll Suave, ScrollSmoother
ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

function animarPagina() {
  // hero

  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
  });

  // animações cards

  gsap.from(".card", {
    opacity: 0,
    filter: "blur(8px)",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".cards",
      start: "0% 80%",
      scrub: true,
      end: "100% 70%",
    },
  });

  gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(8px)",
    stagger: 0.03,
    scrollTrigger: {
      trigger: ".secaoObrigado ul",
      start: "0% 80%",
      end: "100% 50%",
      scrub: 2,
    },
  });

  // animação footer

  gsap.from("footer", {
    y: "-20%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      invalidateOnRefresh: true,
      end: "100% 100%",
    },
  });

  // letras animadas
  // todos os elementes com a classe .textoSplit
  const grupoTextoSplit = document.querySelectorAll(".textoSplit");

  //animar elemento desse grupamento usando forEach
  grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
      type: "lines, words, chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textoUnicoSplit,
      },
    });
  });
}

//preloader

const tl = gsap.timeline({
  onComplete() {
    gsap.to("#preloader", {
      opacity: 0,
      onComplete() {
        animarPagina()
        gsap.to("#preloader", {
          opacity: 0,
          display: "none",
        });
      },
    });
  },
});

tl.to("#preloader path", {
  duration: 1.5,
  strokeDashoffset: 0,
});

tl.to("#preloader path", {
  fill: "rgb(168, 19, 19)",
  duration: 1.5,
  strokeDashoffset: 0,
});
