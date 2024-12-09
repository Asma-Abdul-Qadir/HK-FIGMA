import Image from "next/image";

export default function Brands() {
    return (
        <section className="max-w-screen-xl mx-auto mt-16"> {/* Increased margin to mt-16 for more top space */}
            <div className="flex justify-center items-center">
                <Image src="/images/brand logo.png" alt="brands" height={1000} width={1000} className="w-[80%]" />
            </div>
        </section>
    );
}
