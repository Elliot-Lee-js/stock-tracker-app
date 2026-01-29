"use client";

import { NAV_ITEMS, NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navitems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map((item: NavItem) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href));

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navitems;
