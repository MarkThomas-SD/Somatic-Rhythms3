import Link from 'next/link'

const blogPosts = [
  {
    slug: 'breathing-technique-1-physiological-sigh',
    title: 'Breathing Technique No. 1 – The Physiological Sigh',
    excerpt: 'Stanford neuroscientist Dr. Andrew Huberman and his colleagues identified what they called the single fastest tool for real-time stress reduction. It\'s not a meditation app. It\'s not a supplement. It\'s a specific breathing pattern your body already knows.',
    date: 'April 29, 2026',
    readTime: '4 min read',
  },
]

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-mid max-w-2xl mx-auto">
            Practical insights on breathwork, nervous system regulation, and peak performance for executives and high performers.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group border-b border-gray-200 pb-8 last:border-b-0"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-sm text-mid">
                      <time>{post.date}</time>
                      <span className="w-1 h-1 bg-secondary rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-primary group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-mid leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-secondary font-medium text-sm mt-2 group-hover:gap-3 gap-2 transition-all">
                      Read More
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Experience These Techniques?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a free 15-minute consultation to discuss how somatic breathwork can help you perform at your best.
          </p>
          <a
            href="https://calendly.com/mark-somaticrhythms/15-min-consult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-primary font-semibold px-8 py-4 text-sm tracking-wide hover:bg-accent hover:text-white transition-all"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>
    </main>
  )
}
