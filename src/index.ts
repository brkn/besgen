import adjectives from "./adjectives";
import nouns from "./nouns";
import verbs from "./verbs";
import adverbs from "./adverbs";
import { capitalizeFirstLetter, getRandomElement } from "./utils";

export function generateSentence() {
  const sentence =
    capitalizeFirstLetter(getRandomElement(adjectives)) +
    capitalizeFirstLetter(getRandomElement(adjectives)) +
    capitalizeFirstLetter(getRandomElement(nouns)) +
    capitalizeFirstLetter(getRandomElement(verbs)) +
    capitalizeFirstLetter(getRandomElement(adverbs));

  return sentence;
}
