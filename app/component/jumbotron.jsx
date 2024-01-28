import Image from "next/image";

const bgColour = {"Default": "#fff"}

export const JumboTron = () => {
    return (
        <div className="flex justify-center mt-5 bg-blend-multiply" style={{backgroundColor:bgColour.Default}}>
            <Image src="/retreat.PNG"
                height={525}
                width={525} />
        </div>

    )
}
