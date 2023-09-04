import React from "react";
import billeteImage from '../assets/billete.png'

export default function Money({ price }) {
    const getNumberOfBills = (price) => {
        if (price >= 0 && price <= 20) {
            return 1;
        } else if (price <= 50) {
            return 2;
        } else if (price <= 100) {
            return 3;
        } else if (price <= 199) {
            return 4;
        } else {
            return 5;
        }
    };

    const numberOfBills = getNumberOfBills(price);

    return (
        <div className="flex flex-wrap w-28 items-center justify-center">
            {[...Array(numberOfBills)].map((_, index) => (
                <img
                    src={billeteImage}
                    className="w-10 h-7 p-1"
                    alt="billete"
                    key={index}
                />
            ))}
            <span className="text-lg font-bold ml-2">${price}</span>
        </div>
    );
}

