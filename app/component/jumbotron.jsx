import Image from "next/image";

const imageSize = {
    height: "100vh",
    width: "auto"
}

export const JumboTron = () => {
    return (
        <div className="flex justify-center mt-5 bg-blend-multiply">
            <img src="/melbourne-retreat.jpg"
                style={imageSize}
                alt = "Melbourne Retreat Picture" />
        </div>

    )
}
