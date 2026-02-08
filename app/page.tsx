'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, MessageCircle, RefreshCw, Sparkles } from 'lucide-react'

// FAQ Accordion Component
const FAQAccordion = ({ items }: { items: { title: string; text: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div 
          key={i} 
          className={`border-b border-mid/30 transition-colors duration-200 -mx-6 px-6 ${
            openIndex === i ? 'bg-white' : 'bg-transparent'
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full py-6 flex justify-between items-center bg-transparent border-none cursor-pointer text-left"
          >
            <span className="text-lg font-semibold text-primary pr-5">
              {item.title}
            </span>
            <span 
              className={`text-2xl text-secondary font-light transition-transform duration-300 ${
                openIndex === i ? 'rotate-45' : 'rotate-0'
              }`}
            >
              +
            </span>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-[500px] pb-6' : 'max-h-0'
            }`}
          >
            <p className="text-[15px] text-mid leading-relaxed pr-10">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const benefitItems = [
  {
    title: "Better decisions under pressure",
    text: "Executives do not fail from lack of intelligence. They fail from nervous system overload. Chronic stress pushes people into threat responses that narrow perception, shorten time horizons, and bias decisions toward control and speed over quality. Somatic breathwork downshifts that state. The result is clearer pattern recognition, less reactive decision-making, and fewer expensive unforced errors. That alone pays for itself."
  },
  {
    title: "Access to focus without burnout",
    text: "High earners often rely on stimulants, adrenaline, or sheer willpower to perform. That works until it does not. Breathwork trains voluntary control over arousal levels, meaning you can enter deep focus without frying your system. Think sustained performance, not heroics followed by a crash."
  },
  {
    title: "Faster recovery, not just better performance",
    text: "Most executives optimize output and ignore recovery. That is a strategic mistake. Somatic breathwork improves parasympathetic activation, which accelerates physical and cognitive recovery between high-stakes demands. Better sleep, lower baseline anxiety, and quicker emotional reset after conflict are the practical outcomes."
  },
  {
    title: "Emotional regulation without therapy language",
    text: "Many high performers carry unresolved stress, anger, or grief that never gets processed because it is inconvenient. Somatic breathwork bypasses over-intellectualizing and releases stored tension directly through the body. You get the benefit of emotional clearing without endless talking or navel-gazing. Efficient. Private. Results-oriented."
  },
  {
    title: "Leadership presence people can feel",
    text: "Regulated nervous systems are contagious. Leaders who are calm, grounded, and embodied create psychological safety without trying. Teams respond with better communication, less drama, and higher trust. This is not charisma training. It is physiology."
  },
  {
    title: "Strategic self-awareness",
    text: "Breathwork increases interoceptive awareness, meaning you notice stress signals earlier instead of after damage is done. Executives who catch overload sooner make better boundary decisions, delegate more effectively, and stop confusing endurance with effectiveness."
  },
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-20">
        {/* Left Side - Copy */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0 bg-light order-2 lg:order-1">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.1] text-primary mb-8">
            You've optimized everything except your nervous system.
          </h1>
          
          <p className="text-lg md:text-xl text-mid mb-6 leading-relaxed">
            Somatic breathwork for executives, leaders and high-performers who don't have time for burnout.
          </p>
          
          <p className="text-lg md:text-xl text-mid mb-10 leading-relaxed">
            Reset your stress response so you can perform, recover, and lead without running on empty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/mark-somaticrhythms/15-min-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Book a Free Consult
            </a>
            <a
              href="#services"
              className="btn-secondary text-center"
            >
              View Sessions
            </a>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="relative min-h-[400px] lg:min-h-full bg-primary order-1 lg:order-2">
          <Image
            src="/images/hero-boardroom.jpg"
            alt="Executive in high-pressure meeting"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section section-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline text-center">
            Running on fumes but calling it <span className="text-secondary">discipline</span>.
          </h2>
          
          <div className="mt-12 space-y-5">
            {[
              "You're successful by every external metric—but internally, you're running a constant stress loop",
              "You've tried the apps, the podcasts, maybe even meditation—but nothing changes your results",
              "The decisions that used to be automatic now drain you",
              "Anxiety has become your baseline, not the rare exception",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 flex-shrink-0" />
                <p className="text-lg text-mid leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-primary font-medium mt-12 text-center leading-relaxed">
            The problem isn't your mindset. It's your <span className="text-secondary">nervous system</span>.
            <br />
            And you can't think your way out of a body stuck in <span className="text-secondary">survival mode</span>.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION - FAQ Accordion */}
      <section className="section section-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline text-center">
            How does Somatic Breathwork benefit executives, and high performers?
          </h2>
          <p className="subheadline text-center mx-auto mt-4 mb-16">
            In short, it is a high leverage tool for people whose nervous systems are overworked and whose income is dependent on their quality of thinking.
          </p>
          
          <FAQAccordion items={benefitItems} />
          
          {/* Skeptical Take */}
          <div className="mt-16 p-10 bg-primary text-white">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              The skeptical take
            </h3>
            <p className="text-white/90 leading-relaxed mb-8">
              If someone is looking for instant enlightenment or a productivity hack that replaces discipline, this is not it. Breathwork does not make you softer or less driven. It makes your drive more precise and less self-destructive.
            </p>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Bottom line
            </h3>
            <p className="text-white/90 leading-relaxed">
              Somatic breathwork is not wellness. It is infrastructure. For high-end earners, the ROI shows up in decision quality, emotional control, recovery speed, and leadership effectiveness. Ignore it if you enjoy paying the stress tax later.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS BREATHWORK SECTION */}
      <section className="section section-light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline">
            Regulate the System. Restore the Performance.
          </h2>
          <p className="text-xl text-primary font-medium mb-8 leading-relaxed">
            Somatic Breathwork uses specific breathing patterns to directly access and reset your autonomic nervous system.
          </p>
          <p className="text-lg text-mid mb-8 leading-relaxed">
            It is a journey inward to release the built up stress, tension and emotion that weigh us down in our daily lives.
          </p>
          <p className="text-lg text-mid mb-12 leading-relaxed">
            Your nervous system holds onto everything: every deadline, every conflict, every moment of suppressed frustration. Breathwork gives it a way out.
          </p>
          
          <h3 className="text-2xl font-semibold text-primary mb-8">
            How good would it feel to:
          </h3>
          
          <div className="text-left max-w-2xl mx-auto space-y-4">
            {[
              "Release tension, stress and stored emotions in your nervous system",
              "Feel more relaxed, regulated, calm and balanced",
              "Gain clarity and confidence to achieve the goals that have been eluding you",
              "Break old negative patterns that no longer serve you",
              "Unlock creative potential and foster innovative thinking",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-primary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="section section-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <Image
              src="/images/mark-headshot.jpg"
              alt="Mark - Somatic Rhythms Founder"
              fill
              className="object-cover rounded"
            />
          </div>
          
          {/* Copy */}
          <div>
            <p className="text-secondary text-sm font-semibold tracking-widest mb-4">
              ABOUT
            </p>
            <h2 className="headline">
              I've been where you are.
            </h2>
            <p className="text-lg text-mid leading-relaxed mb-5">
              I spent 30 years in consumer products — 15 of them as a VP of Sales moving hundreds of millions in revenue through America's largest retailers.
            </p>
            <p className="text-lg text-mid leading-relaxed mb-5">
              Two years ago, I burned out. Somatic breathwork gave me back my edge.
            </p>
            <p className="text-lg text-primary font-medium leading-relaxed">
              Now I help executives do the same.
            </p>
            <Link href="/about" className="btn-secondary inline-block mt-8">
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section section-light scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline">Choose Your Session</h2>
            <p className="subheadline mx-auto">
              All sessions available in-person (San Diego) or via Zoom. 1:1 or group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 - Free Consult */}
            <div className="service-card flex flex-col">
              <div className="w-16 h-16 bg-light rounded-full mx-auto mb-6 flex items-center justify-center">
                <MessageCircle size={28} className="text-secondary" />
              </div>
              <p className="text-secondary text-sm font-semibold tracking-wide mb-2">
                FREE
              </p>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                15-Min Introductory Consult
              </h3>
              <p className="text-mid text-[15px] leading-relaxed mb-8 flex-grow">
                Not sure where to start? Let's talk. No pressure, no pitch—just a conversation to see if this is right for you.
              </p>
              <a
                href="https://calendly.com/mark-somaticrhythms/15-min-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Book Free Consult
              </a>
            </div>
            
            {/* Service 2 - Somatic Reset */}
            <div className="service-card flex flex-col">
              <div className="w-16 h-16 bg-light rounded-full mx-auto mb-6 flex items-center justify-center">
                <RefreshCw size={28} className="text-secondary" />
              </div>
              <p className="text-mid text-sm font-semibold tracking-wide mb-2">
                40 MINUTES
              </p>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Somatic Reset
              </h3>
              <p className="text-mid text-[15px] leading-relaxed mb-8 flex-grow">
                A focused session to reset your nervous system and ground you. Great for travel recovery, a midweek reset, or to ensure you are your best self for that important meeting.
              </p>
              <a
                href="https://calendly.com/mark-somaticrhythms/40-min-somatic-reset"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Book Reset Session
              </a>
            </div>
            
            {/* Service 3 - Somatic Journey (Signature) */}
            <div className="service-card flex flex-col border-2 border-secondary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 text-xs font-bold tracking-widest">
                SIGNATURE
              </div>
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles size={28} className="text-white" />
              </div>
              <p className="text-mid text-sm font-semibold tracking-wide mb-2">
                90 MINUTES
              </p>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Somatic Journey
              </h3>
              <p className="text-mid text-[15px] leading-relaxed mb-8 flex-grow">
                This is the signature session. A full guided breathwork session designed for nervous system reset, emotional processing, and clarity. Designed for executives experiencing burnout, chronic stress, decision fatigue or loss of intuition.
              </p>
              <a
                href="https://calendly.com/mark-somaticrhythms/90-min-somatic-journey"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-all w-full text-center"
              >
                Book Somatic Journey
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 text-center p-6 bg-light">
            <p className="text-mid text-[15px]">
              Questions? Reach out directly:{' '}
              <a href="mailto:mark@somaticrhythms.com" className="text-primary font-medium hover:text-secondary transition-colors">
                mark@somaticrhythms.com
              </a>
              {' · '}
              <a href="tel:+16197238463" className="text-primary font-medium hover:text-secondary transition-colors">
                (619) 723-8463
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="section section-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="headline text-center mb-16">
            What Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="testimonial-card">
              <p className="text-mid italic leading-relaxed mb-6">
                "I've experienced Mark's breathwork sessions on two occasions, and both were truly impactful.... Each session brought meaningful insights and a sense of clarity that stayed with me well beyond the experience. I highly recommend working with Mark."
              </p>
              <p className="text-primary font-semibold">
                Kendall
              </p>
              <p className="text-mid text-sm">
                Owner, Texeira Consulting
              </p>
            </div>
            <div className="testimonial-card">
              <p className="text-mid italic leading-relaxed mb-6">
                "Working with Mark dramatically improved my ability to show up as the most confident version of myself and get the best results out of my organization."
              </p>
              <p className="text-primary font-semibold">
                Andrew
              </p>
              <p className="text-mid text-sm">
                Chief Operating Officer, Willow Creek Press
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 md:px-16 bg-primary text-center">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
          Ready to reset?
        </h2>
        <p className="text-xl text-secondary mb-10">
          Your nervous system won't fix itself.
        </p>
        <a
          href="https://calendly.com/mark-somaticrhythms/15-min-consult"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-primary font-semibold px-10 py-5 text-base tracking-wide hover:bg-accent hover:text-white transition-all"
        >
          Schedule Your Free Consultation
        </a>
      </section>
    </>
  )
}
