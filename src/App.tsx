import React, { useState } from 'react';
import { Play, Calendar, MapPin, Mail, Youtube, User, Disc3, Radio, Instagram } from 'lucide-react';

// Configuration des images et liens (facilement modifiable)
const config = {
  images: {
    saveMe: '/newpic.png',
    eventImage: '/photo platine.jpg'
  },
  links: {
    youtubeMusic: 'https://music.youtube.com/channel/UCFAKDiOFbZkd9jhMRYbP6NQ?feature=shared',
    spotify: 'https://open.spotify.com/artist/25qqFcycQizw6u2Xb80tnu?si=IvZcME41Q465arofPwpP7Q',
    instagram: 'https://www.instagram.com/jnsp.music/',
    email: 'jnsp@jnspmusic.com'
  },
  event: {
    date: 'à confirmer',
    dateEn: 'to be confirmed',
    location: 'à confirmer',
    locationEn: 'to be confirmed',
    websiteUrl: 'https://www.jnspmusic.com/',
    // Pour modifier facilement l'événement :
    title: 'Session Live DJ',
    titleEn: 'Live DJ Session',
    description: "Rejoignez JNSP pour une session live exceptionnelle dans l'un des clubs les plus emblématiques .",
    descriptionEn: 'Join JNSP for an exceptional live session in one of most iconic clubs.',
    status: 'à confirmer',
    statusEn: 'to be confirmed'
  },
  // Pour modifier facilement la musique :
  music: {
    title: 'Just a Little More Time',
    description:
      'Nouveau single de JNSP, entre EDM 80s et house progressive, avec une énergie profonde et émotionnelle.',
    descriptionEn:
      "JNSP's new single, blending 80s-inspired EDM and progressive house with deep emotional energy."
  }
};

// Configuration du contenu multilingue
const content = {
  fr: {
    nav: {
      home: 'Accueil',
      music: 'Musique',
      events: 'Événements',
      about: 'À propos',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Créateur d’émotions électroniques',
      listenButton: 'Écouter'
    },
    music: {
      title: 'Dernière Sortie',
      newSingle: 'Nouveau Single',
      trackTitle: config.music.title,
      description: config.music.description,
      listenButton: 'Écouter'
    },
    events: {
      title: 'Actualités',
      upcomingEvent: 'Événement à venir',
      eventTitle: config.event.title,
      eventDate: 'à confirmer',
      eventLocation: 'à confirmer',
      eventDescription: config.event.description,
      eventStatus: config.event.status
    },
    about: {
      title: 'À Propos',
      artistName: 'JNSP',
      artistTitle: 'Créateur d’émotions électroniques',
      description:
        'Je m’appelle Sébastien et je produis sous le nom JNSP. Ma musique voyage entre EDM 80s, house progressive et trance, avec de grosses basses, des mélodies profondes et une énergie de club. Chaque morceau est pensé pour transmettre des émotions, donner de la force, de l’espoir et offrir un vrai moment d’évasion.',
      findOn: 'Retrouvez JNSP sur :'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Restons en Contact',
      description:
        "Pour toute demande de booking, collaboration ou information, n'hésitez pas à me contacter directement."
    },
    footer: {
      copyright: 'Tous droits réservés.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      music: 'Music',
      events: 'Events',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Emotional electronic music creator',
      listenButton: 'Listen'
    },
    music: {
      title: 'Latest Release',
      newSingle: 'New Single',
      trackTitle: config.music.title,
      description: config.music.descriptionEn,
      listenButton: 'Listen'
    },
    events: {
      title: 'News',
      upcomingEvent: 'Upcoming Event',
      eventTitle: config.event.titleEn,
      eventDate: 'to be confirmed',
      eventLocation: 'to be confirmed',
      eventDescription: config.event.descriptionEn,
      eventStatus: config.event.statusEn
    },
    about: {
      title: 'About',
      artistName: 'JNSP',
      artistTitle: 'Emotional electronic music creator',
      description:
        "I’m Sébastien, producing music as JNSP. My sound moves between 80s-inspired EDM, progressive house and trance, with heavy basslines, deep melodies and a strong club energy. Each track is crafted to carry emotion, bring strength and hope, and offer a true moment of escape.",
      findOn: 'Find JNSP on:'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's Stay in Touch",
      description:
        'For any booking requests, collaborations or information, feel free to contact me directly.'
    },
    footer: {
      copyright: 'All rights reserved.'
    }
  }
};

