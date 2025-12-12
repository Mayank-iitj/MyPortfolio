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
import GradientText from './GradientText';
import PillNav from './PillNav';
import './App.css';
import './CardShine.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skills/Technologies logos
  const skillLogos = [
    { node: <div className="skill-logo">Data Analysis</div>, title: 'Data Analysis' },
    { node: <div className="skill-logo">Logo Design</div>, title: 'Logo Design' },
    { node: <div className="skill-logo">UX Design</div>, title: 'UX Design' },
    { node: <div className="skill-logo">Branding</div>, title: 'Branding' },
    { node: <div className="skill-logo">AI Operations</div>, title: 'AI Operations' },
    { node: <div className="skill-logo">Figma</div>, title: 'Figma' },
    { node: <div className="skill-logo">Data Operation</div>, title: 'Data Operation' },
    { node: <div className="skill-logo">Python</div>, title: 'Python' },
    { node: <div className="skill-logo">React</div>, title: 'React' },
    { node: <div className="skill-logo">Machine Learning</div>, title: 'Machine Learning' }
  ];

  // Project items list with direct URLs
  const projectItems = [
    { title: 'GSCC (Game System Compatibility Checker)', url: 'https://iridescent-rolypoly-782dae.netlify.app/' },
    { title: 'Attendance, Salary, PF, and Performance Tracker', url: 'https://wmsms.vercel.app/' },
    { title: 'Moody News', url: 'https://moody-news.vercel.app/' },
    { title: 'NEL (Named Entity Linking)', url: 'https://nel-by-ms.netlify.app/' },
    { title: 'QuantumShield Firewall', url: 'https://fire-wall.netlify.app/' },
    { title: 'All RounderAPI (Surreal API Key Generator)', url: 'https://allrounder-api.netlify.app/' },
    { title: 'Traffic Management Wizard', url: 'https://gregarious-buttercream-270467.netlify.app/' },
    { title: 'Text Analyzer Pro', url: 'https://analyzetex.netlify.app/' },
    { title: 'CardioDetect', url: 'https://dlqmwdpj.manus.space/' },
    { title: 'Face Mask Detection with Deep Learning', url: 'https://xlhyimcjxn0d.manus.space/' },
    { title: 'Customer Churn Prediction', url: 'https://app--clay-shop-1f50815c.base44.app/' },
    { title: 'Music Genre Classification', url: 'https://genre-classifyer.netlify.app/' },
    { title: 'E-Commerce Product Recommendation System', url: 'https://ss-analysis-ms.netlify.app/' },
    { title: 'Sentiment Analysis on Social Media', url: 'https://msfacify.netlify.app/' },
    { title: 'Spam Mail Analyzer', url: 'https://app--cosmic-guard-30c712d6.base44.app/' },
    { title: 'SmartCity IoT', url: 'https://splendid-pika-249aa2.netlify.app/' },
    { title: 'Life Goal Unleashed (Life Pattern Analyzer)', url: 'https://lifexly.netlify.app/' },
    { title: 'SocialStarX', url: 'https://dynamic-flan-4984b0.netlify.app/#l' },
    { title: 'ReactNative', url: 'https://reactnativeproject.lovable.app/' },
    { title: 'X Analytics', url: 'https://market-analytics.netlify.app/' },
    { title: 'CredWise', url: 'https://cardx.lovable.app/' },
    { title: 'FintechAnalytics', url: 'https://fintechanalytics.vercel.app/' },
    { title: 'SalesAnalytics', url: 'https://stately-starship-297297.netlify.app/' },
    { title: 'msGPT', url: 'https://gptbymayank.lovable.app/' }
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
      <ClickSpark
        sparkColor="#6366f1"
        sparkSize={12}
        sparkRadius={25}
        sparkCount={12}
        duration={500}
        easing="ease-out"
        extraScale={1.2}
      >
        <Galaxy 
          focal={[0.5, 0.5]}
          rotation={[1.0, 0.0]}
          starSpeed={0.5}
          density={1}
          hueShift={140}
          speed={1.0}
          mouseInteraction={true}
          glowIntensity={0.5}
          saturation={0.3}
          mouseRepulsion={true}
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.05}
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
        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div style={{ height: '120px', marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1 style={{ margin: 0, lineHeight: 1 }} aria-label="Mayank Sharma | Data Scientist and Full-Stack Developer">
                <GradientText
                  className="home-name"
                  colors={["#6366f1", "#22d3ee", "#8b5cf6", "#22d3ee", "#6366f1"]}
                  animationSpeed={10}
                  showBorder={true}
                >
                  Mayank Sharma | Data Scientist & Full-Stack Developer
                </GradientText>
              </h1>
            </div>
            <div className="about-text about-intro">
              <div className="about-text">
                <p>Meet Mayank Sharma, Student at IIT JODHPUR. He is passionate about tech fond of AI and Data. Skilled in Data Analysis and Artificial Intelligence. The Extraordinary!</p>
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
            <h2 className="section-subtitle">Recent Works</h2>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2 className="section-title">Project Gallery</h2>
            <p className="section-description">Explore a curated collection of my work and creative projects.</p>
          </div>
          <InfiniteMenu 
            items={projectItems.map(p => ({
              image: 'https://picsum.photos/seed/' + encodeURIComponent(p.title) + '/800/600?grayscale',
              title: p.title,
              description: '',
              link: p.url
            }))}
          />
        </section>

        {/* Process Section */}
        <section id="process" className="process">
          <div className="container">
            <h2 className="section-title">Process</h2>
            <p className="section-description">crafting bold visuals that inspire and elevate brands with thought process.</p>
            <div className="process-buttons">
              <a href="https://github.com/Mayank-iitj" className="btn-secondary" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://github.com/Mayank-iitj" className="btn-secondary" target="_blank" rel="noopener noreferrer">See Projects</a>
            </div>
            <div className="process-steps">
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.3}>
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Define Your Vision</h3>
                  <p>Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.</p>
                </div>
              </GlareHover>
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.3}>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Submit Your Request</h3>
                  <p>Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.</p>
                </div>
              </GlareHover>
              <GlareHover width="100%" height="100%" background="transparent" borderRadius="30px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.3}>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Project Delivered</h3>
                  <p>As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.</p>
                </div>
              </GlareHover>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title">Services</h2>
            <p className="section-description">Helping businesses standout with brand identity packaging that captivates and converts effectively.</p>
            <div className="services-grid">
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">Data Analysis</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">Data Engineering</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">AI Engineer</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">Logo Designing</div>
              </GlareHover>
              <GlareHover width="auto" height="auto" background="transparent" borderRadius="50px" borderColor="var(--border-color)" glareColor="#8b5cf6" glareOpacity={0.35}>
                <div className="service-card">FrontEnd Dev</div>
              </GlareHover>
            </div>
            <div className="services-buttons">
              <a href="https://instagram.com/mayyanks" className="btn-secondary" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://github.com/Mayank-iitj" className="btn-secondary" target="_blank" rel="noopener noreferrer">See Projects</a>
            </div>
            <div className="services-list">
              <div className="services-column">
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">Data Analytics</div>
                </GlareHover>
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">Wix</div>
                </GlareHover>
              </div>
              <div className="services-column">
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">AI Agent Development</div>
                </GlareHover>
                <GlareHover width="100%" height="auto" background="transparent" borderRadius="20px" borderColor="var(--border-color)" glareColor="#6366f1" glareOpacity={0.4}>
                  <div className="service-item-large">Machine Learning</div>
                </GlareHover>
              </div>
            </div>
            <div className="services-tags">
              <span className="tag">Slide Decks</span>
              <span className="tag">Copywriting</span>
              <span className="tag">Brand Graphics</span>
              <span className="tag">Brand Migration</span>
              <span className="tag">Package Design</span>
              <span className="tag">Branding</span>
              <span className="tag">Optimization</span>
              <span className="tag">Brand Landing Pages</span>
              <span className="tag">Social Media</span>
              <span className="tag">Icons</span>
              <span className="tag">Brand Visibility</span>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="testimonials" className="reviews">
          <div className="container">
            <h2 className="section-title">Client Reviews</h2>
            <p className="section-description">Real feedback from clients who trusted my design expertise to elevate their brands successfully.</p>
            <div className="review-buttons">
              <a href="https://instagram.com/mayyanks" className="btn-primary" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
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
                <h3>15+</h3>
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
            <h2>Curious about what we can create together? Let's bring something extraordinary to life!</h2>
            <div className="cta-buttons">
              <a href="https://instagram.com/mayyanks" className="btn-primary" target="_blank" rel="noopener noreferrer">Book a Free Call</a>
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
            </div>
            <p className="cta-email">ms1591934@gmail.com</p>
          </div>
        </section>
      </div>

      <Dock
        items={[
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>, label: 'About', onClick: () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>, label: 'Projects', onClick: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/></svg>, label: 'Gallery', onClick: () => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>, label: 'Services', onClick: () => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>, label: 'Reviews', onClick: () => document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' }) },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, label: 'GitHub', onClick: () => window.open('https://github.com/Mayank-iitj', '_blank') },
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, label: 'Contact', onClick: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }
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
