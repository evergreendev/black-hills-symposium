import React from "react";

const Sponsorship = ({title, price, children}: { title: string, price: string, children: React.ReactNode }) => {
    return (
        <div className="mb-12">
            <h2 className="bg-primary-600 p-2 text-primary-100 flex justify-between text-3xl mb-4">
                <div>
                    {title}
                </div>
                <div className="font-bold">
                    {price}
                </div>
            </h2>
            <div className="pl-9">
                {children}
            </div>
        </div>
    );
}

export default Sponsorship;