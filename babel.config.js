    module.exports = function(api) {
      api.cache(true);
      return {
        presets: ['babel-preset-expo'],
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'], // Adjust if your source code is in a different root
              extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
              alias: {
                '@components': './src/components',
                '@assets': './src/assets',
                '@styles': './src/styles',
                // Add more aliases as needed
              },
            },
          ],
        ],
      };
    };