import Link from 'next/link'
import Image from 'next/image'

export default function PhysiologicalSighPost() {
  return (
    <main className="pt-24 pb-20">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-6 md:px-12">
        <header className="py-12 md:py-16">
          <Link 
            href="/blog"
            className="inline-flex items-center text-secondary hover:text-accent text-sm font-medium mb-8 gap-2 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-mid mb-4">
            <time>April 29, 2026</time>
            <span className="w-1 h-1 bg-secondary rounded-full"></span>
            <span>4 min read</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
            Breathing Technique No. 1 – The Physiological Sigh
          </h1>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg md:text-xl text-mid leading-relaxed mb-8">
            In 2023, Stanford neuroscientist Dr. Andrew Huberman and his colleagues published research identifying what they called the single fastest tool for real-time stress reduction. It's not a meditation app. It's not a supplement. It's a specific breathing pattern your body already knows.
          </p>

          <blockquote className="border-l-4 border-secondary pl-6 py-2 my-8 italic text-primary text-xl">
            "One double inhale followed by a long, complete exhale. Ninety seconds. Done. Your nervous system physically shifts."
          </blockquote>

          <h2 className="font-display text-2xl md:text-3xl text-primary mt-12 mb-6">
            The Pattern
          </h2>
          
          <div className="bg-light p-6 md:p-8 my-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                <div>
                  <p className="font-semibold text-primary">Inhale 1</p>
                  <p className="text-mid">A full breath in through the nose</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                <div>
                  <p className="font-semibold text-primary">Inhale 2</p>
                  <p className="text-mid">A sharp secondary sniff through the nose at the top (pops collapsed air sacs)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                <div>
                  <p className="font-semibold text-primary">Exhale</p>
                  <p className="text-mid">A long, slow, complete breath out through the mouth</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center font-semibold text-sm">4</span>
                <div>
                  <p className="font-semibold text-primary">Repeat</p>
                  <p className="text-mid">1–3 cycles — more is rarely needed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Physiological Sigh Diagram */}
          <div className="my-12">
            <Image
              src="/images/physiological-sigh.png"
              alt="The Physiological Sigh breathing technique diagram showing the three steps: Inhale, Sniff, and Long Exhale"
              width={1366}
              height={768}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <h2 className="font-display text-2xl md:text-3xl text-primary mt-12 mb-6">
            What the Science Says
          </h2>

          <p className="text-mid leading-relaxed mb-6">
            When you're under sustained stress, tiny air sacs in your lungs called alveoli begin to collapse. This reduces gas exchange efficiency and elevates CO2 — which your body reads as a threat signal, accelerating the stress response. The double inhale physically re-inflates these sacs, restoring full respiratory capacity.
          </p>

          <p className="text-mid leading-relaxed mb-6">
            The extended exhale is equally critical. Your exhale activates the parasympathetic branch of the autonomic nervous system directly — it slows the heart and signals safety to the brain. The longer the exhale relative to the inhale, the stronger the effect. The physiological sigh maximizes this ratio in a single breath.
          </p>

          <p className="text-mid leading-relaxed mb-6">
            The Stanford trial found this technique outperformed mindfulness meditation, box breathing, and cyclic hyperventilation in reducing self-reported anxiety, improving mood, and lowering physiological stress markers — across a five-minute trial period. One technique. Real-time results.
          </p>

          <div className="bg-primary/5 border-l-4 border-primary p-6 md:p-8 my-10">
            <h3 className="font-display text-xl text-primary mb-4">A Note from Mark</h3>
            <p className="text-mid leading-relaxed italic">
              I now teach this in every session as a take-home tool, something you can use immediately before a difficult conversation or in the middle of a negotiation. What I find interesting is that clients often notice, once they start doing this consciously, that their body was already doing it spontaneously at moments of high stress. We sigh naturally as a self-regulation mechanism and to reduce CO2 buildup. This is just doing it on purpose.
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center text-secondary hover:text-accent font-medium gap-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>
            <a
              href="https://calendly.com/mark-somaticrhythms/15-min-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-primary font-semibold px-6 py-3 text-sm tracking-wide hover:bg-accent hover:text-white transition-all"
            >
              Book a Free Consultation
            </a>
          </div>
        </footer>
      </article>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20 mt-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Experience These Techniques in a Guided Session
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Reading about breathwork is one thing. Experiencing it with guided support is another. Book a session and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/mark-somaticrhythms/15-min-consult"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-primary font-semibold px-8 py-4 text-sm tracking-wide hover:bg-accent hover:text-white transition-all"
            >
              Book a Free Consultation
            </a>
            <a
              href="https://calendly.com/mark-somaticrhythms/90-min-somatic-journey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-semibold px-8 py-4 text-sm tracking-wide hover:bg-light transition-all"
            >
              Book a Full Session
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
