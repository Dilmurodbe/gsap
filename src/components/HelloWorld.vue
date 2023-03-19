<template>
    <div class="asos">
  <section ref="blue"  class="blue-div fact panel">
    <div class="container-fluid">
      <div class="row">
        <div style="margin-top: -1rem; z-index: 999"  class="col-2 p-5">
          <img class="w-100" src="../assets/img/logoCircle.webp" alt="" />
        </div>
        <div class="col-12">
          <h6  class="basic-tag text">
            Everything 
          </h6>
          <h6  class="basic-tag text">
            you want 
          </h6>
          <h6  class="basic-tag text">
            in an Agency.
          </h6>
        </div>
      </div>
    </div>
  </section>
  <section  ref="orange"    class="orange-div panel">
    <div class="container-fluid">
      <div class="row">
        <div style="margin-top: -1rem" class="col-2 p-5"></div>
        <div ref="text" class="col-12 mt-5 text">
          <h6 style="color: rgb(0, 32, 74)" class="basic-tag mt-2 ">
            Except 
          </h6>
          <h6 style="color: rgb(0, 32, 74)" class="basic-tag mt-2">
            the Agency.
          </h6>
        </div>
      </div>
    </div>
  </section>
</div>


  <header>
    <div style="margin-top: 100px" class="container position-relative">
      <div class="row d-flex justify-content-end">
        <div style="z-index: 2;" class="col-6">
          <h4 class="tag-title">
            We’ve had a huge hand in building big brands.
          </h4>
          <h4 class="tag-title-p">
            How many ad agencies have positioned and propelled two multi-billion
            dollar businesses? We can name one: Big Honkin’ Ideas. The first
            agency for the nation’s first Internet bank. And the only agency for
            the creators of the industry’s first flat-fee Variable Annuity and
            Commission-Free Annuities. We’ve also been successful at un-selling
            brands. Remember that spot for the Partnership for a Drug-Free
            America? Any Questions?
          </h4>
          <p class="view">View Our Work ></p>
        </div>
      </div>
   

    <div class="position-img">
      <img ref="pan" class="w-75" src="../assets/img/pan.jpg" alt="" />
     
    </div>
    <!-- <div ref="eggcenterwhite" class="eggcenterwhite"></div> -->
  <div ref="eggcenter" class="eggcenter"></div>
<div ref="egg" class="egg">
  </div>
</div>




  </header>

  <div class="section-middle position-relative">
    <img
      ref="birds"
      class="birds-position"
      src="../assets/img/birds.webp"
      alt=""
    />
    <div ref="text" class="position-relative">
      <h4
        style="
          font-size: 1.11rem;
          padding-left: 4%;
          letter-spacing: 4px;
          margin-bottom: 3rem;
        "
        class="tag-title"
      >
        STRATEGIC CREATIVE
      </h4>
      <h4 style="font-size: 6rem" class="tag-title">Airtight before flight.</h4>
      <h4 class="tag-title-p">
        At BHI, we get smart before we get going. We don’t set foot in the
        creative kitchen until we’ve done deep dives — and landed on an airtight
        strategic direction. That’s where big ideas start. That’s where big
        creative comes from. This explains why BHI has excelled across so many
        different fields for so long. Financial. Higher Ed. Automotive.
        Healthcare. Hospitality. And more.
      </h4>
      <p class="view">Learn More ></p>
    </div>

    <div ref="gose" class="position2-img">
      <img class="w-100" src="../assets/img/goose-alt.webp" alt="" />
    </div>
  </div>

  <div class="section-buttom">
    <h2 style="text-align: center">Clients.</h2>
    <p style="text-align: center; font-size: 20px">
      View our full client list
      <span style="font-size: 20px" class="view">here</span>
    </p>
    <div class="container">
      <div class="row">
        <div class="col-4 border-left">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div class="col-4 border-left">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div class="col-4 border-right">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div class="col-4 border-left">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div class="col-4 border-left">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div class="col-4 border-right">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div style="border-bottom: none" class="col-4 border-left">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div style="border-bottom: none" class="col-4 border-left">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
        <div style="border-bottom: none" class="col-4 border-right">
          <img class="w-100" src="../assets/img/dpl-logo.webp" alt="" />
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="footer-div">
      <p class="tag-title" style="color: #fff">Let’s get to work.</p>
      <button class="footer-botton">Start a project</button>
    </div>
    <div class="footer-div2">
      <h6 style="color: #fff" class="tag-title-p">
        © 2023 Big Honkin’ Ideas. All Rights Reserved.
      </h6>
    </div>
  </footer>
  