const App = () => {
  const userLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
  const [language, setLanguage] = useState<'fr' | 'en'>(userLang);
  const t = content[language];

  const setLanguageToFr = () => setLanguage('fr');
  const setLanguageToEn = () => setLanguage('en');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-blue-800/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-blue-200/80 hover:text-blue-200 transition-colors">
                {t.nav.home}
              </a>
              <a href="#music" className="text-blue-200/80 hover:text-blue-200 transition-colors">
                {t.nav.music}
              </a>
              <a href="#events" className="text-blue-200/80 hover:text-blue-200 transition-colors">
                {t.nav.events}
              </a>
              <a href="#about" className="text-blue-200/80 hover:text-blue-200 transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-blue-200/80 hover:text-blue-200 transition-colors">
                {t.nav.contact}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={setLanguageToFr}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                  language === 'fr'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500/20 text-blue-200/80 hover:text-blue-200'
                }`}
              >
                FR
              </button>
              <button
                onClick={setLanguageToEn}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500/20 text-blue-200/80 hover:text-blue-200'
                }`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-800/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-blue-900/30 via-transparent to-black/50"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto">
          {/* Main Title - Logo JNSP */}
          <h1 className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[14rem] font-black text-white mb-8 tracking-tight leading-none">
            JNSP
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 mb-12 leading-relaxed font-light">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={config.links.youtubeMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-xl"
            >
              <Play className="h-5 w-5" />
              <span>{t.hero.listenButton}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section id="music" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {t.music.title}
              </span>
            </h2>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-3xl border border-blue-800/30 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative w-full order-2 md:order-1 flex justify-center items-center bg-black p-4">
                <img
                  src={config.images.saveMe}
                  alt={`JNSP - ${config.music.title} cover`}
                  className="max-w-full max-h-[500px] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Disc3 className="h-6 w-6 text-blue-400" />
                  <span className="text-blue-300 font-semibold">{t.music.newSingle}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.music.trackTitle}</h3>
                <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">{t.music.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={config.links.youtubeMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>{t.music.listenButton}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {t.events.title}
              </span>
            </h2>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-3xl border border-blue-800/30 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <span className="text-blue-300 font-semibold">{t.events.upcomingEvent}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.events.eventTitle}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-blue-100/80">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span className="text-lg">
                      {language === 'fr' ? config.event.date : config.event.dateEn}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-blue-100/80">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <a
                      href={config.event.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-blue-300 transition-colors underline decoration-blue-400/50 hover:decoration-blue-300"
                    >
                      {language === 'fr' ? config.event.location : config.event.locationEn}
                    </a>
                  </div>
                </div>
                <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">{t.events.eventDescription}</p>
                <div className="flex items-center space-x-2 text-red-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">{t.events.eventStatus}</span>
                </div>
              </div>
              <div className="relative h-80 md:h-96">
                <img
                  src={config.images.eventImage}
                  alt="DJ Event with Crowd"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3">
                    <Radio className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {t.about.title}
              </span>
            </h2>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-3xl border border-blue-800/30 p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-lg opacity-60"></div>
                <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 p-4 rounded-full">
                  <User className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">{t.about.artistName}</h3>
              <p className="text-xl text-blue-300 font-semibold">{t.about.artistTitle}</p>

              <div className="max-w-2xl mx-auto">
                <p className="text-blue-100/80 text-lg leading-relaxed">{t.about.description}</p>
              </div>

              <div className="pt-8">
                <p className="text-blue-100/60 mb-4">{t.about.findOn}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <a
                    href={config.links.youtubeMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-100/80 hover:text-white transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-red-400" />
                    <span>YouTube Music</span>
                  </a>
                  <a
                    href={config.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-100/80 hover:text-white transition-colors"
                  >
                    <Disc3 className="h-5 w-5 text-green-400" />
                    <span>Spotify</span>
                  </a>

                  <a
                    href={config.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-100/80 hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {t.contact.title}
              </span>
            </h2>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-3xl border border-blue-800/30 p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-lg opacity-60"></div>
                <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 p-4 rounded-full">
                  <Mail className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.contact.subtitle}</h3>
            <p className="text-blue-100/70 text-lg mb-8 max-w-2xl mx-auto">{t.contact.description}</p>

            <a
              href={`mailto:${config.links.email}`}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Mail className="h-5 w-5" />
              <span>{config.links.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-800/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl font-bold text-blue-200">JNSP</span>
          </div>
          <p className="text-blue-200/40 text-sm">&copy; 2026 JNSP Music. {t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
