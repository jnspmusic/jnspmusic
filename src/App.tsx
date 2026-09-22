import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Headphones,
  Instagram,
  Mail,
  Menu,
  Music2,
  Pause,
  Play,
  Radio,
  X,
  Youtube,
} from 'lucide-react';

type Language = 'en' | 'fr';

type Track = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  preview: string;
};

const links = {
  youtube: 'https://music.youtube.com/channel/UCFAKDiOFbZkd9jhMRYbP6NQ?feature=shared',
  spotify: 'https://open.spotify.com/artist/25qqFcycQizw6u2Xb80tnu?si=IvZcME41Q465arofPwpP7Q',
  instagram: 'https://www.instagram.com/jnsp.music/',
  email: 'jnsp@jnspmusic.com',
};

const tracks: Track[] = [
  {
    id: 'wake-up',
    title: 'Wake Up',
    subtitle: 'Remastered',
    cover: '/media/wake-up.webp',
    preview: '/media/wake-up-preview.mp3',
  },
  {
    id: 'life',
    title: 'LIFE',
    subtitle: 'Original track',
    cover: '/media/life.webp',
    preview: '/media/life-preview.mp3',
  },
  {
    id: 'in-my-world',
    title: 'In My World',
    subtitle: 'Remix · Remastered',
    cover: '/media/in-my-world.webp',
    preview: '/media/in-my-world-preview.mp3',
  },
];

