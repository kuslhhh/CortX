export function Input({
    onchange,
    placeholder,
}: {
    placeholder: string;
    onChange: () => void;
}) {
    return (
        <div className="pt-5">
            <input
                type={"text"}
                placeholder="{placeholder}"
                className="px-4 py-2 rounded-l-lg  bg-[#a9a9a9] text-[#1a1a1a] placeholder:text-[#1a1a1a] border border-y-0 border-l-0 border-r-black "
                onChange={onchange}
            />
        </div>
    );
}
