import Image from 'next/image';

const howItWorksSteps = [
  {
    title: 'Reddit is full of your ideal customers - Engain finds them.',
    body: 'Engain scans your website and shows you Reddit threads where people want to buy your product or service. Some of these get 100K+ monthly clicks from Google.',
    image: '/assets/how-it-works-step-1.png',
    width: 403,
    height: 335,
  },
  {
    title: 'Engain Places Comments that Recommend Your Brand',
    body: 'Use multiple aged, high-karma Reddit accounts to post realistic comments that subtly recommend your business. (No AI slop.)',
    image: '/assets/how-it-works-step-2.png',
    width: 386,
    height: 335,
  },
  {
    title: 'Engain upvotes your Comments to the top of the thread',
    body: "Your comments are then upvoted to the top of the thread, where you'll capture 90% of the traffic + the revenue that comes with it.",
    image: '/assets/how-it-works-step-3.png',
    width: 411,
    height: 452,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="how-section" aria-labelledby="how-title">
      <div className="how-decor how-decor-arrow" aria-hidden="true" />
      <div className="how-decor how-decor-bubble" aria-hidden="true" />

      <h2 id="how-title">
        How Engain <span>Works</span>
      </h2>

      <div className="how-steps">
        {howItWorksSteps.map((step, index) => (
          <article className="how-card" key={step.title}>
            <div className={`how-image-wrap step-${index + 1}`}>
              <Image
                alt=""
                className="how-image"
                height={step.height}
                src={step.image}
                width={step.width}
              />
            </div>
            <div className="how-card-copy">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
