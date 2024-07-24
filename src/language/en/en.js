/**
 * @file This file contains all the English language translations
 * English Language
 * @type {Object}
 * @returns {Object} language - The language object
 */
import english from './english.json';
const en = () => {
  const language = {
    ...english,
  };
  return language;
}
export default en