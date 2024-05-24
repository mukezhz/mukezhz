const fs = require("fs");

const fetchBlogPosts = async () => {
  const url =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mukezhz";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const titles = data.items.map((item) => `- [${item.title}](${item.link})`);
    updateReadme(titles);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
};

const updateReadme = (titles) => {
  const readmeContent = `
## Namaste :pray:

<br/>

Software Engineer from Nepal🇳🇵. Exploring the technology.


### 👨‍💻 My Blog Posts

${titles.join("\n")}
- For more blog: [medium](https://mukezhz.medium.com) | [portfolio](https://mukesh.name.np/blog)

### 🥳 Skills

- **Web**: gin[Golang], Express/NestJS[Node Js], Micronaut[Java], Django/Flask[Python], React, Vue, Svelte 
- **DevOps**: Kubernetes, Docker, GitFlux, Linux, github actions(CICD)
- **Database**: Mysql, Postgresql, ScyllaDB, MongoDB, DynamoDB
- **Messaging System**: NATs, Kafka, RabbitMQ
- **Testing Tool**: Cypress
- **Misc**: webRTC, Git
- **Text Editor**: Vim, Emacs, VsCode, Intellij

### 🤝 Let's Connect

| LinkedIn | Twitter | Instagram | Facebook | Telegram | Medium |
| --- | --- | --- | --- | --- | --- |
| [mukezhz](https://linkedin.com/in/mukezhz) | [mukezhz](https://x.com/mukezhz) | [mukezhz](https://instagram.com/mukezhz) | [mukezhz](https://facebook.com/mukezhz) | [mukezhz](https://t.me/mukezhz) | [mukezhz](https://mukezhz.medium.com) |

| My GitHub Card | My Language Stats |
| --- | --- |
|<img alt="Github Stats" src="https://github-readme-stats.vercel.app/api?username=mukezhz&show_icons=true&include_all_commits=true&hide_rank=false&hide=contribs">|<img alt="Language Stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mukezhz&layout=compact&langs_count=6&theme=graywhite&hide=jupyter%20notebook"/>|


<img align="left" src = "https://profile-counter.glitch.me/mukezhz/count.svg" alt ="Loading">
        
`;
  fs.writeFileSync("README.md", readmeContent);
};

fetchBlogPosts();
