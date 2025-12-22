'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [imageError, setImageError] = useState(false);
  const [dishMatchOpen, setDishMatchOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const [musicOpen, setMusicOpen] = useState(false);
  const [streetwearOpen, setStreetwearOpen] = useState(false);
  const [spotifyInsightsOpen, setSpotifyInsightsOpen] = useState(false);
  const [streamBotOpen, setStreamBotOpen] = useState(false);

  return (
    <main>
      <div className="code-background"></div>
      <div className="grid-overlay"></div>
      
      <header className="header-section fade-in">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            {!imageError ? (
              <Image
                src="/saad.webp"
                alt="Lahlou Saad"
                width={160}
                height={160}
                className="profile-image"
                priority
                unoptimized={false}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="profile-placeholder">
                <span className="placeholder-text">&lt;LS/&gt;</span>
              </div>
            )}
            <div className="profile-glow"></div>
          </div>
        </div>
        <div className="header-content">
          <div className="name-wrapper">
            <span className="code-bracket">&lt;</span>
            <h1 className="title-animate">Lahlou Saad</h1>
            <span className="code-bracket">/&gt;</span>
          </div>
          <p className="subtitle slide-up">
            <span className="code-var">const</span> <span className="code-name">developer</span> = <span className="code-string">&apos;Web & Mobile&apos;</span>;
          </p>
          <p className="description slide-up-delay">
            Étudiant en 3ᵉ année en formation initiale à l’IUT de Lens, je m’oriente vers le développement d’applications web et mobiles. J’aime concevoir des projets où créativité et informatique se rejoignent, notamment en reliant des domaines comme la musique et le numérique.
          </p>
        </div>
      </header>

      <section className="contact-section card-enter">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-item hover-lift">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">📍</div>
            </div>
            <div className="contact-info">
              <span className="contact-label">Location</span>
              <span className="contact-value">Lens, France</span>
            </div>
          </div>
          <div className="contact-item hover-lift">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">✉️</div>
            </div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <a href="mailto:lahlou.saad@gmail.com" className="contact-value">lahlou.saad@gmail.com</a>
            </div>
          </div>
          <div className="contact-item hover-lift">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">🔗</div>
            </div>
            <div className="contact-info">
              <span className="contact-label">Portfolio</span>
              <a href="https://lahlousaad4.github.io/" className="contact-value" target="_blank" rel="noopener noreferrer">lahlousaad4.github.io</a>
            </div>
          </div>
          <div className="contact-item hover-lift">
            <div className="contact-icon-wrapper">
              <div className="contact-icon">🌐</div>
            </div>
            <div className="contact-info">
              <span className="contact-label">Langues</span>
              <span className="contact-value">Français, Arabe, Anglais</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section card-enter-delay">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">À propos</h2>
          <div className="section-line"></div>
        </div>
        <div className="info-card hover-card">
          <p>
            Salut ! Je suis Saad Lahlou, je suis étudiant à l&apos;IUT de Lens et j&apos;aime coder ce que j&apos;aime. Relier mes passions à mes projets de développement est une source constante d&apos;inspiration. Si je peux simplifier une tâche du quotidien, j&apos;adore trouver des solutions et relever des défis. Mon objectif est de créer des solutions innovantes qui améliorent l&apos;expérience utilisateur et facilitent les tâches quotidiennes. J&apos;ai une solide expérience en développement web, automatisation, et gestion des API.
          </p>
        </div>
      </section>

      <section id="projets" className="project-section card-enter-delay-2">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Projets</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="project-category">
          <h3 className="category-title">
            <span className="code-bracket">const</span> <span className="code-name">projetsPro</span> = <span className="code-bracket">[</span>
          </h3>
          
          <div className="project-card hover-card">
            <div className="project-header">
              <h3>
                <span className="code-bracket">function</span> Bot Spotify<span className="code-bracket">()</span>
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Selenium</span>
                <span className="tech-tag">API</span>
              </div>
            </div>
            <p className="project-description">Automatisation des interactions sur Spotify (création de comptes, gestion de playlists).</p>
            <ul className="project-details">
              <li>Utilisation de Selenium pour l&apos;interaction avec la plateforme</li>
              <li>Résolution de CAPTCHA automatisée et gestion multithreading</li>
              <li>Technologies utilisées : Python, Selenium, API Spotify</li>
            </ul>
          </div>

          <div className="project-card hover-card clickable-card" onClick={() => setSpotifyInsightsOpen(true)}>
            <div className="project-header">
              <h3>
                <span className="code-bracket">function</span> Spotify Insights<span className="code-bracket">()</span>
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Selenium</span>
              </div>
            </div>
            <p className="project-description">Application web pour explorer les artistes, chansons et genres les plus écoutés.</p>
            <ul className="project-details">
              <li>Utilisation de l&apos;API Spotify pour récupérer les données musicales</li>
              <li>Web scraping avec Selenium pour des informations supplémentaires (auditeurs, villes)</li>
              <li>Technologies : Flask, Python, Selenium, API Spotify</li>
            </ul>
            <p className="click-hint">Cliquez pour voir l&apos;image →</p>
          </div>

          <div className="project-card hover-card clickable-card" onClick={() => setStreamBotOpen(true)}>
            <div className="project-header">
              <h3>
                <span className="code-bracket">function</span> StreamBot<span className="code-bracket">()</span>
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Discord.py</span>
                <span className="tech-tag">Flask</span>
              </div>
            </div>
            <p className="project-description">Bot Discord permettant de rechercher et diffuser des chaînes IPTV.</p>
            <ul className="project-details">
              <li>Chargement de listes M3U et lecture via un serveur Flask</li>
              <li>Commandes simples sur discord pour une expérience utilisateur intuitive</li>
              <li>Technologies : Python, Discord.py, Flask</li>
            </ul>
            <p className="click-hint">Cliquez pour voir l&apos;image →</p>
          </div>

          <div className="project-card hover-card clickable-card" onClick={() => setDishMatchOpen(true)}>
            <div className="project-header">
              <h3>
                <span className="code-bracket">function</span> DishMatch<span className="code-bracket">()</span>
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Expo</span>
                <span className="tech-tag">Supabase</span>
              </div>
            </div>
            <p className="project-description">
              Application pour couples où les utilisateurs se rejoignent en groupe et peuvent swiper des recettes (droite pour liker, gauche pour ne pas liker). Quand les deux partenaires ont liké la même recette, un match est créé avec une animation.
            </p>
            <p className="click-hint">Cliquez pour voir la démo vidéo →</p>
          </div>
          
          <span className="code-bracket closing-bracket">];</span>
        </div>

        <div className="project-category">
          <h3 className="category-title">
            <span className="code-bracket">const</span> <span className="code-name">projetsPerso</span> = <span className="code-bracket">[</span>
          </h3>
          
          <div className="project-card hover-card clickable-card" onClick={() => setStudioOpen(true)}>
            <div className="project-header">
              <h3>Studio d&apos;enregistrement musical</h3>
              <div className="tech-tags">
                <span className="tech-tag">Gestion</span>
                <span className="tech-tag">Production</span>
              </div>
            </div>
            <p className="project-description">Mise en place et aménagement d&apos;un espace dédié à l&apos;enregistrement et la production musicale.</p>
            <ul className="project-details">
              <li>Gestion des sessions d&apos;enregistrement pour des artistes</li>
              <li>Supervision technique des morceaux: enregistrement, mixage, et mastering</li>
              <li>Gestion des réservations, de la communication sur les réseaux sociaux et de la facturation des artistes</li>
            </ul>
            <p className="click-hint">Cliquez pour voir les photos →</p>
          </div>

          <div className="project-card hover-card clickable-card" onClick={() => setStreetwearOpen(true)}>
            <div className="project-header">
              <h3>Marque de vêtements streetwear</h3>
              <div className="tech-tags">
                <span className="tech-tag">Design</span>
                <span className="tech-tag">Marketing</span>
              </div>
            </div>
            <p className="project-description">Co-fondateur d&apos;une marque de vêtements streetwear.</p>
            <ul className="project-details">
              <li>Création et design des produits (t-shirts, sweats, etc.)</li>
              <li>Négociation et collaboration avec des fournisseurs locaux pour la fabrication</li>
              <li>Développement de l&apos;identité de marque</li>
              <li>Stratégie de marketing et de vente</li>
            </ul>
            <p className="click-hint">Cliquez pour voir les photos →</p>
          </div>

          <div className="project-card hover-card clickable-card" onClick={() => setMusicOpen(true)}>
            <div className="project-header">
              <h3>Production d&apos;album musical et clips vidéo</h3>
              <div className="tech-tags">
                <span className="tech-tag">Production</span>
                <span className="tech-tag">Vidéo</span>
              </div>
            </div>
            <p className="project-description">Enregistrement et production musicale.</p>
            <ul className="project-details">
              <li>Réalisation, montage, et édition des clips accompagnant l&apos;album</li>
              <li>Stratégie de diffusion et promotion sur les plateformes digitales (YouTube, Spotify, etc.)</li>
              <li>Coordination artistique et technique</li>
            </ul>
            <p className="click-hint">Cliquez pour voir la vidéo →</p>
          </div>
          
          <span className="code-bracket closing-bracket">];</span>
        </div>
      </section>

      <section className="skills-section card-enter-delay-3">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Compétences</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          <span className="skill-tag">HTML/CSS</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">TypeScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">React Native</span>
          <span className="skill-tag">Next.js</span>
          <span className="skill-tag">Expo</span>
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Flask</span>
          <span className="skill-tag">Java/JavaFX</span>
          <span className="skill-tag">Spring</span>
          <span className="skill-tag">PHP</span>
          <span className="skill-tag">PostgreSQL</span>
          <span className="skill-tag">MongoDB</span>
          <span className="skill-tag">Neo4j</span>
          <span className="skill-tag">Supabase</span>
          <span className="skill-tag">Selenium</span>
          <span className="skill-tag">API</span>
          <span className="skill-tag">Web Scraping</span>
          <span className="skill-tag">Git</span>
        </div>
      </section>

      <section className="info-section card-enter-delay-4">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Formation</h2>
          <div className="section-line"></div>
        </div>
        <div className="info-card hover-card">
          <div className="info-header">
            <h3>BUT Informatique</h3>
            <span className="info-year">2023 - 2026</span>
          </div>
          <p>Formation en développement web et mobile, algorithmique et bases de données.</p>
        </div>
        
        <div className="info-card hover-card" style={{ marginTop: '1.5rem' }}>
          <div className="info-header">
            <h3>Stage — IEMN (CNRS)</h3>
            <span className="info-year">12 mai - 18 juillet 2025</span>
          </div>
          <p>Stage effectué à l&apos;Institut d&apos;Électronique, de Microélectronique et de Nanotechnologie du CNRS.</p>
        </div>
        
        <div className="info-card hover-card" style={{ marginTop: '1.5rem' }}>
          <div className="info-header">
            <h3>Stage — IEMN (CNRS)</h3>
            <span className="info-year">16 mars - 19 juin 2026 (à venir)</span>
          </div>
          <p>Stage prévu à l&apos;Institut d&apos;Électronique, de Microélectronique et de Nanotechnologie du CNRS.</p>
        </div>
      </section>

      {dishMatchOpen && (
        <div className="modal-overlay" onClick={() => setDishMatchOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setDishMatchOpen(false)}>
              <span className="code-bracket">×</span>
            </button>
            <div className="modal-header">
              <h3>
                <span className="code-bracket">function</span> DishMatch<span className="code-bracket">()</span>
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Expo</span>
                <span className="tech-tag">Supabase</span>
              </div>
            </div>
            <div className="modal-body">
              <p className="project-description">
                Application pour couples où les utilisateurs se rejoignent en groupe et peuvent swiper des recettes (droite pour liker, gauche pour ne pas liker). Quand les deux partenaires ont liké la même recette, un match est créé avec une animation.
              </p>
              
              <div className="tech-details">
                <div className="tech-section">
                  <h4 className="tech-section-title">Framework & Langages</h4>
                  <ul className="tech-list">
                    <li>Expo SDK 54 — Framework React Native</li>
                    <li>React 19 + React Native 0.79 — UI mobile</li>
                    <li>JavaScript/TypeScript — Langages</li>
                  </ul>
                </div>
                <div className="tech-section">
                  <h4 className="tech-section-title">Backend</h4>
                  <ul className="tech-list">
                    <li>Supabase — Base de données PostgreSQL, authentification, API</li>
                  </ul>
                </div>
              </div>

              <div className="video-link-container">
                <a 
                  href="https://www.youtube.com/shorts/ogiKlvSa_yg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <span className="video-icon">▶</span>
                  <span>Voir la démo vidéo sur YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {studioOpen && (
        <div className="modal-overlay" onClick={() => setStudioOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setStudioOpen(false)}>
              <span className="code-bracket">×</span>
            </button>
            <div className="modal-header">
              <h3>Studio d&apos;enregistrement musical</h3>
              <div className="tech-tags">
                <span className="tech-tag">Gestion</span>
                <span className="tech-tag">Production</span>
              </div>
            </div>
            <div className="modal-body">
              <p className="project-description">
                Mise en place et aménagement d&apos;un espace dédié à l&apos;enregistrement et la production musicale.
              </p>
              <div className="images-gallery">
                <div className="image-container">
                  <Image
                    src="/studio1.webp"
                    alt="Studio d'enregistrement - Vue 1"
                    width={600}
                    height={400}
                    className="gallery-image"
                    unoptimized={false}
                  />
                </div>
                <div className="image-container">
                  <Image
                    src="/studio2.webp"
                    alt="Studio d'enregistrement - Vue 2"
                    width={600}
                    height={400}
                    className="gallery-image"
                    unoptimized={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {musicOpen && (
        <div className="modal-overlay" onClick={() => setMusicOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setMusicOpen(false)}>
              <span className="code-bracket">×</span>
            </button>
            <div className="modal-header">
              <h3>Production d&apos;album musical et clips vidéo</h3>
              <div className="tech-tags">
                <span className="tech-tag">Production</span>
                <span className="tech-tag">Vidéo</span>
              </div>
            </div>
            <div className="modal-body">
              <p className="project-description">
                Enregistrement et production musicale. Réalisation, montage, et édition des clips accompagnant l&apos;album. Stratégie de diffusion et promotion sur les plateformes digitales (YouTube, Spotify, etc.).
              </p>
              <div className="video-link-container">
                <a 
                  href="https://www.youtube.com/watch?v=UH-O8kIIaMg&list=RDUH-O8kIIaMg&start_radio=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <span className="video-icon">▶</span>
                  <span>Voir la vidéo sur YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {streetwearOpen && (
        <div className="modal-overlay" onClick={() => setStreetwearOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setStreetwearOpen(false)}>
              <span className="code-bracket">×</span>
            </button>
            <div className="modal-header">
              <h3>Marque de vêtements streetwear</h3>
              <div className="tech-tags">
                <span className="tech-tag">Design</span>
                <span className="tech-tag">Marketing</span>
              </div>
            </div>
            <div className="modal-body">
              <p className="project-description">
                Co-fondateur d&apos;une marque de vêtements streetwear. Création et design des produits, développement de l&apos;identité de marque et stratégie de marketing.
              </p>
              <div className="images-gallery">
                <div className="image-container">
                  <Image
                    src="/dhc1.webp"
                    alt="DHC Streetwear - Vue 1"
                    width={400}
                    height={400}
                    className="gallery-image"
                    unoptimized={false}
                  />
                </div>
                <div className="image-container">
                  <Image
                    src="/dhc2.webp"
                    alt="DHC Streetwear - Vue 2"
                    width={400}
                    height={400}
                    className="gallery-image"
                    unoptimized={false}
                  />
                </div>
                <div className="image-container">
                  <Image
                    src="/dhc3.webp"
                    alt="DHC Streetwear - Vue 3"
                    width={400}
                    height={400}
                    className="gallery-image"
                    unoptimized={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {spotifyInsightsOpen && (
        <div className="modal-overlay" onClick={() => setSpotifyInsightsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSpotifyInsightsOpen(false)}>
              <span className="code-bracket">×</span>
            </button>
            <div className="modal-header">
              <h3>
                <span className="code-bracket">function</span> Spotify Insights<span className="code-bracket">()</span>
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Selenium</span>
              </div>
            </div>
            <div className="modal-body">
              <p className="project-description">
                Application web pour explorer les artistes, chansons et genres les plus écoutés. Utilisation de l&apos;API Spotify pour récupérer les données musicales et web scraping avec Selenium.
              </p>
              <div className="images-gallery">
                <div className="image-container single-image">
                  <Image
                    src="/insights.webp"
                    alt="Spotify Insights"
                    width={800}
                    height={600}
                    className="gallery-image"
                    unoptimized={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {streamBotOpen && (
        <div className="modal-overlay" onClick={() => setStreamBotOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setStreamBotOpen(false)}>
              <span className="code-bracket">×</span>
            </button>
            <div className="modal-header">
              <h3>
                <span className="code-bracket">function</span> StreamBot<span className="code-bracket">()</span>
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Discord.py</span>
                <span className="tech-tag">Flask</span>
              </div>
            </div>
            <div className="modal-body">
              <p className="project-description">
                Bot Discord permettant de rechercher et diffuser des chaînes IPTV. Chargement de listes M3U et lecture via un serveur Flask avec des commandes simples pour une expérience utilisateur intuitive.
              </p>
              <div className="images-gallery">
                <div className="image-container single-image">
                  <Image
                    src="/iptv.webp"
                    alt="StreamBot IPTV"
                    width={800}
                    height={600}
                    className="gallery-image"
                    unoptimized={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
