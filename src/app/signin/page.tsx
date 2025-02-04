import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
    return (
        <div className="pt-44">

            <Card className="w-full max-w-md mx-auto rounded-b-none border-y-0 border-x-0 border-b-[1px] border-[#a9a9a9] bg-[#1a1a1a] text-[#eeeeee]">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Welcome back! Please sign in to continue.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-8">
                        <div>
                            <label>Email</label>
                            <Input
                                className="rounded-b-none"
                                placeholder="john@doe.com"
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <Input
                                type="password"
                                className="rounded-b-none"
                                placeholder="Enter your password"
                            />
                        </div>
                        <Button size={"sm"} className="rounded-b-none w-full" type="submit">
                            Submit
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-center">
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account yet? {""}
                        <Link href="/sign-up" className="text-primary hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}