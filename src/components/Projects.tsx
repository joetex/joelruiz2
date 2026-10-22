import { useEffect } from 'react';
// import { supabase, type Project } from '../lib/supabase';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {  ArrowRight, Github } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
// import { Arrow } from '@radix-ui/react-context-menu';

const ProjectList = [
  {
    id: 'authrot',
    title: 'Authrot',
    description:
      'A writing studio, reader, and wiki platform for authors to draft their stories, publish them for readers, and build out the worlds behind them.',
    technologies: ['Writing Studio', 'Reader', 'Wiki'],
    visit_url: 'https://authrot.app',
    type: 'video',
    media_url: 'https://assets.authrot.app/marketing/video/hero.8be182d9.mp4',
    github_url: null,
  },
  {
    id: 'ibm-training',
    title: 'IBM Training',
    description:
      'IBM Training delivers strategic technical product training, integrating with many learning providers to help customers skill up and get certified. I designed the distributed system architecture, the subscription purchasing system ($49M in 2024), and the backend services.',
    technologies: ['React', 'Node.js', 'IBM Cloud', 'Microservices', 'Elastic Search', 'Db2', 'Carbon Design'],
    visit_url: 'https://www.ibm.com/training',
    type: 'image',
    media_url: 'https://joelruiz2.com/assets/ibmtraining.webp',
    github_url: null,
  },
  {
    id: 'ibm-techxchange',
    title: 'IBM TechXchange',
    description:
      'IBM TechXchange is the ultimate learning hub for developers, technologists, and techies looking to grow their skills.  Led the frontend team in delivering a unified experience between TXC and IBM Training.',
    technologies: ['WordPress', 'IBM Cloud', 'Carbon Design', 'MySQL', 'Kubernetes'],
    visit_url: 'https://www.ibm.com/community/techxchange/',
    type: 'image',
    media_url: 'https://joelruiz2.com/assets/ibmtechxchange.webp',
    github_url: null,
  },

  {
    id: 'acosgames',
    title: 'ACOS Platform',
    description:
      'Game + Developer portal for submissions created in JavaScript.  Designed in scalable distributed system components.  Supports replays, leaderboards, achievements, stats, and more.',
    technologies: ['Multiplayer', 'JavaScript Sandboxing', 'WebSockets', 'Message Queue', 'GitHub Integration', 'Discord Integration', 'Matchmaking System', 'Leaderboards', 'Achievements', 'Stats', 'Game SDK'],
    github_url: 'https://github.com/acosgames',
    type: 'video',
    media_url: 'https://joelruiz2.com/assets/ACOS-Platform-Demo.mp4',
  },
    {
    id: 'acosgames',
    title: 'ACOS Simulator',
    description:
      'Simulator for developing JavaScript games for the ACOS platform.  Supports multiple screens, game configuration, and debugging tools for network and performance.',
    technologies: ['Multiple Screens', 'Managed Timer', 'Managed JSON State', 'Network Encapsulation', 'Debugging Tools', 'Deployments', 'Hot Reloading', 'Game SDK'],
    github_url: 'https://github.com/acosgames',
    type: 'video',
    media_url: 'https://joelruiz2.com/assets/ACOS-Simulator-Demo.mp4',
  },
  {
    id: 'leaderboarddb',
    title: 'LeaderboardDB',
    description:
      'Modified B+Tree algorithm I created in C++ for improving performance of leaderboards in a database.',
    technologies: ['C++', 'Database Internals', 'Algorithms'],
    github_url: 'https://github.com/joetex/LeaderboardDB',
    type: 'image',
    media_url: 'https://joelruiz2.com/assets/MinMaxBTree.png',
  },
  {
    id: 'streamracingwheel',
    title: 'Stream Racing Wheel Overlay',
    description:
      'This customizable react application lets you connect to your G920 Racing Wheel or any steering wheel gamepad and show a visual representation of the controls as an overlay for streamers.',
    technologies: ['React', 'Streaming', 'Racing Wheel', 'Controller Telemetry'],
    github_url: 'https://github.com/joetex/stream-racing-wheel',
    type: 'video',
    media_url: 'https://joelruiz2.com/assets/FordRaptor-StreamRacingWheelOverlay.mp4',
  },
  {
    id: 'bambutelemetry',
    title: 'Bambu Telemetry',
    description:
      'MQTT protocol was used to pull the telemetry data out of a Bambu 3D printer using Python.  ',
    technologies: ['Python', 'MQTT Protocol', 'Streaming', 'Telemetry'],
    github_url: 'https://github.com/joetex/bambu-telemetry-stream-overlay',
    type: 'image',
    media_url: 'https://joelruiz2.com/assets/BambuTelemetry.webp',
  },
    {
    id: 'citydevour',
    title: 'City Devour Game',
    description:
      'You start small. You eat a thing. You eat another thing. You burp and grow bigger. By the end of the day, you have eaten a whole city, even the buildings.',
    technologies: ['Unity', 'C#', 'Photon Networking', 'Leaderboards'],
    play_url: 'https://play.google.com/store/apps/details?id=com.acos.citydevour&hl=en_US',
    type: 'video',
    media_url: 'https://joelruiz2.com/assets/Void.io%20Promo%20Video.mp4',
  },
   {
    id: 'slitheriobot',
    title: 'Slither.io AStar Bot',
    description:
      'Created a bot for the popular game Slither.io using the A* pathfinding algorithm to navigate and collect pellets while avoiding other players.',
    technologies: ['JavaScript', 'A* Algorithm', 'Behavior System', 'Tampermonkey'],
    github_url: 'https://github.com/joetex/SlitherAStar/',
    type: 'video',
    media_url: 'https://joelruiz2.com/assets/SlitherIOAStarBot.mp4',
  },
];    


