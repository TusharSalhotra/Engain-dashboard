'use client';

import { useState } from 'react';
import { ChartNoAxesCombined } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card } from './ui/card';

type ThreadCard = {
  sub: string;
  meta: string;
  online: string;
  clicks: string;
  title: string;
  highlight: string;
  score: string;
  comments: string;
  avatar: string;
  age?: string;
  avatarSrc?: string;
};

type Model = {
  label: string;
  iconSrc: string;
  cards: ThreadCard[];
};

const models: Model[] = [
  {
    label: 'E-Commerce',
    iconSrc: '/assets/cart.png',
    cards: [
      {
        sub: 'r/jewelry',
        age: '2y ago',
        meta: '892k Members',
        online: '4.1k Online',
        clicks: '6000+ Monthly Clicks',
        title: 'Where to buy',
        highlight: 'mens jewelry?',
        score: '1.2k',
        comments: '98',
        avatar: '💍',
        avatarSrc: '/assets/Img-1.png',
      },
      {
        sub: 'r/supplements',
        age: '5mo ago',
        meta: '2.4m Members',
        online: '12.5k Online',
        clicks: '19,500+ Monthly Clicks',
        title: 'Best supplement brands',
        highlight: 'that are actually third-party tested?',
        score: '842',
        comments: '156',
        avatar: '🧡',
        avatarSrc: '/assets/Img-2.png',
      },
      {
        sub: 'r/skincare',
        age: '2y ago',
        meta: '340k Members',
        online: '1.2k Online',
        clicks: '8,500+ Monthly Clicks',
        title: 'What skincare brand do you recommend',
        highlight: 'for 40+ women?',
        score: '1.2k',
        comments: '98',
        avatar: '🧴',
        avatarSrc: '/assets/Img-3.png',
      },
    ],
  },
  {
    label: 'SaaS/Software',
    iconSrc: '/assets/saas.png',
    cards: [
      {
        sub: 'r/CRM',
        meta: '77k Members',
        online: '235 Online',
        clicks: '10,800+ Monthly Clicks',
        title: 'What is the BEST',
        highlight: 'CRM?',
        score: '725',
        comments: '66',
        avatar: 'SaaS',
      },
      {
        sub: 'r/productivity',
        meta: '1.4m Members',
        online: '8.7k Online',
        clicks: '22,000+ Monthly Clicks',
        title: 'Best tools for managing',
        highlight: 'remote teams?',
        score: '936',
        comments: '141',
        avatar: '⚙',
      },
      {
        sub: 'r/marketing',
        meta: '650k Members',
        online: '3.2k Online',
        clicks: '14,200+ Monthly Clicks',
        title: 'Which attribution platform',
        highlight: 'actually works?',
        score: '581',
        comments: '74',
        avatar: '📈',
      },
    ],
  },
  {
    label: 'Info/Education',
    iconSrc: '/assets/scholar.png',
    cards: [
      {
        sub: 'r/learnprogramming',
        meta: '4.2m Members',
        online: '9.4k Online',
        clicks: '31,000+ Monthly Clicks',
        title: 'Best online course for',
        highlight: 'learning Python?',
        score: '1.8k',
        comments: '238',
        avatar: '🎓',
      },
      {
        sub: 'r/fitness',
        meta: '11.8m Members',
        online: '16k Online',
        clicks: '28,500+ Monthly Clicks',
        title: 'Best app for building',
        highlight: 'a workout plan?',
        score: '1.1k',
        comments: '182',
        avatar: '🏋',
      },
      {
        sub: 'r/languagelearning',
        meta: '1.1m Members',
        online: '2.6k Online',
        clicks: '7,900+ Monthly Clicks',
        title: 'What course helps adults',
        highlight: 'learn Spanish fast?',
        score: '624',
        comments: '91',
        avatar: '📚',
      },
    ],
  },
  {
    label: 'Affiliate Marketers',
    iconSrc: '/assets/connection-icon.png',
    cards: [
      {
        sub: 'r/VPN',
        meta: '437k Members',
        online: '263 Online',
        clicks: '18,900+ Monthly Clicks',
        title: 'Best',
        highlight: 'VPN provider?',
        score: '1.2k',
        comments: '245',
        avatar: 'VPN',
      },
      {
        sub: 'r/hosting',
        meta: '91k Members',
        online: '520 Online',
        clicks: '12,700+ Monthly Clicks',
        title: 'Which web host is best',
        highlight: 'for ecommerce?',
        score: '749',
        comments: '133',
        avatar: '☁',
      },
      {
        sub: 'r/creditcards',
        meta: '1.8m Members',
        online: '5.9k Online',
        clicks: '24,400+ Monthly Clicks',
        title: 'Best card for',
        highlight: 'travel rewards?',
        score: '992',
        comments: '201',
        avatar: '💳',
      },
    ],
  },
  {
    label: 'Local Businesses',
    iconSrc: '/assets/map-icon.png',
    cards: [
      {
        sub: 'r/nyc',
        meta: '1.0m Members',
        online: '3.8k Online',
        clicks: '8,600+ Monthly Clicks',
        title: 'Best Roofing Company',
        highlight: 'in New York?',
        score: '684',
        comments: '62',
        avatar: '📍',
      },
      {
        sub: 'r/austin',
        meta: '512k Members',
        online: '2.1k Online',
        clicks: '7,300+ Monthly Clicks',
        title: 'Reliable dentist near',
        highlight: 'South Austin?',
        score: '421',
        comments: '44',
        avatar: 'TX',
      },
      {
        sub: 'r/chicago',
        meta: '676k Members',
        online: '1.9k Online',
        clicks: '9,100+ Monthly Clicks',
        title: 'Who handles emergency',
        highlight: 'HVAC repairs?',
        score: '537',
        comments: '71',
        avatar: 'CHI',
      },
    ],
  },
];

