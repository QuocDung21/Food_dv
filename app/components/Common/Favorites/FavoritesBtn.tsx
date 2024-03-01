import {IoMdHeartEmpty} from "react-icons/io";
import {deleteLocalStorage, getLocalStorage, saveLocalStorage} from "@/lib/local-storage";
import {key, toastStatus} from "@/lib/key";
import {notify} from "@/app/components/Notify/notify"
import {FaHeart} from "react-icons/fa";
import {msg} from "@/lib/TextMsg"
import {existDataById} from "@/lib/fun";
import {useEventLocalStorage} from "@/lib/store";
import {Event} from "@/lib/key";
import {useState} from "react";
import {motion} from "framer-motion"
import {ANIMATION_BUTTON} from "@/app/lib_ui/Animation/animation";
import {sizeCustomModal} from "@/app/lib_ui/numberSizeCustom";


const FavoritesBtn = ({sizeN, data}: { sizeN: number, data: Menu }) => {
    const {actionEvent} = useEventLocalStorage.getState()
    const [rerender, setRerender] = useState(false);
    const addFavorites = (e: any) => {
        e.preventDefault()
        actionEvent(Event.add)
        saveLocalStorage(key.Favorites, data)
        notify(msg?.favorite?.add, toastStatus?.success);
        setRerender(!rerender);
    }
    const deleteFavorites = (e: any) => {
        e.preventDefault()
        actionEvent(Event.delete)
        deleteLocalStorage(data)
        notify(msg?.favorite?.delete, toastStatus?.success);
        setRerender(!rerender);
    }
    const isFavorite = existDataById(data?.id, getLocalStorage(key.Favorites));

    return (
        <>
            {
                isFavorite
                    ?
                    <motion.button
                        onClick={deleteFavorites}
                        whileTap={
                            ANIMATION_BUTTON
                        }
                    >
                        <FaHeart className={"cursor-pointer text-yellow-300"} size={sizeN + sizeCustomModal}/>
                    </motion.button>
                    :
                    (<motion.button
                        onClick={addFavorites}
                        whileTap={
                            ANIMATION_BUTTON
                        }
                        whileHover={
                            ANIMATION_BUTTON

                        }
                    >
                        <IoMdHeartEmpty size={sizeN + sizeCustomModal} className={"cursor-pointer"}/>
                    </motion.button>)
            }

        </>
    )
}

export default FavoritesBtn