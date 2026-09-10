import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {indexBlogPosts} from "@/lib/blog";

const Page = async () => {

  // get blog posts
  const posts = await indexBlogPosts()

  return (
    <main className="flex flex-col p-0 items-center home">
      <video autoPlay muted playsInline loop className="w-full md:h-[80vh] h-auto md:max-h-none max-h-[80vh] md:object-cover object-contain object-[center_75%]">
        <source src="/vid.mp4" type="video/mp4"/>
      </video>
      <div className="bg-linear-to-t from-white to-transparent w-full px-[5%] p-70 pb-7.5 -mt-119">
        <h1 className="font-bold text-black text-7xl">
          <span className="text-8xl">PALOUSE ROBOSUB</span>
          <br/>
          WSU&apos;S <span className="text-[#A60F2D]">PREMIER</span> UNDERWATER ROBOTICS
        </h1>
      </div>

      <section className="flex flex-col w-full items-center justify-center gap-4">
        <h2 className="md:text-4xl text-lg text-center md:text-left md:my-4">Meet Guppy!</h2>
        <div className="flex flex-row gap-8 items-center justify-center w-2/3">
          <div className="aspect-4/3 relative w-1/2">
            <Image src="/guppy-under.jpeg" alt="Guppy" fill />
          </div>
          <p className="w-1/2 text-center text-xl">
            Guppy is our brand-new flagship submarine, and headed to
            RoboNation&apos;s RoboSub 2026 competition in Irvine, CA, this
            July!
            <br/>
            <br/>
            Guppy&apos;s mechanical, electrical, and computer science architectures are entirely designed and created in-house by our team.
            <br/>
            <br/>
            Able to move in all six degrees of freedom, and with advanced onboard autonomy, Guppy is truly a massive team effort.
            <br/>
            <br/>
            <Link href="/guppy">Learn More About Guppy</Link>
          </p>
        </div>
      </section>

      <section className="flex flex-col w-full items-center justify-center gap-4">
        <h2 className="md:text-4xl text-lg text-center md:text-left md:my-4">Meet the Team!</h2>
        <div className="flex flex-row gap-8 items-center justify-center w-2/3">
          <p className="w-1/2 text-center text-xl">
            Palouse RoboSub is made up of roughly 35 dedicated undergraduates from nearly every discipline of engineering.
            <br/>
            <br/>
            Working together, we design, manufacture, build, program, and test Autonomous Underwater Vehicles (AUVs) for
            competition in the <Link href="https://robosub.org/" target="_blank">RoboNation RoboSub competition</Link>.
            <br/>
            <br/>
            We are very excited to be back after a several-year hiatus, with our submarine Guppy!
            <br/>
            <br/>
            If you are a student and interested in joining us, feel free to reach out to
            any <Link href="/officers">officer</Link> or show up to one of our regularly scheduled meetings!
          </p>
          <div className="aspect-4/3 relative w-1/2">
            <Image src="/group.webp" alt="Palouse RoboSub Team Photo" fill />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full items-center justify-center gap-4 text-xl">
        <h2 className="md:text-4xl text-lg text-center md:text-left md:my-4">Thank You to our <Link href="/sponsors">Generous Sponsors</Link>!</h2>
        <p>We could not do this without your help!</p>
        <div className="flex flex-row flex-wrap max-w-5/6 gap-4">
          <Link target="_blank" href="https://www.alaskaair.com/">Alaska Airlines</Link>
          <Link target="_blank" href="https://bluerobotics.com/">Blue Robotics</Link>
          <Link target="_blank" href="https://joescan.com/">JoeScan</Link>
          <Link target="_blank" href="https://www.lattepanda.com/">LattePanda</Link>
          <Link target="_blank" href="https://www.moscowapparel.com/">Moscow Apparel</Link>
          <Link target="_blank" href="https://oshpark.com/">OSH Park</Link>
          <Link target="_blank" href="https://www.realdigital.org/">Real Digital</Link>
          <Link target="_blank" href="https://www.solidworks.com/">Solidworks</Link>
          <Link target="_blank" href="https://www.tek.com/en">Tektronix</Link>
          <Link target="_blank" href="https://www.vectornav.com/">VectorNav</Link>
          <Link target="_blank" href="https://www.waterlinked.com/">WaterLinked</Link>
        </div>
      </section>

      <section className="w-full md:px-[20%] px-[5%] mb-5">
        <h2 className="md:text-4xl text-xl text-center md:text-left md:my-4">Check out our blog!</h2>
        <div className="flex md:flex-row flex-col items-start justify-center md:gap-5 text-lg">
          <div className="flex-1">
            We regularly document our activities to share our progress and help the public understand our work.
            <Link href="/blog" className="flex flex-row items-center my-5 w-min text-nowrap">Check the blog out here <ArrowRight/></Link>
          </div>
          <div className="flex-1 w-full">
            {/* show 3 newest blog posts */}
            <h4 className="m-0">Recent Posts</h4>
              <div className="flex justify-between items-center p-2.5 even:bg-[#ebebeb]">
                <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
                <div>{posts[0].published}</div>
              </div>
              <div className="flex justify-between items-center p-2.5 even:bg-[#ebebeb]">
                <Link href={`/blog/${posts[1].slug}`}>{posts[1].title}</Link>
                <div>{posts[1].published}</div>
              </div>
              <div className="flex justify-between items-center p-2.5 even:bg-[#ebebeb]">
              <Link href={`/blog/${posts[2].slug}`}>{posts[2].title}</Link>
              <div>{posts[2].published}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page;
