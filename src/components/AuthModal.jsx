import React, {useState} from 'react'
import {IoClose} from "react-icons/io5";

const AuthModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    const [walletAddress, setWalletAddress] = useState("");

    const handleSignIn = () => {
        console.log("Signing in with:", { username, walletAddress });
        // TODO: Send data to your backend for login
        onClose();
    };

    const handleSignUp = () => {
        console.log("Signing up with:", { username, walletAddress });
        // TODO: Send data to your backend for account creation
        onClose();
    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-purple-600 p-6 rounded-lg shadow-lg w-96">
                <div className={'flex justify-end'}>
                    <button className=" text-2xl font-bold text-black/50 hover:text-black transition-transform hover:scale-110" onClick={onClose}>X</button>
                </div>
                <div className={'flex justify-center text-black/60'}>
                <h2 className="text-2xl bento-title special-font mb-4">Sign In to play!</h2>
                </div>

                <div className="mb-10">
                    <div className={'mb-3 text-black/60'}>
                    <label className="font-bold special-font uppercase">Username</label>
                    </div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border-black border-2 p-2 rounded font-bold bg-pink-500 text-black/60"
                    />
                </div>

                <div className="mb-5">
                    <div className={'mb-3 text-black/60'}>
                    <label className="font-bold special-font uppercase">Phantom Wallet Address</label>
                    </div>
                    <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="w-full border-black border-2 p-2 rounded font-bold bg-pink-500 text-black/60"
                    />
                </div>
                <div>
                    <img src={"public/img/pacmanghost.png"} ></img>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleSignIn}
                        className="bg-purple-400 text-black/60 uppercase font-bold px-4 py-2 rounded hover:bg-purple-700 hover:text-black transition-transform hover:scale-110"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AuthModal