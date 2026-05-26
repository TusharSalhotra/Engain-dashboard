import Image from 'next/image';
import { Button } from './ui/button';
import { Card } from './ui/card';

const resultCards = [
  {
    title: "You’ll Get New Customers from Reddit, Month after Month",
    body: "Once your brand owns the top comment, you'll capture 90% of the demand. We've seen one well-placed comment generate $50K+.",
    image: '/assets/best-online.png',
    width: 632,
    height: 316,
  },
  {
    title: "You’ll Rank #1 on AI Search & LLM-s",
    body: "Reddit is the top cited source for AI & LLM answers. That means: when your brand is mentioned on Reddit, you’ll also show up in Google AI Answers, ChatGPT, Gemini and other AI models.",
    image: '/assets/best-vpn.png',
    width: 540,
    height: 296,
  },
  {
    title: 'Your Brand Reputation Improves',
    body: 'Engain notifies you every time someone mentions your brand on Reddit - so you can step in and shift the narrative in your favour.',
    image: '/assets/reviews.png',
    width: 540,
    height: 292,
  },
  {
    title: 'You Build Social Proof & Increase BOF Revenue',
    body: 'Create the appearance of real users recommending your brand on Reddit, so every time someone googles Your brand, they will be met with overwhelming social proof.',
    image: '/assets/ecommerce-tool.png',
    width: 632,
    height: 296,
  },
  {
    title: 'You Get access to aged, high-karma Reddit accounts.',
    body: 'You don’t have to buy proxies, build karma or wait for your accounts to age. We give you direct access to an army of Reddit accounts without ever having to log in to Reddit yourself.',
    image: '/assets/karma.png',
    width: 632,
    height: 316,
  },
  {
    title: "Your Reddit Posts & Comments Won’t Get Removed",
    body: 'Our risk-mitigation systems are designed to keep your posts and comments live. You can post in any subreddit without worrying about removals or bans.',
    image: '/assets/crm.png',
    width: 540,
    height: 318,
  },
  {
    title: 'Take advantage of over 5.5B monthly visitors',
    body: 'With 1.2B monthly visitors, Reddit threads now rank within the top 5 results for almost anything you search for on Google. Anyone from consumers to CEO-s rely on Reddit when making buying decisions.',
    image: '/assets/reddit.png',
    width: 540,
    height: 292,
  },
  {
    title: 'Your Visibility Compounds',
    body: 'Every post and comment you publish becomes a long-term traffic asset. Unlike ads that stop the moment you stop paying, Reddit comments stay live indefinitely and your visibility compounds.',
    image: '/assets/visits.png',
    width: 632,
    height: 296,
  },
];

export default function ResultsSection() {
  return (
    <section className="results-section" id="results" aria-labelledby="results-title">
      <h2 id="results-title">The Results</h2>

      <div className="results-grid">
        {resultCards.map((card) => (
          <Card className="result-card" key={card.title}>
            <div className="result-copy">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
            <div className="result-image-panel">
              <Image
                alt=""
                className="result-image"
                height={card.height}
                src={card.image}
                width={card.width}
              />
            </div>
          </Card>
        ))}
      </div>

      <Button asChild className="results-cta" size="lg" variant="solid">
        <a href="#booking-title">
          Get Access Now
          <span aria-hidden="true">→</span>
        </a>
      </Button>
    </section>
  );
}
