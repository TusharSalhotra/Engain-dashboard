import Image from 'next/image';
import { Card } from './ui/card';

const featureCards = [
  {
    title: 'Access Aged & High-Karma Accounts',
    body: 'Get instant access to trusted Reddit accounts without building karma yourself.',
    icon: '/assets/user-icon.png',
  },
  {
    title: 'Post & Comment in Any Subreddit',
    body: 'Engage across relevant subreddits seamlessly without manual restrictions.',
    icon: '/assets/message.png',
  },
  {
    title: 'AI-Powered Upvoting System',
    body: 'Boost visibility with automated upvoting that helps your posts rank higher.',
    icon: '/assets/up-arrow.png',
  },
  {
    title: 'High-Traffic Thread Finder',
    body: 'Discover high-intent Reddit threads where buyers are already active.',
    icon: '/assets/analytics.png',
  },
  {
    title: 'Track Brands and Competitors',
    body: 'Monitor mentions of your brand and competitors in real time.',
    icon: '/assets/lightning-circle.png',
  },
  {
    title: 'Smart Analytics & Management',
    body: 'Track performance and manage your Reddit growth from one dashboard.',
    icon: '/assets/piechart.png',
  },
  {
    title: 'High-Intent Keyword Search',
    body: 'Find keywords and discussions that signal strong buying intent.',
    icon: '/assets/hashtag-icon.png',
  },
  {
    title: 'Multi-Brand Management Hub',
    body: 'Manage multiple brands and campaigns from a single unified platform.',
    icon: '/assets/connection-icon.png',
  },
  {
    title: 'SEO-Optimized Posts',
    body: 'Create posts that rank on Google and drive long-term organic traffic.',
    icon: '/assets/search.png',
  },
  {
    title: 'Scheduling',
    body: 'Plan and automate your posts and comments for consistent activity.',
    icon: '/assets/calendar.png',
  },
  {
    title: 'Prospect Finder',
    body: 'Identify potential customers directly from relevant Reddit conversations.',
    icon: '/assets/group.png',
  },
  {
    title: 'Subreddit Insights',
    body: 'Understand subreddit rules, trends, and opportunities before engaging.',
    icon: '/assets/stats.png',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features" aria-labelledby="features-title">
      <div className="features-dot-arc" aria-hidden="true" />

      <div className="features-copy">
        <h2 id="features-title">All Features, One Growth Engine</h2>
        <p>
          From finding opportunities to managing accounts,
          <br />
          Engain handles it all in one place.
        </p>
      </div>

      <div className="features-grid">
        {featureCards.map((feature) => (
          <Card className="feature-engine-card" key={feature.title}>
            <span className="feature-engine-icon">
              <Image alt="" height={20} src={feature.icon} width={20} />
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </Card>
        ))}
      </div>

      <div className="features-grid-mobile" aria-label="Features carousel">
        <div className="features-track">
          {featureCards.map((feature) => (
            <Card className="feature-engine-card" key={`mobile-${feature.title}`}>
              <span className="feature-engine-icon">
                <Image alt="" height={20} src={feature.icon} width={20} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
