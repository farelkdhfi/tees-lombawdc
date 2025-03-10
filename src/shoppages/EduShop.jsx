import React from "react";

const EduShop = () => {
    return (
        <div className="w-full lg:px-15 px-3 lg:py-20 py-10 bg-[#fafafa]">
            <div className="flex flex-col lg:flex-row text-xs text-start gap-10">
                <div className="lg:w-1/2">
                    <h1 className="text-sm font-bold text-gray-800 mb-4">
                        Sustainable Fashion Education
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Sustainable fashion is an approach in the fashion industry that emphasizes environmental and social impacts at every stage of production. With increasing awareness of the negative impacts of the fashion industry, many brands and designers are starting to adopt more environmentally friendly practices.
                    </p>
                    <h2 className="font-semibold text-gray-700 mb-3">
                        Why is Sustainable Fashion Important?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        The fashion industry is one of the largest contributors to global pollution. From the use of toxic chemicals, textile waste, to labor exploitation, its impact is vast. Sustainable fashion emerges as a solution by utilizing eco-friendly materials, supporting fair labor practices, and reducing waste through more efficient production models.
                    </p>
                    <h2 className="font-semibold text-gray-700 mb-3">
                        How to Support Sustainable Fashion
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Purchase products from brands committed to environmental sustainability.</li>
                        <li>Choose natural and recycled materials.</li>
                        <li>Support the concept of slow fashion by reducing excessive clothing purchases.</li>
                        <li>Recycle and donate unused clothing.</li>
                    </ul>
                    <p className="text-gray-600 mt-6">
                        With small steps, we can contribute to maintaining the sustainability of the fashion industry for a better future.
                    </p>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center items-center space-y-5">
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Did You Know?</h3>
                        <p className="text-black/70 text-xs mt-2">
                            It takes about 2,700 liters of water to make one cotton t-shirt, equivalent to one person's drinking water needs for more than 2 years!
                        </p>
                    </div>
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Interesting Fact</h3>
                        <p className="text-black/70 text-xs mt-2">
                            Only 1% of used clothing is actually recycled into new garments. Therefore, it is important to buy clothes wisely.
                        </p>
                    </div>
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Impact of Textile Waste</h3>
                        <p className="text-black/70 text-xs mt-2">
                            Every year, more than 92 million tons of textile waste are generated globally. Most of this waste ends up in landfills.
                        </p>
                    </div>
                    <div className="bg-[#fafafa] p-6 rounded-lg shadow-md">
                        <h3 className="font-semibold text-black/70">Carbon Footprint of the Fashion Industry</h3>
                        <p className="text-black/70 text-xs mt-2">
                            The fashion industry contributes about 10% of global carbon emissions, more than the combined emissions of aviation and shipping!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EduShop;