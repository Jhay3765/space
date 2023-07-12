"use client";
import { Post } from "./components/post";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="">
      <nav className="flex justify-center py-4 sticky top-0 w-full bg-black">
        <div className="flex space-x-4 ">
          <Link
            href="#"
            className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
          >
            Home
          </Link>

          <Link
            href="#"
            className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Gallery
          </Link>

          <Link
            href="#"
            className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
        </div>
        <motion.div
          className="top-16 left-0 right-0 h-1 fixed bg-white origin-[0%]"
          style={{ scaleX }}
        />
      </nav>
      <div className="absolute opacity-25  flex  h-screen w-[100%]">
        <Image src="/sparkle.gif" alt="sparkles" width={1000} height={1000} />
        <Image src="/sparkle.gif" alt="sparkles" width={1000} height={1000} />
      </div>
      <>
        <style jsx>{`
          .hero {
            height: 100vh;
            width: 100%;
            opacity: 10%;
            background-image: radial-gradient(
              circle farthest-side at var(--x, 100px) var(--y, 100px),
              #1250aa 50%,
              transparent 100%
            );
          }
        `}</style>
        <div ref={heroRef} className="hero">
          <p className="title"></p>
        </div>
      </>
      <div></div>
      <h1 className=" px-8 text-8xl sticky bottom-60  py-4 font-thin">
        Take a <span className="font-normal">Journey </span>Through our
        <span className="font-normal"> Planets </span>
      </h1>

      <section className="flex justify-center items-start gap-10  ">
        <div className=" sticky top-24 -z-40  ">
          <Image
            src="/planets/merc.png"
            alt="mercury"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center  py-80  ">
          <Post>
            <p className=" font-thin ">PLANET 01</p>
            <h1 className="font-bold text-8xl tracking-wider ">MERCURY</h1>
            <p className="font-thin py-8 ">
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets.
            </p>
            <div>
              <p>Volume : 6.083 x 10^10 km^3</p>
              <p>Mass : 3.3011 x 10^23 kg</p>
            </div>
          </Post>
          <Post>
            <h1 className=" text-3xl ">FUN FACT</h1>
            <p className="font-bold py-8 ">
              Mercury is hot, but not too hot for ice .
            </p>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10  ">
        <div className=" sticky top-24  -z-40 ">
          <Image
            src="/planets/venus.png"
            alt="mercury"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center  py-80 ">
          <Post>
            <p className=" font-thin ">PLANET 02</p>
            <h1 className="font-bold text-8xl tracking-wider ">Venus</h1>
            <p className="font-thin py-8 ">
              Venus is the second planet from the Sun and is named after the
              Roman goddess of love and beauty. As the brightest natural object
              in Earth's night sky after the Moon, Venus can cast shadows and
              can be visible to the naked eye in broad daylight.
            </p>
            <div>
              <p>Volume : 6.083 x 10^10 km^3</p>
              <p>Mass : 3.3011 x 10^23 kg</p>
            </div>
          </Post>
          <Post>
            <div className="py-14">
              <h1 className=" text-3xl ">FUN FACT</h1>
              <p className="font-bold py-8 ">
                Venus doesn’t have any moons, and we aren’t sure why.
              </p>
            </div>
          </Post>
        </div>
      </section>
      <section className="flex justify-center items-start gap-10">
        <div className="sticky top-24 -z-40">
          <Image
            src="/planets/earth.png"
            alt="earth"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center py-80 ">
          <Post>
            <p className="font-thin">PLANET 03</p>
            <h1 className="font-bold text-8xl tracking-wider">Earth</h1>
            <p className="font-thin py-8">
              Earth is the third planet from the Sun and the only astronomical
              object known to harbor life. While large amounts of water can be
              found throughout the Solar System, only Earth sustains liquid
              surface water. About 71% of Earth's surface is made up of the
              ocean, dwarfing Earth's polar ice, lakes, and rivers.
            </p>
            <div>
              <p>Volume: 1.08321 x 10^12 km³</p>
              <p>Mass: 5.97237 x 10^24 kg</p>
            </div>
          </Post>
          <Post>
            <div className="py-14">
              <h1 className=" text-3xl ">FUN FACT</h1>
              <p className="font-bold py-8 ">
                You can see Earth’s magnetic field at work during light shows.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10">
        <div className="sticky top-24 -z-40">
          <Image src="/planets/mars.png" alt="mars" width={800} height={800} />
        </div>
        <div className="flex flex-col justify-center py-80 ">
          <Post>
            <p className="font-thin">PLANET 04</p>
            <h1 className="font-bold text-8xl tracking-wider">Mars</h1>
            <p className="font-thin py-8">
              Mars is the fourth planet from the Sun and the second-smallest
              planet in the Solar System, being larger than only Mercury. In
              English, Mars carries the name of the Roman god of war and is
              often called the "Red Planet".
            </p>
            <div>
              <p>Volume: 1.63118 x 10^11 km³</p>
              <p>Mass: 6.4171 x 10^23 kg</p>
            </div>
          </Post>
          <Post>
            <div className="py-14">
              <h1 className=" text-3xl ">FUN FACT</h1>
              <p className="font-bold py-8 ">
                Mars had a thicker atmosphere in the past.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10">
        <div className="sticky top-24 -z-40">
          <Image
            src="/planets/jupiter.png"
            alt="jupiter"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center py-80 ">
          <Post>
            <p className="font-thin">PLANET 05</p>
            <h1 className="font-bold text-8xl tracking-wider">Jupiter</h1>
            <p className="font-thin py-8">
              Jupiter is the fifth planet from the Sun and the largest in the
              Solar System. It is a gas giant with a mass more than two and a
              half times that of all the other planets in the Solar System
              combined, but slightly less than one-thousandth the mass of the
              Sun.
            </p>
            <div>
              <p>Volume: 1.4313 x 10^15 km³</p>
              <p>Mass: 1.8982 x 10^27 kg</p>
            </div>
          </Post>
          <Post>
            <div className="py-14">
              <h1 className=" text-3xl ">FUN FACT</h1>
              <p className="font-bold py-8 ">
                Jupiter is a great comet catcher.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10">
        <div className="sticky top-24 -z-40">
          <Image
            src="/planets/saturnn.png"
            alt="saturn"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center py-80 ">
          <Post>
            <p className="font-thin">PLANET 06</p>
            <h1 className="font-bold text-8xl tracking-wider">Saturn</h1>
            <p className="font-thin py-8">
              Saturn is the sixth planet from the Sun and the second-largest in
              the Solar System, after Jupiter. It is a gas giant with an average
              radius of about nine and a half times that of Earth. It has only
              one-eighth the average density of Earth; however, with its larger
              volume, Saturn is over 95 times more massive.
            </p>
            <div>
              <p>Volume: 8.2713 x 10^14 km³</p>
              <p>Mass: 5.6834 x 10^26 kg</p>
            </div>
          </Post>
          <Post>
            <div className="py-14">
              <h1 className=" text-3xl ">FUN FACT</h1>
              <p className="font-bold py-8 ">
                No one knows how old Saturn’s rings are .
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10">
        <div className="sticky top-24 -z-40">
          <Image
            src="/planets/uranus.png"
            alt="uranus"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center py-80 ">
          <Post>
            <p className="font-thin">PLANET 07</p>
            <h1 className="font-bold text-8xl tracking-wider">Uranus</h1>
            <p className="font-thin py-8">
              Uranus is the seventh planet from the Sun. Its name is a reference
              to the Greek god of the sky, Uranus, who, according to Greek
              mythology, was the great-grandfather of Ares, grandfather of Zeus
              and father of Cronus. It has the third-largest planetary radius
              and fourth-largest planetary mass in the Solar System.
            </p>
            <div>
              <p>Volume: 6.833 x 10^13 km³</p>
              <p>Mass: (8.6810±0.0013) x 10^25 kg</p>
            </div>
          </Post>
          <Post>
            <div className="py-14">
              <h1 className=" text-3xl ">FUN FACT</h1>
              <p className="font-bold py-8 ">
                Uranus is more stormy than we thought.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10">
        <div className="sticky top-24 -z-40">
          <Image
            src="/planets/neptune.png"
            alt="neptune"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center py-80 ">
          <Post>
            <p className="font-thin">PLANET 08</p>
            <h1 className="font-bold text-8xl tracking-wider">Neptune</h1>
            <p className="font-thin py-8">
              Neptune is the eighth and farthest-known Solar planet from the
              Sun. In the Solar System, it is the fourth-largest planet by
              diameter, the third-most-massive planet, and the densest giant
              planet. It is 17 times the mass of Earth and slightly more massive
              than its near-twin Uranus.
            </p>
            <div>
              <p>Volume: 6.253 x 10^13 km³</p>
              <p>Mass: 1.02413 x 10^26 kg</p>
            </div>
          </Post>
          <Post>
            <div className="py-14">
              <h1 className=" text-3xl ">FUN FACT</h1>
              <p className="font-bold py-8 ">Neptune has supersonic winds.</p>
            </div>
          </Post>
        </div>
      </section>
    </main>
  );
}
