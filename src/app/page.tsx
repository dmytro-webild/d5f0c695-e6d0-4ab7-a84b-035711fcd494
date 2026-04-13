"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="large"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Carrie Jones"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlay
      title="Regenerative Beauty, Naturally Yours"
      description="Cutting-edge regenerative aesthetics tailored to restore your skin's vitality from within."
      buttons={[
        {
          text: "Book a Consultation",
          href: "#contact",
        },
        {
          text: "Explore Treatments",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692265.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/serene-minimalist-interior_23-2151935124.jpg",
          alt: "Serene minimalist interior",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tranquil-spa-pool-meditation-space_23-2151935106.jpg",
          alt: "Tranquil spa pool meditation space",
        },
        {
          src: "http://img.b2bpic.net/free-photo/luxury-bedroom-illuminated-by-modern-electric-lamp-generated-by-ai_188544-28185.jpg",
          alt: "Luxury bedroom illuminated by modern electric lamp",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indoor-hotel-view_1417-1565.jpg",
          alt: "Indoor hotel view",
        },
        {
          src: "http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692265.jpg",
          alt: "Luxury aesthetic clinic interior warm",
        },
      ]}
      avatarText="Trusted by 500+ happy patients"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "polynucleotides",
          title: "Polynucleotides",
          tags: [
            "Regeneration",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-confident-young-woman-start-career-look-determined-get-job-waiting-interview-lean-glass-wall-business-center-smiling-looking-away-satisfied_197531-30572.jpg",
        },
        {
          id: "exosomes",
          title: "Exosomes",
          tags: [
            "Innovation",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-woman-smiling-with-perfect-smile-white-teeth_273609-13703.jpg",
        },
        {
          id: "prp",
          title: "PRP Therapy",
          tags: [
            "Natural",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/lesbian-couple-wearing-white-their-wedding_23-2150835701.jpg",
        },
        {
          id: "fillers",
          title: "Dermal Fillers",
          tags: [
            "Contouring",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15151.jpg",
        },
        {
          id: "anti-wrinkle",
          title: "Anti-Wrinkle",
          tags: [
            "Softening",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-afro-haircut-wearing-white-sweater_273609-21763.jpg",
        },
        {
          id: "skin-rejuv",
          title: "Skin Rejuvenation",
          tags: [
            "Luminosity",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/serene-minimalist-interior_23-2151935124.jpg",
        },
      ]}
      title="Our Signature Services"
      description="Evidence-based, innovative treatments delivered with artistry and integrity."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="About Carrie Jones"
      description="Located in the heart of Clifton, Bristol, our clinic stands at the forefront of the regenerative aesthetics revolution. As an NMC Registered Nurse, Carrie brings expert knowledge and meticulous care to every treatment, helping you restore, renew, and radiate confidence from within."
      imageSrc="http://img.b2bpic.net/free-photo/girl-white-robe-spa-stairs-cozy-light-calm-mood-kid-wellness_169016-69180.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Jessica T.",
          role: "Patient",
          company: "Bristol",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-confident-young-woman-start-career-look-determined-get-job-waiting-interview-lean-glass-wall-business-center-smiling-looking-away-satisfied_197531-30572.jpg",
        },
        {
          id: "2",
          name: "Hollie L.",
          role: "Patient",
          company: "Clifton",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-woman-smiling-with-perfect-smile-white-teeth_273609-13703.jpg",
        },
        {
          id: "3",
          name: "Elisabeta L.",
          role: "Patient",
          company: "Bristol",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lesbian-couple-wearing-white-their-wedding_23-2150835701.jpg",
        },
        {
          id: "4",
          name: "Emily N.",
          role: "Patient",
          company: "Clifton",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15151.jpg",
        },
        {
          id: "5",
          name: "Sarah M.",
          role: "Patient",
          company: "Bristol",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-afro-haircut-wearing-white-sweater_273609-21763.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "500+",
          label: "Happy Patients",
        },
        {
          value: "100%",
          label: "Safety First",
        },
        {
          value: "10+",
          label: "Years Experience",
        },
      ]}
      title="What Our Clients Say"
      description="We are honored to have played a part in our clients' regenerative journeys."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "canvas-reveal",
      }}
      text="Ready to Begin Your Regenerative Journey? Schedule your bespoke consultation with Carrie Jones today. Let's restore your natural radiance together."
      buttons={[
        {
          text: "Book Now",
          href: "tel:+44117000000",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Carrie Jones Medical Aesthetics"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