type RedditThreadCardProps = {
  card: ThreadCard;
};

function RedditThreadCard({ card }: RedditThreadCardProps) {
  return (
    <Card className="model-thread-card">
      <div className="thread-topline">
        <span className="thread-avatar">
          {card.avatarSrc ? (
            <Image src={card.avatarSrc} alt={card.sub} width={30} height={30} className="thread-avatar-image" />
          ) : (
            card.avatar
          )}
        </span>
        <div className="thread-meta">
          <strong>
            {card.sub}
            {card.age ? <span className="thread-age"> • {card.age}</span> : null}
          </strong>
          <span className="thread-meta-stats">
            {card.meta}
            <i />
            {card.online}
          </span>
        </div>
        <em className="thread-clicks">{card.clicks}</em>
      </div>
      <h3>
        {card.title} <mark>{card.highlight}</mark>
      </h3>
      <div className="thread-actions">
        <span className="up-score">
          <Image src="/assets/upvote.png" alt="upvote" width={18} height={18} />
          {card.score}
        </span>
        <Image src="/assets/upvote-icon.png" alt="downvote" width={18} height={18} />
        <span className="thread-comments">
          <Image src="/assets/reply.png" alt="comments" width={18} height={18} />
          {card.comments}
        </span>
        <Image src="/assets/reward.png" alt="share" width={18} height={18} />
        <span className="thread-share">
          <Image src="/assets/right-arrow.png" alt="share" width={18} height={18} />
          Share
        </span>
      </div>
    </Card>
  );
}

export default function BusinessModelsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModel = models[activeIndex];

  return (
    <section className="business-model-section" aria-labelledby="business-model-title">
      <div className="business-decor business-decor-pie" aria-hidden="true" />
      <div className="business-decor business-decor-chart" aria-hidden="true">
        <ChartNoAxesCombined size={48} />
      </div>

      <div className="business-model-copy">
        <h2 id="business-model-title">This Works for Every Business Model</h2>
        <p>
          Reddit threads like this exist in every industry. They rank on Google and can get
          thousands of clicks per month. By placing your brand as the top comment in these
          threads, you’ll capture over 90% of the traffic.
        </p>
      </div>

      <div className="business-model-panel">
        <div className="model-tabs" role="tablist" aria-label="Business model examples">
          {models.map((model, index) => {
            const selected = activeIndex === index;
            return (
              <Button
                aria-selected={selected}
                className={selected ? 'active' : ''}
                key={model.label}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
                variant="unstyled"
              >
                <Image src={model.iconSrc} alt={model.label} width={26} height={26} />
                {model.label}
              </Button>
            );
          })}
        </div>

        <div className="model-card-row" role="tabpanel">
          {activeModel.cards.map((card) => (
            <RedditThreadCard card={card} key={`${activeModel.label}-${card.sub}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
