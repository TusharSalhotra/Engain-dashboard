import Image from 'next/image';

export default function GrowthPlatformSection() {
  return (
    <section className="growth-platform-section" aria-labelledby="growth-platform-title">
      <div className="growth-platform-copy">
        <h2 id="growth-platform-title">
          All Your Reddit Growth, <span>One Powerful Platform</span>
        </h2>
        <p>Discover opportunities, manage replies, and scale visibility without switching tools.</p>
      </div>

      <div className="growth-platform-visual">
        <Image
          alt="Engain platform showing Reddit opportunity discovery, reply generation, brand mentions, and auto upvote tools"
          className="growth-platform-image"
          height={802}
          priority={false}
          src="/assets/reddit-growth-platform.png"
          width={1440}
        />
      </div>
    </section>
  );
}
