import React, {useEffect, useRef, useState} from 'react'
import {IoClose} from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AuthModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [password, setPassword] = useState("");

    const modalRef = useRef(null);

    const handleSignIn = () => {
        console.log("Signing in with:", { username, walletAddress, password });
        // TODO: Send data to your backend for login
        onClose();
    };

    const handleSignUp = () => {
        console.log("Signing up with:", { username, walletAddress, password });
        // TODO: Send data to your backend for account creation
        onClose();
    };

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(modalRef.current, {opacity: 0, scale: 0.7 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div ref={modalRef} className={"bg-gradient-to-tl from-blue-900 to-violet-200 p-6 rounded-lg shadow-lg w-96"}>
                <div className={'flex justify-end'}>
                    <button className=" text-2xl font-bold text-black hover:text-black transition-transform hover:scale-110" onClick={onClose}>X</button>
                </div>
                <div className={'flex justify-center text-black'}>
                <h2 className="text-2xl bento-title special-font mb-4 ">Sign In to play!</h2>
                </div>

                <div className="mb-5">
                    <div className={'mb-3 text-black'}>
                    <label className="font-bold special-font uppercase">Username</label>
                    </div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border-black border-2 p-2 rounded font-bold bg-gradient-to-tl from-gray-300 to-violet-200 text-black"
                    />
                </div>

                <div className="mb-5">
                    <div className={'mb-3 text-black'}>
                        <label className="font-bold special-font uppercase">Password</label>
                    </div>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border-black border-2 p-2 rounded font-bold bg-gradient-to-tl from-gray-300 to-violet-200 text-black"
                    />
                </div>

                <div className="mb-5">
                    <div className={'mb-3 text-black'}>
                    <label className="font-bold special-font uppercase">Phantom Wallet Address</label>
                    </div>
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="w-full border-black border-2 p-2 rounded font-bold bg-gradient-to-tl from-gray-300 to-violet-200 text-black"
                    />
                </div>


                <div className={'flex justify-center mt-10'}>
                    <img
                        src={"public/img/pacmanghost.png"}
                        className="h-36 w-auto transition-transform transition-opacity duration-300 hover:scale-110 hover:-translate-y-2 hover:rotate-3 hover:opacity-80 animate-bounce"
                        alt="Pacman Ghost"
                    />


                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleSignIn}
                        className="bg-gradient-to-bl from-violet-200 to-gray-500 text-black uppercase font-bold px-4 py-2 rounded  hover:text-black transition-transform hover:scale-110"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AuthModal