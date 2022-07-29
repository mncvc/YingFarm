module.exports = {
  "presets": ["babel-preset-expo"],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@components": "./src/Components",
          "@screens": "./src/Screens",
          "@store": "./src/Store",
          "@src": "./src",
        }
      },
    ],
    "react-native-reanimated/plugin", //이 부분
  ],
}