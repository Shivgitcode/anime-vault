import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home{" "}
      <Link href={"/anime"} className="text-blue-500">
        Click me and see anime vault
      </Link>
    </div>
  );
}
