type dateItem = {
    date: string,
    callout?: boolean,
    items: timeItem[]
}
type timeItem = {
    time: string,
    items: string[]
}


const schedule: dateItem[] = [{
    date: "Wednesday, April 10, 2024",
    items: [
        {
            time: "4:30-5:00pm",
            items: [
                "Featured Speaker - Main Ballroom"
            ]
        },
        {
            time: "5:00-7:00pm",
            items: [
                "South Dakota Mines Social- Foyer",
                "Vendor Booths Open"
            ]
        }
    ]
},
    {
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
    },
    {
        date: "Thursday, April 11, 2024",
        items: [
            {
                time: "7:00am",
                items: [
                    "Networking/Coffee Social"
                ]
            },
            {
                time: "8:00am",
                items: [
                    "Welcome",
                    "South Dakota Mines Pep Band/Honor Guard/National Anthem"
                ]
            },
            {
                time: "8:15am",
                items: [
                    "Featured Speakers: Congressman Dusty Johnson (via video) & Maj Gen Morrell, SDNG AG"
                ]
            },
            {
                time: "9:00am",
                items: [
                    "Track Sessions"
                ]
            },
            {
                time: "10:00am",
                items: [
                    "Connection Break- Foyer"
                ]
            },
            {
                time: "11:00am",
                items: [
                    "Track Sessions"
                ]
            },
            {
                time: "12:00pm",
                items: [
                    "MAC Chow Hall Luncheon - Welcome Video - Tim Houghton, Symposium Chair",
                    "Featured Speaker: Lt Gen Caroline Miller, HAF/A1"
                ]
            },
            {
                time: "1:30pm",
                items: [
                    "Track Session"
                ]
            },
            {
                time: "2:30pm",
                items: [
                    "Track Sessions"
                ]
            },
            {
                time: "3:30pm",
                items: [
                    "B21 Update - Col. Derek Oakley, Commander of the 28th Bomb Wing, EAFB"
                ]
            },
            {
                time: "4:00pm-5:00pm",
                items: [
                    "Elevate Social, Drawings, Grand Prize - Foyer"
                ]
            },
            {
                time: "5:30pm",
                items: [
                    "Tours depart"
                ]
            }
        ]
    }];

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
                time: "3:00",
                title: "Policy"
            }
        ]
    },
    {
        title: "PFOS/PFOA",
        items: [
            {
                time: "9:00",
                title: "PFOS/PFOA 101 Remediation Challenges MilCon (PDH)"
            },
            {
                time: "11:00",
                title: "Partnerships panel (PFAS & MilCon): promoting academic, industry, and government collaborations (PDH)"
            },
            {
                time: "1:30",
                title: "PFOS/PFOA regional perspectives (PDH)"
            },
            {
                time: "3:00",
                title: "PFOS/PFOA Technology Development and funding opportunities (PDH)"
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
                time: "11:00",
                title: "Contracting PFOS/Military/Sustainability"
            },
            {
                time: "1:30",
                title: "Contracting Training"
            },
            {
                time: "3:00",
                title: "Elevate Primes"
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
                    return <div key={x.date} className={`mb-10 px-16 ${x.callout ? "bg-primary-200 py-6 shadow-lg" : ""}`}>
                        <p className="text-2xl font-bold mb-4">{x.date}</p>
                        <div>
                            {x.items.map((y) => {
                                return <div className="mb-4" key={x.date + y.time}>
                                    <p className="font-bold text-xl">{y.time}</p>
                                    <div className={`px-4`}>
                                        {y.items.map(z => {
                                            return <div key={y.time + z} className="mb-4">
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
        <div className="bg-primary-100 p-7 sticky top-9 w-96 max-w-full shadow-md">
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