const careers = [
  {
    category: "AI / ML Engineering", icon: "🤖", bg: "#e6f1fb", type: "tech",
    roles: [
      { title: "Machine Learning Engineer", salary: "$120k–$200k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["Python", "PyTorch / TensorFlow", "Statistics", "Model deployment", "Feature engineering"],
        tools: ["MLflow", "Weights & Biases", "SageMaker", "Hugging Face"],
        must: ["Linear algebra", "Probability theory"],
        soft: ["Research mindset", "Problem solving"] },
      { title: "AI Research Scientist", salary: "$150k–$250k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["Deep learning", "Reinforcement learning", "CUDA / GPU programming", "Experiment design"],
        tools: ["JAX", "PyTorch", "SLURM", "LaTeX"],
        must: ["PhD preferred", "Advanced math"],
        soft: ["Critical thinking", "Publishing & writing"] },
      { title: "LLM / GenAI Engineer", salary: "$130k–$220k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["Prompt engineering", "RAG (Retrieval Augmented Gen)", "Fine-tuning (LoRA, RLHF)", "API integration"],
        tools: ["LangChain", "LlamaIndex", "OpenAI API", "Pinecone / Weaviate"],
        must: ["Python", "Vector databases"],
        soft: ["Fast iteration", "Curiosity"] },
      { title: "MLOps Engineer", salary: "$110k–$180k+", demand: "high", demandLabel: "High demand",
        core: ["CI/CD for ML", "Model monitoring", "Cloud platforms", "Data pipelines"],
        tools: ["Docker", "Kubernetes", "Airflow", "MLflow"],
        must: ["DevOps fundamentals", "Python"],
        soft: ["Reliability mindset", "Automation thinking"] },
    ]
  },
  {
    category: "Data", icon: "📊", bg: "#eaf3de", type: "tech",
    roles: [
      { title: "Data Scientist", salary: "$100k–$160k+", demand: "high", demandLabel: "High demand",
        core: ["Python / R", "SQL", "Statistics", "A/B testing", "Data visualization"],
        tools: ["Pandas", "Scikit-learn", "Tableau", "Jupyter"],
        must: ["Hypothesis testing", "EDA"],
        soft: ["Business storytelling", "Curiosity"] },
      { title: "Data Engineer", salary: "$110k–$175k+", demand: "high", demandLabel: "High demand",
        core: ["SQL", "ETL pipelines", "Data modeling", "Streaming data"],
        tools: ["Apache Spark", "dbt", "Airflow", "BigQuery / Snowflake"],
        must: ["Python / Scala", "Cloud data warehouses"],
        soft: ["Documentation", "Attention to detail"] },
      { title: "Data Analyst", salary: "$70k–$130k+", demand: "high", demandLabel: "High demand",
        core: ["SQL", "Data visualization", "Business metrics", "Excel / Sheets"],
        tools: ["Power BI", "Tableau", "Looker", "Google Analytics"],
        must: ["Dashboard building", "Stakeholder comms"],
        soft: ["Storytelling with data", "Curiosity"] },
      { title: "Analytics Engineer", salary: "$100k–$155k+", demand: "growing", demandLabel: "Fast growing",
        core: ["SQL", "Data transformation", "Data modeling", "Version control"],
        tools: ["dbt", "Looker", "Metabase", "Git"],
        must: ["Semantic layer design", "Documentation"],
        soft: ["Cross-team collaboration", "Systematic thinking"] },
    ]
  },
  {
    category: "Software Engineering", icon: "💻", bg: "#faeeda", type: "tech",
    roles: [
      { title: "AI-Augmented Full Stack Developer", salary: "$100k–$175k+", demand: "high", demandLabel: "High demand",
        core: ["JavaScript / TypeScript", "React / Next.js", "Node.js", "AI API integration", "Databases"],
        tools: ["GitHub Copilot", "Vercel", "PostgreSQL", "REST / GraphQL"],
        must: ["Version control (Git)", "Deployment"],
        soft: ["Product thinking", "Shipping fast"] },
      { title: "Backend Engineer (AI Systems)", salary: "$115k–$190k+", demand: "high", demandLabel: "High demand",
        core: ["Python / Go / Java", "API design", "Microservices", "Distributed systems"],
        tools: ["Kafka", "Redis", "gRPC", "Docker"],
        must: ["Scalability", "System design"],
        soft: ["Ownership", "On-call discipline"] },
      { title: "AI Infrastructure Engineer", salary: "$130k–$210k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["GPU cluster management", "Cloud infrastructure", "Networking", "Observability"],
        tools: ["Kubernetes", "Terraform", "Prometheus", "NVIDIA CUDA"],
        must: ["Linux", "Cloud (AWS/GCP/Azure)"],
        soft: ["Reliability-first thinking", "Documentation"] },
      { title: "Embedded AI / Edge Engineer", salary: "$110k–$175k+", demand: "growing", demandLabel: "Fast growing",
        core: ["C / C++", "Embedded systems", "TensorFlow Lite / ONNX", "Hardware optimization"],
        tools: ["Raspberry Pi / Jetson", "RTOS", "ARM architecture"],
        must: ["Low-level programming", "Power constraints"],
        soft: ["Hardware empathy", "Debugging patience"] },
    ]
  },
  {
    category: "Product & Design", icon: "🎨", bg: "#fbeaf0", type: "tech",
    roles: [
      { title: "AI Product Manager", salary: "$120k–$200k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["AI/ML literacy", "Roadmapping", "User research", "Data analysis", "Prioritization"],
        tools: ["Figma", "Jira", "Mixpanel", "SQL basics"],
        must: ["Stakeholder management", "Vision setting"],
        soft: ["Empathy", "Communication", "Judgment"] },
      { title: "AI UX / Product Designer", salary: "$90k–$155k+", demand: "high", demandLabel: "High demand",
        core: ["User research", "Interaction design", "Conversational UI", "Design systems", "Accessibility"],
        tools: ["Figma", "Protopie", "Maze", "Framer"],
        must: ["Human-centered design", "Usability testing"],
        soft: ["Empathy", "Iteration mindset"] },
      { title: "Conversational / Voice Designer", salary: "$80k–$140k+", demand: "growing", demandLabel: "Fast growing",
        core: ["Dialogue flow design", "NLP basics", "UX writing", "Intent mapping"],
        tools: ["Voiceflow", "Botpress", "Dialogflow"],
        must: ["User intent understanding", "Copy clarity"],
        soft: ["Empathy", "Language intuition"] },
    ]
  },
  {
    category: "AI Safety & Ethics", icon: "🛡️", bg: "#eeedfe", type: "tech",
    roles: [
      { title: "AI Safety Researcher", salary: "$130k–$220k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["Interpretability techniques", "Red-teaming", "Formal verification", "ML theory"],
        tools: ["Python", "Jupyter", "Mechanistic interp tools"],
        must: ["Math / CS background", "Long-term risk thinking"],
        soft: ["Ethics reasoning", "Publishing"] },
      { title: "AI Ethics Officer", salary: "$100k–$165k+", demand: "high", demandLabel: "High demand",
        core: ["Bias detection", "Fairness metrics", "Regulatory frameworks", "Audit methodology"],
        tools: ["Fairlearn", "IBM AI Fairness 360", "Documentation tools"],
        must: ["Regulatory awareness (EU AI Act, NIST)"],
        soft: ["Policy thinking", "Stakeholder influence", "Judgment"] },
      { title: "Trust & Safety Engineer", salary: "$110k–$175k+", demand: "high", demandLabel: "High demand",
        core: ["Content moderation ML", "Classifier training", "Policy writing", "Risk analysis"],
        tools: ["Python", "SQL", "Annotation tools", "Dashboard tools"],
        must: ["Policy design", "Incident response"],
        soft: ["Resilience", "Clear communication"] },
    ]
  },
  {
    category: "Healthcare & Science", icon: "🏥", bg: "#e1f5ee", type: "nontech",
    roles: [
      { title: "Clinical AI Specialist", salary: "$90k–$150k+", demand: "high", demandLabel: "High demand",
        core: ["Clinical workflow knowledge", "AI tool evaluation", "EHR systems", "Patient safety"],
        tools: ["Epic / Cerner", "Clinical decision tools", "FHIR standards"],
        must: ["Healthcare background (MD/NP/RN)", "Regulatory (FDA, HIPAA)"],
        soft: ["Clinical judgment", "Communication"] },
      { title: "AI-Assisted Radiologist / Pathologist", salary: "$200k–$350k+", demand: "growing", demandLabel: "Fast growing",
        core: ["Medical imaging AI tools", "Diagnostic accuracy", "AI result interpretation"],
        tools: ["AI-assisted PACS", "Pathology AI platforms"],
        must: ["Medical degree + specialization", "AI literacy"],
        soft: ["Attention to detail", "Collaboration with AI systems"] },
      { title: "Bioinformatics Scientist", salary: "$100k–$170k+", demand: "high", demandLabel: "High demand",
        core: ["Genomics / proteomics", "Statistical modeling", "ML in biology", "Data pipelines"],
        tools: ["Python / R", "BioPython", "Galaxy", "BLAST"],
        must: ["Biology background", "Data handling"],
        soft: ["Domain expertise", "Cross-discipline collab"] },
    ]
  },
  {
    category: "Business & Finance", icon: "💼", bg: "#f1efe8", type: "nontech",
    roles: [
      { title: "AI Strategy Consultant", salary: "$100k–$180k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["AI/ML literacy", "Business analysis", "Digital transformation", "ROI modeling"],
        tools: ["PowerPoint / Slides", "Excel / Sheets", "Miro", "Project tools"],
        must: ["Client management", "Presentation skills"],
        soft: ["Strategic thinking", "Adaptability", "Communication"] },
      { title: "Financial Analyst (AI-augmented)", salary: "$80k–$140k+", demand: "high", demandLabel: "High demand",
        core: ["Financial modeling", "AI tool usage", "Data analysis", "Forecasting"],
        tools: ["Excel / Python", "Bloomberg", "Power BI", "AI copilots"],
        must: ["Finance fundamentals", "SQL basics"],
        soft: ["Attention to detail", "Storytelling with numbers"] },
      { title: "AI Procurement / Vendor Manager", salary: "$80k–$130k+", demand: "growing", demandLabel: "Fast growing",
        core: ["AI vendor evaluation", "Contract negotiation", "Risk assessment", "Due diligence"],
        tools: ["Procurement platforms", "ERP systems", "Scoring frameworks"],
        must: ["Business acumen", "Regulatory awareness"],
        soft: ["Negotiation", "Judgment"] },
      { title: "Insurance Underwriter (AI tools)", salary: "$70k–$120k+", demand: "growing", demandLabel: "Fast growing",
        core: ["Risk modeling", "AI-assisted underwriting tools", "Policy analysis"],
        tools: ["Underwriting AI platforms", "Excel", "Actuarial tools"],
        must: ["Insurance domain knowledge"],
        soft: ["Analytical thinking", "Decision making under uncertainty"] },
    ]
  },
  {
    category: "Marketing & Sales", icon: "📣", bg: "#faece7", type: "nontech",
    roles: [
      { title: "AI Marketing Manager", salary: "$80k–$140k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["AI content tools", "Marketing analytics", "Personalization strategy", "Campaign management"],
        tools: ["HubSpot", "Jasper / Copy.ai", "GA4", "SEMrush"],
        must: ["Marketing fundamentals", "Data literacy"],
        soft: ["Creativity", "Brand sense", "Adaptability"] },
      { title: "Growth Hacker / Performance Marketer", salary: "$70k–$130k+", demand: "high", demandLabel: "High demand",
        core: ["Paid ads (Meta, Google)", "A/B testing", "Funnel optimization", "AI-assisted copy"],
        tools: ["Meta Ads Manager", "Google Ads", "Unbounce", "Amplitude"],
        must: ["Analytics", "Experiment design"],
        soft: ["Hustle mindset", "Data interpretation"] },
      { title: "AI Sales Development Rep (SDR)", salary: "$55k–$100k+ OTE", demand: "high", demandLabel: "High demand",
        core: ["AI prospecting tools", "CRM management", "Outreach sequences", "Product knowledge"],
        tools: ["Salesforce", "Apollo.io", "Outreach", "LinkedIn Sales Nav"],
        must: ["Communication", "Pipeline management"],
        soft: ["Persistence", "Coachability", "Rapport building"] },
      { title: "Content Strategist (AI-native)", salary: "$70k–$120k+", demand: "high", demandLabel: "High demand",
        core: ["AI writing tools", "SEO", "Content planning", "Brand voice", "Analytics"],
        tools: ["ChatGPT / Claude", "Surfer SEO", "Notion", "Ahrefs"],
        must: ["Writing quality", "Topic research"],
        soft: ["Creativity", "Editing eye", "Trend awareness"] },
    ]
  },
  {
    category: "Education & Training", icon: "🎓", bg: "#e6f1fb", type: "nontech",
    roles: [
      { title: "AI Curriculum Designer", salary: "$65k–$110k+", demand: "high", demandLabel: "High demand",
        core: ["Learning science", "AI tool integration", "Instructional design", "Assessment design"],
        tools: ["Canvas / Moodle", "Articulate 360", "ChatGPT for educators"],
        must: ["Pedagogy", "Subject matter expertise"],
        soft: ["Empathy for learners", "Creativity"] },
      { title: "Corporate AI Trainer", salary: "$70k–$130k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["Adult learning (L&D)", "AI tools training", "Facilitation", "Assessment design"],
        tools: ["LMS platforms", "Zoom/Teams", "AI productivity tools"],
        must: ["Training delivery", "Content development"],
        soft: ["Engaging facilitation", "Patience", "Communication"] },
      { title: "AI Literacy Educator (K-12 / HE)", salary: "$50k–$95k+", demand: "growing", demandLabel: "Fast growing",
        core: ["Computational thinking", "AI concepts (no code)", "Digital literacy", "Ethics of AI"],
        tools: ["Scratch / MIT App Inventor", "Teachable Machine", "Google CS First"],
        must: ["Teaching credential", "Curriculum design"],
        soft: ["Inspiration", "Patience", "Adaptability"] },
    ]
  },
  {
    category: "Law, Policy & Governance", icon: "⚖️", bg: "#fbeaf0", type: "nontech",
    roles: [
      { title: "AI Policy Analyst", salary: "$80k–$140k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["Policy research", "Regulatory frameworks", "Stakeholder engagement", "AI fundamentals"],
        tools: ["Research databases", "Document tools", "Data viz basics"],
        must: ["Policy / law background", "Written communication"],
        soft: ["Systems thinking", "Persuasion", "Nuanced judgment"] },
      { title: "AI / Tech Lawyer", salary: "$120k–$250k+", demand: "high", demandLabel: "High demand",
        core: ["IP law", "Data privacy (GDPR, CCPA)", "Contract law", "AI regulation (EU AI Act)"],
        tools: ["Legal research platforms", "Contract management tools"],
        must: ["Law degree (JD)", "Tech literacy"],
        soft: ["Analytical reasoning", "Communication", "Negotiation"] },
      { title: "AI Compliance Officer", salary: "$90k–$155k+", demand: "growing", demandLabel: "Fast growing",
        core: ["Regulatory monitoring", "Risk management", "Audit frameworks", "Documentation"],
        tools: ["GRC platforms", "Compliance management tools"],
        must: ["Compliance background", "Regulatory awareness"],
        soft: ["Attention to detail", "Persuasion", "Integrity"] },
    ]
  },
  {
    category: "Creative Industries", icon: "✏️", bg: "#eeedfe", type: "nontech",
    roles: [
      { title: "AI-Assisted Graphic Designer", salary: "$55k–$110k+", demand: "high", demandLabel: "High demand",
        core: ["Visual design principles", "AI image generation", "Typography", "Brand identity"],
        tools: ["Adobe Creative Suite", "Midjourney / DALL-E", "Figma", "Canva"],
        must: ["Design fundamentals", "Creative direction"],
        soft: ["Aesthetic sense", "Client communication", "Iteration"] },
      { title: "AI Video / Film Producer", salary: "$60k–$130k+", demand: "growing", demandLabel: "Fast growing",
        core: ["Video production", "AI video tools", "Scriptwriting", "Post-production"],
        tools: ["Runway ML", "Adobe Premiere", "Sora / Kling", "DaVinci Resolve"],
        must: ["Storytelling", "Production workflow"],
        soft: ["Creative vision", "Project management"] },
      { title: "AI Music Producer", salary: "$40k–$120k+", demand: "growing", demandLabel: "Fast growing",
        core: ["Music theory", "AI composition tools", "Audio engineering", "Sound design"],
        tools: ["Suno / Udio", "Ableton Live", "Logic Pro", "Splice"],
        must: ["Musical ear", "Genre knowledge"],
        soft: ["Creativity", "Taste", "Collaboration"] },
      { title: "Technical Writer (AI docs)", salary: "$75k–$130k+", demand: "high", demandLabel: "High demand",
        core: ["Technical communication", "AI tool documentation", "API writing", "Content structure"],
        tools: ["Docs-as-code (Git)", "Markdown", "Claude / GPT for drafts", "Confluence"],
        must: ["Clear writing", "Technical literacy"],
        soft: ["Empathy for readers", "Clarity of thought"] },
    ]
  },
  {
    category: "Operations & HR", icon: "🏢", bg: "#faeeda", type: "nontech",
    roles: [
      { title: "AI Operations Manager", salary: "$80k–$140k+", demand: "high", demandLabel: "High demand",
        core: ["Process automation", "AI tool adoption", "Change management", "KPI tracking"],
        tools: ["Zapier / Make", "Power Automate", "Notion AI", "Monday.com"],
        must: ["Operations fundamentals", "Stakeholder management"],
        soft: ["Systems thinking", "Leadership", "Communication"] },
      { title: "HRAI / People Analytics Lead", salary: "$85k–$145k+", demand: "growing", demandLabel: "Fast growing",
        core: ["HR analytics", "AI-assisted recruiting", "Workforce planning", "People data"],
        tools: ["Workday", "Greenhouse + AI plugins", "Power BI", "Python basics"],
        must: ["HR domain knowledge", "Data literacy"],
        soft: ["Empathy", "Confidentiality", "Persuasion"] },
      { title: "AI Change Management Specialist", salary: "$80k–$135k+", demand: "very-high", demandLabel: "Very high demand",
        core: ["Change management frameworks", "AI upskilling programs", "Comms strategy", "Training design"],
        tools: ["LMS platforms", "Survey tools", "ADKAR framework"],
        must: ["Organizational psychology basics", "Communication skills"],
        soft: ["Empathy", "Influence without authority", "Resilience"] },
    ]
  },
];

