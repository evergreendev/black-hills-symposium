type dateItem = {
    date: string,
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
            time: "12:00pm",
            items: [
                "Welcome- Main Ballroom",
                "Scott to Emcee & Open"
            ]
        },
        {
            time: "12:15pm",
            items: [
                "War Games - Main Ballroom"
            ]
        },
        {
            time: "1:00-5pm",
            items: [
                "PFOS/PFOA - Lancer Salon C/D"
            ]
        },
        {
            time: "4:30-5:00pm",
            items: [
                "Featured Speaker: General Bussiere - Main Ballroom"
            ]
        },
        {
            time: "5:00pm",
            items: [
                "Closing Remarks"
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
}, {
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
                "Featured Speaker- Congressman Dusty Johnson & Maj Gen Morrell, SDNG AG"
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
                "Connection Break- Foyer",
                "Vendors/Sponsors/Snacks"
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
                "MAC Chow Hall Luncheon",
                "Featured Speaker(s): Senator Thune  & Lt Gen Caroline Miller, HAF/A1"
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
                "Connection Break- Foyer",
                "Vendors/Sponsors/Snacks"
            ]
        },
        {
            time: "3:00pm",
            items: [
                "Track Sessions"
            ]
        },
        {
            time: "4:00pm",
            items: [
                "B21 Update & Closing Remarks"
            ]
        },
        {
            time: "4:00 - 6:00pm",
            items: [
                "Social- Foyer"
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
                time: "9:00",
                title: "TBD"
            },
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
                    return <div key={x.date} className="mb-10 px-16">
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