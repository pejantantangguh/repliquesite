import Image from "next/image";

const bgColour = {"Default": "#f9f1e6"}

export const JumboTron = () => {
    return (
        <div className="flex justify-center mt-5 bg-blend-multiply" style={{backgroundColor:bgColour.Default}}>
            <Image src="/Christmas.jpeg"
                height={525}
                width={525} />
        </div>

    )
}
