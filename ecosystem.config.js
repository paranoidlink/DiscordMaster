module.exports = {
  apps : [{
    name: "DiscordMaster",
    script: "./dm.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
