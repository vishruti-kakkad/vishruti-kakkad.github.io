window.VK_DATA = {
  "person": {
    "name": "Vishruti Kakkad",
    "headline": "Product Security Engineer • AI/ML & LLM/RAG Security • Exploit Dev",
    "tagline": "Terminal-first portfolio with mission-control interactions. Minimal text on the surface; depth on demand.",
    "impact": [
      {
        "k": "SIEM detection",
        "v": "10K → 75K events/month"
      },
      {
        "k": "Adversarial ML",
        "v": "29/50 bypasses"
      },
      {
        "k": "Education",
        "v": "CMU MSIS • 3.84/4.0"
      }
    ],
    "contact": {
      "email": "vkakkad@alumni.cmu.edu",
      "phone": "+1 412-954-8558",
      "location": "Houston, Texas",
      "linkedin": "https://www.linkedin.com/in/vishruti-kakkad"
    }
  },
  "skills": {
    "Languages": "Python • C • C++ • SQL • Assembly (x86/x64) • PowerShell",
    "Network Security": "Wireshark • Nmap • Fiddler",
    "Windows Analysis": "Sysinternals (ProcMon, ProcExp, PsTools) • Sysmon • IONinja",
    "Reverse Engineering": "IDA • Ghidra • WinDbg • AFL • Valgrind • efiXplorer • Frida",
    "Emulation & Firmware": "QEMU • FirmAE",
    "Offensive Security": "Metasploit • Hashcat",
    "Static Analysis & QA": "SonarQube • Semgrep • cppcheck • Trivy",
    "Adversarial ML/AI": "IBM ART • TextAttack • Garak",
    "Vulnerability Analysis": "SAST/DAST • Code review • Exploit development • Reverse engineering",
    "Threat Modeling": "STRIDE • MITRE ATT&CK",
    "OS Security": "Privilege escalation • IPC hardening • Memory safety • IOCTL analysis",
    "Identity & Access": "OAuth 2.0 • JWT • Kerberos",
    "Detection & Response": "SIEM tuning • Detection rules • Event correlation • Endpoint telemetry",
    "DevSecOps": "GitHub Actions • Dependency scanning • Secrets management • IaC security • OpenAPI validation",
    "Application Security": "OWASP Top 10 • OWASP ASVS • MITRE CWE",
    "AI/LLM Security": "Adversarial attacks (evasion, poisoning, jailbreak, audio) • OWASP LLM Top 10 • Prompt injection • Agent-flow abuse • Vector DB attacks",
    "MCP Security": "Tool exploit analysis • Unsafe plugin detection",
    "Compliance & Standards": "EU RED • EU CRA • NIST SP 800-218 (SSDF) • NIST CSF • NIST 800-53"
  },
  "companies": [
    {
      "name": "HP Inc.",
      "role": "Product Security Engineer",
      "when": "Jun 2023 — Present",
      "where": "Spring, TX"
    },
    {
      "name": "HP Inc.",
      "role": "Software Security Intern",
      "when": "May 2022 — Aug 2022",
      "where": "—"
    },
    {
      "name": "Cloud 24x7",
      "role": "Software Security Engineer",
      "when": "Jun 2020 — Apr 2021",
      "where": "Ahmedabad, India"
    },
    {
      "name": "Hidden Brains",
      "role": "Software Engineering Capstone Intern",
      "when": "Jan 2020 — May 2020",
      "where": "Ahmedabad, India"
    },
    {
      "name": "Carnegie Mellon University",
      "role": "M.S. Information Security",
      "when": "Aug 2021 — May 2023",
      "where": "—"
    },
    {
      "name": "Pandit Deendayal Energy University",
      "role": "B.Tech Computer Engineering",
      "when": "Aug 2016 — May 2020",
      "where": "—"
    }
  ],
  "projects": [
    {
      "id": "agentic-vuln-orchestrator",
      "title": "Agentic Vulnerability Orchestrator",
      "subtitle": "Professional • 2023–Present",
      "field": "Signal Orchestration",
      "category": "professional",
      "tags": [
        "platform-security",
        "automation",
        "vuln-intel"
      ],
      "bullets": [
        "Built an AI-agentic security automation platform with REST ingestion and KEV/NVD intelligence to prioritize remediation at fleet scale.",
        "Turned noisy telemetry into actionable vulnerability queues with reproducible triage context and remediation pathways.",
        "Designed to be auditable: clear provenance, deterministic decision logs, and measurable outcomes."
      ],
      "type": "Project"
    },
    {
      "id": "ast-taint-hunter",
      "title": "AST Taint Hunter for Memory-Unsafe Code",
      "subtitle": "Professional • 2023–Present",
      "field": "Sentinel Systems",
      "category": "professional",
      "tags": [
        "static-analysis",
        "c-cpp",
        "memory-safety"
      ],
      "bullets": [
        "Designed AI-augmented static analysis using AST traversal, taint propagation, and semantic rule matching for C/C++ components.",
        "Focus: finding memory-unsafe patterns early and turning them into developer-friendly fixes.",
        "Integrated findings into security review workflows to reduce repeat vulnerabilities."
      ],
      "type": "Project"
    },
    {
      "id": "rag-guardrail-audit",
      "title": "RAG Guardrail Audit (Access & Tool Validation)",
      "subtitle": "Professional • 2023–Present",
      "field": "LLM Containment",
      "category": "professional",
      "tags": [
        "llm-rag",
        "prompt-injection",
        "access-control"
      ],
      "bullets": [
        "Identified retrieval gaps that could enable unauthorized document extraction when vector filtering and tool-invocation validation are insufficient.",
        "Proposed mitigations: strict retrieval ACLs, allowlisted tools, constrained tool outputs, and comprehensive logging/rate limiting.",
        "Mapped the testing approach to OWASP LLM Top 10 concepts."
      ],
      "type": "Project"
    },
    {
      "id": "ipc-impersonation-sim",
      "title": "IPC Trust Boundary Hardening (Simulation)",
      "subtitle": "Professional • 2023–Present",
      "field": "Exploit Observatory",
      "category": "professional",
      "tags": [
        "windows",
        "ipc",
        "hardening"
      ],
      "bullets": [
        "Modeled how weak permissions on local IPC channels can be abused to impersonate privileged workflows (high-level simulation).",
        "Delivered architecture recommendations to reduce trust on local channels and enforce stronger identity checks.",
        "Paired findings with detection ideas to catch abnormal IPC patterns."
      ],
      "type": "Project"
    },
    {
      "id": "adversarial-audio-lab",
      "title": "Adversarial Audio Lab (Deepfake Detection Evasion)",
      "subtitle": "Professional • 2023–Present",
      "field": "LLM Containment",
      "category": "professional",
      "tags": [
        "ml-security",
        "adversarial",
        "audio"
      ],
      "bullets": [
        "Executed adversarial ML experiments against deepfake detection stacks and achieved 29/50 bypasses using perturbation and audio-pipeline transformations.",
        "Documented reproducible eval conditions and failure modes to improve robustness testing.",
        "Positioned as a red-team style ML robustness assessment (safe + controlled)."
      ],
      "type": "Project"
    },
    {
      "id": "dll-hijack-workflow",
      "title": "Windows Library Search Order Risk Study",
      "subtitle": "Professional • 2022",
      "field": "Exploit Observatory",
      "category": "professional",
      "tags": [
        "windows",
        "re",
        "offensive"
      ],
      "bullets": [
        "Built proofs-of-concept around unsafe library loading patterns and documented mitigation guidance.",
        "Authored a WinDbg/ProcMon/Ghidra-based investigation workflow for fast triage.",
        "Awarded \"Best Technical Project\" recognition among 100+ participants."
      ],
      "type": "Project"
    },
    {
      "id": "siem-normalization-pipeline",
      "title": "SIEM Normalization & Detection Scaling",
      "subtitle": "Professional • 2020–2021",
      "field": "Signal Orchestration",
      "category": "professional",
      "tags": [
        "blue-team",
        "siem",
        "telemetry"
      ],
      "bullets": [
        "Built SIEM parsing workflows scaling detection from 10K to 75K events/month via encrypted ingestion and normalization.",
        "Standardized log formats (CEF, Syslog, Windows Event, IIS) to improve correlation and true-positive rates.",
        "Focused on operational reliability and measurable signal quality."
      ],
      "type": "Project"
    },
    {
      "id": "flash-file-system-with-custom-ftl",
      "title": "Flash File System with Custom FTL",
      "subtitle": "Academic • Nov 2022–Dec 2022",
      "field": "LLM Containment",
      "category": "academic",
      "tags": [
        "embedded",
        "c",
        "systems"
      ],
      "bullets": [
        "Developed an embedded file system with custom FTL on the nRF52840, providing QSPI-backed persistence",
        "Implemented POSIX-like syscalls (open/read/write/close) and concurrency control with reader-writer locks",
        "Built a sensor-triggered attack emulation shell for testing reliability under adversarial load"
      ],
      "type": "Project"
    },
    {
      "id": "sdn-security-network-forensics",
      "title": "SDN Security & Network Forensics",
      "subtitle": "Academic • Apr 2022–May 2022",
      "field": "Signal Orchestration",
      "category": "academic",
      "tags": [
        "forensics",
        "snort",
        "elk"
      ],
      "bullets": [
        "Designed an SDN topology using CORE, OVS, Snort, and ELK to analyze attack telemetry and evasion patterns",
        "Generated 500+ Snort+Kibana events via DDoS, scanning, and fuzzing simulations to highlight multi-stage behaviors"
      ],
      "type": "Project"
    },
    {
      "id": "secure-routing-simulation-bgp-ospf-attack-modeling",
      "title": "Secure Routing Simulation (BGP/OSPF Attack Modeling)",
      "subtitle": "Academic • Feb 2022–May 2022",
      "field": "LLM Containment",
      "category": "academic",
      "tags": [
        "networking",
        "bgp",
        "ospf"
      ],
      "bullets": [
        "Simulated BGP and OSPF routing attacks including route poisoning, prefix hijacking, and link-fabrication to study adversarial control-plane manipulation",
        "Analyzed routing-convergence behavior and detection thresholds under attack conditions, proposing policy-based mitigation rules to improve routing stability"
      ],
      "type": "Project"
    },
    {
      "id": "usability-privacy-concerns-on-online-dating-apps",
      "title": "Usability & Privacy Concerns on Online Dating Apps",
      "subtitle": "Academic • Feb 2022–Apr 2022",
      "field": "Sentinel Systems",
      "category": "academic",
      "tags": [
        "privacy",
        "ux"
      ],
      "bullets": [
        "Conducted a user study with 20 participants analyzing usability, privacy expectations, and risk perception",
        "Designed a Qualtrics + Prolific workflow with prescreening, attention checks, and emergent qualitative coding",
        "Identified key privacy risks including identity exposure, location leakage, and unsafe data-sharing patterns"
      ],
      "type": "Project"
    },
    {
      "id": "dynamic-memory-allocator-malloc-simulation",
      "title": "Dynamic Memory Allocator (Malloc Simulation)",
      "subtitle": "Academic • Nov 2021–Dec 2021",
      "field": "LLM Containment",
      "category": "academic",
      "tags": [
        "systems",
        "memory"
      ],
      "bullets": [
        "Implemented segregated free lists, block coalescing, and header/footer compression, achieving 74.4% memory efficiency",
        "Tuned allocator throughput to>10k KOPS via optimized block-search algorithms and minimal fragmentation"
      ],
      "type": "Project"
    },
    {
      "id": "phases-of-offensive-security",
      "title": "Phases of Offensive Security",
      "subtitle": "Academic • Aug 2021–Dec 2021",
      "field": "Exploit Observatory",
      "category": "academic",
      "tags": [
        "offensive",
        "cve"
      ],
      "bullets": [
        "Executed recon to full exploitation PoC using Sn1per + WPScan against CVE-2020-24186",
        "Escalated privileges (user→root) via SUID abuse, RCE, and Linux misconfiguration exploitation"
      ],
      "type": "Project"
    },
    {
      "id": "buffer-overflow-ctf-challenges",
      "title": "Buffer Overflow CTF Challenges",
      "subtitle": "Academic • Aug 2021–Dec 2021",
      "field": "Exploit Observatory",
      "category": "academic",
      "tags": [
        "ctf",
        "pwn"
      ],
      "bullets": [
        "Exploited stack-based vulnerabilities (jmp-esp, canary brute force, shellcode injection) to achieve code execution",
        "Demonstrated complete control-flow hijack across Linux binaries using crafted payload sequences"
      ],
      "type": "Project"
    },
    {
      "id": "web-application-penetration-testing-exploit-chain-analysis",
      "title": "Web Application Penetration Testing & Exploit Chain Analysis",
      "subtitle": "Academic • Oct 2021–Dec 2021",
      "field": "Exploit Observatory",
      "category": "academic",
      "tags": [
        "web",
        "owasp"
      ],
      "bullets": [
        "Performed an end-to-end pentest covering authentication, session handling, input sanitization, and ACL enforcement",
        "Exploited multiple vulnerabilities including XSS, CSRF, IDOR, insecure session tokens, and broken authn flows"
      ],
      "type": "Project"
    },
    {
      "id": "facial-recognition-system",
      "title": "Facial Recognition System",
      "subtitle": "Academic • Jan 2019–May 2019",
      "field": "LLM Containment",
      "category": "academic",
      "tags": [
        "ml",
        "cv"
      ],
      "bullets": [
        "Used feature extraction and classical ML techniques on a self-made dataset of 80+ faces to achieve 95% accuracy",
        "Used PCA-based reduction and classifier recognition to preserve accuracy under diverse facial expressions"
      ],
      "type": "Project"
    }
  ],
  "fields": [
    {
      "id": "sentinel",
      "title": "Sentinel Systems",
      "subtitle": "Platform security + systems engineering that ships.",
      "visual": "schematic",
      "projects": [
        "ast-taint-hunter",
        "flash-file-system-with-custom-ftl",
        "dynamic-memory-allocator-malloc-simulation"
      ]
    },
    {
      "id": "observatory",
      "title": "Exploit Observatory",
      "subtitle": "Trust boundaries, binaries, and adversarial thinking.",
      "visual": "orbital",
      "projects": [
        "ipc-impersonation-sim",
        "dll-hijack-workflow",
        "buffer-overflow-ctf-challenges"
      ]
    },
    {
      "id": "containment",
      "title": "LLM Containment",
      "subtitle": "LLM/RAG safety and adversarial ML robustness.",
      "visual": "containment",
      "projects": [
        "rag-guardrail-audit",
        "adversarial-audio-lab",
        "facial-recognition-system"
      ]
    },
    {
      "id": "orchestration",
      "title": "Signal Orchestration",
      "subtitle": "Blue-team signal: telemetry → detection → response.",
      "visual": "signal",
      "projects": [
        "siem-normalization-pipeline",
        "sdn-security-network-forensics",
        "agentic-vuln-orchestrator"
      ]
    }
  ],
  "papers": []
};
