import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  ExternalLink,
  Download,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}
function YoutubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.8V8.2l6.5 3.8-6.5 3.8z" />
    </svg>
  );
}
function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.962 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const CATS = {
  DE: { label: "Data Engineering", color: "#F2A950", bg: "rgba(242,169,80,0.12)" },
  ML: { label: "Machine Learning", color: "#E8615B", bg: "rgba(232,97,91,0.12)" },
  SWE: { label: "Software Eng.", color: "#5FC9B8", bg: "rgba(95,201,184,0.12)" },
};

const PROJECTS = [
  {
    title: "MLB AWS RDS ELT Pipeline",
    cat: "DE",
    blurb:
      "Fully automated ELT pipeline extracting daily MLB statistics through a custom Node.js service and streaming raw JSON into an AWS Aurora (PostgreSQL) database, with GitHub Actions cron schedules driving zero-touch daily runs and dbt modeling raw extracts into optimized relational schemas.",
    stack: ["Node.js", "AWS Aurora", "PostgreSQL", "dbt", "GitHub Actions"],
    repo: "https://github.com/MichaelArthur224/MLB_AWS_Pipeline",
  },
  {
    title: "LinkedIn Job Alert ETL Pipeline",
    cat: "DE",
    blurb:
      "Automated ETL pipeline using Apache Airflow and JobSpy to scrape daily LinkedIn job postings, filter and format them, then deliver HTML-formatted email digests through an Airflow DAG wired into an SMTP server.",
    stack: ["Apache Airflow", "Python", "JobSpy", "SMTP"],
    repo: "https://github.com/MichaelArthur224/LinkedInPipeline",
  },
  {
    title: "ParkPal Hackathon App",
    cat: "SWE",
    blurb:
      "Built a full-stack web application with JavaScript and Python at the Syracuse University Hackathon, competing against 50 students and placing 2nd for creativity and implementation.",
    stack: ["JavaScript", "Python"],
    repo: "https://cusehacks-beta-2024.devpost.com/",
  },
  {
    title: "NBA ETL Dashboard",
    cat: "DE",
    blurb:
      "Built an end-to-end NBA analytics pipeline using PySpark and the NBA API to extract, transform, and analyze player game data. Developed an interactive Streamlit dashboard with player comparisons, performance trends, rolling averages, and dynamic visualizations using Plotly.",
    stack: ["Python", "PySpark", "Pandas", "Plotly", "Streamlit", "API"],
    repo: "https://github.com/MichaelArthur224/NBA_Spark_ETL",
  },
  {
    title: "Fortnite Stat Tracker",
    cat: "SWE",
    blurb:
      "Built a full-stack web application that integrates the Fortnite API to retrieve and display player statistics. Developed a Python/Flask backend and JavaScript frontend to allow users to track and compare Fortnite performance with friends.",
    stack: ["HTML", "CSS", "Javascript", "Python", "Flask", "API"],
    repo: "https://github.com/MichaelArthur224/FortniteStatTracker",
  },
  {
    title: "Inventory Validation Engine",
    cat: "SWE",
    blurb:
      "Developed a C++ data validation tool to compare approximately 1.5 million products across 318 stores between Island Pacific and Microsoft D365. The tool identifies quantity mismatches and missing inventory records, helping ensure data consistency between systems.",
    stack: ["C++", "Azure", "Synapse"],
    repo: "https://github.com/MichaelArthur224/PacSunInventoryDataValidation",
  },
  {
    title: "Netflix Stock Price Prediction",
    cat: "ML",
    blurb:
      "Developed a machine learning model using Python and Random Forest Regression to analyze Netflix stock data from 2018-2022. Performed data exploration and feature analysis using historical market metrics including opening, closing, high/low prices, adjusted close, and trading volume to predict stock price trends.",
    stack: ["Python", "SciKit Learn", "Random Forest"],
    repo: "https://github.com/MichaelArthur224/Netflix_Stock_Prediction_Analysis",
  },
  {
    title: "Stroke Prediction",
    cat: "ML",
    blurb:
      "PLACEHOLDER - update this with your real description. Built a classification model using Python, Scikit-Learn, and XGBoost to predict stroke risk from patient health records, handling class imbalance and evaluating with precision/recall rather than raw accuracy.",
    stack: ["Python", "SciKit Learn", "Random Forest", "XGBoost"],
    repo: "https://github.com/MichaelArthur224/Stroke_Prediction#stroke_prediction",
  },
];

