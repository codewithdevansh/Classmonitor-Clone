// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */

// const {
//     wrapWithReanimatedMetroConfig,
// } = require('react-native-reanimated/metro-config');


// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = wrapWithReanimatedMetroConfig(config);



const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Merge with Reanimated's Metro configuration
const config = mergeConfig(defaultConfig, {});

// Wrap with Reanimated Metro Config
module.exports = wrapWithReanimatedMetroConfig(config);
