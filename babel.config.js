module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/env", "@babel/react"];
  const plugins = ["@babel/transform-runtime"];

  return {
    presets,
    plugins
  };
}