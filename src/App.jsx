import React, { useState, useEffect } from 'react';
import Galaxy from './Galaxy';
import LogoLoop from './LogoLoop';
import ClickSpark from './ClickSpark';
import InfiniteMenu from './InfiniteMenu';
import Dock from './Dock';
import ShinyText from './ShinyText';
import TextPressure from './TextPressure';
import MagicBento from './MagicBento';
import GlareHover from './GlareHover';
import TiltedCard from './TiltedCard';
import PillNav from './PillNav';
import './App.css';
import './CardShine.css';
import Carousel from './Carousel';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const body = document.body;
    if (theme === 'light') body.classList.add('theme-light');
    else body.classList.remove('theme-light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  // Skills/Technologies logos
  const skillLogos = [
    { node: <div className="skill-logo">AI Systems</div>, title: 'AI Systems' },
    { node: <div className="skill-logo">Machine Learning</div>, title: 'Machine Learning' },
    { node: <div className="skill-logo">NLP (Transformers/NER)</div>, title: 'NLP (Transformers/NER)' },
    { node: <div className="skill-logo">Model Evaluation</div>, title: 'Model Evaluation' },
    { node: <div className="skill-logo">Data Engineering</div>, title: 'Data Engineering' },
    { node: <div className="skill-logo">Python</div>, title: 'Python' },
    { node: <div className="skill-logo">SQL</div>, title: 'SQL' },
    { node: <div className="skill-logo">Prolog</div>, title: 'Prolog' },
    { node: <div className="skill-logo">Secure API Design</div>, title: 'Secure API Design' },
    { node: <div className="skill-logo">JWT Security</div>, title: 'JWT Security' },
    { node: <div className="skill-logo">Git & Linux</div>, title: 'Git & Linux' },
    { node: <div className="skill-logo">Tableau / Streamlit</div>, title: 'Tableau / Streamlit' }
  ];

  // Project items list with direct URLs and concise narratives
  const projectItems = [
    {
      title: 'JWT Authentication Vulnerability Analysis',
      url: 'https://fire-wall.netlify.app/',
      description: 'HS256 misconfig audit → privilege escalation path documented; security-by-design takeaways.'
    },
    {
      title: 'GSCC (Game System Compatibility Checker)',
      url: 'https://iridescent-rolypoly-782dae.netlify.app/',
      description: 'Rule-based scoring + heuristics to validate game hardware/software readiness with actionable flags.'
    },
    {
      title: 'Customer Churn Prediction',
      url: 'https://app--clay-shop-1f50815c.base44.app/',
      description: 'Streamlit ML app with calibrated probabilities; highlights top churn drivers for retention teams.'
    },
    {
      title: 'Named Entity Linking (NEL)',
      url: 'https://nel-by-ms.netlify.app/',
      description: 'NLP pipeline linking entities to knowledge base entries; evaluates precision/recall with examples.'
    },
    {
      title: 'Attendance, Salary, PF, Performance Tracker',
      url: 'https://wmsms.vercel.app/',
      description: 'Operational dashboard with role-based access, payroll computations, and anomaly surfacing.'
    },
    {
      title: 'CardioDetect',
      url: 'https://dlqmwdpj.manus.space/',
      description: 'Risk stratification model; focuses on interpretability with feature importance overlays.'
    },
    {
      title: 'Text Analyzer Pro',
      url: 'https://analyzetex.netlify.app/',
      description: 'NLP workbench for sentiment, readability, and entity extraction with transparent outputs.'
    },
    {
      title: 'E-Commerce Recommendation System',
      url: 'https://ss-analysis-ms.netlify.app/',
      description: 'Hybrid recommenders (content + collaborative) benchmarked on relevance and diversity.'
    },
    {
      title: 'Spam Mail Analyzer',
      url: 'https://app--cosmic-guard-30c712d6.base44.app/',
      description: 'Email classification with feature explanations to reduce false positives for ops teams.'
    },
    {
      title: 'SmartCity IoT',
      url: 'https://splendid-pika-249aa2.netlify.app/',
      description: 'Sensor data ingestion + alerting; simulates edge-to-cloud pipeline with simple dashboards.'
    },
    {
      title: 'Life Pattern Analyzer',
      url: 'https://lifexly.netlify.app/',
      description: 'Behavioral pattern mining; surfaces routines and deviations with privacy-aware summaries.'
    },
    {
      title: 'msGPT',
      url: 'https://gptbymayank.lovable.app/',
      description: 'Lightweight LLM front-end with guardrails and prompt templates for repeatable outputs.'
    }
  ];

  useEffect(() => {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });
        
        if (!isActive) {
          faqItem.classList.add('active');
        }
      });
    });

    // Intersection Observer for Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.step-card, .service-card, .review-card, .project-card, .timeline-item');
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* Subtle motion: reduced intensity for performance */}
      <ClickSpark
        sparkColor="#6366f1"
        sparkSize={8}
        sparkRadius={18}
        sparkCount={8}
        duration={380}
        easing="ease-out"
        extraScale={1.0}
        ariaLabel="Interactive spark effect"
      >
        <Galaxy 
          ariaLabel="Background starfield animation"
          focal={[0.5, 0.5]}
          rotation={[0.6, 0.0]}
          starSpeed={0.35}
          density={0.8}
          hueShift={120}
          speed={0.8}
          mouseInteraction={true}
          glowIntensity={0.35}
          saturation={0.25}
          mouseRepulsion={true}
          repulsionStrength={1.5}
          twinkleIntensity={0.22}
          rotationSpeed={0.03}
          transparent={true}
        />
      </ClickSpark>

      {/* Navigation */}
      <PillNav
        logo="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='70' font-size='60' font-weight='bold' fill='%23ffffff'%3EMS%3C/text%3E%3C/svg%3E"
        logoAlt="Mayank Sharma"
        items={[
          { href: '#about', label: 'About' },
          { href: '#services', label: 'Services' },
          { href: '#innovations', label: 'Innovations' },
          { href: '#projects', label: 'Projects' },
          { href: '#testimonials', label: 'Testimonials' },
          { href: '#contact', label: 'Contact' }
        ]}
        baseColor="#ffffff"
        pillColor="#000000"
        hoveredPillTextColor="#ffffff"
        onMobileMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="content-wrapper">
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">AI Engineer & Data Scientist · Secure & Explainable Intelligence</div>
              <h1 className="hero-title">
                Mayank Sharma – AI Engineer & Data Scientist
              </h1>
              <p className="hero-subtitle">IIT Jodhpur · AI & Data Engineering</p>
              <div className="hero-buttons">
                <a
                  href="#projects"
                  className="btn-primary"
                  onClick={(e) => handleSmoothScroll(e, '#projects')}
                >
                  View Projects
                </a>
                <a
                  href="/resume-ms.pdf"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="proof" className="proof">
          <div className="container">
            <h2 className="section-title">Proof of Expertise</h2>
            <p className="section-description">Selected metrics, links, and artifacts demonstrating reliability and impact.</p>
            <div className="proof-grid">
              <div className="proof-item"><strong>0.86 AUC</strong> – Calibrated churn model with interpretable drivers.</div>
              <div className="proof-item"><strong>80% risk reduction</strong> – JWT misconfig escalation path closed.</div>
              <div className="proof-item"><strong>Production demos</strong> – Live apps with guardrails and monitoring.</div>
            </div>
            <div className="hero-buttons">
              <a href="/projects" className="btn-primary">View Case Studies</a>
              <a href="/blog" className="btn-secondary">Read Engineering Notes</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>About</h2>
            <div style={{ height: '120px', marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <h2
                  className="home-name"
                  style={{ margin: 0, lineHeight: 1 }}
                  aria-label="Mayank Sharma"
                >
                  MAYANK SHARMA
                </h2>
                <h2
                  className="home-role"
                  style={{ marginTop: '0.5rem', fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                >
                  AI &amp; Data Systems Engineer · IIT Jodhpur
                </h2>
              </div>
            </div>
            <div className="about-text about-intro">
              <div className="about-text">
                <p>I build secure, explainable AI and data systems that convert raw signals into decision-ready insights. My work blends theory with implementation—covering model design, evaluation, and the security surfaces that make production systems trustworthy.</p>
                <p>I enjoy translating research into deployable, interpretable products: from expert systems and NLP utilities to security analyses like JWT hardening. Outcome-first, with guardrails and clarity.</p>
              </div>
              <div className="pill-row">
                <span className="pill">Secure &amp; explainable AI</span>
                <span className="pill">Data pipelines to decisions</span>
                <span className="pill">Responsible disclosure mindset</span>
              </div>
              <div className="skills-carousel">
                <LogoLoop 
                  logos={skillLogos}
                  speed={50}
                  direction="left"
                  logoHeight={40}
                  gap={40}
                  pauseOnHover={true}
                  fadeOut={true}
                  scaleOnHover={true}
                  ariaLabel="Skills and Technologies"
                />
              </div>
            </div>
            <div className="experience-timeline">
              <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                disableAnimations={false}
                spotlightRadius={300}
                particleCount={12}
                enableTilt={false}
                glowColor="132, 0, 255"
                clickEffect={true}
                enableMagnetism={true}
              />
            </div>
            <div className="foundations">
              <h3>Foundations</h3>
              <p className="section-description" style={{ marginBottom: '1.5rem' }}>Grounded in algorithms and reasoning that make systems reliable.</p>
              <div className="pill-row">
                <span className="pill">Optimization Techniques</span>
                <span className="pill">Game Theory</span>
                <span className="pill">Search &amp; Heuristics</span>
                <span className="pill">Knowledge Representation</span>
                <span className="pill">Bayesian Reasoning</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/mayank-iitj" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Recent Works */}
        <TiltedCard 
          imageSrc={'/picsuit.jpg'}
          altText="Mayank Sharma Portrait"
          captionText="Mayank Sharma"
          containerHeight="360px"
          imageHeight="360px"
          imageWidth="360px"
          scaleOnHover={1.08}
          rotateAmplitude={16}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<div style={{position:'absolute',inset:0,background:'linear-gradient(140deg, rgba(0,0,0,0.2), rgba(0,0,0,0.55))', mixBlendMode:'overlay'}}/>}
        />
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-subtitle">Impactful Projects</h2>
            <p className="section-description">Each project is framed with problem, why it matters, approach, tools, outcome, and key learning.</p>
            <div className="featured-cases">
              <article className="case">
                <h3>JWT Authentication Vulnerability Analysis</h3>
                <p>Problem: HS256 misconfiguration enabled token forgery. Approach: middleware audit, signature verification, secret rotation. Result: 80% risk reduction with documented guardrails.</p>
                <div className="case-ctas"><a href="/projects/jwt-auth-vulnerability" className="btn-secondary">Read case study</a></div>
              </article>
              <article className="case">
                <h3>Customer Churn Prediction</h3>
                <p>Problem: Target retention with calibrated probabilities. Approach: feature engineering, calibrated classifier, interpretability. Result: AUC 0.86, actionable drivers for retention.</p>
                <div className="case-ctas"><a href="/projects/customer-churn-prediction" className="btn-secondary">Read case study</a></div>
              </article>
              <article className="case">
                <h3>Named Entity Linking (NEL)</h3>
                <p>Problem: Accurate mapping to KB entries. Approach: candidate generation and ranking. Result: high precision with transparent examples and evaluation.</p>
                <div className="case-ctas"><a href="/projects/named-entity-linking" className="btn-secondary">Read case study</a></div>
              </article>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-description">Explore AI, data, and security builds with transparent narratives.</p>
            <div className="project-framework">
              <h3>How I present work</h3>
              <ul>
                <li>Problem &amp; why it matters</li>
                <li>Approach &amp; tools</li>
                <li>Outcome (metrics/insight) &amp; key learning</li>
              </ul>
            </div>
          </div>
          <InfiniteMenu 
            items={projectItems.map(p => ({
              image: 'https://picsum.photos/seed/' + encodeURIComponent(p.title.toLowerCase().replace(/\s+/g,'-')) + '/800/600?grayscale',
              title: p.title,
              description: p.description,
              link: p.url,
              alt: `${p.title} project thumbnail`
            }))}
          />
        </section>

        {/* Resume Section intentionally removed; opens via View Resume in new tab */}
        <section id="ctas" className="ctas-section">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <p>For collaborations, research, or engineering roles, reach out via the contact page or connect on LinkedIn.</p>
            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">Contact</a>
              <a href="/privacy" className="btn-secondary">Privacy Policy</a>
            </div>
          </div>
        </section>

        {/* Innovations Section */}
        <section id="innovations" className="innovations-section">
          <div className="container">
            <h2 className="section-title">Innovations: AI, Data, Security</h2>
            <p className="section-description">Selected ML/NLP utilities and security experiments with quick links.</p>
            <div style={{ display: 'grid', placeItems: 'center', width: '100%', overflow: 'hidden' }}>
              <Carousel
                baseWidth={340}
                loop={true}
                autoplay={true}
                pauseOnHover={true}
                items={[
                  {
                    id: 1,
                    title: 'Loan Approval Prediction',
                    description: 'Python • Predictive modeling for loan eligibility',
                    url: 'https://loanapproval-ms.streamlit.app/',
                    icon: <svg className="carousel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H7l-4-4V5a2 2 0 0 1 2-2h6"/><path d="M17 3h4v4"/><path d="M16 8 21 3"/></svg>
                  },
                  {
                    id: 2,
                    title: 'imagine',
                    description: 'Python • Face & emotion recognition',
                    url: 'https://github.com/Mayank-iitj/imagine',
                    icon: <svg className="carousel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09c0 .66.39 1.25 1 1.51.57.24 1.23.11 1.68-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.44.45-.57 1.11-.33 1.68.26.61.85 1 1.51 1H21a2 2 0 0 1 0 4h-.09c-.66 0-1.25.39-1.51 1z"/></svg>
                  },
                  {
                    id: 3,
                    title: 'virtualmouse',
                    description: 'Python • Hand-tracking virtual mouse',
                    url: 'https://github.com/Mayank-iitj/virtualmouse',
                    icon: <svg className="carousel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 6v4"/></svg>
                  },
                  {
                    id: 4,
                    title: 'customer-churn-prediction',
                    description: 'Python • Streamlit app (live)',
                    url: 'https://customer-churn-ms.streamlit.app/',
                    icon: <svg className="carousel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
                  },
                  {
                    id: 5,
                    title: 'FakeReview',
                    description: 'Python • Fake review detection (live)',
                    url: 'https://fakereview-ms.streamlit.app/',
                    icon: <svg className="carousel-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h9"/><path d="m16 3 5 5"/><path d="M17 8 9 16"/></svg>
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="process">
          <div className="container">
            <h2 className="section-title">Process: From Data to Decisions</h2>
            <p className="section-description">From problem framing to secure, explainable delivery. Outcome-first, with guardrails.</p>
            <div className="process-buttons">
              <a href="https://github.com/Mayank-iitj" className="btn-secondary" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://github.com/Mayank-iitj" className="btn-secondary" target="_blank" rel="noopener noreferrer">See Projects</a>
            </div>
            <div className="process-steps">
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.3}>
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Frame the problem</h3>
                  <p>Clarify the real-world problem, success metrics, constraints, and the security/ethics boundaries before shipping anything.</p>
                </div>
              </GlareHover>
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.3}>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Build &amp; validate</h3>
                  <p>Design data pipelines and models; validate with evaluation plans, ablations, and explainability to keep stakeholders in the loop.</p>
                </div>
              </GlareHover>
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.3}>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Ship with guardrails</h3>
                  <p>Deploy with documentation, security hardening, and clear learnings so the system can be trusted and iterated safely.</p>
                </div>
              </GlareHover>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title">Services: AI, Data, Security</h2>
            <p className="section-description">AI, data, and security work that ships with clarity and explainability.</p>
            <div className="services-grid">
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">AI &amp; Data Engineering</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">Modeling &amp; Evaluation</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">NLP (NER/Transformers)</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">Security Reviews (JWT/API)</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">Dashboards &amp; Reporting</div>
              </GlareHover>
            </div>
            <div className="services-buttons">
              <a href="https://instagram.com/mayyanks" className="btn-secondary" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://github.com/Mayank-iitj" className="btn-secondary" target="_blank" rel="noopener noreferrer">See Projects</a>
            </div>
            <div className="services-list">
              <div className="services-column">
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">Model Evaluation &amp; Monitoring</div>
                </GlareHover>
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">MLOps Pipelines</div>
                </GlareHover>
              </div>
              <div className="services-column">
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">LLM Guardrails &amp; Prompting</div>
                </GlareHover>
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">Security &amp; Risk Reviews</div>
                </GlareHover>
              </div>
            </div>
            <div className="services-tags">
              <span className="tag">Evaluation Plans</span>
              <span className="tag">Explainability</span>
              <span className="tag">Data Quality</span>
              <span className="tag">Security Hardening</span>
              <span className="tag">Streamlit</span>
              <span className="tag">Tableau</span>
              <span className="tag">LLM Guardrails</span>
              <span className="tag">Prompt Engineering</span>
              <span className="tag">Observability</span>
              <span className="tag">Ablations</span>
              <span className="tag">Responsible Disclosure</span>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="testimonials" className="reviews">
          <div className="container">
            <h2 className="section-title">Client Reviews & Outcomes</h2>
            <p className="section-description">Real feedback from clients who trusted my design expertise to elevate their brands successfully.</p>
            <div className="review-buttons">
              <a href="https://www.linkedin.com/in/mayankiitj" className="btn-primary" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
              <a href="#services" className="btn-secondary" onClick={(e) => handleSmoothScroll(e, '#services')}>See Services</a>
            </div>
            <div className="reviews-grid">
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#fbbf24" glareOpacity={0.25}>
                <div className="review-card">
                  <img src="https://framerusercontent.com/images/GTWhJyJde9nAeuMXqgYJh6jQhrU.jpg?scale-down-to-1024&width=800&height=1200" alt="Richards Johnson" />
                  <h3>Richards Johnson</h3>
                  <p className="review-title">Creative Director & Lead Designer</p>
                  <div className="rating">
                    <span>5.0</span>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </GlareHover>
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#fbbf24" glareOpacity={0.25}>
                <div className="review-card">
                  <img src="https://framerusercontent.com/images/c5E9pkEhKO6BmnqFuXLWa9Xqw34.png?scale-down-to-1024&width=904&height=1200" alt="June Lee" />
                  <h3>June Lee</h3>
                  <p className="review-title">CEO of GreenRoots</p>
                  <div className="rating">
                    <span>5.0</span>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </GlareHover>
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#fbbf24" glareOpacity={0.25}>
                <div className="review-card">
                  <img src="https://framerusercontent.com/images/hSbSnYWGLq3elsCJfJAmFGgQZOc.png?scale-down-to-512&width=1200&height=904" alt="Jona Carter" />
                  <h3>Jona Carter</h3>
                  <p className="review-title">Founder of EcoLux</p>
                  <div className="rating">
                    <span>5.0</span>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </GlareHover>
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#fbbf24" glareOpacity={0.25}>
                <div className="review-card">
                  <img src="https://framerusercontent.com/images/VG4Ga2U7ZktrC75M3Vg8eUynj4M.png?scale-down-to-512&width=600&height=600" alt="Sofia Toms" />
                  <h3>Sofia Toms</h3>
                  <p className="review-title">Founder at GreenK Studios</p>
                  <div className="rating">
                    <span>5.0</span>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </GlareHover>
            </div>
            <div className="stats">
              <div className="stat-item">
                <h3>180+</h3>
                <p>design projects completed.</p>
              </div>
              <div className="stat-item">
                <h3>96%</h3>
                <p>Client satisfaction rate.</p>
              </div>
              <div className="stat-item">
                <h3>Newbie</h3>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* FAQ Section removed per request */}

        {/* CTA Section */}
        <section id="contact" className="cta">
          <div className="container">
            <h2>Need secure, explainable AI or data systems? Let's design and ship them responsibly.</h2>
            <div className="cta-buttons">
              <a href="https://www.linkedin.com/in/mayankiitj" className="btn-primary" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
            </div>
            <div className="cta-social">
              <a href="https://instagram.com/mayyanks" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://x.com/mayyankks/" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/Mayank-iitj" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/mayankiitj" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <p className="cta-email">ms1591934@gmail.com</p>
            <p className="cta-email">admin@mayyanks.app</p>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Mayank Sharma</strong> – AI Engineer & Data Scientist
            <div>IIT Jodhpur</div>
          </div>
          <div className="footer-links">
            <a href="https://github.com/mayank-iitj" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mayankiitj" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>

      <Dock
        items={[
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>, label: 'About', onClick: () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>, label: 'Projects', onClick: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/></svg>, label: 'Gallery', onClick: () => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>, label: 'Services', onClick: () => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>, label: 'Reviews', onClick: () => document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, label: 'GitHub', onClick: () => window.open('https://github.com/Mayank-iitj', '_blank') },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, label: 'Contact', onClick: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }
          ,{ icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M14 2H6c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm0 2 4 4h-4V4zM8 12h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>, label: 'Resume', onClick: () => window.open('/resume-ms.pdf', '_blank', 'noopener,noreferrer') }
        ]}
        magnification={70}
        distance={200}
        panelHeight={68}
        baseItemSize={50}
      />
    </>
  );
}

export default App;
