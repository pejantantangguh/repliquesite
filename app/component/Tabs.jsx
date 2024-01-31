'use client'
import { useEffect, useRef, useState } from "react"

const TabsComponent = ({ evangelist }) => {
    const firstBtnRef = useRef();
    const [selectedTab, setSelectedTab] = useState(0)
    useEffect(() => {
        firstBtnRef.current.focus();
    })
    return (
        <div>
            <div className="text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 my-3">
                {evangelist.map((ev, index) => {
                    return (
                        <a
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            ref={index === 0 ? firstBtnRef : null}
                            className={`${selectedTab === index ? "inline-block primaryColor-1 w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:bg-blue-100 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 bg-blue-300" : "inline-block primaryColor-1 w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:bg-blue-100 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"}`}>
                            {ev.name}
                        </a>
                    )
                })}
            </div>
            {evangelist.map((item, index) => (
                <div key={index}
                    className={`${selectedTab === index ? "max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3 mx-auto" : "hidden"}`}>
                    <img src={item.picture}
                        className="rounded-t-lg"
                        alt={item.name} />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.name}
                        </h5>
                        <p className="text-lg text-gray-900 dark:text-white">
                            {item.title}
                        </p>

                        {item.blurb}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default TabsComponent;