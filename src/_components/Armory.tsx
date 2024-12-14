'use client';
import IconCloud from "./magicui/icon-cloud";

const slugs = [
  'java',
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodejs',
  'nextjs',
  'postgresql',
  'firebase',
  'vercel',
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
  'supabase',
  'python',
  'mongodb',
  'postman',
  'photoshop',
  'illustrator',
  'premierepro',
  'aftereffects',
  'apple',
  'drizzle',
  'figma',
  'Java',
  'C++'
]

export default function Armory() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-background px-20 pb-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}