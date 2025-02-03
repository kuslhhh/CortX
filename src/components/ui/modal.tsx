import CrossIcon from "../icons/crossIcon";

export default function Modal({ open, onClose }) {

    return <div>
        {open && (
            <div className="w-screen h-screen bg-black opacity-70 fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-[#1a1a1a] opacity-100 p-5 pb-10 rounded-l-lg border border-y-0 border-l-0 border-r-[#a9a9a9] ">
                        <div className="flex justify-end">
                            <CrossIcon />

                        </div>
                        <Input  />
                        <Input />
                    </span>
                </div>
            </div>
        )}
    </div>
}

function Input({ onchange, placeholder }: { onChange: () => void }) {
    return (
        <div className="pt-5">
            <input
                type={"text"}
                placeholder="{placeholder}"
                className="px-4 py-2 rounded-l-lg  bg-[#a9a9a9] text-[#1a1a1a] border border-y-0 border-l-0 border-r-black "
                onChange={onchange}
            />
        </div>
    )
}
