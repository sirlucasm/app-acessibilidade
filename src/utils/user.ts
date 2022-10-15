export const getUserNameLetters = (name: string) => {
  const splited = name.split(' ');

  if (splited.length > 1) return `${splited[0][0]}${splited[1][0]}`
  return `${splited[0][0]}${splited[0][1]}`;
}
