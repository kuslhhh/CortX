import CrossIcon from "../icons/crossIcon";
import InputC from "../input";

export default function Modal({ open, onClose }) {
    if (!open) return null; // Prevents rendering when closed

    return (
        <div
            className="w-screen h-screen bg-black/70 fixed top-0 left-0 flex justify-center items-center"
            onClick={onClose} // Clicking outside closes modal
        >
            <div
                className="bg-[#1a1a1a] opacity-100 p-5 pb-10 rounded-l-lg border border-y-0 border-l-0 border-r-[#a9a9a9]"
                onClick={(e) => e.stopPropagation()} // Prevents modal close when clicking inside
            >
                {/* Close button */}
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon />
                    </div>
                </div>

                {/* Input Component */}
                <div>
                    <InputC onClose={onClose} />
                </div>
            </div>
        </div>
    );
}
