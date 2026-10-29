
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevOps Hub | CI/CD Platform</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg: #080c12;
      --panel: #101720;
      --border: #202c38;
      --green: #a3ff6f;
      --text: #edf4f7;
      --muted: #8b9aaa;
    }

    body {
      font-family: Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      line-height: 1.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      width: min(1120px, 90%);
      margin: auto;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
      border-bottom: 1px solid var(--border);
    }

    .logo {
      font-size: 23px;
      font-weight: bold;
      letter-spacing: -1px;
    }

    .logo span {
      color: var(--green);
    }

    .nav-links {
      display: flex;
      gap: 28px;
      color: var(--muted);
      font-size: 14px;
    }

    .nav-links a:hover {
      color: var(--green);
    }

    .status-pill {
      border: 1px solid #31523a;
      color: var(--green);
      border-radius: 30px;
      padding: 7px 13px;
      font-size: 12px;
    }

    .hero {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 55px;
      padding: 85px 0 65px;
    }

    .eyebrow {
      color: var(--green);
      font-size: 12px;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    h1 {
      font-size: clamp(38px, 5vw, 66px);
      line-height: 1.08;
      letter-spacing: -2.5px;
      margin-bottom: 24px;
    }

    h1 span {
      color: var(--green);
    }

    .hero-description {
      color: var(--muted);
      max-width: 530px;
      font-size: 16px;
      margin-bottom: 30px;
    }

    .buttons {
      display: flex;
      gap: 13px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 14px;
      transition: 0.25s;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--green);
      color: #0b1208;
      border: 1px solid var(--green);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px #a3ff6f30;
    }

    .btn-secondary {
      border: 1px solid var(--border);
      color: var(--text);
    }

    .btn-secondary:hover {
      border-color: var(--green);
    }

    .terminal {
      background: #0c121a;
      border: 1px solid var(--border);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 25px 80px #0008;
      transform: translateY(0);
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    .terminal-header {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 15px;
      border-bottom: 1px solid var(--border);
      color: var(--muted);
      font-size: 12px;
    }

    .dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #ff6b6b;
    }

    .dot:nth-child(2) { background: #ffd166; }
    .dot:nth-child(3) { background: var(--green); }

    .terminal-body {
      padding: 24px;
      font-family: Consolas, monospace;
      font-size: 13px;
    }

    .terminal-body p {
      margin-bottom: 14px;
      overflow-wrap: anywhere;
    }

    .prompt { color: var(--green); }
    .muted { color: var(--muted); }
    .success { color: #a3ff6f; }

    .section-heading {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      margin: 25px 0;
    }

    h2 {
      font-size: 28px;
      letter-spacing: -1px;
    }

    .section-heading p {
      color: var(--muted);
      font-size: 14px;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 65px;
    }

    .stat-card, .feature-card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 13px;
      padding: 24px;
      transition: 0.25s;
    }

    .stat-card:hover, .feature-card:hover {
      border-color: #557744;
      transform: translateY(-4px);
    }

    .stat-label {
      color: var(--muted);
      font-size: 13px;
      margin-bottom: 12px;
    }

    .stat-value {
      font-size: 26px;
      font-weight: bold;
    }

    .stat-note {
      color: var(--green);
      font-size: 12px;
      margin-top: 8px;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-bottom: 70px;
    }

    .feature-icon {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border-radius: 11px;
      background: #a3ff6f12;
      border: 1px solid #a3ff6f30;
      font-size: 22px;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      font-size: 17px;
      margin-bottom: 10px;
    }

    .feature-card p {
      color: var(--muted);
      font-size: 13px;
    }

    .project-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 25px;
      padding: 32px;
      margin-bottom: 60px;
      border: 1px solid #34452e;
      border-radius: 15px;
      background: linear-gradient(110deg, #152019, #101720);
    }

    .project-banner p {
      color: var(--muted);
      font-size: 14px;
      margin-top: 6px;
    }

    footer {
      padding: 25px 0;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      gap: 15px;
      flex-wrap: wrap;
    }

    @media (max-width: 760px) {
      .nav-links { display: none; }

      .hero {
        grid-template-columns: 1fr;
        padding: 55px 0;
        gap: 35px;
      }

      .stats, .features {
        grid-template-columns: 1fr;
      }

      .section-heading {
        align-items: start;
        flex-direction: column;
      }

      .project-banner {
        align-items: start;
        flex-direction: column;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <nav>
      <a class="logo" href="#">DevOps<span>Hub.</span></a>

      <div class="nav-links">
        <a href="#overview">Overview</a>
        <a href="#features">Features</a>
        <a href="#project">Project</a>
      </div>

      <div class="status-pill">
        <span>●</span> Application Online
      </div>
    </nav>

    <main>
      <section class="hero" id="overview">
        <div>
          <p class="eyebrow">My First DevOps Project</p>

          <h1>
            Build. Deploy.<br>
            <span>Automate.</span>
          </h1>

          <p class="hero-description">
            Exploring the world of DevOps through a modern web
            application built with Node.js and Docker.
            One step closer to automated deployment.
          </p>

          <div class="buttons">
            <a class="btn btn-primary" href="#features">
              Explore Platform ↗
            </a>

            <a class="btn btn-secondary" href="#project">
              About Project
            </a>
          </div>
        </div>

        <div class="terminal">
          <div class="terminal-header">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span style="margin-left: 8px">devops-terminal</span>
          </div>

          <div class="terminal-body">
            <p class="muted"># Starting application...</p>
            <p><span class="prompt">$</span> node index.js</p>
            <p class="success">✓ Server initialized</p>
            <p class="success">✓ Node.js runtime ready</p>
            <p class="success">✓ HTTP server listening</p>
            <p><span class="prompt">$</span> <span id="typing"></span><span class="success">_</span></p>
          </div>
        </div>
      </section>

      <section>
        <div class="section-heading">
          <div>
            <p class="eyebrow">System Overview</p>
            <h2>Application Dashboard</h2>
          </div>
          <p>Basic project information</p>
        </div>

        <div class="stats">
          <div class="stat-card">
            <p class="stat-label">Application Status</p>
            <p class="stat-value"><span class="success">●</span> Online</p>
            <p class="stat-note">Node.js server is responding</p>
          </div>

          <div class="stat-card">
            <p class="stat-label">Server Port</p>
            <p class="stat-value">3000</p>
            <p class="stat-note">HTTP application port</p>
          </div>

          <div class="stat-card">
            <p class="stat-label">Container Technology</p>
            <p class="stat-value">Docker</p>
            <p class="stat-note">Container-ready application</p>
          </div>
        </div>
      </section>

      <section id="features">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Technology Stack</p>
            <h2>Built for Learning</h2>
          </div>
          <p>Tools used in this project</p>
        </div>

        <div class="features">
          <article class="feature-card">
            <div class="feature-icon">⌘</div>
            <h3>Node.js</h3>
            <p>
              Runs the server and delivers this web page
              using JavaScript.
            </p>
          </article>

          <article class="feature-card">
            <div class="feature-icon">▣</div>
            <h3>Docker</h3>
            <p>
              Packages the application into a portable
              container for consistent execution.
            </p>
          </article>

          <article class="feature-card">
            <div class="feature-icon">↗</div>
            <h3>CI/CD — Next Step</h3>
            <p>
              The next stage is to automate testing,
              building and deployment.
            </p>
          </article>
        </div>
      </section>

      <section class="project-banner" id="project">
        <div>
          <p class="eyebrow">The Mission</p>
          <h2>Learning DevOps, One Step at a Time.</h2>
          <p>A hands-on project focused on practical skills.</p>
        </div>

        <a class="btn btn-primary" href="#overview">
          Back to Top ↑
        </a>
      </section>
    </main>

    <footer>
      <p>© 2026 DevOpsHub. Learning by building.</p>
      <p>Node.js · Docker · Continuous Improvement</p>
    </footer>
  </div>

  <script>
    const message = "docker build -t devops-cicd-app .";
    const typing = document.getElementById("typing");
    let index = 0;

    function typeText() {
      if (index < message.length) {
        typing.textContent += message[index];
        index++;
        setTimeout(typeText, 65);
      }
    }

    typeText();
  </script>
</body>
</html>`);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
