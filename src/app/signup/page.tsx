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

export default function SignUp() {
    return (
        <div className="pt-36">

            <Card className="w-full max-w-md mx-auto rounded-b-none border-y-0 border-x-0 border-b-[1px] border-[#a9a9a9] bg-[#1a1a1a] text-[#eeeeee]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>
                        Create an account to get started.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-8">
                        <div>
                            <label>Name</label>
                            <Input
                                className="rounded-b-none"
                                placeholder="John Doe"
                            />
                        </div>
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
                        Already have an account? {""}
                        <Link href="/sign-in" className="text-primary hover:underline">
                            Sign in
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}