import {
  Blocks,
  Code2,
  FolderTree,
  Palette,
  Settings,
  Zap,
} from "lucide-react";
import lucideIcon from "../../../../assets/lucide.svg";
import shadcnuiIcon from "../../../../assets/shadcnui.svg";
import tailwindIcon from "../../../../assets/tailwind.svg";
import typescriptIcon from "../../../../assets/typescript.svg";
import waspIcon from "../../../../assets/wasp.svg";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ThemeSwitcher,
} from "../../../../shared/client/components/ui";
import { useTheme } from "../../../../shared/client/hooks/useTheme";

export function Home() {
  const theme = useTheme();

  const features = [
    {
      icon: Code2,
      title: "Easy Wasp Configuration",
      description:
        "Enhanced configuration with composable files and fluent helper methods.",
    },
    {
      icon: FolderTree,
      title: "Feature-Based Architecture",
      description:
        "Consistent, feature-based architecture, keeping your codebase easy to maintain.",
    },
    {
      icon: Zap,
      title: "Boilerplate Generation",
      description:
        "Use CLI commands or AI tools to generate type-safe Wasp entities in seconds.",
    },
    {
      icon: Blocks,
      title: "Extensible UI",
      description:
        "Built-in support for shadcn/ui components and Lucide icons.",
    },
    {
      icon: Settings,
      title: "Developer-Friendly Tools",
      description:
        "Includes useful package scripts for managing your development environment.",
    },
    {
      icon: Palette,
      title: "Dark Mode Support",
      description:
        "Built-in, responsive theme switcher with support for system preferences.",
    },
  ];

  const technologies = [
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Wasp", icon: waspIcon },
    { name: "Tailwind CSS 4", icon: tailwindIcon },
    { name: "Lucide Icons", icon: lucideIcon },
    {
      name: "shadcn/ui",
      icon: shadcnuiIcon,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-6">
      {/* Theme Switcher */}
      <div className="flex justify-end">
        <ThemeSwitcher
          value={theme.themeSetting}
          onChange={theme.setTheme}
          defaultValue="system"
        />
      </div>

      {/* Hero Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            Welcome to Swarm Wasp Starter
          </CardTitle>
          <CardDescription className="text-lg">
            A minimal foundation for rapidly building full-stack Wasp
            applications. This template provides a clean, consistent structure
            with a range of tools and enhancements to improve the developer
            experience.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Features Grid */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">What's Included</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="size-5 text-primary" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Everything you need to start building your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="mb-2 font-semibold">Generate Wasp Objects</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Use the Swarm CLI to quickly scaffold entities, queries, actions
              and more:
            </p>
            <code className="block rounded bg-muted px-3 py-2 text-sm">
              npm run swarm -- generate entity Task
            </code>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Connect AI Tools</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Connect Cursor, Claude Code or VS Code Copilot to the MCP server
              for AI-assisted development:
            </p>
            <code className="block rounded bg-muted px-3 py-2 text-sm">
              npm run swarm:mcp
            </code>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Project Structure</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Swarm uses a feature-based architecture with one object per file:
            </p>
            <code className="block rounded bg-muted px-3 py-2 font-mono text-xs whitespace-pre">
              {`src/
├── features/
│   └── tasks/
│       ├── tasks.wasp.ts       # Feature config
│       ├── client/
│       │   └── pages/
│       │       └── TaskList.tsx
│       └── server/
│           ├── actions/
│           │   └── createTask.ts
│           └── queries/
│               └── getTasks.ts
└── shared/
    └── client/
        └── components/`}
            </code>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Configuration Pattern</h3>
            <p className="text-sm text-muted-foreground">
              Configuration is split across features, with each directory
              containing its own <code>.wasp.ts</code> file. Fluent helper
              methods make configuration concise and maintainable, replacing
              Wasp's default monolithic approach.
            </p>
          </div>

          <Alert className="mt-4">
            <Code2 className="size-4" />
            <AlertTitle>This Page</AlertTitle>
            <AlertDescription>
              Rendered by the <code>Home</code> component at{" "}
              <code className="font-mono text-xs">
                src/features/root/client/pages/Home.tsx
              </code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Built With</CardTitle>
          <CardDescription>
            Modern tools and frameworks that work together seamlessly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2"
              >
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  className="size-5"
                />
                <span className="text-sm font-medium text-secondary-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