</template>
<script>
export default {};
</script>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const text = ref(null);
const birds = ref(null);
const pan = ref(null);
const gose = ref(null);
const orange = ref(null);
const blue = ref(null);
const egg = ref(null);
const eggcenter = ref(null);
const eggcenterwhite = ref(null);
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(birds.value, {
    x: -290,
    opacity: 0,
    scrollTrigger: {
      trigger: pan.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
  gsap.to(birds.value, {
    duration: 5,
    x: 90,
    opacity: 1,
    scrollTrigger: {
      trigger: birds.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
  gsap.from(pan.value, {
    duration: 60,
    x: 1000,
    scrollTrigger: {
      trigger: pan.value,
      toggleActions: "restart  pause reverse pause",
    },
  });

   gsap.to(pan.value, {
    duration: 60,
    x: 200,
    opacity: 3,
    scrollTrigger: {
      trigger: pan.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
  gsap.from(egg.value, {
    duration: 60,
    x: 920,
    opacity: 3,
    scrollTrigger: {
      trigger: pan.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
   gsap.to(egg.value, {
    duration: 60,
    x: 100,
    opacity: 3,
    background: "#fff"  ,
    scrollTrigger: {
      trigger: pan.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
  gsap.from(eggcenterwhite.value, {
    duration: 60,
    x: 800,

    opacity: 3,
    scrollTrigger: {
      trigger: pan.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
   gsap.to(eggcenterwhite.value, {
    duration: 60,
    x: 100,
    opacity: 3,
    background: "#"  ,
    scrollTrigger: {
      trigger: pan.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
  gsap.from(eggcenter.value, {
    duration: 60,
    x: 980,
    background: "rgb(245,180,67)",
    opacity: 3,
    scrollTrigger: {
      trigger: pan.value,
      // toggleActions: "restart  pause reverse pause",
    },
  });
   gsap.to(eggcenter.value, {
    duration: 60,
    x: 150,
    opacity: 3,
    background: "rgb(223,115,14)"  ,
    scrollTrigger: {
      trigger: pan.value,
      toggleActions: "restart  pause reverse pause",
    },
  });
  gsap.from(gose.value, {
    x: 1000,
  });
  gsap.to(gose.value, {
    duration: 2,
    x:0,
    opacity: 1,
    scrollTrigger: {
      trigger: gose.value,
      toggleActions: "restart  pause reverse pause",
    },
  });

  gsap.to(".text" , {
    opacity: 1,
    scrollTrigger: {
      trigger:".text",
      toggleActions: "restart  pause reverse pause",
    },
  });
  gsap.from(".text",{
    duration: 9,
    opacity: 0,
    scrollTrigger: {
      trigger:".text",
      toggleActions: "restart  pause reverse pause",
    },
  });
 
  // gsap.from(orange.value, {
  //   duration: 1,
  //   opacity: 1,
  //   scrollTrigger: {
  //     marker: true,
  //     trigger: "orange-div",
  //     start: "top left",
  //     scrub: true,
  //   },
  // });
  // gsap.to(orange.value, {
  //   duration: 1,
  //   opacity: 1,
  //   scrollTrigger: {
  //     trigger: "orange-div",
  //     start: "top left",
  //     scrub: true,
  //   },
  // });
  

// Use GSAP to animate the blue section
gsap.from(orange.value, {
  duration: 1,
  x: '-100%',
  transformY:0,
  // ease: 'power2.inOut',
  scrollTrigger: {
    trigger: blue.value,
    start: 'left   start',
     
    end: 'bottom start',
    scrub: true,
    pin: true,
    pinSpacing: false,
    toggleActions: 'restart pause resume pause',
    position: 'fixed'
  },
});

    gsap.from(blue.value, {
      duration: 1,
      x: 0,
      scrollTrigger: {
        marker: true,
        trigger: orange.value,
        scrub: true,
        pinSpacing: false,
        toggleActions: "restart  pause reverse pause",
      },
    
    });
  gsap.to(orange.value, {
  opacity: 1,
  duration: 1,
  ease: "none",
  scrollTrigger: {
    trigger: orange.value,
    start: " left left",
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 1
  }

});
  // gsap.to(orange.value, {
  //   ease: "power.inOut",
  //   scrollTrigger: {
  //     marker: true,
  //     trigger: orange.value,
  //     scrub: true,
  //   },
  // });





// let scroll_tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: '.factsContainer',
//             start: "top center",
//             // pin: true,
//             scrub: true,
//             end: "+=300",
//             // markers: true,
//         }
//     }),
//         facts = [...document.querySelectorAll('.fact')]

//     scroll_tl.to(facts, {
//         xPercent: -85 * (facts.length - 1),
//         scrollTrigger: {
//             trigger: ".factsContainer_sm",
//             start: "center center",
//             pin: true,
//             // horizontal: true,
//             // pinSpacing:false,
//             // markers: true,
//             scrub: 1,
//             snap: 1 / (facts.length - 1),
//             // base vertical scrolling on how wide the container is so it feels more natural.
//             // end: () => `+=${smallFactsContainer.offsetWidth}`
//             end: () => `+=4320`
//         }
//     });
// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".asos2",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".asos").offsetWidth
//   }
// });

});
</script>

<style scoped>
@import "../assets/style.css";
</style>
