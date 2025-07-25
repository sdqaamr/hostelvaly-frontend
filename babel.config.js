    export default function(api) {
      api.cache(true);
      return {
        presets: ['babel-preset-expo'],
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'],
              extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
              alias: {
                '@components': './src/components',
                '@assets': './src/assets',
                '@styles': './src/styles',
                '@constants': './src/constants',
              },
            },
          ],
        ],
      };
    };