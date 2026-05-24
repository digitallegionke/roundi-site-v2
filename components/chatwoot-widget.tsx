"use client"

import { useEffect } from 'react'

declare global {
  interface Window {
    chatwootSettings?: {
      hideMessageBubble?: boolean
      position?: 'left' | 'right'
      locale?: string
      type?: 'standard' | 'expanded_bubble'
      launcherTitle?: string
    }
    chatwootSDK?: any
    $chatwoot?: {
      toggle: () => void
      setLabel: (label: string) => void
      removeLabel: (label: string) => void
      setCustomAttributes: (attributes: Record<string, any>) => void
      deleteCustomAttribute: (attribute: string) => void
      setUser: (identifier: string, user: Record<string, any>) => void
      reset: () => void
    }
  }
}

export function ChatwootWidget() {
  useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'standard', // [standard, expanded_bubble]
    }

    // Paste the script from inbox settings except the <script> tag
    ;(function (d, t) {
      const BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || 'https://app.chatwoot.com'
      const g = d.createElement(t) as HTMLScriptElement
      const s = d.getElementsByTagName(t)[0]
      g.src = BASE_URL + '/packs/js/sdk.js'
      g.defer = true
      g.async = true
      s.parentNode?.insertBefore(g, s)
      g.onload = function () {
        window.chatwootSDK?.run({
          websiteToken: process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || '',
          baseUrl: BASE_URL,
        })
      }
    })(document, 'script')
  }, [])

  return null
}
