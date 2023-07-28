export const primary = '#fdcf43'
export const secondary = '#d6eef2'
export const accent = '#a783d4'
export const mainText = '#000'

export const lightTheme = {
  body: '#fff',
  container: 'rgb(255, 255, 255, 0)',
  card: 'rgb(255, 255, 255, 0.5)',
  text: mainText,
  toggleBorder: '#FFF',
  background: '#363537',
  completeBgColor: '#8cd1a4',
  completeText: '#12402a',
  inProgressBgColor: '#a8d1ff',
  inProgressText: '#082570',
  accentBackground: '#ede0ff',
  accentText: '#6603fc',
  light: true,
  button: {
    primary: {
      background: primary,
      text: mainText 
    },
    secondary: {
      background: secondary,
      text: mainText
    }
  },
  primary,
  secondary,
  accent,
}

export const darkTheme = {
  body: '#191919',
  container: 'rgb(255, 255, 255, 0)',
  text: '#fff',
  toggleBorder: '#6B8096',
  background: '#999',
  completeBgColor: '#8cd1a4',
  completeText: '#12402a',
  inProgressBgColor: '#a8d1ff',
  inProgressText: '#082570',
  accentBackground: '#ede0ff',
  accentText: '#6603fc',
  dark: true,
  button: {
    primary: {
      background: '#fdcf43',
      text: '#000' 
    },
    secondary: {
      background: '#d6eef2',
      text: '#000' 
    }
  }
}