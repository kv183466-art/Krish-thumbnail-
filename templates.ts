export interface Template {
  id: string
  name: string
  category: string
  background: string
  backgroundType: "solid" | "gradient"
  texts: TextElement[]
  images?: ImageElement[]
  tags: string[]
  downloads: number
  featured: boolean
}

export interface TextElement {
  id: string
  text: string
  x: number
  y: number
  fontSize: number
  color: string
  fontFamily: string
  fontWeight: string
}

export interface ImageElement {
  id: string
  src: string
  x: number
  y: number
  width: number
  height: number
}

export const categories = [
  { id: "business", name: "Business", icon: "💼", color: "#1e3a8a" },
  { id: "finance", name: "Finance", icon: "💰", color: "#059669" },
  { id: "gaming", name: "Gaming", icon: "🎮", color: "#7c3aed" },
  { id: "motivation", name: "Motivation", icon: "🔥", color: "#dc2626" },
  { id: "fitness", name: "Fitness", icon: "💪", color: "#ea580c" },
  { id: "cooking", name: "Cooking", icon: "👨‍🍳", color: "#ca8a04" },
  { id: "music", name: "Music", icon: "🎵", color: "#9333ea" },
  { id: "tech", name: "Technology", icon: "💻", color: "#0891b2" },
  { id: "education", name: "Education", icon: "📚", color: "#0d9488" },
  { id: "lifestyle", name: "Lifestyle", icon: "✨", color: "#be185d" },
]

