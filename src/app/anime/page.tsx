import AnimeCard from "@/components/AnimeCard";
import { data } from "../_data";

export default function Anime() {
  return (
    <div className=" p-[64px]">
      <div className=" w-[70%]  mx-auto">
        <p className=" text-white font-bold text-[30px] leading-[36px] my-[30px]">
          Explore Anime
        </p>
        <div className="flex flex-row flex-wrap items-center gap-10 justify-center">
          {data.map((el) => {
            return <AnimeCard el={el}></AnimeCard>;
          })}
        </div>
      </div>
    </div>
  );
}
