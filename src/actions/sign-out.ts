'use server'
import * as auth from '@/auth';
export async function signOut()
{
    console.log("signout called");
    return auth.signOut();
}
