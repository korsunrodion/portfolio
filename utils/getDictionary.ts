export const getDictionary = async (locale: string) => {
  switch (locale) {
    case 'en':
      return import('../assets/dictionaries/en.json').then((module) => module.default);
    case 'ua':
      return import('../assets/dictionaries/ua.json').then((module) => module.default);
    default:
      return {};
  }
};
