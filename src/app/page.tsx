"use client"

import PlusIcon from "@/components/icons/plusIcon";
import ShareIcon from "@/components/icons/shareIcon";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function Home() {

  return (

    <div className="flex items-center justify-center h-screen ">
      {/* <Button varient="primary" text="Add Content" startIcon={<PlusIcon />} />
      <Button varient="secondary" text="Share Brain" startIcon={<ShareIcon />}/> */}

      <Card/>
    </div>

  );
}
