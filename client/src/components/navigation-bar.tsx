
'use client'

import * as React from "react"

import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "../app/(nondashboard)/landing/components-main/_components/ui/navigation-menu"

  import Logo from "./ui/logo"

  const components: { title: string, description: string}[] = [
    {
        title: "Share your Tech Lessons on How Platform ",
    
        description:
          "Contact us @ www.Biosxtech.com",
      },
      {
        title: "Student",
    
        description:
          "Learn with us @ learningThree.",
      },
     
  ]



  export function NavigationMenuBar() {
    return (
      <NavigationMenu>
        <NavigationMenuList
        className="hidden md:flex md:space-x-4"
        
      
        >
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
         

         
        
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"