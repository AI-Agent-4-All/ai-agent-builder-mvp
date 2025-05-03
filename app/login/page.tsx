'use client'

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function LoginPage() {
  const supabase = createClientComponentClient()

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '100px' }}>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                inputBorder: '#ccc', // Light grey border
                inputText: '#ffffff', // Text color white
                inputBackground: '#111111', // Slightly lighter background
                brand: '#22c55e', // Button color (greenish)
              },
            },
          },
        }}
        theme="dark"
        providers={['google']}
      />
    </div>
  )
}
