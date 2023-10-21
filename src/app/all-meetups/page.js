"use client"

import { useSelector } from "react-redux";

import { initialMeetups } from "../store/Features/slices/page";

import Link from "next/link";

import "../styles/styles.css";

const AllMeetUps = () => {
    const meet = useSelector((state) => state.meetups.initialMeetups);
    const meetups = meet ? Object.values(meet) : [];

    return (
        <div className="flex flex-wrap p-5">
            {meetups.map((meetup) => (
                <div
                    key={meetup.id}
                    className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2"
                >
                    <img
                        className="w-full"
                        src={meetup.image}
                        alt={meetup.name}
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            {meetup.name}
                        </div>
                        <p className="text-gray-700 text-base">
                            Address: {meetup.address}
                        </p>
                        <p className="text-gray-700 text-base">
                            Time: {meetup.time}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link href={`/meetups/${meetup.id}`}  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                Show Details   
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllMeetUps;
