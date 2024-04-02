"use client";

import AnimeCard from "@/components/AnimeCard";
import { data } from "../_data";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { useInView } from "react-intersection-observer";

export default function Anime() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView, entry } = useInView();
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const response = await fetch(
        `https://shikimori.one/api/animes?limit=8&order=popularity&&page=${page}`
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAnimes(data);
        return data;
      }
    };
    fetchData();
    const newAnime = fetchData();
    if (inView) {
      setPage((prev) => prev + 1);
      setAnimes((prev) => {
        return [...prev];
      });
    }

    setLoading(false);
  }, [inView]);
  console.log(inView);
  return (
    <div className=" p-[64px]">
      <div className=" w-[70%]  mx-auto">
        <p className=" text-white font-bold text-[30px] leading-[36px] my-[30px]">
          Explore Anime
        </p>
        <div className="flex flex-row flex-wrap items-center gap-10 justify-center">
          {animes.map((el, idx) => {
            return <AnimeCard el={el} idx={idx}></AnimeCard>;
          })}
        </div>
        <div className="flex justify-center" ref={ref}>
          <Spinner></Spinner>
        </div>
      </div>
    </div>
  );
}
