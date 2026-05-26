"use client";

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { Card } from './ui/card';

const testimonials = [
  {
    quote:
      "Engain found a Reddit thread where someone asked for men's jewelry recommendations. That post got 14,500+ Monthly Clicks from Google. We used multiple accounts to build a long comment thread that recommended our brand and we ranked it to the top. It brought in 95 new customers in 3 months, and made us about $70K in extra revenue.",
    name: 'Martin Kärdi',
    company: 'IceCartel.com',
    tag: 'E-commerce',
    image: '/assets/avatar.png',
  },
  {
    quote:
      "We had a lot of bad reviews on Reddit. Every time someone googled our brand, they saw these reviews. We used Engain to enter these threads with an army of accounts, and over time shift the narrative about our brand. Now if someone googles us, they’ll see positive feedback on Reddit.",
    name: 'Hendri Talu',
    company: 'Plumi.fr',
    tag: 'SaaS',
    image: '/assets/plumi.png',
  },
  {
    quote:
      'Our sales have increased by over 30% since we started working with Engain. The results keep compounding, and more and more customers tell us they discovered us on Reddit before making a purchase.',
    name: 'David Ryabchikov',
    company: 'Socialplug.io',
    tag: 'Digital Products',
    image: '/assets/hand.png',
  },
  {
    quote:
      "One single comment added through Engain landed us a client worth $50K. That blew our minds. Now it's become a core part of our growth strategy.",
    name: 'Mark Voronov',
    company: 'Uproas.io',
    tag: 'B2B Agency',
    image: '/assets/symbol.png',
  },
  {
    quote:
      'We cannot advertise on Meta or Google, so Reddit is our only choice. Before, we had to do everything manually and it took us multiple hours per day. We had to buy accounts, build karma, wait for accounts to age, post comments manually etc. We kept getting banned and our comments kept getting removed. With Engain, the entire process is automated, which I like.',
    name: 'Martin Gatski',
    company: 'Nudora AI',
    tag: 'NSFW',
    image: '/assets/N.png',
  },
  {
    quote:
      'Engain found multiple reddit threads where people were asking for proxy recommendations. We used Engain to add multiple comments and our MRR quickly started to increase. All without running a single paid AD campaign.',
    name: 'Aimen Hallou',
    company: 'Floxy.io',
    tag: 'SaaS',
    image: '/assets/floxy.png',
  },
];

export default function TestimonialsSection() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const leftColumn = testimonials.slice(0, 3);
  const rightColumn = testimonials.slice(3);

  return (
    <section className="testimonials-section" id="faq" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Trusted by Leading SAAS &amp; Ecom Brands</h2>

      <div className="testimonials-grid">
        {[leftColumn, rightColumn].map((column, columnIndex) => (
          <div className="testimonial-column" key={columnIndex === 0 ? 'left' : 'right'}>
            {column.map((item) => (
              <Card className="testimonial-card" key={`${item.name}-${item.company}`}>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-author">
                  <Image
                    alt={`${item.name} avatar`}
                    className="testimonial-avatar"
                    height={88}
                    src={item.image}
                    width={88}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.tag}</span>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <div className="testimonials-grid-mobile" aria-label="Customer testimonials carousel">
        <div
          className="testimonials-track"
          style={{ ['--active-index' as string]: activeMobileIndex } as CSSProperties}
        >
          {testimonials.map((item) => (
            <Card className="testimonial-card" key={`mobile-${item.name}-${item.company}`}>
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-author">
                <Image
                  alt={`${item.name} avatar`}
                  className="testimonial-avatar"
                  height={88}
                  src={item.image}
                  width={88}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.tag}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="testimonial-dots" role="tablist" aria-label="Select testimonial">
          {testimonials.map((item, index) => (
            <button
              aria-label={`Show testimonial from ${item.name}`}
              aria-selected={activeMobileIndex === index}
              className={`testimonial-dot ${activeMobileIndex === index ? 'active' : ''}`}
              key={`dot-${item.name}-${item.company}`}
              onClick={() => setActiveMobileIndex(index)}
              role="tab"
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
