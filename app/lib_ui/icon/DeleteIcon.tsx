import {motion} from "framer-motion";
import {ANIMATION_BUTTON} from "@/app/lib_ui/Animation/animation";
import {BsXLg} from "react-icons/bs";
import React from "react";

interface DeleteIconProps {
    size?: number;
    event: () => void;
}

export const DeleteIcon: React.FC<DeleteIconProps> = ({size, event}) => {
    return (
        <motion.div
            whileHover={
                ANIMATION_BUTTON
            } whileFocus={
            ANIMATION_BUTTON
        } className={"absolute top-3 right-1 "}>
            <BsXLg
                className="text-gray-600 hover:text-red-500 cursor-pointer "
                onClick={event} size={size}/>
        </motion.div>
    )
}