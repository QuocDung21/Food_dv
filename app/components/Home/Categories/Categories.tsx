import {categoriesData} from "@/data/categories-data";
import Image from "next/image";
import {Title} from "@/app/components/Common/Title/Title";

const Categories = () => {
    return (
        <section className="my-16">
            <Title title={"Categories"}/>
            <div
                className="flex flex-row items-center md:justify-center justify-between mt-12 md:gap-12
    overflow-x-auto
    "
            >
                {categoriesData.map((cat) => (
                    <div
                        className="flex flex-col rounded-full h-16 w-16 items-center justify-center p-3 cursor-pointer shrink-0 
            overflow-hidden hover:bg-slate-200
            "
                        key={cat.id}
                    >
                        <Image src={cat.imageSrc} width={60} height={60} alt="category"/>
                        <div className="whitespace-nowrap text-sm">
                            <h3 className="text-center">{cat?.category}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
