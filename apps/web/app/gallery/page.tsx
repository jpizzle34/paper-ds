import { CircleAlertIcon } from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@paper-ds/ui/components/alert"
import { Badge } from "@paper-ds/ui/components/badge"
import { Button } from "@paper-ds/ui/components/button"

const buttonVariants = ["default", "outline", "secondary", "ghost", "destructive"] as const
const badgeVariants = ["default", "secondary", "outline", "destructive"] as const

export default function GalleryPage() {
  return (
    <main className="min-h-svh bg-background px-6 pt-16 pb-6 text-foreground">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-medium">Button</h2>
          <div className="flex flex-wrap gap-2">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-medium">Badge</h2>
          <div className="flex flex-wrap gap-2">
            {badgeVariants.map((variant) => (
              <Badge key={variant} variant={variant}>
                {variant}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-medium">Alert</h2>
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
    </main>
  )
}
