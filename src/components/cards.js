import React from "react";

export default function Card(props) {
    return (
        <div class="flex justify-between pt-10 px-5">
            <div className="rounded-lg shadow-lg bg-white max-w-sm transform transition-all opacity-50 hover:scale-105">
                <a href="#!">
                    <img className="rounded-t-lg" src={props.src} alt="" />
                </a>
                <div className="p-6">
                    <h5 className="text-text text-xl font-medium mb-2">{props.title}</h5>
                    <p className="text-text text-base mb-4">
                        {props.children}
                    </p>
                    <button type="button" className="object-none object-bottom px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
    );
}
