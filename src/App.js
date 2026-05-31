import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      number: '01',
      title: 'Content Services',
      description: 'Intelligent content management that connects information across your entire organization, enabling smarter decisions and faster outcomes.'
    },
    {
      number: '02',
      title: 'Document Management',
      description: 'Streamline document workflows with automated capture, secure storage, and seamless retrieval across all departments and systems.'
    },
    {
      number: '03',
      title: 'Enterprise Information',
      description: 'Transform how your organization manages critical information with unified access, governance, and intelligence-driven insights.'
    }
  ];

  const features = [
    { label: 'Intelligent Automation', value: 'AI-powered workflows' },
    { label: 'Enterprise Security', value: 'Bank-level encryption' },
    { label: 'Cloud & On-Premise', value: 'Flexible deployment' },
    { label: 'Global Scale', value: '20,000+ customers' }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav" style={{
        backgroundColor: scrollY > 50 ? 'rgba(26, 26, 26, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
      }}>
        <div className="nav-content">
          <div className="logo">Hyland</div>
          <div className="nav-links">
            <a href="#solutions">Solutions</a>
            <a href="#features">Features</a>
            <a href="#contact" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="grain"></div>
          <div className="gradient-orb orb-1" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
          <div className="gradient-orb orb-2" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
        </div>

        <div className="hero-content">
          <div className="hero-label fade-up">Enterprise Content Platform</div>
          <h1 className="hero-title fade-up">
            Intelligence
            <br />
            <span className="hero-title-accent">Meets</span>
            <br />
            Information
          </h1>
          <p className="hero-subtitle fade-up">
            Hyland transforms how organizations work with content,
            <br />
            connecting people, processes, and information at scale.
          </p>
          <div className="hero-cta fade-up">
            <button className="btn-primary" onClick={() => {}}>Explore Solutions</button>
            <button className="btn-secondary" onClick={() => {}}>Watch Demo</button>
          </div>

          <div className="hero-images fade-up">
            <img src="https://placehold.co/400x300/2a2a2a/d4a574/png?text=Enterprise+Platform" className="hero-img" />
            <img src="https://placehold.co/400x300/1a1a1a/f5a623/png?text=Content+Services" className="hero-img" />
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions" id="solutions" ref={solutionsRef}>
        <div className="solutions-header fade-up">
          <div className="section-label">Our Solutions</div>
          <h2 className="section-title">
            Built for the way
            <br />
            <em>you work</em>
          </h2>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`solution-card fade-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="solution-number">{solution.number}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <div className="solution-arrow" onClick={() => {}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <img src={`https://placehold.co/350x200/faf8f5/d4a574/png?text=Solution+${solution.number}`} className="solution-img" />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features" ref={featuresRef}>
        <div className="features-content">
          <div className="features-left fade-left">
            <div className="section-label">Why Hyland</div>
            <h2 className="section-title">
              Enterprise-grade
              <br />
              <em>content at scale</em>
            </h2>
            <p className="features-description">
              Trusted by organizations worldwide to manage their most critical content
              and processes. Hyland delivers the security, scalability, and innovation
              you need to stay ahead.
            </p>
            <div className="features-icon-grid">
              <div className="icon-item" onClick={() => {}}>
                <img src="https://placehold.co/80x80/2a2a2a/d4a574/png?text=AI" />
              </div>
              <div className="icon-item" onClick={() => {}}>
                <img src="https://placehold.co/80x80/2a2a2a/f5a623/png?text=Cloud" />
              </div>
              <div className="icon-item" onClick={() => {}}>
                <img src="https://placehold.co/80x80/2a2a2a/d4a574/png?text=Security" />
              </div>
            </div>
            <button className="btn-primary" onClick={() => {}}>Learn More</button>
          </div>

          <div className="features-right fade-right">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="feature-label">{feature.label}</div>
                  <div className="feature-value">{feature.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <div className="footer-cta-content fade-up">
          <h2 className="footer-cta-title">Ready to transform your content?</h2>
          <p className="footer-cta-subtitle">
            Join thousands of organizations leveraging Hyland's platform.
          </p>
          <form className="cta-form">
            <input type="text" className="email-input" />
            <button className="btn-primary btn-large" onClick={(e) => e.preventDefault()}>Start Your Journey</button>
          </form>
          <div className="social-icons">
            <div className="social-icon" onClick={() => {}}>
              <img src="https://placehold.co/40x40/d4a574/1a1a1a/png?text=F" />
            </div>
            <div className="social-icon" onClick={() => {}}>
              <img src="https://placehold.co/40x40/f5a623/1a1a1a/png?text=T" />
            </div>
            <div className="social-icon" onClick={() => {}}>
              <img src="https://placehold.co/40x40/d4a574/1a1a1a/png?text=L" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <img src="https://placehold.co/150x50/1a1a1a/d4a574/png?text=Hyland" />
            </div>
            <p className="footer-tagline">
              Leading content services platform for the intelligent enterprise.
            </p>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <a href="#solutions">Content Services</a>
            <a href="#solutions">Document Management</a>
            <a href="#solutions">Enterprise Information</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#customers">Customers</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#blog">Blog</a>
            <a href="#docs">Documentation</a>
            <a href="#support">Support</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Hyland Software. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
