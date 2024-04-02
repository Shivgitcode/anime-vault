import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-[65%] mx-auto herobg bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="mx-auto flex justify-between py-16 px-16">
        <div className="flex flex-col items-start justify-center flex-1 gap-10">
          <Image
            src="/logo.svg"
            alt="noimage"
            width={101}
            height={90}
            className="object-cover"
          ></Image>
          <p className=" text-[60px] leading-[60px] text-white font-bold">
            Explore <br />{" "}
            <span className="text-[#F33141] w-full whitespace-nowrap">
              {" "}
              The Diverse Realms
            </span>
            <br /> of Anime Magic
          </p>
        </div>

        <div className="relative">
          <Image
            src="/anime.png"
            alt="noimage"
            width={500}
            height={500}
            className="object-contain"
          ></Image>
        </div>
      </div>
    </div>
  );
}
