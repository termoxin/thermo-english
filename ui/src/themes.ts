const light = {
  body: { background: '#fff' },
  heading: { color: '#130f0f' },
  button: {
    background: {
      red: '#FA4A0C',
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
    body: { background: '#191919' },
    heading: { color: '#fff' },
  },
}
