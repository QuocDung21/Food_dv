"use client";

import {useState} from "react";
import Modal from "@/app/components/Common/Modal/Modal";
import {FaChevronRight} from "react-icons/fa";
import Image from "next/image";


const LanguageSelectModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    const OpenModal = () => setIsOpen(true);

    const Languages = [
        "English",
        "Francais",
        "German",
        "Dutch",
        "Espanol",
        "Italiano",
    ];
    return (
        <>
            <button className="flex items-center" onClick={OpenModal}>
                <span>English</span>
                <FaChevronRight className="shrink-0 ml-3"/>
            </button>
            <Modal
                title="Select your preferred language"
                isOpen={isOpen}
                closeModal={closeModal}

            >
                <div className="flex justify-center">
                    <Image
                        alt={"languages"}
                        className="rounded-lg"
                        width={200}
                        height={100}
                        src="/img/languages.png"/>

                </div>
                <section className="py-24 grid grid-cols-2  gap-8">
                    {Languages?.map((language) => (
                        <button
                            className="p-2 rounded-md hover:bg-slate-100"
                            key={language}
                        >
                            {language}{" "}
                        </button>
                    ))}
                </section>
            </Modal>
        </>
    );
};

export default LanguageSelectModal;