import { MainLayout } from "@/components/layout/MainLayout";
import { CartProvider } from "@/lib/context/CartContext";
import Image from "next/image";

export default function AboutPage() {
  return (
    <CartProvider>
      <MainLayout>
        <div className="bg-[#f5f5f5] py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">About Poco</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're passionate about serving the most delicious fast food made
                with high-quality ingredients and a whole lot of love.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  Poco began in 2010 with a simple idea: to create a place where
                  people could enjoy delicious, high-quality fast food in a
                  comfortable and welcoming environment.
                </p>
                <p className="mb-4">
                  Our founder, John Smith, spent years perfecting recipes and
                  sourcing the finest ingredients before opening the first Poco
                  restaurant in downtown Boston. The restaurant quickly became a
                  local favorite, known for its amazing pizzas, juicy burgers,
                  and friendly service.
                </p>
                <p>
                  Today, we have multiple locations across the country, but our
                  commitment to quality and service remains unchanged. We
                  continue to use fresh, locally-sourced ingredients whenever
                  possible and prepare everything with care.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/868996137/2104767512.png"
                  alt="Poco Restaurant Interior"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quality Food</h3>
                  <p className="text-muted-foreground">
                    We never compromise on the quality of our ingredients and
                    take pride in serving only the best.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M12 22C16.0002 22 20 18.65 20 15C20 12.91 18.68 10.57 17.5 9C16.27 7.61 13.9 4.59 13 3C12.11 4.58 9.73 7.59 8.5 9C7.32 10.57 6 12.91 6 15C6 18.65 7.9998 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to environmentally friendly practices and
                    supporting local farmers and producers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    We believe in creating a welcoming space where everyone feels
                    at home and part of our family.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Visit Us Today</h2>
              <p className="text-lg mb-4">
                Experience the Poco difference for yourself. We can't wait to
                serve you!
              </p>
              <p className="text-muted-foreground">
                504 White St. Dawsonville, GA 30534 | Phone: (850) 435-4155
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </CartProvider>
  );
}
