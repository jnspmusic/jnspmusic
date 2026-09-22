import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Headphones,
  Instagram,
  Mail,
  Menu,
  Music2,
  Play,
  Radio,
  X,
  Youtube,
} from 'lucide-react';

type Language = 'en' | 'fr';

const links = {
  youtube: 'https://music.youtube.com/channel/UCFAKDiOFbZkd9jhMRYbP6NQ?feature=shared',
  spotify: 'https://open.spotify.com/artist/25qqFcycQizw6u2Xb80tnu?si=IvZcME41Q465arofPwpP7Q',
  instagram: 'https://www.instagram.com/jnsp.music/',
  email: 'jnsp@jnspmusic.com',
};

const copy = {
  en: {
    skip: 'Skip to content',
    nav: { release: 'Release', story: 'Artist', connect: 'Connect' },
    heroKicker: 'Independent electronic artist · France',
    heroLineOne: 'EMOTION',
    heroLineTwo: 'IN MOTION.',
    heroBody:
      'Progressive house, trance and 80s-inspired energy — built for late nights, open roads and the moments that stay with you.',
    listen: 'Listen now',
    discover: 'Discover the release',
    latest: 'Latest release',
    newSingle: 'New single',
    releaseText:
      'A melodic electronic track where nostalgic synths meet progressive energy. “Just a Little More Time” is about holding on to a moment before it disappears.',
    onSpotify: 'Play on Spotify',
    onYoutube: 'Play on YouTube Music',
    soundTitle: 'Melody first. Always.',
    soundText:
      'JNSP creates electronic music driven by feeling: deep melodies, powerful basslines and a sense of movement that connects the club to something more personal.',
    artistEyebrow: 'Behind JNSP',
    artistTitle: 'Electronic music with a human pulse.',
    artistTextOne:
      'JNSP is the independent project of French producer Sébastien. His sound moves freely between progressive house, trance and 80s-inspired EDM.',
    artistTextTwo:
      'Every track begins with an emotion and grows into an atmosphere — music made to bring energy, hope and escape without losing its soul.',
    industryEyebrow: 'Labels · Playlists · Media',
    industryTitle: 'Let’s take the music further.',
    industryText:
      'For label opportunities, playlist consideration, media enquiries, collaborations or bookings, get in touch directly.',
    email: 'Contact JNSP',
    follow: 'Follow the project',
    rights: 'All rights reserved.',
    noTracking: 'Independent music. No tracking cookies.',
  },
  fr: {
    skip: 'Aller au contenu',
    nav: { release: 'Sortie', story: 'Artiste', connect: 'Contact' },
    heroKicker: 'Artiste électronique indépendant · France',
    heroLineOne: 'L’ÉMOTION',
    heroLineTwo: 'EN MOUVEMENT.',
    heroBody:
      'House progressive, trance et énergie inspirée des années 80 — une musique pour les nuits intenses, les routes ouvertes et les instants qui restent.',
    listen: 'Écouter maintenant',
    discover: 'Découvrir le titre',
    latest: 'Dernière sortie',
    newSingle: 'Nouveau single',
    releaseText:
      'Un titre électronique mélodique où les synthés nostalgiques rencontrent une énergie progressive. « Just a Little More Time » parle de cet instant que l’on voudrait retenir avant qu’il disparaisse.',
    onSpotify: 'Écouter sur Spotify',
    onYoutube: 'Écouter sur YouTube Music',
    soundTitle: 'La mélodie d’abord. Toujours.',
    soundText:
      'JNSP crée une musique électronique guidée par l’émotion : mélodies profondes, basses puissantes et mouvement permanent, entre énergie du club et expérience intime.',
    artistEyebrow: 'Derrière JNSP',
    artistTitle: 'Une musique électronique au rythme humain.',
    artistTextOne:
      'JNSP est le projet indépendant du producteur français Sébastien. Son univers voyage librement entre house progressive, trance et EDM inspirée des années 80.',
    artistTextTwo:
      'Chaque morceau naît d’une émotion et devient une atmosphère — une musique conçue pour transmettre de l’énergie, de l’espoir et une véritable évasion, sans perdre son âme.',
    industryEyebrow: 'Labels · Playlists · Médias',
    industryTitle: 'Faisons voyager la musique plus loin.',
    industryText:
      'Pour les labels, sélections de playlists, médias, collaborations ou demandes de booking, contactez-moi directement.',
    email: 'Contacter JNSP',
    follow: 'Suivre le projet',
    rights: 'Tous droits réservés.',
    noTracking: 'Musique indépendante. Aucun cookie de suivi.',
  },
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{t.skip}</a>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="JNSP — Home">
          JNSP<span className="brand-dot">.</span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#release" onClick={closeMenu}>{t.nav.release}</a>
          <a href="#artist" onClick={closeMenu}>{t.nav.story}</a>
          <a href="#connect" onClick={closeMenu}>{t.nav.connect}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <span aria-hidden="true">/</span>
            <button className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')} aria-pressed={language === 'fr'}>FR</button>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow"><span />{t.heroKicker}</p>
            <h1><span>{t.heroLineOne}</span><span className="outline-text">{t.heroLineTwo}</span></h1>
            <p className="hero-description">{t.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={links.spotify} target="_blank" rel="noreferrer">
                <Play size={18} fill="currentColor" /> {t.listen}
              </a>
              <a className="text-link" href="#release">{t.discover}<ArrowDownRight size={18} /></a>
            </div>
          </div>

          <div className="hero-art">
            <div className="record-ring ring-one" />
            <div className="record-ring ring-two" />
            <img src="/newpic.png" alt="Just a Little More Time — JNSP single artwork" />
            <div className="now-playing">
              <span className="sound-bars" aria-hidden="true"><i /><i /><i /><i /></span>
              <span><small>{t.latest}</small>Just a Little More Time</span>
            </div>
          </div>

          <div className="hero-side-label" aria-hidden="true">JNSP / 2026 / ELECTRONIC</div>
        </section>

        <section className="release section" id="release">
          <div className="section-number">01</div>
          <div className="release-art-wrap">
            <img src="/newpic.png" alt="Cover artwork for Just a Little More Time by JNSP" loading="lazy" />
            <span className="art-caption">JNSP — 2026</span>
          </div>
          <div className="release-content">
            <p className="eyebrow"><span />{t.newSingle}</p>
            <h2>Just a Little<br /><em>More Time</em></h2>
            <p>{t.releaseText}</p>
            <div className="genre-list" aria-label="Genres">
              <span>Progressive house</span><span>Trance</span><span>80s-inspired</span>
            </div>
            <div className="platform-list">
              <a href={links.spotify} target="_blank" rel="noreferrer"><Headphones size={20} />{t.onSpotify}<ArrowUpRight size={18} /></a>
              <a href={links.youtube} target="_blank" rel="noreferrer"><Youtube size={20} />{t.onYoutube}<ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="manifesto">
          <div className="manifesto-word" aria-hidden="true">FEEL</div>
          <div className="manifesto-content">
            <Music2 size={34} />
            <h2>{t.soundTitle}</h2>
            <p>{t.soundText}</p>
          </div>
        </section>

        <section className="artist section" id="artist">
          <div className="section-number">02</div>
          <div className="artist-copy">
            <p className="eyebrow"><span />{t.artistEyebrow}</p>
            <h2>{t.artistTitle}</h2>
            <div className="artist-text">
              <p>{t.artistTextOne}</p>
              <p>{t.artistTextTwo}</p>
            </div>
            <a className="text-link" href={links.instagram} target="_blank" rel="noreferrer">
              <Instagram size={18} />{t.follow}<ArrowUpRight size={18} />
            </a>
          </div>
          <div className="artist-visual">
            <img src="/photo platine.jpg" alt="JNSP behind the decks" loading="lazy" />
            <div className="artist-stamp"><Radio size={28} /><span>INDEPENDENT<br />ARTIST</span></div>
          </div>
        </section>

        <section className="connect" id="connect">
          <div className="connect-glow" aria-hidden="true" />
          <p className="eyebrow"><span />{t.industryEyebrow}</p>
          <h2>{t.industryTitle}</h2>
          <p>{t.industryText}</p>
          <a className="button button-light" href={`mailto:${links.email}`}><Mail size={19} />{t.email}<ArrowUpRight size={18} /></a>
          <a className="email-address" href={`mailto:${links.email}`}>{links.email}</a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">JNSP<span className="brand-dot">.</span></a>
        <div className="footer-socials">
          <a href={links.spotify} target="_blank" rel="noreferrer">Spotify</a>
          <a href={links.youtube} target="_blank" rel="noreferrer">YouTube Music</a>
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} JNSP Music. {t.rights}</span>
          <span>{t.noTracking}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
