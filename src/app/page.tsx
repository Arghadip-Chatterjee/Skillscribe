import Image from "next/image";
import { FloatingNavDemo } from "./navbar";
import { AuroraHero } from "./hero";
import IconSideNav from "./sidenav";
import { NavbarDemo } from "./navdemo";
import { HeroParallaxDemo } from "./heroparallax";
import { CardHoverEffectDemo } from "./cardhover";
import { TextParallaxContentExample } from "./textparallel";
import Testimonial from "./testimonial";
import Pricing from "./pricing";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      {/* <FloatingNavDemo/> */}
      {/* <IconSideNav/> */}
      <NavbarDemo/>
      {/* <AuroraHero/> */}
      <HeroParallaxDemo/>
      <CardHoverEffectDemo/>
      <TextParallaxContentExample/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}
