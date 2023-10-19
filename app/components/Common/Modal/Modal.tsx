"use client";

import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

import {HiOutlineXMark} from "react-icons/hi2";
import {motion} from "framer-motion"
import {ANIMATION_BUTTON} from "@/app/lib_ui/Animation/animation";

type ModalProps = {
    isOpen: boolean;
    title?: string
    closeModal: () => void;
    children: React.ReactNode;
};

const Modal = ({isOpen, title, closeModal, children}: ModalProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-300 bg-opacity-75"/>
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="modal-panel w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                                    <div className=" modal-panel-icon flex justify-end">
                                        <motion.button
                                            whileHover={
                                                ANIMATION_BUTTON
                                            }
                                            whileTap={
                                                ANIMATION_BUTTON
                                            }
                                            onClick={closeModal}
                                        >
                                            <HiOutlineXMark
                                                className="cursor-pointer h-8 w-8 hover:text-red-500"

                                            />
                                        </motion.button>
                                    </div>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium my-3 leading-6 text-gray-900 text-center"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Modal;