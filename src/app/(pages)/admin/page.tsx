import { SignedOut, SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  const revalidate = false; 
  return (
    <div>
      this is dasboard admin 
      <SignOutButton ></SignOutButton>
      <UserButton/>
    </div>
  
  )
} 

export function generateMetadata() {
  return {
    title: `Page - Title here`,
    description: `Page - Description here`,
    icons: {
      icon: `path to asset file`,
    },
  };
} 