const categoryColors = {};
careers.forEach(g => { categoryColors[g.category] = g.bg; });

let activeCategory = "all";
let activeType = "all";
let searchTerm = "";

const output = document.getElementById("output");
const resultsCount = document.getElementById("resultsCount");
const catFilters = document.getElementById("categoryFilters");
const totalCount = document.getElementById("total-count");

const allCount = careers.reduce((s, g) => s + g.roles.length, 0);
totalCount.textContent = allCount;

const allBtn = document.createElement("button");
allBtn.className = "filter-btn active";
allBtn.textContent = "All domains";
allBtn.dataset.cat = "all";
allBtn.onclick = () => setCategory("all");
catFilters.appendChild(allBtn);

careers.forEach(g => {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.textContent = g.icon + " " + g.category;
  btn.dataset.cat = g.category;
  btn.onclick = () => setCategory(g.category);
  catFilters.appendChild(btn);
});

document.querySelectorAll(".type-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeType = btn.dataset.type;
    render();
  };
});

document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value.toLowerCase().trim();
  render();
});

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
  render();
}

function matchesSearch(role, group) {
  if (!searchTerm) return true;
  const haystack = [
    role.title, group.category,
    ...role.core, ...role.tools, ...role.must, ...role.soft
  ].join(" ").toLowerCase();
  return haystack.includes(searchTerm);
}

