module.exports = {
  apps: [
    {
      name: "PC-Gaptech - Server",
      script: "cd server && npm install && npm run dev",
    },
    {
      name: "PC-Gaptech - Apollo Server",
      script: "cd apollo-server && npm install && nodemon app.js",
    },
  ],
};