const SKILLS = [
  {
    label: "languages",
    items: ["Python", "SQL", "Java", "C++", "JavaScript", "TypeScript", "X++", "HTML", "CSS"],
  },
  {
    label: "data_engineering",
    items: ["PySpark", "Apache Spark", "dbt", "Airflow", "Microsoft Fabric", "Pandas", "REST APIs", "NoSQL", "Node.js", "Flask", "React"],
  },
  {
    label: "machine_learning",
    items: ["NumPy", "Scikit-Learn", "XGBoost", "TensorFlow", "Keras", "PyTorch"],
  },
  {
    label: "databases_cloud",
    items: ["Snowflake", "Azure", "Synapse", "AWS RDS", "AWS Aurora", "PostgreSQL", "MySQL"],
  },
  {
    label: "software",
    items: ["SQL Server", "Power BI", "Tableau", "MuleSoft", "Microsoft Dynamics", "ServiceNow", "Postman"],
  },
];

const RESUME_ENTRIES = [
  {
    range: "01/2026",
    kind: "education",
    title: "M.S. in Software Engineering",
    org: "California State University, Fullerton",
    detail: ["Member, Associate Computer Machinery Club"],
  },
  {
    range: "09/2025 — Present",
    kind: "experience",
    title: "ERP Developer",
    org: "PACSUN — Anaheim, CA",
    detail: [
      "Architected a Python ETL pipeline using PySpark and Pandas processing 100,000+ package IDs daily",
      "Contributed to data migration and validation of 5M+ records using Microsoft Fabric with Azure and Snowflake",
      "Built a Power BI migration dashboard achieving 100% data parity between legacy and cloud systems",
    ],
  },
  {
    range: "05/2024 - 07/2024",
    kind: "experience",
    title: "Full Stack Developer Volunteer",
    org: "EnCiv - Irvine, CA",
    detail: [
      "Developed UI components with JavaScript and React to attract users",
      "Utilized MongoDB to securely store user data",
    ],
  },
  {
    range: "05/2024",
    kind: "education",
    title: "B.S. in Computer Science",
    org: "National University",
    detail: ["Dean's List"],
  },
  {
    range: "01/2024 — 04/2024",
    kind: "experience",
    title: "Software Developer Intern",
    org: "Boardwalk Arcade — San Diego, CA",
    detail: [
      "Designed a relational database maintaining integrity across work orders, users, and departments",
      "Optimized MySQL queries for a 60% reduction in load time (0.5s to 0.2s)",
      "Built a Python/Tkinter GUI for work order management with a team of 3",
    ],
  },
  {
    range: "09/2023 — 01/2024",
    kind: "education",
    title: "Data Science Bootcamp",
    org: "Coding Dojo",
    detail: [
      "Covered data science fundamentals, database design, and machine learning techniques",
    ],
  },
];

