export const Title = ({title}: { title: string }) => {
    return (
        <>
            <div className="max-w-2xl mx-auto my-5 text-center">
                <h2
                    className="text-3xl leading-tight tracking-tight text-gray-600
        sm:text-4xl"
                >
                    {" "}
                    {
                        title
                    }
                </h2>
            </div>
        </>
    )
}