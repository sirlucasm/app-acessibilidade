module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module:react-native-dotenv",
        {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env",
          "allowlist": null,
          "safe": false,
          "allowUndefined": true,
          "verbose": false
        }
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.ts',
            '.tsx',
            '.json',
            '.svg',
            '.png',
            '.jpg'
          ],
          alias: {
            "@components": "./src/components/",
            "@screens": "./src/screens/",
            "@assets": "./assets/",
            "@styles": "./src/styles/",
          },
        },
      ],
    ]
  };
};
