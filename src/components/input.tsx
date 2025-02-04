import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

export default function AddContent({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <Card className="w-full max-w-md min-h-[450px] mx-auto rounded-xl shadow-lg border-x-0 border-t-0 border-[#303030] bg-[#1a1a1a] text-[#eeeeee] relative rounded-b-none border-b-[#a9a9a9]" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-[#a9a9a9] hover:text-white">
                    <X size={20} />
                </button>

                <CardHeader className="pt-6 px-6 rounded-b-none">
                    <CardTitle className="text-lg font-semibold">Add Content</CardTitle>
                    <CardDescription className="text-sm text-gray-400">
                        Share your favorite link below.
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-6">
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-300">Title</label>
                            <Input
                                className="mt-1 bg-[#262626] border-[#444] text-white focus:border-primary rounded-b-none"
                                placeholder="Enter title"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-300">Type</label>
                            <Select>
                                <SelectTrigger className="mt-1 bg-[#262626] border-[#444] text-whit rounded-b-none">
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent className="rounded-b-none">
                                    <SelectItem className="rounded-b-none" value="Instagram">Instagram</SelectItem>
                                    <SelectItem className="rounded-b-none" value="YouTube">YouTube</SelectItem>
                                    <SelectItem className="rounded-b-none" value="Twitter">Twitter</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-300">Link</label>
                            <Input
                                className="mt-1 bg-[#262626] border-[#444] text-white focus:border-primary rounded-b-none"
                                placeholder="Enter link"
                            />
                        </div>

                        <Button className="w-full bg-white text-black font-medium py-2 mt-4 rounded-b-none">
                            Add Content
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-center text-sm text-gray-400 mt-4 -mb-2">
                    <span className="text-primary">
                        Share What&apos;s on your mind!
                    </span>
                </CardFooter>
            </Card>
        </div>
    );
}
