import Link from "next/link"
import Image from "next/image"
import { JSX, SVGProps } from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 dark:bg-gray-800 lg:pl-24">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src={"PNG 1.svg"} width={200} height={200} alt={""}></Image>
          </Link>
          <address className="not-italic text-gray-500 dark:text-gray-400">
            SHREE TECHNIKA
            <br />
            RS No. 215, Block No. 85, ZIN, Opp. APMC
            <br />
            At. Jhagadia, Dist.    Bharuch, Gujarat,
          </address>
        </div>
        <style jsx>{`
          .hover-enlarge {
           transition: transform 0.3s ease-in-out;
            }

          .hover-enlarge:hover {
          transform: scale(1.1);
            } 
        `}
        </style>

        <a href="https://www.google.com/maps/place/SHREE+TECHNIKA/@21.7210981,73.1486551,17z/data=!3m1!4b1!4m6!3m5!1s0x3be01f287d094cc7:0x8bf29d519c669b71!8m2!3d21.7210981!4d73.15123!16s%2Fg%2F11j23pfm70?entry=ttu" target="_blank" rel="noopener noreferrer">
          <div className="rounded-lg overflow-hidden aspect-video hover-enlarge">
            <img
              src="/mapImage.png"
              alt="Google Maps"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </a>

      </div>
    </footer>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}