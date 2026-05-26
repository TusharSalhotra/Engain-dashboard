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
    </section>
  );
}
