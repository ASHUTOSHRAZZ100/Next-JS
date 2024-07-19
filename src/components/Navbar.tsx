// we can use one of them method from M-1 or M-2

// React ka koi vi hooks directly use nahi hota ha next-js me 
// React ka hooks use kar ne ke liye hame top pe 'use client'; likana parta ha

'use client';  // use karne se ye client component bangya ha

import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

//M-1
//import React from 'react'

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"#"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">ALL Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                        <HoveredLink href="/courses">Songwriting</HoveredLink>
                        <HoveredLink href="/courses">Music Production</HoveredLink>
                    </div>
                </MenuItem>

                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="grid grid-cols-2 gap-5 p-4 text-sm">
                        <HoveredLink href="/">Project-1</HoveredLink>
                        <HoveredLink href="/">Project-2</HoveredLink>
                        <HoveredLink href="/">Project-3</HoveredLink>
                        <HoveredLink href="/">Project-4</HoveredLink>
                    </div>

                </MenuItem>

            </Menu>
        </div>
    )
}

export default Navbar



//M-2

// export default function Navbar(){
//     return (
//         <div>Navbar-2</div>
//     )
// }