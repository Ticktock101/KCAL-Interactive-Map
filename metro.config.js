// module.exports = {
//   transformer: {
//     babelTransformerPath: require.resolve('react-native-svg-transformer'),
//   },
//   resolver: {
//     assetExts: [
//       'bin', 'bmp', 'gif', 'jpg', 'jpeg', 'png', 
//       'psd', 'tiff', 'webp', 'eot', 'ttf', 'otf', 'woff', 'woff2'
//     ],
//     sourceExts: ['jsx', 'js', 'ts', 'tsx', 'svg'],
//   },
// };

// chatgpt code:
// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig(); // Correct usage of getDefaultConfig()

//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'), // Exclude 'svg' from assetExts
//       sourceExts: [...sourceExts, 'svg'], // Include 'svg' in sourceExts
//     },
//   };
// })();


//stackoverflow code:
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require("nativewind/metro")

const config = getDefaultConfig(__dirname);

// const { transformer, resolver } = config;

// config.transformer = {
//   ...transformer,
//   babelTransformerPath: require.resolve('react-native-svg-transformer'),
// };

// config.resolver = {
//   ...resolver,
//   assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
//   sourceExts: [...resolver.sourceExts, 'svg'],
// };

config.resolver.extraNodeModules = {
  fs: require.resolve('./mockfs'),
};

module.exports = withNativeWind(config, { input: "./global.css" });