const copy = {
  en: {
    skip: 'Skip to content',
    nav: { release: 'Music', story: 'Artist', connect: 'Connect' },
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
    preview: '30 sec preview',
    previewPlay: 'Play preview',
    previewPause: 'Pause preview',
    hoverHint: 'Hover to listen · tap on mobile',
    catalogEyebrow: 'More from JNSP',
    catalogTitle: 'Enter the JNSP universe.',
    catalogText: 'Move over a cover to hear a 30-second preview. On mobile, tap the cover.',
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
    privacyLink: 'Privacy Policy',
    privacyTitle: 'Privacy Policy',
    privacyUpdated: 'Last updated: September 2026',
    privacyOne: 'This website does not place advertising cookies and does not use Google Analytics or any advertising tracker.',
    privacyTwo: 'A simple visitor counter provided by Hits.sh is displayed at the bottom of the page. When it loads, this external service may receive technical information such as your IP address and browser data. It is used only to estimate the site’s general audience, with no advertising purpose.',
    privacyThree: 'Audio previews and artwork are hosted directly on this website. Spotify, YouTube Music and Instagram receive information only if you choose to open one of their links.',
    privacyFour: 'No registration is required. JNSP Music does not sell personal data, create visitor profiles or use information for targeted advertising.',
    privacyContact: 'For any privacy question, contact',
    closePrivacy: 'Close Privacy Policy',
  },
  fr: {
    skip: 'Aller au contenu',
    nav: { release: 'Musique', story: 'Artiste', connect: 'Contact' },
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
    preview: 'Extrait de 30 s',
    previewPlay: 'Lire l’extrait',
    previewPause: 'Mettre en pause',
    hoverHint: 'Survolez pour écouter · touchez sur mobile',
    catalogEyebrow: 'Plus de titres JNSP',
    catalogTitle: 'Entrez dans l’univers JNSP.',
    catalogText: 'Passez sur une pochette pour entendre un extrait de 30 secondes. Sur mobile, touchez la pochette.',
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
    privacyLink: 'Politique de confidentialité',
    privacyTitle: 'Politique de confidentialité',
    privacyUpdated: 'Dernière mise à jour : septembre 2026',
    privacyOne: 'Ce site ne dépose aucun cookie publicitaire et n’utilise ni Google Analytics ni aucun traceur publicitaire.',
    privacyTwo: 'Un compteur de visites simple fourni par Hits.sh est affiché en bas de page. Lors de son chargement, ce service externe peut recevoir des informations techniques comme votre adresse IP et les données de votre navigateur. Il sert uniquement à estimer l’audience générale du site, sans finalité publicitaire.',
    privacyThree: 'Les extraits audio et les pochettes sont hébergés directement sur ce site. Spotify, YouTube Music et Instagram reçoivent des informations uniquement si vous choisissez d’ouvrir l’un de leurs liens.',
    privacyFour: 'Aucune inscription n’est demandée. JNSP Music ne vend aucune donnée personnelle, ne crée aucun profil de visiteur et n’utilise aucune information pour de la publicité ciblée.',
    privacyContact: 'Pour toute question sur la confidentialité, contactez',
    closePrivacy: 'Fermer la politique de confidentialité',
  },
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [blockedTrack, setBlockedTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const privacyDialogRef = useRef<HTMLDialogElement>(null);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const closeMenu = () => setMenuOpen(false);

  const startPreview = async (id: string, source: string, fromHover = false) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.src.endsWith(source)) {
      audio.src = source;
      audio.load();
    }

    audio.currentTime = 0;
    try {
      await audio.play();
      setActiveTrack(id);
      setBlockedTrack(null);
    } catch {
      if (fromHover) setBlockedTrack(id);
    }
  };

  const stopPreview = (id?: string) => {
    const audio = audioRef.current;
    if (!audio || (id && activeTrack !== id)) return;
    audio.pause();
    audio.currentTime = 0;
    setActiveTrack(null);
  };

  const togglePreview = (id: string, source: string) => {
    if (activeTrack === id) stopPreview(id);
    else void startPreview(id, source);
  };

  const hoverPreview = (event: React.PointerEvent, id: string, source: string) => {
    if (event.pointerType === 'mouse') void startPreview(id, source, true);
  };

  const leavePreview = (event: React.PointerEvent, id: string) => {
    if (event.pointerType === 'mouse') stopPreview(id);
  };

  const openPrivacy = () => privacyDialogRef.current?.showModal();
  const closePrivacy = () => privacyDialogRef.current?.close();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{t.skip}</a>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="JNSP — Home">
          JNSP<span className="brand-dot">.</span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#music" onClick={closeMenu}>{t.nav.release}</a>
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
        <audio ref={audioRef} preload="none" onEnded={() => setActiveTrack(null)} />
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

          <div
            className={`hero-art ${activeTrack === 'just-a-little-more-time' ? 'is-playing' : ''}`}
            onPointerEnter={(event) => hoverPreview(event, 'just-a-little-more-time', '/media/just-a-little-more-time-preview.mp3')}
            onPointerLeave={(event) => leavePreview(event, 'just-a-little-more-time')}
          >
            <div className="record-ring ring-one" />
            <div className="record-ring ring-two" />
            <img src="/media/just-a-little-more-time.webp" alt="Just a Little More Time — JNSP single artwork" />
            <button
              className="hero-preview-button"
              type="button"
              onClick={() => togglePreview('just-a-little-more-time', '/media/just-a-little-more-time-preview.mp3')}
              aria-label={activeTrack === 'just-a-little-more-time' ? `${t.previewPause}: Just a Little More Time` : `${t.previewPlay}: Just a Little More Time`}
            >
              {activeTrack === 'just-a-little-more-time' ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
            </button>
            <div className="now-playing">
              <span className="sound-bars" aria-hidden="true"><i /><i /><i /><i /></span>
              <span><small>{t.latest}</small>Just a Little More Time</span>
            </div>
          </div>

          <div className="hero-side-label" aria-hidden="true">JNSP / 2026 / ELECTRONIC</div>
        </section>

        <section className="release section" id="release">
          <div className="section-number">01</div>
          <button
            className={`release-art-wrap preview-cover ${activeTrack === 'just-a-little-more-time' ? 'is-playing' : ''}`}
            type="button"
            onPointerEnter={(event) => hoverPreview(event, 'just-a-little-more-time', '/media/just-a-little-more-time-preview.mp3')}
            onPointerLeave={(event) => leavePreview(event, 'just-a-little-more-time')}
            onClick={() => togglePreview('just-a-little-more-time', '/media/just-a-little-more-time-preview.mp3')}
            aria-label={activeTrack === 'just-a-little-more-time' ? `${t.previewPause}: Just a Little More Time` : `${t.previewPlay}: Just a Little More Time`}
          >
            <img src="/media/just-a-little-more-time.webp" alt="Cover artwork for Just a Little More Time by JNSP" loading="lazy" />
            <span className="art-caption">JNSP — 2026</span>
            <span className="preview-overlay">
              <span className="preview-icon">{activeTrack === 'just-a-little-more-time' ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}</span>
              <span>{blockedTrack === 'just-a-little-more-time' ? t.previewPlay : t.hoverHint}</span>
            </span>
          </button>
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

        <section className="catalog section" id="music">
          <div className="section-number">02</div>
          <div className="catalog-heading">
            <div>
              <p className="eyebrow"><span />{t.catalogEyebrow}</p>
              <h2>{t.catalogTitle}</h2>
            </div>
            <p>{t.catalogText}</p>
          </div>
          <div className="track-grid">
            {tracks.map((track, index) => (
              <article
                className={`track-card ${activeTrack === track.id ? 'is-playing' : ''}`}
                key={track.id}
                onPointerEnter={(event) => hoverPreview(event, track.id, track.preview)}
                onPointerLeave={(event) => leavePreview(event, track.id)}
              >
                <button
                  className="track-cover"
                  type="button"
                  onClick={() => togglePreview(track.id, track.preview)}
                  aria-label={activeTrack === track.id ? `${t.previewPause}: ${track.title}` : `${t.previewPlay}: ${track.title}`}
                >
                  <img src={track.cover} alt={`${track.title} — JNSP cover artwork`} loading="lazy" />
                  <span className="track-play">{activeTrack === track.id ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}</span>
                  <span className="track-preview-label">{blockedTrack === track.id ? t.previewPlay : t.preview}</span>
                </button>
                <div className="track-info">
                  <span>0{index + 1}</span>
                  <div><h3>{track.title}</h3><p>{track.subtitle}</p></div>
                </div>
              </article>
            ))}
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
          <div className="section-number">03</div>
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
          <span className="footer-privacy"><button type="button" onClick={openPrivacy}>{t.privacyLink}</button><span>{t.noTracking}</span></span>
        </div>
        <div className="visitor-counter" aria-label="Visitor count">
          <a href="https://hits.sh/www.jnspmusic.com/" target="_blank" rel="noreferrer">
            <img alt="Visitor count" src="https://hits.sh/www.jnspmusic.com.svg?label=&style=flat&color=747771&labelColor=07080b" />
          </a>
        </div>
      </footer>

      <dialog
        className="privacy-dialog"
        ref={privacyDialogRef}
        aria-labelledby="privacy-title"
        onClick={(event) => { if (event.target === event.currentTarget) closePrivacy(); }}
      >
        <div className="privacy-dialog-content">
          <button className="privacy-close" type="button" onClick={closePrivacy} aria-label={t.closePrivacy}>×</button>
          <p className="eyebrow"><span />JNSP MUSIC</p>
          <h2 id="privacy-title">{t.privacyTitle}</h2>
          <p className="privacy-updated">{t.privacyUpdated}</p>
          <p>{t.privacyOne}</p>
          <p>{t.privacyTwo}</p>
          <p>{t.privacyThree}</p>
          <p>{t.privacyFour}</p>
          <p>{t.privacyContact} <a href={`mailto:${links.email}`}>{links.email}</a>.</p>
        </div>
      </dialog>
    </div>
  );
}

export default App;
