// import React, { useRef, useEffect } from "react";
// import "../App.css";
// import { TimelineLite, TweenMax, Power3 } from "gsap";
// export default function About() {
//   let headLine = useRef(null);
//   let tl = new TimelineLite();
//   // useEffect(() => {
//   //   const headLineChild = headLine.children[0];
//   //   const parghChild = headLine.children[1].children[0];
//   //   const parghChild1 = headLine.children[1].children[1];
//   //   const explor = headLine.children[2];
//   //   TweenMax.to(headLine, 0, {css: {visibility: 'visible'}})
//   //   tl.from(headLine, 1.2, { y: 1280, ease: Power3.easeOut })
//   //     .from(
//   //       headLineChild,
//   //       1,
//   //       { y: 40, opacity: 0, ease: Power3.easeOut, delay: 1 },
//   //       [tl]
//   //     )
//   //     .staggerFrom(
//   //      [parghChild,parghChild1,explor],
//   //       1,
//   //       { y: 20, opacity: 0, ease: Power3.easeOut, delay: 1.5 },
//   //       0.3,
//   //       [tl]
//   //     );
//   // });

//   return (
//     <div className="slide" ref={(el) => (headLine = el)}>
//       <h2>
//         <div>
//           {" "}
//           LOOKING FOR A <span className="montian-span"> WEB DEVELOPER ?</span>
//         </div>
//       </h2>

//       <div className="pargh">
//         <p> I'M ABDO ABASS, A WEB DEVELOPER & PROGRAMMER</p>
//         <p>
//           {" "}
//           LIVING IN SAUDI. I MAKE WEB APPLICATIONS . USUALLY WITH DJANGO.
//         </p>
//       </div>
//       <a href="home" className="explore mountain-exp">
//         Contant me
//       </a>
//       <div className="reveal-text"></div>
//     </div>
//   );
// }

import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2>
            <div className='line'>
              <span>Creating website is</span>
            </div>
            <div className='line'>
              <span>what we do.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;