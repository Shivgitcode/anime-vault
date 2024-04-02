import Image from "next/image";
import React from "react";

export default function Spinner() {
  return (
    <div>
      <Image
        src={"/spinner.svg"}
        alt="can't load"
        width={50}
        height={70}
      ></Image>
    </div>
  );
}
