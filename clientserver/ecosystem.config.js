module.exports = {
  apps: [
    {
      name: "react-server",
      script: "app.js",
      instances: 8,
      exec_mode: "cluster",
      env_production: {
        PORT: 3000,
      },
    },
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
// pm2 start ecosystem.config.js
// pm2 reload ecosystem.config.js
// https://app.pm2.io/bucket/617946d8771ea269864bdd4f/backend/overview/servers
