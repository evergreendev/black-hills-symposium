import {ReactElement} from "react";

export type dateItem = {
    date: string,
    callout?: boolean,
    items: timeItem[]
}
export type timeItem = {
    time: string,
    items: (string | ReactElement)[]
}


const savedCallback = {
    callout: true,
    date: "In-depth pre-symposium sessions, April 10. Open to all symposium attendees.",
    items: [
        {
            time: "8:30-4:00pm",
            items: [
                "PFOS/PFOA Technical Seminar"
            ]
        },
/*        {
            time: "1:00-4:00pm",
            items: [
                "The Perils of Theater Nuclear Escalation War Games, to feature panels of participants actively participating in a war game simulation.  Panels will consist of military and civilian panelists. Simulation will demonstrate the complexity of a potential conflict with a peer nation and the challenges the United States would encounter."
            ]
        }*/
    ]
};


const Agenda = ({schedule, trackSessions}: { schedule: dateItem[], trackSessions?: any[] }) => {
    return <div className="md:flex items-start relative">
        <div>
            <h2 className="text-4xl font-bold p-2.5">Events</h2>
            {
                schedule.map((x) => {
                    return <div key={x.date}
                                className={`mb-10 px-16 ${x.callout ? "bg-primary-200 py-6 shadow-lg" : ""}`}>
                        <p className="text-2xl font-bold mb-4">{x.date}</p>
                        <div>
                            {x.items.map((y) => {
                                const key = (y.items[0] as ReactElement).key ? (y.items[0] as ReactElement).key : y.items[0];

                                return <div className="mb-4 border-l-2 border-l-primary-300" key={x.date + y.time + key}>
                                    <p className="font-bold text-xl">{y.time}</p>
                                    <div className={`px-4`}>
                                        {y.items.map(z => {
                                            return <div
                                                key={y.time + (z as ReactElement).key ? (z as ReactElement).key : z as string}
                                                className="mb-4">
                                                {z}
                                            </div>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                })
            }
        </div>
        {
            trackSessions && <div className="bg-primary-100 p-7 sticky top-9 max-w-screen-sm shadow-md">
                <h2 className="text-4xl font-bold text-primary-600 mb-4 bg-primary-200 p-1">Track Sessions</h2>
                {
                    trackSessions.map(x => {
                        return <div key={x.title} className="mb-8">
                            <h3 className="text-xl mb-2">{x.title}</h3>
                            <div>
                                {x.items.map((y: any) => {
                                    return <div className="mb-4" key={y.title}>
                                        {y.time} - {y.title}
                                    </div>
                                })}
                            </div>
                        </div>
                    })
                }
            </div>
        }

    </div>
}

export default Agenda;
