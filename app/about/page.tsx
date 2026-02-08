import Image from 'next/image'
import Link from 'next/link'
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react'

export const metadata = {
  title: 'About Mark | Somatic Rhythms',
  description: 'Learn about Mark\'s journey from VP of Sales to certified Somatic Breathwork practitioner, and how he helps executives reset their nervous systems.',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 md:px-16 bg-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] max-w-lg mx-auto lg:mx-0">
            <Image
              src="/images/mark-headshot.jpg"
              alt="Mark - Founder of Somatic Rhythms"
              fill
              className="object-cover rounded"
              priority
            />
          </div>
          
          {/* Intro */}
          <div>
            <p className="text-secondary text-sm font-semibold tracking-widest mb-4">
              ABOUT
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight text-primary mb-8">
              I've been where you are.
            </h1>
            <p className="text-xl text-mid leading-relaxed mb-6">
              30+ years in corporate America. 15+ years as a VP of Sales. Billions of dollars in revenue. And then — burnout.
            </p>
            <p className="text-lg text-mid leading-relaxed">
              I know what it's like to have everything external optimized while everything internal is falling apart.
            </p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="section section-light">
        <div className="max-w-3xl mx-auto">
          {/* Act 1 */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-medium text-primary mb-6">
              The Career
            </h2>
            <p className="text-lg text-mid leading-relaxed mb-4">
              I have spent over 30 years in consumer products, first as a Buyer and Director of Merchandising, then on the other side of the table selling to them. For 15+ years, I served as Vice President of Sales, responsible for moving several billion dollars of product through America's largest retailers.
            </p>
            <p className="text-lg text-mid leading-relaxed">
              It was a high-stakes, high pressure environment. For a long time, I thrived in that environment. The decisions came naturally. The instincts were sharp. The results followed.
            </p>
          </div>

          {/* Act 2 */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-medium text-primary mb-6">
              The Burnout
            </h2>
            <p className="text-lg text-mid leading-relaxed mb-4">
              Two years ago, things changed. The instincts that used to be automatic started failing. Decisions that once came easy became exhausting. Motivation was hard to come by, and deadlines started to be missed. Anxiety became my baseline, not the exception.
            </p>
            <p className="text-lg text-mid leading-relaxed mb-4">
              All the things that used to come easy became harder and harder. My answer was just to try and work more hours. I was running on fumes and calling it discipline – until I couldn't do it anymore.
            </p>
            <p className="text-lg text-mid leading-relaxed">
              Eventually, I had to step away from my role to figure out what was broken. Not my mindset. Not my motivation. Something deeper. Something physiological.
            </p>
          </div>

          {/* Act 3 */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-medium text-primary mb-6">
              The Reset
            </h2>
            <p className="text-lg text-mid leading-relaxed mb-4">
              After exploring numerous paths, meditation apps, executive coaching, ADHD medication, all the usual recommendations. I discovered Somatic Breathwork. It was the solution that worked.
            </p>
            <p className="text-lg text-mid leading-relaxed mb-4">
              Not in a vague "spiritual" way. In a measurable, physiological way. My sleep improved. My anxiety dropped. My decision making sharpened. The instincts came back. I felt like myself again.
            </p>
            <p className="text-lg text-mid leading-relaxed">
              I knew that I wanted to explore this modality further. I got certified as a Somatic Breathwork practitioner through Arizona State University. I joined the International Breathwork Foundation. And I started helping other executives and skeptics get their edge back.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section className="section section-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="headline text-center mb-16">
            Credentials & Background
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 flex gap-5">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Certified Somatic Breathwork Practitioner
                </h3>
                <p className="text-mid">Arizona State University</p>
              </div>
            </div>
            
            <div className="bg-white p-8 flex gap-5">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Member
                </h3>
                <p className="text-mid">International Breathwork Foundation</p>
              </div>
            </div>
            
            <div className="bg-white p-8 flex gap-5">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  30+ Years Executive Experience
                </h3>
                <p className="text-mid">Consumer Products Industry</p>
              </div>
            </div>
            
            <div className="bg-white p-8 flex gap-5">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Award size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  15+ Years as VP of Sales
                </h3>
                <p className="text-mid">Billions of dollars in revenue managed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="section section-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline text-center mb-10">
            My Approach
          </h2>
          
          <div className="bg-primary p-10 md:p-12 text-white">
            <p className="text-xl leading-relaxed mb-6">
              I don't do fluff. I don't waste your time with incense, crystals, or nebulous promises.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              I don't bog clients down with new-age language that doesn't resonate with them. I respect their time and get them the nervous system regulation they need to continue exceeding performance expectations.
            </p>
            <p className="text-xl leading-relaxed text-secondary font-medium">
              This is results-oriented work for people who measure results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-16 bg-cream text-center">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-primary mb-4">
          Let's talk.
        </h2>
        <p className="text-xl text-mid mb-10 max-w-xl mx-auto">
          Book a free 15-minute consultation to see if somatic breathwork is right for you.
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
