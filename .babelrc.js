module.exports = {
  "presets": [
    "@babel/react",
    "@babel/stage-0",
    [
      "@babel/env",
      {
        "targets": {
          "browsers": "last 2 Chrome versions"
        }
      }
    ]
  ]
};