export const templates: Template[] = [
  // Business Templates
  {
    id: "business-1",
    name: "Corporate Success",
    category: "business",
    background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)",
    backgroundType: "gradient",
    featured: true,
    downloads: 2150,
    tags: ["corporate", "professional", "success"],
    texts: [
      {
        id: "1",
        text: "BUSINESS",
        x: 80,
        y: 150,
        fontSize: 88,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "SUCCESS",
        x: 80,
        y: 240,
        fontSize: 88,
        color: "#fbbf24",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "10 PROVEN STRATEGIES",
        x: 80,
        y: 350,
        fontSize: 32,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "THAT ACTUALLY WORK",
        x: 80,
        y: 390,
        fontSize: 32,
        color: "#fbbf24",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
    images: [
      {
        id: "img1",
        src: "/confident-speaker.png",
        x: 800,
        y: 100,
        width: 400,
        height: 500,
      },
    ],
  },
  {
    id: "business-2",
    name: "Entrepreneur Mindset",
    category: "business",
    background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
    backgroundType: "gradient",
    featured: false,
    downloads: 1890,
    tags: ["entrepreneur", "mindset", "startup"],
    texts: [
      {
        id: "1",
        text: "ENTREPRENEUR",
        x: 60,
        y: 180,
        fontSize: 72,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "MINDSET",
        x: 60,
        y: 260,
        fontSize: 72,
        color: "#fef3c7",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "BUILD YOUR EMPIRE",
        x: 60,
        y: 380,
        fontSize: 36,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "FROM ZERO TO HERO",
        x: 60,
        y: 420,
        fontSize: 28,
        color: "#fef3c7",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
    images: [
      {
        id: "img1",
        src: "/businessman-money-background.png",
        x: 700,
        y: 50,
        width: 500,
        height: 600,
      },
    ],
  },

  // Gaming Templates
  {
    id: "gaming-1",
    name: "Epic Gaming",
    category: "gaming",
    background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
    backgroundType: "gradient",
    featured: true,
    downloads: 3200,
    tags: ["gaming", "epic", "esports"],
    texts: [
      {
        id: "1",
        text: "EPIC",
        x: 100,
        y: 200,
        fontSize: 96,
        color: "#00ff00",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "GAMING",
        x: 100,
        y: 300,
        fontSize: 96,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "LEVEL UP NOW!",
        x: 100,
        y: 420,
        fontSize: 40,
        color: "#fbbf24",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
    ],
  },
  {
    id: "gaming-2",
    name: "Pro Gamer",
    category: "gaming",
    background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
    backgroundType: "gradient",
    featured: false,
    downloads: 2750,
    tags: ["pro", "competitive", "streaming"],
    texts: [
      {
        id: "1",
        text: "PRO GAMER",
        x: 140,
        y: 220,
        fontSize: 76,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "Championship Mode",
        x: 140,
        y: 320,
        fontSize: 38,
        color: "#000000",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
    ],
  },

  // Motivation Templates
  {
    id: "motivation-1",
    name: "Never Give Up",
    category: "motivation",
    background: "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f97316 100%)",
    backgroundType: "gradient",
    featured: true,
    downloads: 2890,
    tags: ["motivation", "inspiration", "success"],
    texts: [
      {
        id: "1",
        text: "NEVER",
        x: 120,
        y: 180,
        fontSize: 88,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "GIVE UP",
        x: 120,
        y: 270,
        fontSize: 88,
        color: "#fef3c7",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "SUCCESS MINDSET",
        x: 120,
        y: 380,
        fontSize: 42,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "TRANSFORM YOUR LIFE",
        x: 120,
        y: 430,
        fontSize: 28,
        color: "#fef3c7",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
  },
  {
    id: "motivation-2",
    name: "Dream Big",
    category: "motivation",
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    backgroundType: "gradient",
    featured: false,
    downloads: 2340,
    tags: ["dreams", "goals", "achievement"],
    texts: [
      {
        id: "1",
        text: "DREAM BIG",
        x: 160,
        y: 200,
        fontSize: 84,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "Achieve More",
        x: 160,
        y: 300,
        fontSize: 44,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
  },

  // Finance Templates
  {
    id: "finance-1",
    name: "Financial Freedom",
    category: "finance",
    background: "linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)",
    backgroundType: "gradient",
    featured: true,
    downloads: 2650,
    tags: ["money", "investment", "wealth"],
    texts: [
      {
        id: "1",
        text: "FINANCIAL",
        x: 80,
        y: 160,
        fontSize: 76,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "FREEDOM",
        x: 80,
        y: 240,
        fontSize: 76,
        color: "#fbbf24",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "BUILD WEALTH TODAY",
        x: 80,
        y: 350,
        fontSize: 36,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "PASSIVE INCOME SECRETS",
        x: 80,
        y: 390,
        fontSize: 28,
        color: "#fef3c7",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
    images: [
      {
        id: "img1",
        src: "/warren-buffett-advice-thumbnail.png",
        x: 700,
        y: 100,
        width: 450,
        height: 450,
      },
    ],
  },

  // Fitness Templates
  {
    id: "fitness-1",
    name: "Fitness Transformation",
    category: "fitness",
    background: "linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%)",
    backgroundType: "gradient",
    featured: false,
    downloads: 1980,
    tags: ["fitness", "transformation", "health"],
    texts: [
      {
        id: "1",
        text: "FITNESS",
        x: 100,
        y: 180,
        fontSize: 84,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "TRANSFORMATION",
        x: 60,
        y: 270,
        fontSize: 52,
        color: "#fef3c7",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "30 DAY CHALLENGE",
        x: 100,
        y: 370,
        fontSize: 40,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "GET RESULTS FAST",
        x: 100,
        y: 420,
        fontSize: 32,
        color: "#fef3c7",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
  },

  // Tech Templates
  {
    id: "tech-1",
    name: "Tech Review",
    category: "tech",
    background: "linear-gradient(135deg, #0891b2 0%, #0ea5e9 50%, #38bdf8 100%)",
    backgroundType: "gradient",
    featured: false,
    downloads: 1560,
    tags: ["technology", "review", "gadgets"],
    texts: [
      {
        id: "1",
        text: "TECH",
        x: 120,
        y: 200,
        fontSize: 92,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "REVIEW",
        x: 120,
        y: 290,
        fontSize: 92,
        color: "#fbbf24",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "LATEST GADGETS 2024",
        x: 120,
        y: 400,
        fontSize: 36,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
    ],
  },

  // Education Templates
  {
    id: "education-1",
    name: "Learn Something New",
    category: "education",
    background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #5eead4 100%)",
    backgroundType: "gradient",
    featured: false,
    downloads: 1340,
    tags: ["education", "learning", "tutorial"],
    texts: [
      {
        id: "1",
        text: "LEARN",
        x: 140,
        y: 180,
        fontSize: 88,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "SOMETHING",
        x: 80,
        y: 270,
        fontSize: 64,
        color: "#fef3c7",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "NEW",
        x: 140,
        y: 340,
        fontSize: 88,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "MASTER NEW SKILLS TODAY",
        x: 80,
        y: 430,
        fontSize: 32,
        color: "#fef3c7",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
    ],
  },

  // Cooking Template
  {
    id: "cooking-1",
    name: "Delicious Recipe",
    category: "cooking",
    background: "linear-gradient(135deg, #ca8a04 0%, #eab308 50%, #facc15 100%)",
    backgroundType: "gradient",
    featured: false,
    downloads: 1120,
    tags: ["cooking", "recipe", "food"],
    texts: [
      {
        id: "1",
        text: "DELICIOUS",
        x: 80,
        y: 180,
        fontSize: 72,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "RECIPE",
        x: 80,
        y: 260,
        fontSize: 72,
        color: "#7c2d12",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "EASY 15 MIN MEAL",
        x: 80,
        y: 370,
        fontSize: 36,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "STEP BY STEP GUIDE",
        x: 80,
        y: 420,
        fontSize: 28,
        color: "#7c2d12",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
  },

  // Music Template
  {
    id: "music-1",
    name: "Music Production",
    category: "music",
    background: "linear-gradient(135deg, #9333ea 0%, #a855f7 50%, #c084fc 100%)",
    backgroundType: "gradient",
    featured: false,
    downloads: 980,
    tags: ["music", "production", "beats"],
    texts: [
      {
        id: "1",
        text: "MUSIC",
        x: 120,
        y: 200,
        fontSize: 88,
        color: "#ffffff",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "2",
        text: "PRODUCTION",
        x: 60,
        y: 290,
        fontSize: 64,
        color: "#fbbf24",
        fontFamily: "Impact",
        fontWeight: "bold",
      },
      {
        id: "3",
        text: "BEAT MAKING TUTORIAL",
        x: 80,
        y: 390,
        fontSize: 32,
        color: "#ffffff",
        fontFamily: "Arial",
        fontWeight: "bold",
      },
      {
        id: "4",
        text: "FROM BEGINNER TO PRO",
        x: 80,
        y: 430,
        fontSize: 28,
        color: "#fbbf24",
        fontFamily: "Arial",
        fontWeight: "normal",
      },
    ],
  },
]

export const getTemplatesByCategory = (categoryId: string) => {
  return templates.filter((template) => template.category === categoryId)
}

export const getFeaturedTemplates = () => {
  return templates.filter((template) => template.featured)
}

export const getTemplateById = (id: string) => {
  return templates.find((template) => template.id === id)
}
