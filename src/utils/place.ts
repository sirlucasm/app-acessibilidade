type Accessible = 'yes' | 'parcial' | 'no'

export const accessibleTranslateToString = (accessible: Accessible) => {
  const types = {
    yes: 'Acessível',
    parcial: 'Parcialmente acessível',
    no: 'Não acessível'
  }
  return types[accessible];
}

export const generateAccessibleObj = (accessible: Accessible) => {
  const text = accessibleTranslateToString(accessible);
  const color = {
    yes: '#AED655',
    parcial: '#DFC363',
    no: '#EA492A'
  }

  return { text, color: color[accessible] }
}