export function Projects() {
  // const [projects, setProjects] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { error } = { error: false };//await supabase
        //   .from('portfolio_projects')
        //   .select('*')
        //   .order('order', { ascending: true });

        if (error) throw error;
        // setProjects(data || []);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        // setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="03" label="projects">
          A few of my <span className="text-accent">recent projects</span>
        </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ProjectList.map((project) => (
        <Card
          key={project.id}
          className="p-0 gap-0 border-border shadow-none hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col"
        >
          <div className="aspect-video overflow-hidden border-b border-border bg-secondary">
            {project.type === 'image' && (
              <img
                src={project.media_url}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover object-top-left transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}
            {project.type === 'video' && (
              <video className="h-full w-full object-cover" controls muted playsInline preload="metadata">
                <source src={project.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">{project.title}</h3>

          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
             {project.description}  
          </p>
         
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: any) => (
              <Badge
                key={tech}
                variant="outline"
                className="font-mono font-normal border-accent/25 bg-accent/5 text-accent text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex-1 flex flex-wrap items-end justify-end gap-3 pt-6">

            {project.github_url && (
                          <Button
              size="sm"
              variant="outline"
              className="gap-2 bg-transparent hover:bg-foreground hover:text-background hover:border-foreground"
              asChild
            >
              <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                View Code on GitHub
              </a>
            </Button>
            )}

            {project.visit_url && (
                          <Button
              size="sm"
              variant="outline"
              className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <a href={project.visit_url} target="_blank" rel="noopener noreferrer">
                Visit Website
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            )}

            {project.play_url && (
                          <Button
              size="sm"
              variant="outline"
              className="gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <a href={project.play_url} target="_blank" rel="noopener noreferrer">
                Play on Google Play
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            )}
          </div>
          </div>
        </Card>
        ))}
{/*         
       <Card
          key={'acosgames'}
          className="p-6 border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
          <h3 className="text-2xl font-semibold mb-2 text-foreground">{'ACOS Simulator'}</h3>

    
          <p className="text-muted-foreground mb-8 text-sm">
             Simulator for developing JavaScript games for the ACOS platform.
          </p>

          <div className="flex flex-wrap gap-10 justify-center  rounded-md overflow-hidden">
          
            <video className="w-full rounded-base" controls>
              <source src="https://joelruiz2.com/assets/ACOS-Simulator-Demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mb-4 flex flex-wrap gap-2 mt-4">
            {['Multiplayer', 'JavaScript Sandboxing', 'WebSockets', 'Message Queue', 'GitHub Integration', 'Discord Integration', 'Matchmaking System', 'Leaderboards', 'Achievements', 'Stats', 'Game SDK'].map((tech: any) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-accent/10 text-accent text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t border-border">

            <Button
              size="sm"
              variant="outline"
              className="flex-1 gap-2 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <a href={'https://github.com/acosgames'} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          </div>
        </Card>

        <Card
          key={'leaderboarddb'}
          className="p-6 border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
          <h3 className="text-2xl font-semibold mb-2 text-foreground">{'LeaderboardDB'}</h3>

          <p className="text-muted-foreground mb-4  leading-relaxed  text-sm">
             Modified B+Tree algorithm I created in C++ for improving performance of leaderboards in a database.   
          </p>

          <div className="flex flex-wrap mb-10 justify-center  rounded-md overflow-hidden">
            <img src="https://joelruiz2.com/assets/MinMaxBTree.png" alt="MinMaxBtree" />
          </div>


         
          <div className="mb-4 flex flex-wrap gap-2 mt-4">
            {['C++', 'Database Internals', 'Algorithms'].map((tech: any) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-accent/10 text-accent text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-4 border-t border-border">

            <Button
              size="sm"
              variant="outline"
              className="flex-1 gap-2 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <a href={'https://github.com/joetex/LeaderboardDB'} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          </div>
        </Card>


        <Card
          key={'bambutelemetry'}
          className="p-6 border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
        >
          <h3 className="text-2xl font-semibold mb-2 text-foreground">{'Bambu Telemetry'}</h3>

          <p className="text-muted-foreground mb-4  leading-relaxed  text-sm">
             MQTT protocol was used to pull the telemetry data out of a Bambu 3D printer using Python.  
             <br />The app displays the telemtry data for use as overlay in streams.    
          </p>

          <div className="flex flex-wrap mb-10 justify-center  rounded-md overflow-hidden">
            <img src="https://joelruiz2.com/assets/BambuTelemetry.webp" alt="MinMaxBtree" />
          </div>


         
          <div className="mb-4 flex flex-wrap gap-2 mt-4">
            {['Python', 'MQTT Protocol', 'Streaming', 'Telemetry'].map((tech: any) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-accent/10 text-accent text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-end gap-3 pt-4 border-t border-border">

            <Button
              size="sm"
              variant="outline"
              className="w-50 gap-2 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <a href={'https://github.com/joetex/bambu-telemetry-stream-overlay'} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          </div>
        </Card> */}
        </div>
      </div>
    </section>
  );
}
