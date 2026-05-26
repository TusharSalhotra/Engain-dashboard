import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import Logo from './Logo';

export default function FooterSection() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Logo />
          <p>
            World’s First Autonomous
            <br />
            <span>Reddit Growth Hacking Software</span>
          </p>
          <div className="renaar-badge" aria-label="Managed by Renaar">
            <strong>R</strong>
            <span>
              Managed by
              <b>Renaar</b>
            </span>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <h3>Navigation</h3>
            <a href="#why-engain">Why Engain?</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#how-it-works">How it works</a>
          </div>
          <div>
            <h3>Resources</h3>
            <a href="#pricing">Help Center</a>
            <a href="#results">Blog</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#contact">Contact Us</a>
          </div>
          <div>
            <h3>Social</h3>
            <a href="https://www.tiktok.com" rel="noreferrer" target="_blank">
              <Image alt="" className="social-icon" height={18} src="/assets/tiktok.png" width={16} />
              Tiktok
            </a>
            <a href="https://www.youtube.com" rel="noreferrer" target="_blank">
              <Image alt="" className="social-icon" height={12} src="/assets/youtube.png" width={17} />
              Youtube
            </a>
            <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
              <Image alt="" className="social-icon" height={20} src="/assets/instagram.png" width={20} />
              Instagram
            </a>
            <a href="https://discord.com" rel="noreferrer" target="_blank">
              <Image alt="" className="social-icon" height={16} src="/assets/discord.png" width={21} />
              Discord
            </a>
          </div>
        </nav>

        <a className="back-to-top" href="#top" aria-label="Back to top">
          <ChevronUp size={28} strokeWidth={3} />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Engain</p>
        <div>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/end-user-license-agreement">End User License Agreement</a>
          <a href="/affiliate-terms">Affiliate Terms</a>
        </div>
      </div>
    </footer>
  );
}
