import { FaqItem, validateFaq } from "./episode-types";

export const faqItems: FaqItem[] = [
  {
    id: "what-is-mi-podcast",
    question: "What is Mi Podcast?",
    answer:
      "Mi Podcast is a weekly show about creative work, attention, and the ideas that shape how we live. Each episode is a self-contained conversation you can listen to in under an hour.",
  },
  {
    id: "how-often",
    question: "How often are new episodes released?",
    answer:
      "New episodes arrive every Sunday. The current catalog contains 20 episodes, all available on the Episodes page.",
  },
  {
    id: "how-to-listen",
    question: "How do I listen to an episode?",
    answer:
      "Open the Episodes page, pick an episode, and press the play control on its card — no account or subscription required. The landing page always highlights the latest featured episode.",
  },
  {
    id: "suggest-topic",
    question: "Can I suggest a topic or guest?",
    answer:
      "Yes. Reach out through the contact link on the About page with your idea, and we read every suggestion we receive.",
  },
  {
    id: "transcripts",
    question: "Are transcripts available?",
    answer:
      "Transcripts are on our roadmap for a future release. For now, each episode page includes detailed show notes with the key points of the conversation.",
  },
  {
    id: "cost",
    question: "Is the show free to listen to?",
    answer:
      "Completely free. There are no paywalls, no ads mid-episode, and no account required — just press play.",
  },
];

validateFaq(faqItems);
