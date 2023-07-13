import Link from "next/link";
import { App } from "./components/carosel";

export default async function Gallery() {
  return (
    <div>
      <nav className="flex justify-center py-4 sticky top-0 w-full bg-black">
        <div className="flex space-x-4 ">
          <Link
            href="/"
            className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
          >
            Home
          </Link>

          <Link
            href="/gallery"
            className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Gallery
          </Link>
        </div>
      </nav>

      <h1 className="text-7xl text-center font-thin ">The Space Gallery </h1>
      <p className="text-center ">
        Photos from Nasa's astronomy pictures of the day{" "}
      </p>

      <div className="py-12">
        <App />
      </div>
    </div>
  );
}
