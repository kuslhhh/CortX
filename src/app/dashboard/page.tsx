"use client"

import PlusIcon from "@/components/icons/plusIcon";
import ShareIcon from "@/components/icons/shareIcon";
import Button from "@/components/button";
import Card from "@/components/card";
import Modal from "@/components/ui/modal";
import Sidebar from "@/components/ui/sidebar";
import { useState } from "react";

export default function Dashboard() {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>

            <Sidebar />

            <div className="p-4 ml-56 min-h-screen">

                <Modal open={modalOpen} onClose={() => setModalOpen(false)} />

                <div className="flex justify-end gap-2">

                    <Button onClick={() => {
                        setModalOpen(true)
                    }} startIcon={<PlusIcon />} text="Add Brain" varient="secondary" />
                    <Button startIcon={<ShareIcon />} text="Share Brain" varient="primary" />
                </div>

                <div className="container mx-auto p-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-4 gap-4">
                        <Card
                            title="Youtube"
                            type="youtube"
                            link="https://www.youtube.com/watch?v=rYDEJN3PMTM"
                        />

                        <Card
                            title="Spotify"
                            type="spotify"
                            link="https://open.spotify.com/track/3tgdOveYac7YMEAQD9sGLf?si=7a6225fd1b734a11"
                        />

                        <Card
                            title="Tweet"
                            type="twitter"
                            link="https://x.com/cryptobeastreal/status/1886477220387991838"
                        />
                        <Card
                            title="Reels"
                            type="instagram"
                            link="https://www.instagram.com/reel/DDcSMrUTYtw/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                        />
                        <Card
                            title="Reels"
                            type="instagram"
                            link="https://www.instagram.com/reel/DFYWTdVIvkc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                        />
                        <Card
                            title="Reels"
                            type="instagram"
                            link="https://www.instagram.com/reel/DDcSMrUTYtw/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
