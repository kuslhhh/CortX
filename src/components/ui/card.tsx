import React, { useEffect, useState } from 'react'
import ShareIcon from '../icons/shareIcon'
import PlusIcon from '../icons/plusIcon'
import { ImSpinner9 } from "react-icons/im";
import NotebookIcon from '../icons/notebookIcon';
import DeleteIcon from '../icons/deleteIcon';
import XIcon from '../icons/XIcon';
import SpotifyIcon from '../icons/SpotifyIcon';
import YouTubeIcon from '../icons/YouTubeIcon';

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube" | "spotify"
}

export default function Card({ title, link, type }: CardProps) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        const scriptId = 'twitter-wjs'
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script")
            script.id = scriptId
            script.src = "https://platform.twitter.com/widgets.js"
            script.async = true
            document.head.appendChild(script)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        if (!loading && window.twttr) {
            window.twttr.widgets.load()
        }
    }, [loading])

    const getSpotifyEmbedLink = (link: string) => {
        const regex = /(?:track|album|playlist)\/([a-zA-Z0-9]+)/;
        const match = link.match(regex);
        if (match && match[1]) {
            return `https://open.spotify.com/embed/${match[0]}?utm_source=generator&theme=0`;
        }
        return link;
    };

    return (
        <div>
            <div className="p-4 bg-[#1a1a1a] rounded-l-lg border border-y-0 border-l-0 border-r-[#a9a9a9] w-80  ">
                <div className="flex justify-between">
                    <div className="flex items-center text-[#a9a9a9]">
                        <div className="pr-2">
                            {type === "twitter" && <XIcon />}
                            {type === "spotify" && <SpotifyIcon />}
                            {type === "youtube" && <YouTubeIcon />}
                        </div>
                        <span className="font-semibold text-lg">
                            {title}
                        </span>
                    </div>
                    <div className="flex items-center text-[#a9a9a9]">
                        <div className="pr-2">
                            <a href={link} target='_blank'>
                                <ShareIcon />
                            </a>
                        </div>
                        <DeleteIcon />
                    </div>
                </div>
                <div className="pt-4">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <ImSpinner9 className="animate-spin text-[#a9a9a9] text-2xl" />
                        </div>
                    ) : (
                        <>
                            {type === "youtube" && (
                                <iframe
                                    className="w-full"
                                    src={link.replace("watch", "embed").replace("?v=", "/")}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            )}
                            {type === "twitter" && (
                                <blockquote className="twitter-tweet">
                                    <a
                                        className="w-fit"
                                        href={link.replace("x.com", "twitter.com")}
                                    ></a>
                                </blockquote>
                            )}
                            {type === "spotify" && (
                                <iframe
                                    className="rounded-[12px]"
                                    src={getSpotifyEmbedLink(link)}
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                ></iframe>
                            )}

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
