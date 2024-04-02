import Image from "next/image";

interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
    preview: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export default function AnimeCard({ el, idx }: { el: AnimeProp; idx: number }) {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="w-[258px]">
        <img
          src={`https://shikimori.one${el.image.original}`}
          alt="not avaiblable"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center py-[16px] w-full gap-1">
        <div className="flex text-white w-full justify-between">
          <p className="text-[20px] leading-[28px] font-bold capitalize flex-1 max-w-[200px]">
            {el.name}
          </p>
          <div className="bg-[#161921] text-[13px] leading-[24px] font-bold py-1 px-2 rounded-sm">
            {el.kind}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="flex text-white font-bold gap-1">
            <Image
              src="/episodes.svg"
              height={20}
              width={20}
              alt="hello"
            ></Image>
            <span>{el.episodes_aired}</span>
          </div>
          <div className="flex items-center gap-1">
            <p>⭐</p>
            <div className=" text-[#ffad49] font-bold">{el.score}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
