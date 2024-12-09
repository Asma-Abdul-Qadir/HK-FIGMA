import Image from "next/image";

function TopCategories() {
  const categories = [
    { id: 1, img: "/images/top1.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 2, img: "/images/top2.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 3, img: "/images/top3.png", name: "Mini LCW Chair", price: "$56.00" },
    { id: 4, img: "/images/top4.png", name: "Mini LCW Chair", price: "$56.00" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto pt-24 px-4">
      {/* Section Heading */}
      <h1 className="text-[#1A0B5B] font-josifen text-3xl text-center font-bold">
        Top Categories
      </h1>

      {/* Categories Grid */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 pt-10">
        {categories.slice(0, 4).map((category) => (
          <div className="flex flex-col gap-3" key={category.id}>
            <div className="bg-[#F5F6F8] p-10 cursor-pointer w-full h-full overflow-hidden rounded-full flex items-center hover:border-l-[#9877E7] hover:border-l-8 transition-[transform,colors] duration-700">
              <Image
                src={category.img}
                alt={category.name}
                height={1000}
                width={1000}
                className="transition-transform hover:scale-105 duration-700 hover:rounded-md object-contain"
              />
            </div>
            <h1 className="font-josifen font-bold text-center">
              {category.name}
            </h1>
            <p className="text-center text-gray-600">{category.price}</p>
          </div>
        ))}
      </div>

      {/* Pink Dots */}
      <div className="flex justify-center mt-8">
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
      </div>
    </section>
  );
}

export default TopCategories;
