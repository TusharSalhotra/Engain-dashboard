import Image from "next/image";
import { ChevronDown, House, Play, Zap } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const navItems = [
  { label: "Why Engain?", href: "#why-engain" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const bullets = [
  {
    iconSrc: "/assets/r-icon.png",
    text: "See exact Reddit threads where people want to buy your product",
  },
  {
    iconSrc: "/assets/posts.png",
    iconClassName: "feature-icon-image-posts",
    text: "Post & comment from thousands of aged, high-karma Reddit accounts",
  },
  {
    iconSrc: "/assets/up-arrow.png",
    text: "Auto-upvote your posts to the top of any subreddit",
  },
  {
    iconSrc: "/assets/track-band.png",
    text: "Track brand & competitor mentions across Reddit",
  },
];

const feedItems = [
  {
    tag: "Marketing",
    title: "What is the ROI of running TikTok ads in 2025?",
    body: "The post asks about B2B SaaS paid channels and buyer intent campaigns.",
  },
  {
    tag: "Relevance",
    title: "What is the ROI on running TikTok ads in 2025?",
    body: "Organic replies and attribution challenges are being discussed by founders.",
  },
];

export default function HeroSection() {
  return (
    <>
      <div className="background-pattern" aria-hidden="true" />

      <header className="topbar" aria-label="Primary navigation">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
          <a className="resources-link" href="#results">
            Resources
            <ChevronDown size={16} strokeWidth={2.2} />
          </a>
        </nav>

        <div className="nav-actions">
          <Button variant="light">
            <Zap size={16} fill="currentColor" />
            Get Started
          </Button>
          <Button>
            <Image
              alt=""
              aria-hidden="true"
              height={16}
              src="/assets/calendar-2.png"
              width={16}
            />
            Get a Demo
          </Button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="trust-badge">
            <span className="badge-icon green">
              <Image
                alt=""
                aria-hidden="true"
                className="badge-icon-image"
                height={20}
                src="/assets/star-icon.png"
                width={20}
              />
            </span>
            <span className="badge-divider" aria-hidden="true" />
            <span className="badge-icon red">
              <Image
                alt=""
                aria-hidden="true"
                className="badge-icon-image"
                height={20}
                src="/assets/pin-icon.png"
                width={20}
              />
            </span>
            <span>Trusted by 1750+ Brands</span>
          </div>

          <h1 className="hero-title" id="hero-title">
            Get new customers &amp; build LLM visibility with the{" "}
            <span>#1 Reddit Marketing Software</span>
          </h1>

          <ul className="feature-list" aria-label="Engain features">
            {bullets.map((item) => (
              <li key={item.text}>
                <span className="feature-icon">
                  <Image
                    alt=""
                    aria-hidden="true"
                    className={`feature-icon-image ${item.iconClassName ?? ""}`}
                    height={18}
                    src={item.iconSrc}
                    width={18}
                  />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <Button className="hero-button hero-button-primary">
              <Image
                alt=""
                aria-hidden="true"
                height={16}
                src="/assets/calendar-2.png"
                width={16}
              />
              Get a Demo
            </Button>
            <Button variant="light" className="hero-button hero-button-secondary">
              <Zap size={16} fill="currentColor" />
              Get Started
            </Button>
          </div>
        </div>

        <div className="product-frame" aria-label="Engain software preview">
          <div className="app-window">
            <aside className="sidebar">
              <Logo />
              <div className="workspace-select">
                <span>engain.io</span>
                <ChevronDown size={10} />
              </div>
              <nav className="side-nav">
                {[
                  "Sandbox",
                  "New Opportunities",
                  "SEO Opportunities",
                  "Mentions",
                  "Smart Search",
                  "Insights",
                  "Track Tasks",
                  "Archive",
                  "Settings",
                ].map((item) => (
                  <span
                    className={item === "Smart Search" ? "active" : ""}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </nav>
              <div className="side-cards">
                <span>New Opportunities</span>
                <span>Brand Mentions</span>
              </div>
            </aside>

            <section className="dashboard">
              <div className="dashboard-head">
                <div>
                  <p>SEO Opportunities</p>
                  <span>
                    The following Reddit posts are showing up when people search
                    for keywords related to your competitors.
                  </span>
                </div>
                <button>1,526 Credits</button>
              </div>

              <div className="filters">
                <span className="selected">All</span>
                <span>High Intent</span>
                <span>My Keywords</span>
                <span>Competitor Keywords</span>
              </div>

              <div className="feed">
                {feedItems.map((item) => (
                  <article className="feed-card" key={item.tag}>
                    <div className="feed-meta">
                      <span>{item.tag}</span>
                      <span>SEO Comments</span>
                      <strong>33,800</strong>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <div className="feed-tags">
                      <span>Relevance: 99/100</span>
                      <span>Ranking Difficulty: 4/10</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="empty-panel" aria-label="Selected post preview">
              <House size={42} fill="currentColor" />
            </section>
          </div>

          <button className="play-button" aria-label="Play product video">
            <Play size={35} fill="currentColor" />
          </button>
        </div>
      </section>
    </>
  );
}
