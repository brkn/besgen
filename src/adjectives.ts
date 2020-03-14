const colors = [
  {
    word: "amaranth",
    basic: false,
    webColor: false
  },
  {
    word: "amber",
    basic: false,
    webColor: true
  },
  {
    word: "amethyst",
    basic: false,
    webColor: false
  },
  {
    word: "apricot",
    basic: false,
    webColor: true
  },
  {
    word: "aquamarine",
    basic: false,
    webColor: false
  },
  {
    word: "azure",
    basic: false,
    webColor: true
  },
  {
    word: "beige",
    basic: false,
    webColor: true
  },
  {
    word: "black",
    basic: true,
    webColor: true
  },
  {
    word: "blue",
    basic: true,
    webColor: true
  },
  {
    word: "blush",
    basic: false,
    webColor: false
  },
  {
    word: "bronze",
    basic: false,
    webColor: false
  },
  {
    word: "brown",
    basic: true,
    webColor: true
  },
  {
    word: "burgundy",
    basic: false,
    webColor: false
  },
  {
    word: "byzantium",
    basic: false,
    webColor: false
  },
  {
    word: "carmine",
    basic: false,
    webColor: false
  },
  {
    word: "cerise",
    basic: false,
    webColor: false
  },
  {
    word: "cerulean",
    basic: false,
    webColor: true
  },
  {
    word: "champagne",
    basic: false,
    webColor: false
  },
  {
    word: "chocolate",
    basic: false,
    webColor: false
  },
  {
    word: "coffee",
    basic: false,
    webColor: false
  },
  {
    word: "copper",
    basic: true,
    webColor: true
  },
  {
    word: "coral",
    basic: false,
    webColor: false
  },
  {
    word: "crimson",
    basic: false,
    webColor: false
  },
  {
    word: "cyan",
    basic: false,
    webColor: true
  },
  {
    word: "emerald",
    basic: false,
    webColor: false
  },
  {
    word: "erin",
    basic: false,
    webColor: false
  },
  {
    word: "gold",
    basic: true,
    webColor: true
  },
  {
    word: "gray",
    basic: true,
    webColor: true
  },
  {
    word: "green",
    basic: true,
    webColor: true
  },
  {
    word: "harlequin",
    basic: false,
    webColor: false
  },
  {
    word: "indigo",
    basic: false,
    webColor: true
  },
  {
    word: "ivory",
    basic: false,
    webColor: true
  },
  {
    word: "jade",
    basic: false,
    webColor: false
  },
  {
    word: "lavender",
    basic: false,
    webColor: false
  },
  {
    word: "lemon",
    basic: false,
    webColor: false
  },
  {
    word: "lilac",
    basic: false,
    webColor: false
  },
  {
    word: "lime",
    basic: false,
    webColor: true
  },
  {
    word: "magenta",
    basic: false,
    webColor: true
  },
  {
    word: "maroon",
    basic: false,
    webColor: true
  },
  {
    word: "mauve",
    basic: false,
    webColor: false
  },
  {
    word: "navy",
    basic: false,
    webColor: true
  },
  {
    word: "ochre",
    basic: false,
    webColor: true
  },
  {
    word: "olive",
    basic: false,
    webColor: true
  },
  {
    word: "orange",
    basic: true,
    webColor: true
  },
  {
    word: "orchid",
    basic: false,
    webColor: false
  },
  {
    word: "peach",
    basic: false,
    webColor: true
  },
  {
    word: "pear",
    basic: false,
    webColor: false
  },
  {
    word: "periwinkle",
    basic: false,
    webColor: false
  },
  {
    word: "pink",
    basic: true,
    webColor: true
  },
  {
    word: "plum",
    basic: false,
    webColor: true
  },
  {
    word: "puce",
    basic: false,
    webColor: false
  },
  {
    word: "purple",
    basic: true,
    webColor: true
  },
  {
    word: "raspberry",
    basic: false,
    webColor: false
  },
  {
    word: "red",
    basic: true,
    webColor: true
  },
  {
    word: "rose",
    basic: false,
    webColor: true
  },
  {
    word: "ruby",
    basic: false,
    webColor: false
  },
  {
    word: "salmon",
    basic: false,
    webColor: false
  },
  {
    word: "sangria",
    basic: false,
    webColor: false
  },
  {
    word: "sapphire",
    basic: false,
    webColor: false
  },
  {
    word: "scarlet",
    basic: false,
    webColor: false
  },
  {
    word: "silver",
    basic: true,
    webColor: true
  },
  {
    word: "tan",
    basic: false,
    webColor: false
  },
  {
    word: "taupe",
    basic: false,
    webColor: false
  },
  {
    word: "teal",
    basic: false,
    webColor: true
  },
  {
    word: "turquoise",
    basic: false,
    webColor: true
  },
  {
    word: "ultramarine",
    basic: false,
    webColor: false
  },
  {
    word: "violet",
    basic: false,
    webColor: true
  },
  {
    word: "viridian",
    basic: false,
    webColor: false
  },
  {
    word: "white",
    basic: true,
    webColor: true
  },
  {
    word: "yellow",
    basic: true,
    webColor: true
  }
];

const otherBasicAdjectives = [
  "able",
  "afraid",
  "bad",
  "bitter",
  "brave",
  "bright",
  "busy",
  "careful",
  "cheap",
  "chemical",
  "clean",
  "clear",
  "clever",
  "close",
  "cloudy",
  "cold",
  "comfortable",
  "cool",
  "dangerous",
  "dark",
  "dead",
  "deep",
  "difficult",
  "dirty",
  "dry",
  "early",
  "empty",
  "exciting",
  "expensive",
  "fair",
  "famous",
  "far",
  "fast",
  "fat",
  "fine",
  "flat",
  "free",
  "free",
  "free",
  "fresh",
  "full",
  "funny",
  "gone",
  "good",
  "great",
  "happy",
  "hard",
  "healthy",
  "heavy",
  "high",
  "hot",
  "hungry",
  "important",
  "interesting",
  "kind",
  "large",
  "late",
  "lazy",
  "light",
  "long",
  "loud",
  "low",
  "lucky",
  "narrow",
  "near",
  "noisy",
  "old",
  "polite",
  "poor",
  "proud",
  "quick",
  "quiet",
  "rich",
  "sad",
  "safe",
  "salty",
  "share",
  "short",
  "simple",
  "slow",
  "small",
  "soft",
  "sour",
  "strong",
  "strong",
  "sweet",
  "thick",
  "thirsty",
  "tidy",
  "useful",
  "warm",
  "weak",
  "weak",
  "well",
  "wet",
  "whole",
  "windy",
  "young",
  "wrong",
  "wise",
  "all",
  "albino"
];

export default [...colors, ...otherBasicAdjectives];
