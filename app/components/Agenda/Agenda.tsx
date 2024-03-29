import {ReactElement} from "react";

type dateItem = {
    date: string,
    callout?: boolean,
    items: timeItem[]
}
type timeItem = {
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
        {
            time: "1:00-4:00pm",
            items: [
                "The Perils of Theater Nuclear Escalation War Games, to feature panels of participants actively participating in a war game simulation.  Panels will consist of military and civilian panelists. Simulation will demonstrate the complexity of a potential conflict with a peer nation and the challenges the United States would encounter."
            ]
        }
    ]
};

const schedule: dateItem[] = [{
    date: "Wednesday, April 10, 2024",
    items: [
        {
            time: "7:30am",
            items: [
                "Doors open"
            ]
        },
        {
            time: "7:30am - 5:00pm",
            items: [
                "Event check-in & badge pick-up"
            ]
        },
        {
            time: "8:30am - 4:30pm",
            items: [
                <div key="gen-ses"><span className="font-bold">PFOS/PFOA Technical Seminar</span> - Lancer Salon C/D</div>
            ]
        },

        {
            time: "8:30am",
            items: [
                "Welcome / Pledge of Allegiance"
            ]
        },
        {
            time: "8:40am",
            items: [
                "PFOS/PFOA Technical Seminar*",
                "Starting with technical presentations and discussions focused on PFOS/PFOA challenges locally and nationally. We will have experts from academia, government, and industry highlighting technologies, remediation, and local perspectives. Audience participation in the discussion will be intermixed during the event."
            ]
        },
        {
            time: "11:00am - 1:00pm",
            items: [
                "Lunch on your own"
            ]
        },
        {
            time: "1:00pm - 4:30pm",
            items: [
                "PFOS/PFOA Technical Seminar*"
            ]
        },
        {
            time: "1:00pm - 4:30pm",
            items: [
                <div key="gen-ses"><span className="font-bold">The Perils of Theater Nuclear Escalation War Game</span> - Main Ballroom - Presented by South Dakota Ellsworth Development Authority</div>
            ]
        },
        {
            time: "1:00pm",
            items: [
                "War Game* Kickoff",
                <div key="gen-ses"><span className="font-bold">General Timothy Ray</span>, USAF (Ret.), President & Chief Executive Office, Business Executives for National Security - Main Ballroom</div>
            ]
        },
        {
            time: "1:15pm - 4:20pm",
            items: [
                "War Game Begins",
                <div key="gen-ses"><span className="font-bold">Dr. Christopher Yeaw</span>, PhD, Associate Executive Director for Strategic Deterrence and Nuclear Programs</div>,
                "War Game Scenario: Based on a near-peer, nuclear-capable INDO-PACOM threat as the perils inherent in theater nuclear employment based on a real-world threat with realistic “Blue Team” inputs. This exercise will be the realization of how vulnerable our nation may be in confronting an adversary that can capably execute nuclear escalation."
            ]
        },
        {
            time: "4:30pm",
            items: [
                "Opening General Session - Main Ballroom",
                <div key="gen-ses"><span className="font-bold">Brig. Gen. Gentry W. Boswell</span>, USAF (Ret.), Vice President of Defense Industry Operations at VRC Metal Systems</div>
            ]
        },
        {
            time: "5:00pm - 7:00pm",
            items: [
                "South Dakota Mines Social- Foyer",
            ]
        }
    ]
},
    {
        date: "",
        items: [
            {
                time: "",
                items: [
                    <div key="*">* <span className="font-bold">Simultaneous, in-depth sessions.</span></div>
                ]
            }
        ]
    },
    {
        date: "Thursday, April 11, 2024",
        items: [
            {
                time: "6:30am",
                items: [
                    "Doors open"
                ]
            },
            {
                time: "7:00am",
                items: [
                    "Networking/Coffee Social - Foyer"
                ]
            },
            {
                time: "8:00am",
                items: [
                    "General Session - Main Ballroom",
                    "Welcome",
                    <div key="dusty"><span className="font-bold">Congressman Dusty Johnson</span>, via video</div>,
                    <div key="mark"><span className="font-bold">Major General Mark Morrell</span>, SDNG Adjutant General</div>
                ]
            },
            {
                time: "9:00am",
                items: [
                    "Track Session A"
                ]
            },
            {
                time: "10:00am",
                items: [
                    "Connection Break - Foyer"
                ]
            },
            {
                time: "11:00am",
                items: [
                    "Track Session B"
                ]
            },
            {
                time: "12:00pm",
                items: [
                    <div key="chow"><span className="font-bold">Black Hills MAC Chow Hall Luncheon</span> - Main Ballroom</div>,
                    "Social & buffet lunch",
                    <div key="welcome">Welcome: <span className="font-bold">Tim Houghton</span>, HS Precision, CFO, Black Hills Symposium Chair</div>,
                    <div key="nancy">Featured Speaker: <span className="font-bold">Nancy Balkus</span>, P.E., Deputy Assistant Secretary of the Air Force for
                        Environment, Safety and Infrastructure, Headquarters USAF</div>,
                    <div key="caroline">Featured Speaker: <span className="font-bold">Lt Gen Caroline Miller</span>, Deputy Chief of Staff for Manpower Personnel and
                        Services, Headquarters USAF</div>

]
            },
            {
                time: "1:30pm",
                items: [
                    "Track Session C"
                ]
            },
            {
                time: "2:30pm",
                items: [
                    "Track Session D"
                ]
            },
            {
                time: "3:30pm",
                items: [
                    "General Session - Main Ballroom",
                    <div key="*"><span className="font-bold">Sean Jackson</span> VP, Deputy Program Manager, Northrop Grumman</div>,
                    "B21 Raider Update",
                    <div key="derek"><span className="font-bold">Col. Derek Oakley</span>, 28th Bomb Wing Commander - Main Ballroom</div>
                ]
            },
            {
                time: "4:00pm - 5:00pm",
                items: [
                    "Social - Presented by Elevate Rapid City & HS Precision - Foyer",
                    "Prize Drawings"
                ]
            },
            {
                time: "5:30pm",
                items: [
                    "Tours depart",
                    "South Dakota School of Mines & Technology, Cold Spray Lab Tour\n",
                    "Mt. Rushmore & Dinner Tour"
                ]
            }
        ]
    }
];

