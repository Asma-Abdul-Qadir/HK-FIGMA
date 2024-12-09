'use client';
import Link from 'next/link';

function Newsletter() {
  return (
    <div className="w-full bg-white mt-8"> {/* Added mt-8 for top margin */}
      {/* Newsletter Section */}
      <div
        className="relative w-full bg-cover bg-center h-[462px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background0.png')",
        }}
      >
        <div className="text-center px-4 py-8 sm:px-10">
          {/* Heading */}
          <h2 className="text-[#151875] text-2xl sm:text-3xl font-bold mb-6 leading-relaxed">
            Get Latest Updates By Subscribing to Our Newsletter
          </h2>

          {/* Subscribe Button */}
          <Link href="/shoplist">
            <button className="bg-[#FB2E86] text-white px-6 py-3 rounded text-lg font-medium hover:bg-pink-600 transition-all">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
