import Image from "next/image";

const imageSize = {
    height: "50vh",
    width: "auto"
}

export const JumboTron = () => {
    return (
        <div className="flex justify-center mt-5 bg-blend-multiply">
            <img src="/replique-christmas.jpeg"
                style={imageSize}
                alt = "Christmast Replique" />
        </div>

    )
}
