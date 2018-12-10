module.exports = function (api) {
  const presets = [
    "@babel/env",
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
  ];

  api.cache(false)

  return {
    presets,
    plugins
  };
}
