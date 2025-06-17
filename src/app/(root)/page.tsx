import React from "react";
import Link from "next/link";
import { ChevronDown, Sun, ArrowRight, FileText, PenLine } from "lucide-react";
import { BsEnvelope } from "react-icons/bs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function WritingAiLandingPage() {
  return (
    <>
      <div className={`${inter.className} bg-[#0f0f13] text-white`}>
        <header className="max-w-[1200px] mx-auto px-6 sm:px-10 py-6 flex items-center justify-between">
          <div className="text-[18px] font-semibold text-[#d6d6d6] flex items-center gap-1">
            <span className="text-[#d6d6d6] font-normal">Writing</span>
            <span className="text-[#f5f5a1] font-bold">.ai</span>
          </div>
          {/* <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#d6d6d6] font-normal">
            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1">
                Home
                <ChevronDown className="text-[10px]" size={16} />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-[#1a1a1f] rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity text-black text-sm">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Submenu 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Submenu 2
                  </li>
                </ul>
              </div>
            </div>
            <Link className="hover:underline" href="#">
              Use Cases
            </Link>
            <Link className="hover:underline" href="#">
              Features
            </Link>
            <div className="relative group cursor-pointer">
              <button className="flex items-center gap-1">
                Pages
                <ChevronDown className="text-[10px]" size={16} />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-[#1a1a1f] rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity text-black text-sm">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Page 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Page 2
                  </li>
                </ul>
              </div>
            </div>
            <Link className="hover:underline" href="#">
              Pricing
            </Link>
          </nav> */}
          <div className="flex items-center gap-4 text-[14px] text-[#d6d6d6] font-normal">
            <button
              aria-label="Toggle dark mode"
              className="border border-[#d6d6d6] rounded-full w-7 h-7 flex items-center justify-center text-[#d6d6d6]"
            >
              <Sun size={16} />
            </button>
            {/* <button className="hover:underline">En (US)</button> */}
            <button className="text-[#d6d6d6] border border-[#d6d6d6] rounded-full px-4 py-1 text-[14px] font-normal hover:bg-[#d6d6d6] hover:text-black transition">
              Get Started
            </button>
          </div>
        </header>
        <main className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-10 pb-20 relative">
          <div
            aria-hidden="true"
            className="absolute top-[50px] left-6 sm:left-10 flex flex-col gap-20 z-10"
          >
            <div className="flex flex-col items-center gap-2">
              <img
                alt="Avatar of a smiling woman with red hair in a teal circular background"
                className="rounded-full w-12 h-12 object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/017d00d2-2089-41c8-11ac-c219ee377dc4.jpg"
                width="48"
              />
              <span className="bg-[#2a2a2a] text-[10px] text-[#b0b0b0] rounded-full px-2 py-[2px] select-none">
                Freelancer
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                alt="Avatar of a smiling man with beard in an orange circular background"
                className="rounded-full w-12 h-12 object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/d023d52a-e446-4e84-a42d-37d629b73b25.jpg"
                width="48"
              />
              <span className="bg-[#2a2a2a] text-[10px] text-[#b0b0b0] rounded-full px-2 py-[2px] select-none">
                Blogger
              </span>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute top-[50px] right-6 sm:right-10 flex flex-col gap-20 z-10"
          >
            <div className="flex flex-col items-center gap-2">
              <img
                alt="Avatar of a smiling man with short hair in a blue circular background"
                className="rounded-full w-12 h-12 object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/ffd43931-c074-4d03-2776-eb7b8ff716b5.jpg"
                width="48"
              />
              <span className="bg-[#2a2a2a] text-[10px] text-[#b0b0b0] rounded-full px-2 py-[2px] select-none">
                Writer
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                alt="Avatar of a blonde woman with short hair in a pink circular background"
                className="rounded-full w-12 h-12 object-cover"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/ca8fed46-faad-42f3-5d82-8d5a8802d7a8.jpg"
                width="48"
              />
              <span className="bg-[#2a2a2a] text-[10px] text-[#b0b0b0] rounded-full px-2 py-[2px] select-none">
                Writer
              </span>
            </div>
          </div>
          <div className="relative z-20 max-w-[720px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1 mb-6 text-[12px] text-[#1a1a1f] font-semibold">
              <img
                alt="Three smiling customer faces in a small rounded rectangle"
                className="rounded-full w-6 h-6 object-cover"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/1d984dbb-98b1-47e0-5596-ee4b09851824.jpg"
                width="24"
              />
              <span>16,428 Happy Customers</span>
            </div>
            <h1 className="text-[36px] sm:text-[44px] font-extrabold leading-tight">
              Ask Anything You Desire,
              <br />
              <span className="text-[#8a8a8a]">
                Our Chat Holds the Solutions
              </span>
            </h1>
            <p className="text-[14px] text-[#b0b0b0] mt-4 mb-6">
              Get your {" "}
              <span className="font-semibold text-white">free {" "}</span>
              account today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
              <button className="flex items-center gap-2 border border-white rounded-full px-5 py-2 text-[14px] font-normal hover:bg-white hover:text-[#1a1a1f] transition">
                <img
                  alt="Google G logo"
                  className="w-5 h-5"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                />
                Sign up with Google
              </button>
              <span className="text-[14px] text-[#8a8a8a] font-normal">or</span>
              <button className="bg-[#d6d6d6] text-[#1a1a1f] rounded-full px-5 py-2 text-[14px] font-normal hover:bg-[#c0c0c0] transition flex items-center gap-2">
                Sign up with email
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <p className="text-[10px] text-[#4a4a4a] font-normal select-none">
              No credit card required
            </p>
            <div
              aria-label="Customer ratings"
              className="flex items-center justify-center gap-10 mt-10 select-none"
            >
              <div className="flex items-center gap-2">
                <img
                  alt="Trustpilot rating 4.2 stars with 1000+ reviews"
                  className="w-20 h-5 object-contain"
                  height="20"
                  src="https://storage.googleapis.com/a1aa/image/91972792-4b3f-47d4-d572-bbc6f8c5a186.jpg"
                  width="80"
                />
                <span className="text-[10px] text-[#2bb673] font-semibold">
                  Rated 4.2+ 1000+ Reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="AppSumo rating 4.8 stars with 500+ reviews"
                  className="w-20 h-5 object-contain"
                  height="20"
                  src="https://storage.googleapis.com/a1aa/image/b13377aa-c655-4ee5-e709-130b7155697b.jpg"
                  width="80"
                />
                <span className="text-[10px] text-[#d18a3a] font-semibold">
                  Rated 4.8+ 500+ Reviews
                </span>
              </div>
            </div>
          </div>
        </main>
        <section className="bg-[#f7f8fa] py-10">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl shadow-lg">
            <article className="bg-white rounded-xl p-6 flex flex-col gap-3 min-h-[220px] text-[#4a4a4a]">
              <div className="text-[#a78bfa]">
                <FileText className="text-lg" size={24} />
              </div>
              <p className="uppercase text-[10px] font-semibold text-[#a3a3a3] tracking-widest">
                For blog writers
              </p>
              <h3 className="font-semibold text-[16px] text-[#1a1a1f]">
                Write blogs 10x faster
              </h3>
              <p className="text-[12px] leading-relaxed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 flex flex-col gap-3 min-h-[220px] text-[#4a4a4a]">
              <div className="text-[#a78bfa]">
                <PenLine className="text-lg" size={24} />
              </div>
              <p className="uppercase text-[10px] font-semibold text-[#a3a3a3] tracking-widest">
                For social media managers
              </p>
              <h3 className="font-semibold text-[16px] text-[#1a1a1f]">
                Write higher converting posts
              </h3>
              <p className="text-[12px] leading-relaxed">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </article>
            <article className="bg-white rounded-xl p-6 flex flex-col gap-3 min-h-[220px] text-[#4a4a4a]">
              <div className="text-[#a78bfa]">
                <BsEnvelope className="text-lg" size={24} />
              </div>
              <p className="uppercase text-[10px] font-semibold text-[#a3a3a3] tracking-widest">
                For email marketers
              </p>
              <h3 className="font-semibold text-[16px] text-[#1a1a1f]">
                Write more engaging emails
              </h3>
              <p className="text-[12px] leading-relaxed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
