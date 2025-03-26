import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel, 
} from "@/components/ui/sidebar"
import  Link from "next/link"
import SidebarGroupContent from "@/components/SidebarGroupContent"

import { getUser } from "@/auth/server"
import { prisma } from "@/db/prisma"
import { Note } from "@prisma/client";

async function AppSidebar() {
  const user = await getUser();
  
  let notes: Note[] = [];
  
  if (user) {
    notes = await prisma.note.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        updatedAt: "desc",
      }
    });
  }

  return (
    <Sidebar>
      <SidebarContent className="custom-scrollbar">
        <SidebarGroup />
          <SidebarGroupLabel className="mb-2 mt-2 text-lg">
            {user ? (
              "Notes"
            ): (
              <p>
                <Link href="/login" className="underline">
                  Login
                </Link>{" "}
              to see your notes
              </p>
            )}
            
          </SidebarGroupLabel>
          {user && <SidebarGroupContent notes={notes} /> }
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar