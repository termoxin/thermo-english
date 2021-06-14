const light = {
  name: 'light',
  body: { background: '#fff' },
  heading: { color: '#130f0f' },
  typographyColor: {
    info: '#78746d;',
  },
  colors: {
    red: '#F85156',
    dark: '#535353',
    orange: '#FFC24E',
  },
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
  filterButton: {
    background: '#FB4F52',
  },
  questionsReactions: {
    answerButtonBackground: '#53B175',
    questionBackground: '#454D58',
    textColor: '#fff',
  },
  label: {
    color: '#fff',
    states: {
      requested: '#F85156',
      draft: '#FFC24E',
      published: '#5EA595',
    },
  },
  postItem: {
    color: '#fff',
    background: '#454D58',
    likesBlock: {
      color: '#7C809E',
      background: '#fff',
    },
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
