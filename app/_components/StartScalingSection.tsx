import Image from 'next/image';

export default function StartScalingSection() {
  return (
    <section className="start-scaling-section" aria-label="Ready to start scaling on Reddit">
      <Image
        alt="Ready to Start Scaling on Reddit? Build LLM Visibility, Control brand reputation and Get Customers from Reddit on Autopilot using Engain."
        className="start-scaling-image"
        height={463}
        src="/assets/start-scaling.png"
        width={1440}
      />

      <div className="start-scaling-content">
        <h2>Ready to Start Scaling on Reddit?</h2>
        <p>
          Build LLM Visibility, Control brand reputation,
          <br />
          and Get Customers from Reddit on Autopilot using Engain.
        </p>

        <div className="start-scaling-actions">
          <a className="start-scaling-button start-scaling-button-light" href="#pricing">
            Get a Demo <span aria-hidden="true">→</span>
          </a>
          <a className="start-scaling-button start-scaling-button-primary" href="#pricing">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}
