import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d3d23] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
            <p className="text-gray-300 mb-2">504 White St .</p>
            <p className="text-gray-300 mb-2">Dawsonville, GA 30534</p>
            <p className="text-gray-300">United States</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">BOOK A TABLE</h3>
            <p className="text-gray-300 mb-2">Dogfood och Sliders foodtruck.</p>
            <p className="text-gray-300 mb-4">Under the same roof.</p>
            <p className="text-secondary font-bold text-lg">(850) 435-4155</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">OPENING HOURS</h3>
            <p className="text-gray-300 mb-2">Monday – Friday:</p>
            <p className="text-gray-300 mb-4">8am – 4pm</p>
            <p className="text-gray-300 mb-2">Saturday – Sunday:</p>
            <p className="text-gray-300">9am – 5pm</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-gray-300 mb-4">Subscribe to the weekly newsletter for all the latest updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email..."
                className="bg-[#0a321c] text-white px-4 py-2 w-full rounded-l-md focus:outline-none"
              />
              <button className="bg-secondary text-black px-4 py-2 rounded-r-md font-semibold">
                Subscribe
              </button>
            </div>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-white hover:text-secondary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-secondary">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#082a18] py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 <span className="text-primary">Poco</span> - Fast Food Restaurant
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/about" className="text-gray-400 hover:text-white text-sm">
              About Us
            </Link>
            <Link href="/menu" className="text-gray-400 hover:text-white text-sm">
              Menu
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
