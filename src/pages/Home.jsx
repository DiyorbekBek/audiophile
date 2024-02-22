// RRD imports
import { Link } from "react-router-dom";

// Icons import
import { IoIosArrowForward } from "react-icons/io";

function Home() {
  return (
    <>
      <section className="bg-black">
        <div className="max-container bg-[url('/assets/home/desktop/image-hero.jpg')] bg-center bg-cover md:bg-[url('/assets/home/desktop/image-hero2.jpg')]">
          <div className="flex flex-col items-center py-[200px] md:items-start md:w-96">
            <h3 className="text-white font-[Manrope] opacity-50 text-[14px] md:text-[16px] leading-5 tracking-[10px] font-normal mb-4">
              NEW PRODUCT
            </h3>
            <h1 className="text-white font-[Manrope] text-3xl md:text-[56px] tracking-[1.29px] md:tracking-[2px] md:leading-[56px] text-center md:text-start mb-6">
              XX99 Mark II HeadphoneS
            </h1>
            <p className="text-white text-base md:text-xl font-[Manrope] opacity-55 font-normal leading-6 text-center md:text-start mb-[28px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to={`/mark2/${"xx99-mark-two-headphones"}`}
              className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-[#D87D4A] hover:bg-[#4C4C4C] duration-300 text-white uppercase"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>
      <section className="max-container py-[170px]">
        <ul className="flex flex-col md:flex-row md:gap-[80px] gap-[180px]">
          <li className="bg-[#F1F1F1] rounded-xl flex flex-col items-center">
            <img
              className="relative bottom-32"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />
            <h3 className="text-base font-bold font-[Manrope] tracking-[1.27px]">
              HEADPHONES
            </h3>
            <Link
              to="/headphones"
              onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
              className="flex items-center pb-[22px] text-sm tracking-[1px] font-[Manrope] uppercase opacity-50 mt-4 font-bold gap-2"
            >
              Shop <IoIosArrowForward className="text-[#D87D4A] text-lg" />
            </Link>
          </li>
          <li className="bg-[#F1F1F1] rounded-xl flex flex-col items-center">
            <img
              className="relative bottom-32"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />
            <h3 className="text-base font-bold font-[Manrope] tracking-[1.27px]">
              SPEAKERS
            </h3>
            <Link
              to="/speakers"
              onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
              className="flex items-center pb-[22px] text-sm tracking-[1px] font-[Manrope] uppercase opacity-50 mt-4 font-bold gap-2"
            >
              Shop <IoIosArrowForward className="text-[#D87D4A] text-lg" />
            </Link>
          </li>
          <li className="bg-[#F1F1F1] rounded-xl flex flex-col items-center">
            <img
              className="relative bottom-28"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />
            <h3 className="text-base font-bold font-[Manrope] tracking-[1.27px]">
              EARPHONES
            </h3>
            <Link
              to="/earphones"
              onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
              className="flex items-center pb-[22px] text-sm tracking-[1px] font-[Manrope] uppercase opacity-50 mt-4 font-bold gap-2"
            >
              Shop <IoIosArrowForward className="text-[#D87D4A] text-lg" />
            </Link>
          </li>
        </ul>
      </section>
      <section className="max-container bg-[#D87D4A] rounded-lg py-8 flex flex-col md:flex-row md:justify-between">
        <picture>
          <source
            srcSet="/assets/home/desktop/image-speaker-zx9.png"
            media="(min-width: 1020px)"
            width={300}
            height={200}
          />
          <img
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt=""
            className="md:relative md:top-8 md:left-48 "
          />
        </picture>
        <div className="flex flex-col items-center md:w-96 md:items-start">
          <h2 className="text-center md:text-left md:text-[56px] md:tracking-[2px] md:leading-[58px] text-white text-4xl font-bold font-[Manrope] tracking-[1.29px] mb-6">
            ZX9 <br /> SPEAKER
          </h2>
          <p className="text-center md:text-left md:text-lg md:leading-[25px]  text-white text-base opacity-75 font-normal font-[Manrope] mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            to={`/mark2/${"zx9-speaker"}`}
            onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            className="py-[15px] font-[Manrope] text-xs md:text-xl tracking-[1px] px-[29px] bg-black hover:bg-zinc-700 duration-300 text-white uppercase"
          >
            See Product
          </Link>
        </div>
      </section>
      <section className="py-10">
        <div className="max-container rounded-lg py-24 bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-center bg-cover md:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]">
          <h1 className="text-3xl md:text-4xl md:tracking-[2px] md:relative md:left-40 font-[Manrope] font-bold mb-8">
            ZX7 SPEAKER
          </h1>
          <button className="py-[15px] md:relative md:left-40 font-[Manrope] font-bold text-xs md:text-xl tracking-[1px] px-[29px] bg-inherit hover:bg-black hover:text-white duration-300 text-black border border-black uppercase">
            See Product
          </button>
        </div>
      </section>
      <section className="max-container flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="w-[400px] h-[200px] md:w-[600px] md:h-[350px] rounded-lg bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] bg-center bg-cover md:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]"></div>
        <div className="w-[400px] h-[200px] md:w-[600px] md:h-[350px] flex flex-col items-center rounded-lg bg-[#F1F1F1]">
          <h1 className="text-3xl md:text-4xl md:tracking-[2px]  font-[Manrope] font-bold my-8">
            YX1 EARPHONES
          </h1>
          <button className="py-[15px]  font-[Manrope] font-bold text-xs md:text-xl tracking-[1px] px-[29px] bg-inherit hover:bg-black hover:text-white duration-300 text-black border border-black uppercase">
            See Product
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
