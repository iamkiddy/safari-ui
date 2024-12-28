"use client"

import React, { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface CodePreviewProps {
  code: string
  preview?: React.ReactNode
  className?: string
}

export function CodePreview({ code, preview, className }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("rounded-lg border", className)}>
      {preview && (
        <div className="p-4 border-b bg-background">
          <div className="flex items-center justify-center rounded-md border bg-secondary/40 p-8">
            {preview}
          </div>
        </div>
      )}
      <div className="relative">
        <div className="absolute right-4 top-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCopy}
            className="h-8 w-8"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="relative rounded bg-secondary/40 p-4 font-mono text-foreground block">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
} 