// import { useEffect, useState } from 'react';
import { Card } from './ui/card';

import IBMCloud from '../assets/ibm_cloud-icon.svg';
import Jenkins from '../assets/Jenkins.svg';
import RabbitMQ from '../assets/RabbitMQ.svg';
import Milvus from '../assets/milvus-icon-color.svg';
import Akamai from '../assets/akamai-icon.svg';
import Https from '../assets/website-https-4950.svg';
import WebSocketIcon from '../assets/websocket-logo.svg';
import WebRTCIcon from '../assets/Webrtc.svg';

import IBMDb2Icon from '../assets/ibm-db2-vertical.svg';
import ClaudeIcon from '../assets/claude-color.svg';
import CopilotIcon from '../assets/copilot-color.svg';
import LMStudioIcon from '../assets/lmstudio.svg';
import OpenAIIcon from '../assets/openai.svg';
import AppleIcon from '../assets/Apple.svg';
import UnityIcon from '../assets/Unity.svg';
import UnrealIcon from '../assets/UnrealEngine.svg';
import JiraIcon from '../assets/Jira.svg';
import { ReactSVG } from 'react-svg';
import ICON_FILES from '../lib/localIcons';

// We'll dynamically import `tech-stack-icons` at runtime. If the package isn't available
// or an icon name is missing, we render a small inline fallback SVG so the UI doesn't break.

// Manual asset map for icons that need a specific SVG file.
const manualAssets: Record<string, string> = {
  ibmcloud: IBMCloud,
  jenkins: Jenkins,
  rabbitmq: RabbitMQ,
  milvus: Milvus,
  akamai: Akamai,
  https: Https,
  websocket: WebSocketIcon,
  webrtc: WebRTCIcon,
  openai: OpenAIIcon,
  claude: ClaudeIcon,
  copilot: CopilotIcon,
  lmstudio: LMStudioIcon,
  apple: AppleIcon,
  unity: UnityIcon,
  'unreal-engine': UnrealIcon,
  db2: IBMDb2Icon,
  jira: JiraIcon,
};

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C#', 'C++', 'Go', 'Shell Scripting', 'HTML', 'SCSS'],
  },
  {
    title: 'Web Development',
    skills: ['Node.js', 'React.js', 'Next.js', 'Vite.js', 'GraphQL', 'Kafka', 'RabbitMQ', 'OpenAPI', 'Tailwind', '.NET', 'WordPress'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['IBM Cloud', 'GCP', 'Kubernetes', 'RedHat', 'Ubuntu', 'Jira', 'GitHub', 'Jenkins',],
  },
  {
    title: 'Databases',
    skills: ['Db2', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Milvus', 'R2'],
  },
  {
    title: 'And more...',
    skills: ['ChatGPT', 'Claude', 'Microsoft Copilot', 'LM Studio', 'Akamai', 'Cloudflare', 'HTTPS', 'WebSockets', 'WebRTC', 'Unity', 'Unreal Engine', 'Android', 'iOS'],
  }
];

// Map skill labels to tech-stack-icons icon names (best-effort). These are strings used
// as `name` prop when rendering the StackIcon component.
const ICON_MAP: Record<string, string> = {
  JavaScript: 'js',
  TypeScript: 'typescript',
  Java: 'java',
  Python: 'python',
  'C#': 'csharp',
  'C++': 'c++',
  Go: 'go',
  'Shell Scripting': 'bash',
  HTML: 'html5',
  SCSS: 'css3',

  'Node.js': 'nodejs',
  'React.js': 'react',
  'Next.js': 'nextjs',
  'Vite.js': 'vitejs',
  GraphQL: 'graphql',
  Kafka: 'kafka',
  RabbitMQ: 'rabbitmq',
  OpenAPI: 'openapi',
  Tailwind: 'tailwindcss',
  'Carbon Design': 'carbon',
  '.NET': 'net',
  'WordPress': 'wordpress',

  'IBM Cloud': 'ibmcloud',
  GCP: 'gcloud',
  'Identity & Access': 'okta',
  Kubernetes: 'kubernetes',
  RedHat: 'redhat',
  Ubuntu: 'ubuntu',
  Jira: 'jira',
  GitHub: 'github',
  Jenkins: 'jenkins',
  'CI/CD': 'github-actions',

  Db2: 'db2',
  MySQL: 'mysql',
  PostgreSQL: 'postgresql',
  Cloudant: 'cloudant',
  Redis: 'redis',
  MongoDB: 'mongodb',
  Milvus: 'milvus',
  'R2': 'cloudflare',

  'Akamai': 'akamai',
  'Cloudflare': 'cloudflare',
  'Network Firewall': 'fortinet',
  HTTPS: 'https',
  'TCP/IP': 'tcpip',
  UDP: 'udp',
  WebSockets: 'websocket',
  WebRTC: 'webrtc',

  'Code Scans': 'sonarqube',
  'Test Automation': 'selenium',
  'SSL Certificates': 'letsencrypt',
  'Secure Secrets': 'vault',
  'PII Compliance': 'privacy',
  Profiling: 'datadog',
  Logging: 'fluentd',
  Monitoring: 'prometheus',

  'ChatGPT': 'openai',
  'LM Studio': 'lmstudio',
  Claude: 'claude',
  'Microsoft Copilot': 'copilot',

  Unity: 'unity',
  'Unreal Engine': 'unreal-engine',
  'UE FortNite': 'epic-games',
  'Roblox Studio': 'roblox',
  Android: 'android',
  iOS: 'apple',
};

// Inline generic fallback icon (small code brackets) used when no icon is available.
function FallbackIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6L2 12l6 6" />
    </svg>
  );
}

