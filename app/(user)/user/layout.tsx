import Header from "@/app/components/Common/Header/Header";
import SideBar from "@/app/components/Common/Sidebar/SideBar";
import React from "react";



export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header   />
            <SideBar   />
            {children}
        </div>
    );
}