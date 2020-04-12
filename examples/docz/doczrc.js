export default {
  typescript: true,
  docgenConfig: {
    searchPath: '../',
  },
  // files: '../src/**/*.stories.(js|tsx|mdx)',
  filterComponents: files => {
    return files.filter(filepath =>
      /\/[A-Z]\w*\.(js|jsx|ts|tsx)$/.test(filepath),
    );
  },
};
