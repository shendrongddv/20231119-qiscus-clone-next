import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-4 pt-36">
      <div className="container">
        {/* Row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-6/12">
            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
              <h1 className="h1">
                Omnichannel Marketing Platform untuk Maksimalkan Penjualan &
                Loyalitas Pelanggan.
              </h1>

              <p className="mt-4 text-lg font-medium">
                Lakukan percakapan langsung dengan customer melalui berbagai
                channel secara scalable dalam satu platform dan berikan customer
                experience terbaik dengan Qiscus.
              </p>

              <p className="text-sm md:text-base">
                Hubungi kami dan cari tahu bagaimana Qiscus dapat membantu
                bisnis Anda terus berkembang!
              </p>

              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "default",
                    className: "mt-4 font-semibold",
                  }),
                )}
              >
                Get Demo + Free Trial
              </Link>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-5/12">
            <figure className="mx-auto h-auto w-4/5 md:w-full">
              <Image
                src="/home_640.jpg"
                priority
                alt="Image"
                width={640}
                height={640}
                className="h-auto w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
