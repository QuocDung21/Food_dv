'use client'
import React, { use, useEffect, useState } from 'react'
import { MenuData } from '@/data/menu-data';
import MenuModal from "@/app/components/Home/Menu/MenuModal/MenuModal";
import ListBoxUi from "@/app/components/ui/ListBoxUi";
import { categoriesData } from '@/data/categories-data'
import sortArrBy from "@/lib/sort";
import { useSelectData } from "@/lib/store";
import {Title} from "@/app/components/Common/Title/Title";
import Container from "@/app/components/Common/Container";


const MenuSection = () => {

    return (
        <Container>
            <section className="mb-24">
                <div className="text-center sm:py-3  ">
                    <Title title={"Menu"}/>
                </div>
                <div className=" mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
                    {
                        MenuData.map((menu, index) => (
                            <MenuModal key={index} menu={menu}/>
                        ))
                    }
                </div>
            </section>
        </Container>
    )
}

export default MenuSection