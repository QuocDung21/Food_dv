import Image from "next/image"
import Sale from "@/app/components/Common/Sale/Sale";

type Props = {
    promo: any
}

const PromoCard = ({promo}: Props) => {
    return (
        <article className="flex w-96 rounded-lg shrink-0  shadow-lg text-gray-500 hover:bg-green-200
    hover:text-green-600 transition-all duration-200 ease-out">
            <div className="flex flex-1 relative overflow-hidden">
                <Sale PriceSale={promo.PercentOff }/>
                <Image className="rounded-lg"
                       src={promo.img}
                       width={200}
                       height={200}
                       alt="promo-img"
                />
            </div>
            <div className="flex flex-col flex-1 p-5 space-y-3">
                <p className="font-semibold">{promo.title}</p>
                <p className="text-xs inline-flex items-center"> {promo.salesQ} sells
                    <span className="h-2 w-2 bg-gray-400 rounded-full mx-2"></span>
                    {promo.likesN} likes
                </p>
                <p className="text-red-500">${promo.price}</p>
                <button className="form-button">Order Now</button>
            </div>

        </article>
    )
}

export default PromoCard