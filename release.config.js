const preset = "conventionalcommits";
module.exports = {
  branches: [
    { name: "main" },
    { name: "develop" },
  ],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset }],
    ["@semantic-release/release-notes-generator", { preset }],
    ["@semantic-release/github"]
  ],
};
