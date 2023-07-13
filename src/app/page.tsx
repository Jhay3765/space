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
      <nav className="flex justify-center py-4 sm:sticky top-0 w-full bg-black z-40">
        <div className="flex space-x-4 ">
          <Link
            href="#"
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
        <motion.div
          className="top-16 left-0 right-0 h-1 fixed bg-white origin-[0%]"
          style={{ scaleX }}
        />
      </nav>
      <div className="opacity-25  flex  h-screen w-[100%]">
        <Image src="/sparkle.gif" alt="sparkles" width={1000} height={1000} />

        <Image
          src="/sparkle.gif"
          alt="sparkles"
          width={1000}
          height={1000}
          className="hidden sm:block"
        />
      </div>
      <h1 className="ml-12 md:text-8xl  text-4xl sm:hidden   absolute  top-48 py-4 font-thin max-w-6xl">
        Take a <span className="font-normal">Journey </span>Through our
        <span className="font-normal"> Planets </span>
      </h1>

      <h1 className="ml-12 md:text-8xl  text-4xl sm:sticky sm:bottom-60  hidden sm:block  py-4 font-thin max-w-6xl">
        Take a <span className="font-normal">Journey </span>Through our
        <span className="font-normal"> Planets </span>
      </h1>

      <section className=" px-10      flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap ">
        <div className=" sm:sticky top-24   ">
          <Image
            src="/planets/merc.png"
            alt="mercury"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center  md:py-80  ">
          <Post>
            <p className=" font-thin ">PLANET 01</p>
            <h1 className="font-bold  md:md:text-8xl  text-4xl  text-4xl   tracking-wider ">
              MERCURY
            </h1>
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
              Despite being the closest planet to the Sun, Mercury is not the
              hottest planet. Its thin atmosphere can't retain heat, causing
              extreme temperature fluctuations. It has the greatest temperature
              difference of any planet, swinging from scorching hot during the
              day to freezing cold at night.
            </p>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap px-10    ">
        <div className=" sm:sticky top-24   ">
          <Image
            src="/planets/venus.png"
            alt="mercury"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center  md:py-80 ">
          <Post>
            <p className=" font-thin ">PLANET 02</p>
            <h1 className="font-bold md:text-8xl  text-4xl tracking-wider ">
              Venus
            </h1>
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
                Venus is often called Earth's "sister planet" due to its similar
                size, gravity, and composition. However, it has a hostile
                environment with a thick atmosphere composed mainly of carbon
                dioxide, causing a runaway greenhouse effect and making it the
                hottest planet in our solar system.
              </p>
            </div>
          </Post>
        </div>
      </section>
      <section className="flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap px-10  ">
        <div className="sm:sticky top-24 ">
          <Image
            src="/planets/earth.png"
            alt="earth"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center md:py-80 ">
          <Post>
            <p className="font-thin">PLANET 03</p>
            <h1 className="font-bold md:text-8xl  text-4xl tracking-wider">
              Earth
            </h1>
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
              <p className="font-bold py-8 leading-10">
                Earth is home to the highest point above sea level and the
                deepest point below sea level of any planet in our solar system.
                Mount Everest, located in the Himalayas, holds the title for the
                highest point, soaring to an elevation of 8,848 meters (29,029
                feet). On the other hand, the Mariana Trench in the western
                Pacific Ocean reaches a staggering depth of 10,924 meters
                (35,843 feet), making it the lowest point on Earth.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap px-10  ">
        <div className="sm:sticky top-24 ">
          <Image src="/planets/mars.png" alt="mars" width={800} height={800} />
        </div>
        <div className="flex flex-col justify-center md:py-80 ">
          <Post>
            <p className="font-thin">PLANET 04</p>
            <h1 className="font-bold md:text-8xl  text-4xl tracking-wider">
              Mars
            </h1>
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
                Mars is often referred to as the "Red Planet" because of its
                rusty reddish appearance. This color comes from iron oxide
                (rust) present on its surface. Additionally, Mars has the
                tallest volcano and the deepest, longest canyon in the solar
                system—Olympus Mons and Valles Marineris, respectively.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap px-10  ">
        <div className="sm:sticky top-24 ">
          <Image
            src="/planets/jupiter.png"
            alt="jupiter"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center md:py-80 ">
          <Post>
            <p className="font-thin">PLANET 05</p>
            <h1 className="font-bold md:text-8xl  text-4xl tracking-wider">
              Jupiter
            </h1>
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
                Jupiter, the largest planet in our solar system, acts as a
                cosmic "vacuum cleaner." Its immense gravitational pull attracts
                and captures numerous asteroids and comets that come into its
                vicinity, protecting the inner planets like Earth from potential
                collisions. Jupiter acts as a sort of guardian, helping to
                shield our planet from space debris.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap px-10  ">
        <div className="sm:sticky top-24 ">
          <Image
            src="/planets/saturnn.png"
            alt="saturn"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center md:py-80 ">
          <Post>
            <p className="font-thin">PLANET 06</p>
            <h1 className="font-bold md:text-8xl  text-4xl tracking-wider">
              Saturn
            </h1>
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
                Saturn is famous for its spectacular ring system, consisting of
                countless particles of ice and rock. These rings extend over
                280,000 kilometers (175,000 miles) from the planet but are only
                a few meters thick.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap px-10  ">
        <div className="sm:sticky top-24 ">
          <Image
            src="/planets/uranus.png"
            alt="uranus"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center md:py-80 ">
          <Post>
            <p className="font-thin">PLANET 07</p>
            <h1 className="font-bold md:text-8xl  text-4xl tracking-wider">
              Uranus
            </h1>
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
                Uranus is an intriguing planet with a unique feature—it rotates
                on its side. While most planets rotate on an axis roughly
                perpendicular to their orbits, Uranus spins almost parallel to
                its orbit, likely due to a collision with a massive object in
                the past.
              </p>
            </div>
          </Post>
        </div>
      </section>

      <section className="flex justify-center items-start gap-10 flex-wrap sm:flex-nowrap px-10     ">
        <div className="sm:sticky top-24 ">
          <Image
            src="/planets/neptune.png"
            alt="neptune"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col justify-center md:py-80 ">
          <Post>
            <p className="font-thin">PLANET 08</p>
            <h1 className="font-bold md:text-8xl  text-4xl tracking-wider">
              Neptune
            </h1>

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
              <p className="font-bold py-8 ">
                {" "}
                Neptune, the farthest planet from the Sun, has the strongest
                winds in the solar system. It experiences wind speeds that can
                reach up to 2,100 kilometers per hour (1,300 miles per hour),
                making it a planet of powerful storms and weather patterns.
              </p>
            </div>
          </Post>
        </div>
      </section>
      <section className="px-8 py-8">
        <h1 className="text-5xl text-center sm:sticky top-20">
          Honorable Mention:{" "}
          <span className="font-bold tracking-wider">Pluto</span>
          <span className="text-base font-thin">09</span>
        </h1>
        <div className="flex flex-wrap">
          <div>
            <Image
              src="/planets/pluto.png"
              alt="pluto"
              width={800}
              height={800}
            />
          </div>

          <div className="flex flex-col gap-24 justify-center max-w-3xl text-2xl leading-10">
            <p className="">
              Pluto, a celestial body that continues to captivate our curiosity
              and intrigue. Although no longer classified as a planet, Pluto
              holds a special place in our hearts and serves as a reminder of
              the vastness and diversity of our solar system.
            </p>
            <p>
              Pluto, once considered the ninth planet, is now categorized as a
              dwarf planet. Discovered in 1930 by astronomer Clyde Tombaugh,
              Pluto remained classified as a planet for over seven decades
              before being reclassified in 2006 by the International
              Astronomical Union (IAU). Despite its smaller size, Pluto remains
              a source of wonder and discovery.
            </p>
            <Link
              href="/"
              className="py-2 px-4 bg-white rounded-xl text-black font-bold self-start"
            >
              Return to Top
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
