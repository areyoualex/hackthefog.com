module.exports = function (api) {
  const presets = ["@babel/env", "@babel/preset-react"];
  const plugins = [];

  api.cache(false)

  return {
    presets,
    plugins
  };
}
