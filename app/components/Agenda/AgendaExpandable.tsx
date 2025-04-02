"use client"
import {ReactElement, useState} from "react";
import {Plus, Minus} from "lucide-react";

export type dateItem = {
    date: string,
    callout?: boolean,
    items?: timeItem[]
}
export type timeItem = {
    time?: string,
    title?: string,
    room?: string,
    items?: (string | ReactElement | timeItem)[]
}


const AgendaItem = ({item}:{item:timeItem}) => {
    const hasSubItems = !(item.items && (typeof item.items[0] !== "string" && (item.items[0] as timeItem)?.items));
    const [isOpen, setIsOpen] = useState(!hasSubItems);

    return <div className="my-2 flex gap-2 items-start text-gray-600">
        {hasSubItems && item.items && <button onClick={() => {
            setIsOpen(!isOpen)
        }}>{isOpen ? <Minus size={20} className="mt-0.5"/> : <Plus className="mt-0.5" size={20}/>}</button>}
        <button className={`text-left ${hasSubItems && item.items ? "":"cursor-default"}`} onClick={(e) => {
            e.stopPropagation();
            if (hasSubItems && item.items){
                setIsOpen(!isOpen)
            }
        }}>
            <h2 className={`mb-2 ${item.items ? "":"ml-9"}`}>
                <p className="font-bold text-base">{item.time}</p>
                <p className="font-bold text-base">{item.title}</p>
            </h2>

            <div
                className={`px-4 text-sm transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
                {item.room ? <p><span className="font-normal italic">{item.room}</span></p> :""}
                {item.items && item.items.map(z => {
                    if (typeof z != "string" && "title" in z){
                        return <AgendaItem item={z} key={z.title}/>
                    }

                    return <div
                        key={(z as ReactElement).key}
                        className="mb-4">
                        {(z as string)}
                    </div>
                })}
            </div>
        </button>

    </div>
}


const AgendaExpandable = ({schedule}: { schedule: dateItem[]}) => {
    return <div className="md:flex items-start relative flex-wrap">
        <div className="w-full max-w-screen-md mx-auto">
            {
                schedule.map((x) => {
                    return <div key={x.date}
                                className={`mb-10 px-16 ${x.callout ? "bg-primary-200 py-6 shadow-lg" : ""}`}>
                        <p className="text-xl font-bold">{x.date}</p>
                        <div>
                            {x.items && x.items.map((y,index) => {
                                return <div key={index}  className="border-t border-b border-gray-300 my-2"><AgendaItem item={y} key={index}/>

                                </div>
                            })}
                        </div>
                    </div>
                })
            }
        </div>
        <p className="w-full">* Agenda subject to change</p>
    </div>
}

export default AgendaExpandable;
