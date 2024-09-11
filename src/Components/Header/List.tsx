"use client"; // Ensure this is at the top of the file

import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure this is defined correctly
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"; // Ensure these imports are correct
// ListItem Component
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
  );
});
ListItem.displayName = "ListItem";
// Define the components for the mega menu

const List = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {/* Mega Menu: What We Do */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 bg-white text-black p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-800 to-gray-900 p-6 no-underline outline-none focus:shadow-md text-white"
                    href="/services"
                    style={{
                      backgroundImage:
                        "url(https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Our Services
                    </div>
                    <p className="text-sm leading-tight">
                      Explore our range of software development services
                      tailored to meet your business needs.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/services/software-development"
                title="Software Development"
              >
                Custom software solutions to transform your business.
              </ListItem>
              <ListItem
                href="/services/web-development"
                title="Web Development"
              >
                Building responsive and high-performance websites.
              </ListItem>
              <ListItem
                href="/services/mobile-app-development"
                title="Mobile App Development"
              >
                Developing intuitive and engaging mobile applications.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Mega Menu: What We Think */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>What We Think</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white text-black">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title="Innovation and Trends" href="/innovation">
                Discover the latest trends and innovations in technology that
                are shaping the future.
              </ListItem>
              <ListItem title="Industry Insights" href="/insights">
                Gain valuable insights into industry developments and how they
                impact your business.
              </ListItem>
              <ListItem title="Our Vision" href="/vision">
                Learn about our vision for the future and how we plan to drive
                progress and innovation.
              </ListItem>
              <ListItem title="Thought Leadership" href="/thought-leadership">
                Explore our thought leadership articles and thought-provoking
                opinions on various tech topics.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Mega Menu: Who We Are */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Who We Are</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white text-black">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/about" title="About Us">
                Learn more about our mission, vision, and team.
              </ListItem>
              <ListItem href="/team" title="Our Team">
                Meet the talented individuals behind our success.
              </ListItem>
              <ListItem href="/values" title="Our Values">
                Discover the core values that drive our company.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Mega Menu: Careers */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white text-black">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                href="/careers/software-engineer"
                title="Software Engineer"
              >
                Join our team as a software engineer and work on innovative
                projects.
              </ListItem>
              <ListItem
                href="/careers/frontend-developer"
                title="Frontend Developer"
              >
                Help us build beautiful and intuitive user interfaces.
              </ListItem>
              <ListItem
                href="/careers/backend-developer"
                title="Backend Developer"
              >
                Work on the server-side logic and database management.
              </ListItem>
              <ListItem href="/careers/internships" title="Internships">
                Explore internship opportunities and start your career with us.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default List;
