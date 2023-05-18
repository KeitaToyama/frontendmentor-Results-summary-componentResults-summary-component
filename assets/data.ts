export type Category = {
category: string;
score: number;
icon: string;
}

type Categories = Category[]

export const Categories: Categories = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg"
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg"
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg"
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg"
  }
]
