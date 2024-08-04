const NON_WORD_CHARS_REGEX = /\W+|[_]+/g
const WHITE_SPACE_REGEX = /\s+/
const UPPERCASE_REGEX = /([a-z](?=[A-Z]))/g

export const formatCamelCase = (text: string) => {
  const formatCase = (word: string, index: number) => {
    const formattedNonFirstWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
    return index === 0 ? word.toLowerCase() : formattedNonFirstWord
  }

  return text
    .replace(NON_WORD_CHARS_REGEX, ' ')
    .replace(UPPERCASE_REGEX, '$1 ')
    .split(WHITE_SPACE_REGEX)
    .map((word, index) => formatCase(word, index))
    .join('')
}
