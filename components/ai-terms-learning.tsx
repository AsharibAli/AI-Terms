"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

interface AITerm {
  id: number
  term: string
  definition: string
  category?: string
}

const aiTerms: AITerm[] = [
  { id: 1, term: "AGI", definition: "AI that can think like humans.", category: "General AI" },
  { id: 2, term: "CoT (Chain of Thought)", definition: "AI thinking step-by-step.", category: "Reasoning" },
  { id: 3, term: "AI Agents", definition: "Autonomous programs that make decisions.", category: "Systems" },
  { id: 4, term: "AI Wrapper", definition: "Simplifies interaction with AI models.", category: "Tools" },
  { id: 5, term: "AI Alignment", definition: "Ensuring AI follows human values.", category: "Ethics" },
  { id: 6, term: "Fine-tuning", definition: "Improving AI with specific training data.", category: "Training" },
  { id: 7, term: "Hallucination", definition: "When AI generates false information.", category: "Limitations" },
  { id: 8, term: "AI Model", definition: "A trained system for a task.", category: "Core Concepts" },
  { id: 9, term: "Chatbot", definition: "AI that simulates human conversation.", category: "Applications" },
  { id: 10, term: "Compute", definition: "Processing power for AI models.", category: "Hardware" },
  { id: 11, term: "Computer Vision", definition: "AI that understands images and videos.", category: "Applications" },
  { id: 12, term: "Context", definition: "Information AI retains for better responses.", category: "Core Concepts" },
  {
    id: 13,
    term: "Deep Learning",
    definition: "AI learning through layered neural networks.",
    category: "Machine Learning",
  },
  { id: 14, term: "Embedding", definition: "Numeric representation of words for AI.", category: "Data Processing" },
  { id: 15, term: "Explainability", definition: "How AI decisions are understood.", category: "Interpretability" },
  { id: 16, term: "Foundation Model", definition: "Large AI model adaptable to tasks.", category: "Models" },
  { id: 17, term: "Generative AI", definition: "AI that creates text, images, etc.", category: "Applications" },
  { id: 18, term: "GPU", definition: "Hardware for fast AI processing.", category: "Hardware" },
  { id: 19, term: "Ground Truth", definition: "Verified data AI learns from.", category: "Data" },
  { id: 20, term: "Inference", definition: "AI making predictions on new data.", category: "Operations" },
  { id: 21, term: "LLM (Large Language Model)", definition: "AI trained on vast text data.", category: "Models" },
  { id: 22, term: "Machine Learning", definition: "AI improving from data experience.", category: "Core Concepts" },
  {
    id: 23,
    term: "MCP (Model Context Protocol)",
    definition: "Standard for AI external data access.",
    category: "Protocols",
  },
  {
    id: 24,
    term: "NLP (Natural Language Processing)",
    definition: "AI understanding human language.",
    category: "Applications",
  },
  { id: 25, term: "Neural Network", definition: "AI model inspired by the brain.", category: "Architecture" },
  { id: 26, term: "Parameters", definition: "AI's internal variables for learning.", category: "Technical" },
  { id: 27, term: "Prompt Engineering", definition: "Crafting inputs to guide AI output.", category: "Techniques" },
  { id: 28, term: "Reasoning Model", definition: "AI that follows logical thinking.", category: "Reasoning" },
  {
    id: 29,
    term: "Reinforcement Learning",
    definition: "AI learning from rewards and penalties.",
    category: "Machine Learning",
  },
  {
    id: 30,
    term: "RAG (Retrieval-Augmented Generation)",
    definition: "AI combining search with responses.",
    category: "Techniques",
  },
  { id: 31, term: "Supervised Learning", definition: "AI trained on labeled data.", category: "Machine Learning" },
  { id: 32, term: "TPU", definition: "Google's AI-specialized processor.", category: "Hardware" },
  { id: 33, term: "Tokenization", definition: "Breaking text into smaller parts.", category: "Data Processing" },
  { id: 34, term: "Training", definition: "Teaching AI by adjusting its parameters.", category: "Process" },
  { id: 35, term: "Transformer", definition: "AI architecture for language processing.", category: "Architecture" },
  {
    id: 36,
    term: "Unsupervised Learning",
    definition: "AI finding patterns in unlabeled data.",
    category: "Machine Learning",
  },
  {
    id: 37,
    term: "Vibe Coding",
    definition: "AI-assisted coding via natural language prompts.",
    category: "Development",
  },
  { id: 38, term: "Weights", definition: "Values that shape AI learning.", category: "Technical" },
  { id: 39, term: "API", definition: "Interface for accessing AI services and models.", category: "Integration" },
  { id: 40, term: "Bias", definition: "Unfair preferences in AI model decisions.", category: "Ethics" },
  { id: 41, term: "Dataset", definition: "Collection of data used to train AI models.", category: "Data" },
  {
    id: 42,
    term: "Algorithm",
    definition: "Step-by-step instructions for solving problems.",
    category: "Core Concepts",
  },
  {
    id: 43,
    term: "Automation",
    definition: "AI performing tasks without human intervention.",
    category: "Applications",
  },
  { id: 44, term: "Classification", definition: "AI sorting data into different categories.", category: "Tasks" },
  { id: 45, term: "Prediction", definition: "AI forecasting future outcomes from data.", category: "Tasks" },
  {
    id: 46,
    term: "Hyperparameters",
    definition: "Settings that control model training process.",
    category: "Configuration",
  },
  { id: 47, term: "Latency", definition: "Time delay in AI model response.", category: "Performance" },
  { id: 48, term: "Multimodal", definition: "AI handling text, images, and audio together.", category: "Capabilities" },
  {
    id: 49,
    term: "Preprocessing",
    definition: "Preparing raw data for AI model training.",
    category: "Data Processing",
  },
  { id: 50, term: "Recognition", definition: "AI identifying patterns in data or images.", category: "Capabilities" },
]

