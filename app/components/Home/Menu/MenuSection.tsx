'use client'
import React, { use, useEffect, useState } from 'react'
import { MenuData } from '@/data/menu-data';
import MenuModal from "@/app/components/Home/Menu/MenuModal/MenuModal";
import ListBoxUi from "@/app/components/ui/ListBoxUi";
import { categoriesData } from '@/data/categories-data'
import sortArrBy from "@/lib/sort";
import { useSelectData } from "@/lib/store";


const MenuSection = () => {
    const [listMenu, setListMenu] = useState([...MenuData])
    const { name, key } = useSelectData()
    useEffect(() => {
        name == "" ? setListMenu(MenuData) : setListMenu(sortArrBy(name.toLowerCase(), MenuData))

    }, [name]);
    return (
        <section className="mb-24">
            <div className="text-center sm:py-3  ">
                <div className={""}>
                    <h2 className="text-3xl leading-tight tracking-tight text-gray-600 sm:text-4xl">
                        Menu
                    </h2>
                </div>
                <div className="flex justify-center sm:justify-end">
                    <div className="w-80">
                        <ListBoxUi data={categoriesData} />
                    </div>
                </div>
            </div>
            <div className=" mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
                {
                    MenuData.map((menu, index) => (
                        <MenuModal key={index} menu={menu} />
                    ))
                }
            </div>
        </section>
    )
}

export default MenuSection