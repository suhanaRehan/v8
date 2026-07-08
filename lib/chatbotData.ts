import { faqCategories } from './faqData'
import { categories } from './services-data'

export interface ChatEntry {
  question: string
  answer: string
  href?: string
}

// Quick, high-intent questions people ask while browsing the site
const quickAnswers: ChatEntry[] = [
  {
    question: 'What services do you offer?',
    answer:
      `We offer ${categories.map((c) => c.shortName).join(', ')}. Tap "Browse all services" in the menu, or ask me about a specific one.`,
    href: '/services',
  },
  {
    question: 'Do you have case studies or client examples?',
    answer:
      'Yes — check out our case studies covering financial services, healthcare, and logistics clients, including real metrics and outcomes.',
    href: '/case-studies',
  },
  {
    question: 'How do I get a quote or proposal?',
    answer:
      'The fastest way is to submit a project proposal — tell us a bit about your goals and we\'ll get back to you within one business day.',
    href: '/propose-project',
  },
  {
    question: 'How can I contact you?',
    answer:
      'You can call us at +1 (437) 799-8442, email info@securespheresoftwaresolutions.com, or use our contact form.',
    href: '/contact',
  },
  {
    question: 'Where are you located?',
    answer: 'We\'re based in Toronto, ON, and serve clients across Canada, the United States, and India as a distributed team.',
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Pricing depends on scope, complexity, and timeline — smaller builds are often fixed-price, while larger or evolving projects run time-and-materials. We\'ll recommend the right model after scoping your project.',
    href: '/propose-project',
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes — we work with organizations of all sizes, from early-stage startups to large enterprises, and tailor our engagement model accordingly.',
  },
  {
    question: 'Who can I talk to about pricing?',
    answer: 'Our team can walk you through pricing on a quick call. The easiest way in is to propose your project and we\'ll follow up.',
    href: '/propose-project',
  },
]

// Flatten the existing FAQ content so the bot can answer from it too
const faqEntries: ChatEntry[] = faqCategories.flatMap((cat) =>
  cat.items.map((item) => ({ question: item.question, answer: item.answer }))
)

export const chatbotKnowledge: ChatEntry[] = [...quickAnswers, ...faqEntries]

// A short list of starter chips shown when the chat opens
export const starterQuestions: string[] = [
  'What services do you offer?',
  'How do I get a quote?',
  'Where are you located?',
  'Do you work with startups?',
]

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'do', 'does', 'you', 'your', 'i', 'we', 'to', 'for', 'of', 'in', 'on', 'and', 'or',
  'can', 'what', 'how', 'with', 'my', 'me', 'about', 'it', 'be', 'have', 'has', 'will', 'would', 'this', 'that',
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
}

export function findBestAnswer(userInput: string): ChatEntry | null {
  const inputTokens = new Set(tokenize(userInput))
  if (inputTokens.size === 0) return null

  let best: ChatEntry | null = null
  let bestScore = 0

  for (const entry of chatbotKnowledge) {
    const entryTokens = tokenize(entry.question)
    let score = 0
    for (const t of entryTokens) {
      if (inputTokens.has(t)) score += 1
    }
    // small boost for overlap ratio so short precise matches beat long noisy ones
    if (entryTokens.length > 0) score += score / entryTokens.length
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  return bestScore >= 1 ? best : null
}
