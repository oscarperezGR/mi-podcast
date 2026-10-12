import { Episode, validateEpisodes } from "./episode-types";

export const episodes: Episode[] = [
  {
    number: 1,
    slug: "the-art-of-starting-over",
    title: "The Art of Starting Over",
    publishDate: "2026-05-17",
    duration: "42 min",
    shortDescription:
      "Why beginning again is a skill, and how to do it without losing yourself.",
    longDescription:
      "We open the season with a conversation about reinvention — the small courage it takes to close one chapter and the practical rituals that make a fresh start stick.",
    artwork: "/artwork/ep-01.svg",
    audioSrc: "/audio/ep-01.wav",
    featured: false,
  },
  {
    number: 2,
    slug: "small-habits-big-signals",
    title: "Small Habits, Big Signals",
    publishDate: "2026-05-24",
    duration: "36 min",
    shortDescription:
      "The tiny routines that quietly announce who we are becoming.",
    longDescription:
      "A field guide to habits as identity signals: which ones matter, which ones are noise, and how to redesign your mornings in a single week.",
    artwork: "/artwork/ep-02.svg",
    audioSrc: "/audio/ep-02.wav",
    featured: false,
  },
  {
    number: 3,
    slug: "designing-for-silence",
    title: "Designing for Silence",
    publishDate: "2026-05-31",
    duration: "45 min",
    shortDescription:
      "What product design can learn from empty space and quiet rooms.",
    longDescription:
      "An exploration of restraint in design — why the best interfaces leave room to breathe, and how silence became the rarest feature of all.",
    artwork: "/artwork/ep-03.svg",
    audioSrc: "/audio/ep-03.wav",
    featured: false,
  },
  {
    number: 4,
    slug: "what-cities-sound-like-at-night",
    title: "What Cities Sound Like at Night",
    publishDate: "2026-06-07",
    duration: "38 min",
    shortDescription:
      "A sonic tour of after-hours streets, from neon alleys to empty plazas.",
    longDescription:
      "We follow a sound artist through the city after midnight and ask what urban noise reveals about the people who live there.",
    artwork: "/artwork/ep-04.svg",
    audioSrc: "/audio/ep-04.wav",
    featured: false,
  },
  {
    number: 5,
    slug: "the-slow-web",
    title: "The Slow Web",
    publishDate: "2026-06-14",
    duration: "51 min",
    shortDescription:
      "Against the feed: building an internet that respects your attention.",
    longDescription:
      "A manifesto for slower corners of the internet — personal sites, newsletters, and deliberate publishing — with creators who chose depth over reach.",
    artwork: "/artwork/ep-05.svg",
    audioSrc: "/audio/ep-05.wav",
    featured: false,
  },
  {
    number: 6,
    slug: "talking-to-strangers",
    title: "Talking to Strangers",
    publishDate: "2026-06-21",
    duration: "44 min",
    shortDescription:
      "The lost art of the conversation you didn't plan to have.",
    longDescription:
      "From train seats to market stalls, we gather stories about unexpected conversations and why they change us more than meetings ever do.",
    artwork: "/artwork/ep-06.svg",
    audioSrc: "/audio/ep-06.wav",
    featured: false,
  },
  {
    number: 7,
    slug: "craft-over-content",
    title: "Craft Over Content",
    publishDate: "2026-06-28",
    duration: "39 min",
    shortDescription:
      "Making fewer things, better — a conversation with working artisans.",
    longDescription:
      "Potters, printers, and developers compare notes on what it means to care about the details nobody asked for.",
    artwork: "/artwork/ep-07.svg",
    audioSrc: "/audio/ep-07.wav",
    featured: false,
  },
  {
    number: 8,
    slug: "how-ideas-travel",
    title: "How Ideas Travel",
    publishDate: "2026-07-05",
    duration: "47 min",
    shortDescription:
      "The strange journeys ideas take from notebook to culture.",
    longDescription:
      "Tracing one simple idea across a decade of adoption, misreading, and reinvention — and what that means for anything you publish.",
    artwork: "/artwork/ep-08.svg",
    audioSrc: "/audio/ep-08.wav",
    featured: false,
  },
  {
    number: 9,
    slug: "the-margin-of-error",
    title: "The Margin of Error",
    publishDate: "2026-07-12",
    duration: "33 min",
    shortDescription:
      "Why uncertainty is a feature, not a flaw, in good decisions.",
    longDescription:
      "A statistician and a chef walk into a studio to talk about confidence intervals, taste, and knowing when you don't know.",
    artwork: "/artwork/ep-09.svg",
    audioSrc: "/audio/ep-09.wav",
    featured: false,
  },
  {
    number: 10,
    slug: "rituals-of-deep-work",
    title: "Rituals of Deep Work",
    publishDate: "2026-07-19",
    duration: "49 min",
    shortDescription:
      "How makers protect long stretches of unbroken attention.",
    longDescription:
      "Writers, researchers, and engineers share the pre-work rituals and hard boundaries that make deep focus repeatable.",
    artwork: "/artwork/ep-10.svg",
    audioSrc: "/audio/ep-10.wav",
    featured: false,
  },
  {
    number: 11,
    slug: "analog-dreams-in-a-digital-age",
    title: "Analog Dreams in a Digital Age",
    publishDate: "2026-07-26",
    duration: "41 min",
    shortDescription:
      "Film cameras, vinyl, and the pull of things you can hold.",
    longDescription:
      "Why a generation raised on screens is buying tape decks — a warm, crackly look at the appeal of physical media.",
    artwork: "/artwork/ep-11.svg",
    audioSrc: "/audio/ep-11.wav",
    featured: false,
  },
  {
    number: 12,
    slug: "the-stories-we-tell-ourselves",
    title: "The Stories We Tell Ourselves",
    publishDate: "2026-08-02",
    duration: "53 min",
    shortDescription:
      "Narrative identity, memory, and the drafts of a life.",
    longDescription:
      "A psychologist and a novelist unpack how the stories we repeat become the lives we lead — and how to edit a bad one.",
    artwork: "/artwork/ep-12.svg",
    audioSrc: "/audio/ep-12.wav",
    featured: false,
  },
  {
    number: 13,
    slug: "quitting-well",
    title: "On Quitting Well",
    publishDate: "2026-08-09",
    duration: "35 min",
    shortDescription:
      "Grit gets the applause; graceful exits get things done.",
    longDescription:
      "When to walk away, how to do it kindly, and why quitting the right thing is the ultimate act of commitment.",
    artwork: "/artwork/ep-13.svg",
    audioSrc: "/audio/ep-13.wav",
    featured: false,
  },
  {
    number: 14,
    slug: "building-things-that-last",
    title: "Building Things That Last",
    publishDate: "2026-08-16",
    duration: "55 min",
    shortDescription:
      "Longevity as a design goal — from bridges to software.",
    longDescription:
      "Engineers and archivists discuss maintenance, decay, and the quiet discipline of making objects meant to outlive their makers.",
    artwork: "/artwork/ep-14.svg",
    audioSrc: "/audio/ep-14.wav",
    featured: false,
  },
  {
    number: 15,
    slug: "the-quiet-power-of-boredom",
    title: "The Quiet Power of Boredom",
    publishDate: "2026-08-23",
    duration: "37 min",
    shortDescription:
      "What we lose when every idle moment gets filled.",
    longDescription:
      "An argument for scheduling nothing — and the creativity that reliably shows up in the gaps.",
    artwork: "/artwork/ep-15.svg",
    audioSrc: "/audio/ep-15.wav",
    featured: false,
  },
  {
    number: 16,
    slug: "maps-memory-and-place",
    title: "Maps, Memory, and Place",
    publishDate: "2026-08-30",
    duration: "46 min",
    shortDescription:
      "Cartography as autobiography — the places that redraw us.",
    longDescription:
      "A cartographer, a poet, and a homesick expat talk about the maps we carry in our heads and the ones we hang on walls.",
    artwork: "/artwork/ep-16.svg",
    audioSrc: "/audio/ep-16.wav",
    featured: false,
  },
  {
    number: 17,
    slug: "learning-to-listen",
    title: "Learning to Listen",
    publishDate: "2026-09-06",
    duration: "43 min",
    shortDescription:
      "Hearing versus listening, and how to get better at the second one.",
    longDescription:
      "A hearing researcher and a mediator on attention, interruption, and the rarest gift you can give a conversation.",
    artwork: "/artwork/ep-17.svg",
    audioSrc: "/audio/ep-17.wav",
    featured: false,
  },
  {
    number: 18,
    slug: "the-future-of-small-teams",
    title: "The Future of Small Teams",
    publishDate: "2026-09-13",
    duration: "50 min",
    shortDescription:
      "Tiny studios, outsized results — the economics of staying small.",
    longDescription:
      "Founders of deliberately small companies explain what they protect, what they refuse, and how they measure success.",
    artwork: "/artwork/ep-18.svg",
    audioSrc: "/audio/ep-18.wav",
    featured: false,
  },
  {
    number: 19,
    slug: "money-meaning-and-work",
    title: "Money, Meaning, and Work",
    publishDate: "2026-09-20",
    duration: "58 min",
    shortDescription:
      "The awkward triangle where paychecks and purpose meet.",
    longDescription:
      "An honest conversation about enough — how people reconcile salary, vocation, and the stories culture tells about both.",
    artwork: "/artwork/ep-19.svg",
    audioSrc: "/audio/ep-19.wav",
    featured: false,
  },
  {
    number: 20,
    slug: "a-year-of-making-things",
    title: "A Year of Making Things",
    publishDate: "2026-09-27",
    duration: "48 min",
    shortDescription:
      "Season finale: twenty episodes later, what we learned about creative work.",
    longDescription:
      "We revisit the themes of the season — starting over, deep attention, craft, and small teams — and share the lessons that stuck.",
    artwork: "/artwork/ep-20.svg",
    audioSrc: "/audio/ep-20.wav",
    featured: true,
  },
];

validateEpisodes(episodes);
