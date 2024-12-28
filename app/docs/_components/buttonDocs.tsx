import { Button } from "@/app/components/ui/button"
import {
  ChevronRight,
  Mail,
  Github,
  Calendar,
  Settings,
  Search,
  Plus,
  Trash,
  Loader2,
  Sparkles,
  Zap,
  Star,
  Heart,
} from "lucide-react"
import { CodePreview } from "@/app/components/ui/code-preview"

export function ButtonDocs() {
  return (
    <div className="max-w-4xl space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          Interactive button component with multiple variants and sizes.
        </p>
      </div>

      {/* Usage Example */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
          <div className="rounded-xl border bg-secondary/30 p-6">
            <Button>Click me</Button>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Variants</h2>
          <div className="flex flex-wrap gap-4 rounded-xl border bg-secondary/30 p-6">
            <Button variant="default">
              <Sparkles className="mr-2 h-4 w-4" />
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Sizes</h2>
          <div className="flex items-center gap-4 rounded-xl border bg-secondary/30 p-6">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">States</h2>
          <div className="flex flex-wrap gap-4 rounded-xl border bg-secondary/30 p-6">
            <Button disabled>Disabled</Button>
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
            <Button variant="link">
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">With Icons</h2>
          <div className="flex flex-wrap gap-4 rounded-xl border bg-secondary/30 p-6">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="secondary">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Code</h2>
          <CodePreview 
            code={`import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ButtonExample() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" />
      Email
    </Button>
  )
}`}
            preview={
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            }
          />
        </div>
      </section>

      {/* Props Reference */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Props</h2>
          <div className="rounded-xl border">
            <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b">
              <div>Prop</div>
              <div>Type</div>
              <div>Default</div>
              <div>Description</div>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4 text-sm">
              <div className="font-mono">variant</div>
              <div>string</div>
              <div>'default'</div>
              <div>Style variant of the button</div>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4 text-sm bg-secondary/30">
              <div className="font-mono">size</div>
              <div>string</div>
              <div>'default'</div>
              <div>Size of the button</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Variants */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Modern Variants</h2>
          <div className="flex flex-wrap gap-4 rounded-xl border bg-secondary/30 p-6">
            <Button variant="glow">
              <Sparkles className="mr-2 h-4 w-4" />
              Glow
            </Button>
            <Button variant="glow">
              <Zap className="mr-2 h-4 w-4" />
              Glow
            </Button>
            <Button variant="glow">
              <Star className="mr-2 h-4 w-4" />
              Glow
            </Button>
            <Button variant="soft">
              <Heart className="mr-2 h-4 w-4" />
              Soft
            </Button>
            <Button variant="glow">Glow Effect</Button>
          </div>
        </div>
      </section>

      {/* Sizes and Shapes */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Sizes and Shapes</h2>
          <div className="flex flex-wrap items-center gap-4 rounded-xl border bg-secondary/30 p-6">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="pill">Pill Shape</Button>
          </div>
        </div>
      </section>

      {/* Animations */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Animations</h2>
          <div className="flex flex-wrap items-center gap-4 rounded-xl border bg-secondary/30 p-6">
            <Button animation="pulse">Pulse</Button>
            <Button animation="bounce">Bounce</Button>
            <Button loading>Loading State</Button>
            <Button variant="glow" animation="pulse">
              <Sparkles className="mr-2 h-4 w-4" />
              Animated Glow
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