export function AITermsLearning() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentTerm = aiTerms[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : aiTerms.length - 1))
    setIsFlipped(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < aiTerms.length - 1 ? prev + 1 : 0))
    setIsFlipped(false)
  }

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-2 sm:p-4 font-mono">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8 px-2">
        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4">
          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight">
            AI Terms Everyone Should Know
          </h1>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm">Click the card to flip • Use arrows to navigate</p>
      </div>

      {/* Card Container */}
      <div className="perspective-1000 mb-4 sm:mb-8 w-full max-w-[500px] px-2">
        <div
          className={`
      w-full h-64 sm:h-80 md:h-96 cursor-pointer transition-all duration-700 ease-out
      ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
    `}
          style={{
            transformStyle: "preserve-3d",
          }}
          onClick={flipCard}
        >
          {/* Front Side */}
          <Card
            className={`
  absolute inset-0 w-full h-full border-2 sm:border-4 border-gray-800 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl
  bg-gradient-to-br from-white to-gray-50
  ${isFlipped ? "opacity-0" : "opacity-100"}
`}
            style={{
              backfaceVisibility: "hidden",
              boxShadow: "inset 0 0 0 1px #f3f4f6, 0 4px 16px rgba(0,0,0,0.08)",
              borderStyle: "solid",
            }}
          >
            <CardContent className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center bg-transparent relative">
              <div className="absolute inset-2 sm:inset-4 border border-gray-200 rounded-md sm:rounded-lg opacity-30"></div>
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-4 leading-tight break-words">
                  {currentTerm.term}
                </h2>
                <div className="text-xs text-gray-400 mt-4 sm:mt-8">Click to see definition</div>
              </div>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className={`
  absolute inset-0 w-full h-full border-2 sm:border-4 border-gray-800 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl
  bg-gradient-to-br from-gray-50 to-gray-100
  ${isFlipped ? "opacity-100" : "opacity-0"}
`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: "inset 0 0 0 1px #e5e7eb, 0 4px 16px rgba(0,0,0,0.08)",
              borderStyle: "solid",
            }}
          >
            <CardContent className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center bg-transparent relative">
              <div className="absolute inset-2 sm:inset-4 border border-gray-300 rounded-md sm:rounded-lg opacity-30"></div>
              <div className="text-center">
                <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-4 uppercase tracking-wider">
                  Definition
                </div>
                <p className="text-sm sm:text-lg md:text-xl text-black leading-relaxed font-medium px-2">
                  {currentTerm.definition}
                </p>
                <div className="text-xs text-gray-400 mt-4 sm:mt-8">Click to see term</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-6 px-2">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="border-2 border-black hover:bg-black hover:text-white transition-colors sm:size-lg"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>

        <div className="text-center">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">
            {currentIndex + 1} / {aiTerms.length}
          </div>
          <div className="text-xs text-gray-500 mt-1">Card Progress</div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="border-2 border-black hover:bg-black hover:text-white transition-colors sm:size-lg"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-[500px] bg-gray-200 rounded-full h-1.5 sm:h-2 border border-black mx-2">
        <div
          className="bg-black h-full rounded-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / aiTerms.length) * 100}%`,
          }}
        />
      </div>

      {/* Footer */}
      <div className="mt-4 sm:mt-8 text-center text-xs sm:text-sm text-gray-600 px-2">
        <p>
          Built with ❤️ by{" "}
          <a
            href="https://www.asharib.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-semibold hover:underline"
          >
            Asharib Ali
          </a>
        </p>
      </div>
    </div>
  )
}
