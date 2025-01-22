const fs = require('fs');
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function updateLeaderboard() {
  const issues = await octokit.issues.listForRepo({
    owner: 'your-username',
    repo: 'your-repo',
    state: 'closed',
  });

  const points = {};

  issues.data.forEach((issue) => {
    const user = issue.user.login;
    points[user] = (points[user] || 0) + 10; // هر ایشو ۱۰ امتیاز
  });

  let markdown = `# Leaderboard\n\n| نام کاربر | امتیازات کل |\n|-----------|-------------|\n`;
  Object.entries(points).forEach(([user, point]) => {
    markdown += `| ${user} | ${point} |\n`;
  });

  fs.writeFileSync('leaderboard.md', markdown);
}

updateLeaderboard().catch(console.error);