function render() {
  output.innerHTML = "";
  let total = 0;

  const filtered = careers
    .filter(g => activeCategory === "all" || g.category === activeCategory)
    .filter(g => activeType === "all" || g.type === activeType)
    .map(g => ({
      ...g,
      roles: g.roles.filter(r => matchesSearch(r, g))
    }))
    .filter(g => g.roles.length > 0);

  filtered.forEach(group => {
    total += group.roles.length;

    const sec = document.createElement("div");
    const heading = document.createElement("div");
    heading.className = "section-title";
    heading.innerHTML = `<span style="font-size:16px">${group.icon}</span> ${group.category} <span class="section-count">${group.roles.length}</span>`;
    sec.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "cards-grid";

    group.roles.forEach(role => {
      const card = document.createElement("div");
      card.className = "card";

      const demandClass = role.demand === "very-high" ? "demand-very-high" : role.demand === "growing" ? "demand-growing" : "demand-high";
      const typeBadgeClass = group.type === "tech" ? "tech-badge" : "nontech-badge";
      const typeBadgeLabel = group.type === "tech" ? "Tech" : "Non-tech";

      card.innerHTML = `
        <div class="card-top">
          <div class="card-icon" style="background:${group.bg}">${group.icon}</div>
          <div class="card-meta">
            <div class="card-title">${role.title}</div>
            <div class="card-cat">${group.category}</div>
          </div>
          <span class="card-type-badge ${typeBadgeClass}">${typeBadgeLabel}</span>
        </div>
        <div>
          <span class="salary">&#128176; ${role.salary}</span>
          <span class="demand ${demandClass}">${role.demandLabel}</span>
        </div>
        <div class="divider"></div>
        <div class="skills-section">
          <div class="skills-label">Core skills</div>
          <div class="tags">${role.core.map(s => `<span class="tag tag-core">${s}</span>`).join("")}</div>
        </div>
        <div class="skills-section" style="margin-top:7px">
          <div class="skills-label">Tools & platforms</div>
          <div class="tags">${role.tools.map(s => `<span class="tag tag-tool">${s}</span>`).join("")}</div>
        </div>
        <div class="skills-section" style="margin-top:7px">
          <div class="skills-label">Must-have</div>
          <div class="tags">${role.must.map(s => `<span class="tag tag-must">${s}</span>`).join("")}</div>
        </div>
        <div class="skills-section" style="margin-top:7px">
          <div class="skills-label">Soft skills</div>
          <div class="tags">${role.soft.map(s => `<span class="tag tag-soft">${s}</span>`).join("")}</div>
        </div>
      `;
      grid.appendChild(card);
    });

    sec.appendChild(grid);
    output.appendChild(sec);
  });

  resultsCount.textContent = total === 0 ? "" : `Showing ${total} career${total !== 1 ? "s" : ""}`;

  if (total === 0) {
    output.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">No careers found</div>
        <div class="empty-sub">Try different search terms or reset your filters</div>
      </div>`;
  }
}

render();