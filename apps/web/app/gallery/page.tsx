import { CircleAlertIcon } from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@paper-ds/ui/components/alert"
import { Badge } from "@paper-ds/ui/components/badge"
import { Button } from "@paper-ds/ui/components/button"

const buttonVariants = ["default", "outline", "secondary", "ghost", "destructive"] as const
const badgeVariants = ["default", "secondary", "outline", "destructive"] as const

function Specimen({ theme }: { theme: "light" | "dark" }) {
  return (
    <section className={theme === "dark" ? "dark" : undefined}>
      <div className="flex flex-col gap-8 bg-background p-6 text-foreground">
        <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          {theme}
        </h2>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium">Button</h3>
          <div className="flex flex-wrap gap-2">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium">Badge</h3>
          <div className="flex flex-wrap gap-2">
            {badgeVariants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex max-w-xl flex-col gap-3">
          <h3 className="text-sm font-medium">Alert</h3>
          <Alert>
            <CircleAlertIcon />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>The card was declined. Try another card.</AlertDescription>
            <AlertAction>
              <Button size="xs" variant="outline">
                Retry
              </Button>
            </AlertAction>
          </Alert>
          <Alert variant="destructive">
            <CircleAlertIcon />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>We could not save your changes.</AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}

export default function GalleryPage() {
  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <Specimen theme="light" />
      <Specimen theme="dark" />
    </main>
  )
}
