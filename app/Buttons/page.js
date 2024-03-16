import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className=' p-4 space-y-3 flex flex-col max-w-[250px]' >
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary outline</Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline">danger outline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutline">super outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sidebar">sidebar </Button>
      <Button variant="sidebarOutline">sidebar outline</Button>
     
    </div>
  )
}

export default page
