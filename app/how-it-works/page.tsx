import { AlertCircle, Brain, Clock, Lightbulb, Moon, Target, TrendingUp, Zap } from 'lucide-react'

export const metadata = {
  title: 'How Somatic Breathwork Works | Somatic Rhythms',
  description: 'Understand the science behind somatic breathwork and nervous system regulation. Learn what to expect in a session and the outcomes clients typically experience.',
}

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-16 bg-light">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-secondary text-sm font-semibold tracking-widest mb-4">
            THE SCIENCE
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight text-primary mb-6">
            The Science of Nervous System Regulation
          </h1>
          <p className="text-xl text-mid leading-relaxed">
            No woo-woo. Just biology.
          </p>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="section section-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline mb-8">
            The Problem
          </h2>
          <p className="text-lg text-mid leading-relaxed mb-6">
            Your autonomic nervous system controls your stress response, recovery, sleep, focus, and intuition. When it gets stuck in "fight or flight," everything suffers — even when there's no immediate threat.
          </p>
          <p className="text-lg text-mid leading-relaxed mb-10">
            This isn't weakness. It's biology. Your nervous system is doing exactly what it's designed to do — protect you. The problem is it doesn't know when to stop.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mb-6">
            Symptoms of a dysregulated nervous system:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: AlertCircle, text: "Chronic stress that doesn't resolve with rest" },
              { icon: Brain, text: "Anxiety without a clear cause" },
              { icon: Moon, text: "Poor sleep despite exhaustion" },
              { icon: Lightbulb, text: "Loss of gut instincts / intuition" },
              { icon: Zap, text: "Decision fatigue" },
              { icon: TrendingUp, text: 'Feeling "wired but tired"' },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-light rounded">
                <Icon size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-mid">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BREATHWORK WORKS SECTION */}
      <section className="section section-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline mb-8">
            Why Breathwork Works
          </h2>
          <p className="text-lg text-mid leading-relaxed mb-6">
            Your breath is the only autonomic function you can consciously control. Heart rate, digestion, hormone release — all automatic. But breath? You can override it anytime.
          </p>
          <p className="text-lg text-mid leading-relaxed mb-6">
            Specific breathing patterns directly signal your nervous system to shift states — from sympathetic (stress) to parasympathetic (recovery). It's a direct line to the control system most people don't know they have access to.
          </p>
          <div className="bg-primary p-8 text-white mt-10">
            <p className="text-xl font-medium">
              This isn't relaxation. It's regulation.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS SOMATIC BREATHWORK SECTION */}
      <section className="section section-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline mb-8">
            What Somatic Breathwork Is
          </h2>
          <p className="text-lg text-mid leading-relaxed mb-6">
            "Somatic" means "of the body." Somatic breathwork uses conscious breathing patterns combined with body awareness to access and release stored tension, reset nervous system patterns, and restore physiological balance.
          </p>
          <p className="text-lg text-mid leading-relaxed mb-6">
            Unlike meditation, which often works top-down (mind to body), somatic breathwork works bottom-up (body to mind). You're not trying to think your way to calm — you're using your physiology to create the conditions for calm.
          </p>
          <div className="bg-light p-8 border-l-4 border-secondary mt-10">
            <p className="text-lg text-primary font-medium">
              It's not meditation. It's not visualization. It's a direct, physical intervention.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT A SESSION LOOKS LIKE SECTION */}
      <section className="section section-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline mb-10">
            What a Session Looks Like
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Brief Check-In",
                description: "We start with a quick conversation about where you are and what you're working with. No hour of talking — we respect your time."
              },
              {
                step: "02",
                title: "Guided Breathing",
                description: "You'll be coached through specific breathing patterns designed to shift your nervous system state. This is the core work."
              },
              {
                step: "03",
                title: "Physical & Emotional Release",
                description: "Physical and emotional sensations may arise — tingling, temperature changes, emotion surfacing. This is normal and part of the process. Your body releasing what it's been holding."
              },
              {
                step: "04",
                title: "Integration",
                description: "A brief conversation about what you experienced and what to expect going forward. Clear, practical, actionable. This is the most important part of the process."
              },
              {
                step: "05",
                title: "Post Session Follow-Up",
                description: "We will have a call to discuss any emotions or insights that arise in the hours and days afterward. The goal is to translate the experience into practical awareness and sustainable change, not just a powerful moment."
              },
            ].map(({ step, title, description }, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-secondary font-display text-3xl font-medium w-12 flex-shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
                  <p className="text-mid leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="section section-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline text-center mb-12">
            Results You Can Expect
          </h2>
          
          <p className="text-lg text-mid text-center leading-relaxed mb-12">
            Clients typically report the following outcomes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Improved sleep quality within 1-2 sessions",
              "Reduced anxiety and stress reactivity",
              "Restored clarity and sharper decision-making",
              'Return of intuition / "gut instincts"',
              'Greater capacity to "switch off" after work',
              "Quicker recovery after high-stakes situations",
              "Better emotional regulation under pressure",
              "Increased sense of grounded presence",
            ].map((result, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-light">
                <Target size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                <p className="text-primary">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IS THIS FOR ME SECTION */}
      <section className="section section-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline text-center mb-10">
            Is This For Me?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">
                This is for you if:
              </h3>
              <ul className="space-y-3">
                {[
                  "You're a high-performer experiencing diminishing returns",
                  "You've optimized everything external and need internal work",
                  "You want results, not rituals",
                  "You're skeptical but open",
                  "You're willing to invest 40-90 minutes in yourself",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-secondary">✓</span>
                    <span className="text-mid">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8">
              <h3 className="text-xl font-semibold text-primary mb-6">
                This is NOT for you if:
              </h3>
              <ul className="space-y-3">
                {[
                  "You want a quick fix that replaces discipline",
                  "You're looking for spiritual enlightenment",
                  "You're not willing to experience physical sensations",
                  "You expect results without showing up",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-mid">✗</span>
                    <span className="text-mid">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-16 bg-primary text-center">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-4">
          Ready to experience it?
        </h2>
        <p className="text-xl text-secondary mb-10">
          Book a free consultation and see if this is right for you.
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
