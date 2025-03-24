"use client"

import { Note } from "@prisma/client"

type Props = {
  notes: Note[]
}

function SidebarGroupContent({ notes }: Props) {
  console.log("SidebarGroupContent", notes)
  // const { data: session } = useSession();
  return (
    <div>Your Notes here</div>
  )
}

export default SidebarGroupContent