"use client";

import Image from "next/image";
import UserEditAccountModal from "@/app/(user)/user/UserEditAccountModal";


type Props = {
    user: User;
};

const UserDetails = ({ user }: Props) => {

    const email = user?.email as string


    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src="/img/humans/h1.jpg"
                alt="pro-img"
                width={100}
                height={100}
                className="mx-auto  rounded-full "
            />

            <div>
                <h1 className="text-xl text-center my-5 font-semibold leading-tight tracking-tight text-gray-500 md:text-2xl ">
                    {user?.name}
                </h1>
                <p className="text-gray-500 mb-4">{user?.email}</p>
                    {/*<UserEditAccountModal />*/}

            </div>
        </div>
    );
};

export default UserDetails;