const trackSessions = [
    {
        title: "Critical Minerals",
        items: [
            {
                time: "9:00",
                title: "Applied Research"
            },
            {
                time: "11:00",
                title: "Workforce"
            },
            {
                time: "1:30",
                title: "Commercialization"
            },
            {
                time: "2:30",
                title: "Policy"
            }
        ]
    },
    {
        title: "PFOS/PFOA",
        items: [
            {
                time: "9:00",
                title: "Rural Water Systems"
            },
            {
                time: "11:00",
                title: "Innovation — R&D, Technology, Transfer & Opportunities"
            },
            {
                time: "1:30",
                title: "Collaboration — Government, Industry, Academic Partnerships"
            },
            {
                time: "2:30",
                title: "Military Construction, PFAS, Sustainability"
            }
        ]
    },
    {
        title: "Innovation/Doing Business with the Air Force & Quality of Life",
        items: [
            {
                time: "9:00",
                title: "Innovation - Small Business Innovation Research Projects"
            },
            {
                time: "11:00",
                title: "Contracting with the Government - Small Businesses - Commodities and Services"
            },
            {
                time: "1:30",
                title: "Quality of Life -Family Programs (childcare, housing, etc)"
            },
            {
                time: "3:00",
                title: "Quality of Life - Employment Opportunities for Military Community & Businesses"
            }
        ]
    },
    {
        title: "Partnering with the DOD/General Contractor",
        items: [
            {
                time: "9:00",
                title: "Design & Construction Opportunities"
            },
            {
                time: "11:00",
                title: "AI & BIM — What it means for A/Es and Contractors"
            },
            {
                time: "1:30",
                title: "Match Making Opportunities (DOD, Primes)"
            }
        ]
    }
]

const Agenda = () => {
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

                                return <div className="mb-4" key={x.date + y.time + key}>
                                    <p className="font-bold text-xl">{y.time}</p>
                                    <div className={`px-4`}>
                                        {y.items.map(z => {
                                            return <div key={y.time + (z as ReactElement).key ? (z as ReactElement).key : z as string} className="mb-4">
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
        <div className="bg-primary-100 p-7 sticky top-9 max-w-screen-sm shadow-md">
            <h2 className="text-4xl font-bold text-primary-600 mb-4 bg-primary-200 p-1">Track Sessions</h2>
            {
                trackSessions.map(x => {
                    return <div key={x.title} className="mb-8">
                        <h3 className="text-xl mb-2">{x.title}</h3>
                        <div>
                            {x.items.map(y => {
                                return <div className="mb-4" key={y.title}>
                                    {y.time} - {y.title}
                                </div>
                            })}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Agenda;