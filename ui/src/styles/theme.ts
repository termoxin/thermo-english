const light = {
  name: 'light',
  body: { background: '#fff' },
  heading: { color: '#130f0f' },
  button: {
    background: {
      red: '#FA4A0C',
      green: '#53B175',
      black: '#000',
    },
    color: {
      primary: '#F6F6F9',
    },
  },
  input: {
    background: '#fff',
    color: '#000',
  },
  card: {
    border: '#bebab3',
  },
  postCard: {
    border: '#FA4A0C',
  },
  logo: {
    color: '#FB4F52',
  },
}

export const themes = {
  light,
  dark: {
    ...light,
    name: 'dark',
    body: { background: '#191919' },
    heading: { color: '#fff' },
  },
}
