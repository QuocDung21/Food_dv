const Sale = ({PriceSale}: { PriceSale: any  }) => {
    return (
            <span className={`absolute rotate-[50deg] top-4 right-[-16px] px-4 py-2 bg-red-500
            text-white text-center`}>
                    {PriceSale} % Off
                </span>
    )
}

export default Sale