'use client'
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
// import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
export default function HeaderAuth()
{
const session = useSession();
let authContent:React.ReactNode;
if(session.status=== "loading"){
    authContent=null;
}
else if (session.data?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit"> Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              SignIn
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="flat">
              SignUp
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;   
}
