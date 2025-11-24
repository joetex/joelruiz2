import { useEffect } from 'react';
// import { supabase, type Project } from '../lib/supabase';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {  ArrowRight, Github } from 'lucide-react';
// import { Arrow } from '@radix-ui/react-context-menu';

const ProjectList = [
    {
    id: 'ibm-training',
    title: 'IBM Training',
    description:
      'IBM Training helps you learn IBM products and services with interactive labs, quizzes, and progress tracking.',
    technologies: ['React', 'Node.js', 'Express', 'Db2', 'Carbon Design'],
    visit_url: 'https://www.ibm.com/training',
    type: 'image',
    media_url: 'https://joelruiz2.com/assets/ibmtraining.webp',
    github_url: null,
  },
  {
    id: 'ibm-techxchange',
    title: 'IBM TechXchange',
    description:
      'IBM TechXchange is the ultimate learning hub for developers, technologists, and techies looking to grow their skills.',
    technologies: ['WordPress', 'Carbon Design', 'MySQL', 'Kubernetes'],
    visit_url: 'https://www.ibm.com/community/techxchange/',
    type: 'image',
    media_url: 'https://joelruiz2.com/assets/ibmtechxchange.webp',
    github_url: null,
  },

  {
    id: 'acosgames',
    title: 'ACOS Platform',
    description:
      'Game + Developer portal for submissions created in JavaScript.  Supports replays, leaderboards, achievements, stats, and more.',
    technologies: ['Multiplayer', 'JavaScript Sandboxing', 'WebSockets', 'Message Queue', 'GitHub Integration', 'Discord Integration', 'Matchmaking System', 'Leaderboards', 'Achievements', 'Stats', 'Game SDK'],
    github_url: 'https://github.com/acosgames',
    type: 'video',
    media_url: 'https://joelruiz2.com/assets/ACOS-Platform-Demo.mp4',
  },
    {
    id: 'acosgames',
    title: 'ACOS Simulator',
    description:
      'Simulator for developing JavaScript games for the ACOS platform.',
    technologies: ['Multiplayer', 'JavaScript Sandboxing', 'WebSockets', 'Message Queue', 'GitHub Integration', 'Discord Integration', 'Matchmaking System', 'Leaderboards', 'Achievements', 'Stats', 'Game SDK'],
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
    id: 'bambutelemetry',
    title: 'Bambu Telemetry',
    description:
      'MQTT protocol was used to pull the telemetry data out of a Bambu 3D printer using Python.  ',
    technologies: ['Python', 'MQTT Protocol', 'Streaming', 'Telemetry'],
    github_url: 'https://github.com/joetex/bambu-telemetry-stream-overlay',
    type: 'image',
    media_url: 'https://joelruiz2.com/assets/BambuTelemetry.webp',
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl font-bold ">A few of my <span className="text-accent">recent projects</span></h2>
          {/* <div className="w-h h-1 bg-accent rounded-full" /> */}
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        {ProjectList.map((project) => (
        <Card
          key={project.id}
          className="p-6 border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-4 text-foreground">{project.title}</h3>

          
          {project.type === 'image' && (
            <div className="flex flex-wrap mb-4 justify-center rounded-md overflow-hidden">
              <img src={project.media_url} alt={project.title} className="w-full rounded-base min-h-48 max-h-60" />
            </div>
          )}
          {project.type === 'video' && (  
          <div className="flex flex-wrap mb-4 justify-center rounded-md overflow-hidden min-h-60 max-h-60">
            <video className="w-full rounded-base" controls>
              <source src={project.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          )}

          <p className="text-muted-foreground mb-4  leading-relaxed  text-sm">
             {project.description}  
          </p>
         
          <div className="mb-4 flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech: any) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-accent/10 text-accent text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex-1 flex items-end justify-end gap-3 pt-4">

            {project.github_url && (
                          <Button
              size="sm"
              variant="outline"
              className="w-50 gap-2 hover:bg-white hover:text-accent-foreground hover:border-white"
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
              className="w-32 gap-2 hover:bg-accent hover:text-accent-foreground hover:border-accent"
              asChild
            >
              <a href={project.visit_url} className="flex  justify-end" target="_blank" rel="noopener noreferrer">
                Visit Website
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            )}
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
