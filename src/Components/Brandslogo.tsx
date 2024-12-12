import Image from "next/image";

export default function Brands() {
    return (
        <section className="max-w-screen-xl mx-auto mt-16"> 
            <div className="flex justify-center items-center">
                <Image src="/images/brandlogo.png" alt="brands" height={1000} width={1000} className="w-[80%]" />
            </div>
        </section>
    );
}