function useTyping(text, start, speed = 55) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!start) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [start, text, speed]);
  return { out, done };
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Section({ id, tag, title, children }) {
  const [ref, visible] = useReveal();
  return (
    <section id={id} ref={ref} className={`section ${visible ? "in" : ""}`}>
      <div className="section-inner">
        <div className="section-head">
          <span className="comment">{tag}</span>
          {title && <h2>{title}</h2>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [heroReady, setHeroReady] = useState(false);
  const { out: line1, done: line1Done } = useTyping("$ Greeting", heroReady, 90);
  const { out: line2, done: line2Done } = useTyping(
    "Hello, my name is Michael.",
    line1Done,
    70
  );

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  const navLinks = [
    ["#about", "~/about"],
    ["#projects", "~/projects"],
    ["#resume", "~/resume"],
    ["#contact", "~/contact"],
  ];

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        :root {
          --bg: #0B0E14;
          --surface: #121826;
          --surface-2: #1A2233;
          --border: #232C40;
          --border-soft: #1C2434;
          --text: #E7EAF0;
          --text-muted: #8993A8;
          --accent: #F2A950;
          --accent-dim: #B87F3A;
          --mono: 'IBM Plex Mono', monospace;
          --sans: 'IBM Plex Sans', sans-serif;
        }
        html {
          scroll-behavior: smooth;
        }

* { box-sizing: border-box; }

.app {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  min-height: 100vh;
  line-height: 1.6;
}

        * { box-sizing: border-box; }

        .app {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          min-height: 100vh;
          line-height: 1.6;
          scroll-behavior: smooth;
        }

        a { color: inherit; }

        .comment {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--accent);
          letter-spacing: 0.02em;
        }

        .comment::before { content: "// "; opacity: 0.6; }

        /* NAV */
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(11,14,20,0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1040px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-family: var(--mono);
          font-size: 14px;
          color: var(--text);
        }
        .logo span { color: var(--accent); }
        .nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          font-family: var(--mono);
          font-size: 13px;
          text-decoration: none;
          color: var(--text-muted);
          transition: color 0.15s ease;
        }
        .nav-links a:hover, .nav-links a:focus-visible { color: var(--accent); }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
        }
        .nav-mobile {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 0 24px 16px;
        }
        .nav-mobile.open { display: flex; }
        .nav-mobile a {
          font-family: var(--mono);
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-soft);
        }

        /* HERO */
        .hero {
          max-width: 1040px;
          margin: 0 auto;
          padding: 96px 24px 88px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .terminal {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          max-width: 640px;
          width: 100%;
          text-align: left;
        }
        .terminal-bar {
          display: flex;
          gap: 6px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: #3A4358; }
        .terminal-body {
          padding: 24px 22px 28px;
          font-family: var(--mono);
          font-size: 15px;
        }
        .prompt-line { color: var(--text-muted); margin-bottom: 10px; }
        .prompt-line .prefix { color: var(--accent); }
        .out-line {
          font-size: 26px;
          font-weight: 500;
          color: var(--text);
          min-height: 34px;
        }
        .cursor {
          display: inline-block;
          width: 9px;
          height: 22px;
          background: var(--accent);
          margin-left: 2px;
          vertical-align: -3px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .hero-role {
          margin-top: 20px;
          font-size: 18px;
          color: var(--text-muted);
          max-width: 640px;
        }
        .hero-role strong { color: var(--text); font-weight: 500; }

        .hero-tags {
          display: flex;
          gap: 10px;
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .tag {
          font-family: var(--mono);
          font-size: 12px;
          padding: 5px 10px;
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 32px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn {
          font-family: var(--mono);
          font-size: 13px;
          padding: 11px 18px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: 1px solid var(--border);
          transition: border-color 0.15s ease, transform 0.1s ease;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn-primary {
          background: var(--accent);
          color: #1B1204;
          border-color: var(--accent);
          font-weight: 600;
        }
        .btn-primary:hover { background: #F5B764; }
        .btn-ghost { color: var(--text); background: transparent; }
        .btn-ghost:hover { border-color: var(--accent-dim); color: var(--accent); }

        /* SECTIONS */
        .section {
          border-top: 1px solid var(--border-soft);
          padding: 72px 0;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .section.in { opacity: 1; transform: translateY(0); }
        .section-inner { max-width: 1040px; margin: 0 auto; padding: 0 24px; }
        .section-head { margin-bottom: 32px; }
        .section-head h2 {
          font-family: var(--mono);
          font-size: 26px;
          font-weight: 600;
          margin: 8px 0 0;
          color: var(--text);
        }

        /* ABOUT - centered */
        #about .section-inner { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .about-text {
          max-width: 640px;
          margin: 0 auto 40px;
          color: var(--text-muted);
          font-size: 16px;
          text-align: center;
        }
        .about-text strong { color: var(--text); font-weight: 500; }
        .skills-block {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 24px 26px;
          font-family: var(--mono);
          text-align: left;
          width: 100%;
          max-width: 640px;
        }
        .skills-row { margin-bottom: 16px; }
        .skills-row:last-child { margin-bottom: 0; }
        .skills-key { color: var(--accent); font-size: 13px; }
        .skills-vals {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .chip {
          font-size: 12.5px;
          padding: 4px 10px;
          border-radius: 4px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--text);
        }

        /* PROJECTS */
        .filters {
          display: flex;
          gap: 10px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .filter-btn {
          font-family: var(--mono);
          font-size: 12.5px;
          padding: 7px 14px;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .filter-btn:hover { color: var(--text); border-color: var(--border); }
        .filter-btn.active-ALL { background: var(--surface-2); color: var(--text); border-color: var(--border); }
        .filter-btn.active-DE { background: rgba(242,169,80,0.12); color: #F2A950; border-color: #F2A950; }
        .filter-btn.active-ML { background: rgba(232,97,91,0.12); color: #E8615B; border-color: #E8615B; }
        .filter-btn.active-SWE { background: rgba(95,201,184,0.12); color: #5FC9B8; border-color: #5FC9B8; }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
        }
        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .card:hover { border-color: var(--border-strong, #34405C); transform: translateY(-2px); }
        .card-top {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 10px;
          gap: 10px;
        }
        .cat-pill {
          font-family: var(--mono);
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 4px;
          white-space: nowrap;
          font-weight: 600;
        }
        .card h3 {
          font-size: 16.5px;
          font-weight: 600;
          margin: 4px 0 10px;
          color: var(--text);
        }
        .card p {
          font-size: 14px;
          color: var(--text-muted);
          margin: 0 0 16px;
          flex-grow: 1;
        }
        .stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .stack-tag {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--text-muted);
          background: var(--surface-2);
          padding: 3px 8px;
          border-radius: 4px;
        }
        .card-links {
          display: flex;
          gap: 16px;
          font-family: var(--mono);
          font-size: 12.5px;
        }
        .card-links a {
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          color: var(--text-muted);
          transition: color 0.15s ease;
        }
        .card-links a:hover { color: var(--accent); }

        /* RESUME - centered container, left-aligned timeline inside it */
        #resume .section-inner { display: flex; flex-direction: column; align-items: center; }
        #resume .section-head { text-align: center; width: 100%; }
        .resume-download {
          margin-bottom: 32px;
        }
        .timeline { border-left: 2px solid var(--border); padding-left: 24px; max-width: 620px; width: 100%; }
        .entry { position: relative; margin-bottom: 30px; }
        .entry:last-child { margin-bottom: 0; }
        .entry::before {
          content: "";
          position: absolute;
          left: -30px;
          top: 4px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent);
        }
        .entry-range {
          font-family: var(--mono);
          font-size: 12.5px;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .entry-title { font-size: 16px; font-weight: 600; color: var(--text); }
        .entry-org { font-size: 13.5px; color: var(--text-muted); margin-bottom: 6px; }
        .entry-bullets {
          font-size: 14px;
          color: var(--text-muted);
          max-width: 620px;
          margin: 0;
          padding-left: 18px;
        }
        .entry-bullets li { margin-bottom: 4px; }
        .entry-bullets li::marker { color: var(--accent); }

        /* CONTACT */
        #contact .section-inner { text-align: center; display: flex; flex-direction: column; align-items: center; }
        #contact p { margin-left: auto; margin-right: auto; }
        .contact-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
          justify-content: center;
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: var(--mono);
          font-size: 14px;
          padding: 12px 18px;
          border: 1px solid var(--border);
          border-radius: 6px;
          text-decoration: none;
          color: var(--text);
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .contact-link:hover { border-color: var(--accent-dim); color: var(--accent); }

        footer {
          border-top: 1px solid var(--border-soft);
          padding: 28px 24px;
          text-align: center;
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-muted);
        }

        a:focus-visible, button:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }

        @media (max-width: 720px) {
          .nav-links { display: none; }
          .nav-toggle { display: block; }
          .hero { padding: 64px 20px 56px; }
          .out-line { font-size: 21px; }
          .section { padding: 52px 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .section { transition: none; opacity: 1; transform: none; }
          .cursor { animation: none; }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">michael<span>@</span>portfolio<span>:~$</span></div>
          <ul className="nav-links">
            {navLinks.map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <button
            className="nav-toggle"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`nav-mobile ${navOpen ? "open" : ""}`}>
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setNavOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>

      <header className="hero">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="terminal-body">
            <div className="prompt-line"><span className="prefix">$</span> {line1}{!line1Done && <span className="cursor" />}</div>
            <div className="out-line">
              {line2}
              {line1Done && <span className="cursor" />}
            </div>
          </div>
        </div>

        <p className="hero-role">
          Aspiring <strong>Data Enthusiast</strong>, building pipelines that
          scale, models that ship, and software that holds up in production.
        </p>

        <div className="hero-tags">
          <span className="tag" style={{ color: CATS.DE.color, borderColor: CATS.DE.color }}>Data Engineering</span>
          <span className="tag" style={{ color: CATS.ML.color, borderColor: CATS.ML.color }}>Machine Learning</span>
          <span className="tag" style={{ color: CATS.SWE.color, borderColor: CATS.SWE.color }}>Software Engineering</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View projects <ArrowUpRight size={15} />
          </a>
          <a href="#resume" className="btn btn-ghost">
            <Download size={15} /> Resume
          </a>
        </div>
      </header>

      <Section id="about" tag="about.md">
        <div className="about-text">
          I'm <strong>Michael Arthur</strong>, an ERP Developer at PACSUN
          and Cal State Fullerton alumni. Day to day I build Python pipelines
          to clean and analyze millions of records across Azure, Snowflake,
          and AWS, and outside of work I build my own data projects from
          ELT pipelines to machine learning models.
        </div>
        <div className="skills-block">
          {SKILLS.map((row) => (
            <div className="skills-row" key={row.label}>
              <div className="skills-key">{row.label}:</div>
              <div className="skills-vals">
                {row.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" tag="projects" title="Featured Work">
        <div className="filters">
          {["ALL", "DE", "SWE", "ML"].map((c) => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? `active-${c}` : ""}`}
              onClick={() => setFilter(c)}
            >
              {c === "ALL" ? "All" : CATS[c].label}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filtered.map((p) => (
            <div className="card" key={p.title}>
              <div className="card-top">
                <span
                  className="cat-pill"
                  style={{ color: CATS[p.cat].color, background: CATS[p.cat].bg }}
                >
                  {p.cat}
                </span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="stack-row">
                {p.stack.map((s) => (
                  <span className="stack-tag" key={s}>{s}</span>
                ))}
              </div>
              <div className="card-links">
                <a href={p.repo} target="_blank" rel="noreferrer"><GithubIcon size={13} /> Code</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="resume" tag="resume.md" title="Background">
        <div className="resume-download">
          <a href="/MichaelArthurResume.pdf" download className="btn btn-ghost">
            <Download size={15} /> Download full resume (PDF)
          </a>
        </div>
        <div className="timeline">
          {RESUME_ENTRIES.map((e) => (
            <div className="entry" key={e.title + e.range}>
              <div className="entry-range">{e.range}</div>
              <div className="entry-title">{e.title}</div>
              <div className="entry-org">{e.org}</div>
              {e.detail.length > 0 && (
                <ul className="entry-bullets">
                  {e.detail.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" tag="contact" title="Let's talk">
        <p style={{ color: "var(--text-muted)", maxWidth: 520, marginBottom: 8 }}>
          Open to data engineering roles, internships, and interesting
          problems in general. Reach out any of these ways.
        </p>
        <div className="contact-row">
          <a className="contact-link" href="mailto:contactmichaelarthur@gmail.com">
            <Mail size={16} /> contactmichaelarthur@gmail.com
          </a>
          <a className="contact-link" href="https://github.com/MichaelArthur224" target="_blank" rel="noreferrer">
            <GithubIcon size={16} /> github.com/MichaelArthur224
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/michaelearthur/" target="_blank" rel="noreferrer">
            <LinkedinIcon size={16} /> linkedin.com/in/michaelearthur
          </a>
          <a className="contact-link" href="https://www.youtube.com/@Michaaael224" target="_blank" rel="noreferrer">
            <YoutubeIcon size={16} /> youtube.com/@Michaaael224
          </a>
        </div>
      </Section>

      <footer>
        built by michael
      </footer>
    </div>
  );
}