export function Skills() {
  // const [showLabels, setShowLabels] = useState(true);
  // const [StackIcon, setStackIcon] = useState<any | null>(null);

  // useEffect(() => {
  //   let mounted = true;
  //   // dynamic import so build won't fail if package is missing or broken
  //   // import('tech-stack-icons')
  //   //   .then((mod) => {
  //   //     if (mounted && mod && mod.default) setStackIcon(() => mod.default);
  //   //   })
  //   //   .catch(() => {
  //   //     // ignore: we'll use fallback icon
  //   //   });
  //   return () => {
  //     mounted = false;
  //   };
  // }, []);

  // Render helper: prefer manual asset, then tech-stack-icons, then fallback.
  function renderIcon(skill: string) {
    const iconName = ICON_MAP[skill];
    if (iconName && manualAssets[iconName]) {
      const CustomIcon = manualAssets[iconName];
      return <ReactSVG src={CustomIcon} className={'react-svg-wrapper ' + 'svg-' + iconName}  />;
    }

    // Use locally extracted SVGs (from tech-stack-icons) when available.
    if (iconName && ICON_FILES && ICON_FILES[iconName]) {
      return <ReactSVG src={ICON_FILES[iconName]}  className={'react-svg-wrapper ' + 'svg-' + iconName}  />;
    }

    return <FallbackIcon className="w-10 h-10 text-accent fill-accent" />;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <h2 className="text-5xl font-bold">I know these <span className="text-accent">technologies</span></h2>
          {/* <div>
            <button
              onClick={() => setShowLabels((s) => !s)}
              className="px-3 py-1 rounded-md bg-secondary/10 hover:bg-secondary transition-colors text-sm"
            >
              {showLabels ? 'Icons only' : 'Icons + Labels'}
            </button>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6  border-accent/10 hover:border-accent/30 transition-colors">
              <h3 className="text-xl font-semibold mb-4 ">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-foreground/5 flex flex-col items-center justify-center w-20 h-28 gap-2 p-2 rounded-full hover:shadow-sm transition-transform transform hover:-translate-y-0.5 cursor-default"
                    title={skill}
                  >
                    {renderIcon(skill)}
                    
                    <span className="text-xs font-medium  text-center mt-1">{skill}</span>
                    
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
