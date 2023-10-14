'use client'
import { useEffect, useRef } from "react"

export default function TabsComponent({ tabsItem }) {
    const firstButton = useRef();

    useEffect(() => {
        firstButton.current.focus();
    })
    return (
        <div>
            <ul className="flex flex-wrap -mb-px content-center justify-center py-16">
                {tabsItem.map((tabitem, index) => (
                    <li className="mr-2 w-64 text-center" key={index}>
                        <button href="#"
                            className="inline-block p-4 font-mono text-sm text-blue-600 border-b-2 rounded-t-lg dark:text-blue-500 dark:border-blue-500"
                            ref={index === 0 ? firstButton : null}
                            key={index}
                        >
                            {tabitem.title}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col -mb-px content-center justify-center pb-8 w-8/12 mx-auto">
                {tabsItem.map((tabitem, index) => (
                    <div className="flex flex-col content-center justify-center">
                        <img key={index} className="h-auto max-w-lg rounded-lg self-center mb-12" 
                             src={tabitem.imageUrl} 
                             alt={tabitem.title} />
                        {tabitem.content}
                    </div>
                ))}
            </div>



        </div>
    )
}

// https://youtu.be/R2tyUnK2OUI?si=j5xwnddimdSdqc8g&t=1055