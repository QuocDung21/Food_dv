import Image from "next/image";
import {FaCartArrowDown} from "react-icons/fa";
import FavoritesBtnList from "@/app/components/Common/Favorites/FavoritesBtnList";
import {BsXLg} from "react-icons/bs";
import {deleteLocalStorage} from "@/lib/local-storage";
import {useEventLocalStorage} from "@/lib/store";
import {Event} from "@/lib/key";
import {motion} from "framer-motion"
import {ANIMATION_BUTTON} from "@/app/lib_ui/Animation/animation";
import {DeleteIcon} from "@/app/lib_ui/icon/DeleteIcon";

type Props = {
    favorite: Menu;
    OpenModal: () => void
};

const FavoriteCard = ({favorite, OpenModal}: Props) => {
    const {name, actionEvent} = useEventLocalStorage()
    const deleteFavorites = () => {
        deleteLocalStorage(favorite)
        actionEvent(Event.delete)
    }
    return (
        <div className="flex items-center justify-around shadow-lg p-5 rounded-lg relative">
            <div className="w-16 h-16 overflow-hidden  rounded-full">
                <Image
                    src={favorite?.image}
                    alt="logo"
                    width={70}
                    height={70}
                    className="object-cover w-full h-ful"
                />
            </div>
            <div className="flex flex-col">
                <span className="pl-4 font-semibold ">{favorite?.title}</span>
                <p className="pl-4 text-xs">
                    Category: <span className=" italic text-gray-500">{favorite?.category}</span>
                </p>

                <p className="pl-4 text-xs">
                    Price: <span className="font-semibold  text-green-600">${favorite?.price}</span>
                </p>
            </div>
            <button className="p-2 rounded-full bg-slate-200 hover:bg-green-200 hover:text-green-500"
                    onClick={OpenModal}>
                <FaCartArrowDown className=" text-green-600" size={28}/>
            </button>
            <DeleteIcon size={20} event={deleteFavorites}/>
        </div>
    );
};

export default FavoriteCard;