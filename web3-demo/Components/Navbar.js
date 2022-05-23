//import { HiMenuAlt4 } from 'react-icon/hi';
//import { AiOutlineClose } from 'react-icons/ai';

import Image from "next/image"
import logo from "/Users/user/Workspace/Web3js-demo/web3-demo/public/logo2.png"

const NavbarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
const Navbar = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-centrer p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center p">
                <Image className="w-32 cursor-pointer"
                    src={logo}
                    alt="logo"
                
                />
            </div>
            <ul className="flex md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">
                    Login
                </button>
            </ul>
        </nav>
    )
}
export default Navbar;