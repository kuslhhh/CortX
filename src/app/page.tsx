"use client"

import PlusIcon from "@/components/icons/plusIcon";
import ShareIcon from "@/components/icons/shareIcon";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Modal from "@/components/ui/modal";
import Sidebar from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>

      <Sidebar />

      <div className="p-4 ml-72 min-h-screen bg-zinc-300">

        <Modal open={modalOpen} onClose={() => {
          setModalOpen(false)
        }} />

        <div className="flex  justify-end gap-2">

          <Button onClick={() => {
            setModalOpen(true)
          }} startIcon={<PlusIcon />} text="Add Brain" varient="secondary" />
          <Button startIcon={<ShareIcon />} text="Share Brain" varient="primary" />
        </div>

        <div className="flex flex-row pt-4 gap-4">
          <Card
            title="Tweet"
            type="twitter"
            link="https://x.com/cryptobeastreal/status/1886367213466128774"
          />
          <Card
            title="Youtube"
            type="youtube"
            link="https://www.youtube.com/watch?v=rYDEJN3PMTM"
          />
          
        </div>
      </div>
    </>
  );
}
