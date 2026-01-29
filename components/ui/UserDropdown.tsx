'use client'
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserDropdown = () => {

const router = useRouter()
const handleSignOut = async () => {
    router.push("/sign-in") 
}

const user = { name: 'Elliot Lee', email: 'elliot.lee@gmail.com' }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-neutral-500">
            <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-neutral-500 text-neutral-900 text-sm font-bold">EL</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col items-start">
                <span className="text-base font-medium text-gray-400">
                    {user.name}
                </span>
            </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
          <div className="flex">
            <span className="text-[0.7rem] pl-2 font-thin">{user.email}</span>
          </div>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
