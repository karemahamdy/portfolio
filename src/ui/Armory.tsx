 'use client';
import IconCloud from "../_components/magicui/icon-cloud"


const slugs = [
  'java',
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'vuejs',
  'nodejs',
  'nextjs',
  'starpi',
  'postgresql',
  'firebase',
  'flutter',
  'vercel',
  'jest',
  'git',
  'github',
  'bootstrap',
  'tailwindcss',
  'antdesign',
  'framer',
  'redux',
  'vite',
  'chakraui',
  'mui',
  'graphql',
  'supabase',
  'socketio',
  'python',
  'mongodb',
  'cplusplus',
  'bash',
  'figma',
  'postman',
  'photoshop',
  'illustrator',
  'vite',
  'chakraui',
  'mui',
  'graphql',
  'supabase',
  'socketio',
  'livewire',
  'vitess',
  'shadcnui',
  'sass',
  'vuetify',
  'babel',
  'headlessui',
  'strapi'
]

export default function Armory() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background px-20 pb-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}