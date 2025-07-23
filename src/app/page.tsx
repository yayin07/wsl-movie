import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { IoStarSharp } from "react-icons/io5";
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/hero-background.png"
          alt="When Sadness Lingers movie poster background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <div className="relative z-20 text-center space-y-6 px-4 md:px-6">
          <div className="absolute top-4 left-4">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Movie Logo"
              width={60}
              height={60}
              className="h-12 w-12 md:h-16 md:w-16"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 md:mb-0">
              When the Mind <br /> Breaks...
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-center">
              When Sadness Lingers
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-right mt-4 md:mt-0">
              Can the Heart <br /> Heal?
            </h2>
          </div>
          <div className="text-lg md:text-xl font-medium">
            Noni Buencamino &bull; Sylvia Sanchez
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 rounded-full text-lg uppercase">
            Buy Tickets
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-12 md:py-16  bg-black text-white flex justify-center items-center">
        <div className="relative w-full h-[20em] md:h-[35em]  aspect-video bg-gray-800 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=450&width=800"
            alt="Video Thumbnail"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/50">
            <Button
              variant="ghost"
              size="icon"
              className="h-20 w-20 text-white hover:text-gray-300"
            >
              <PlayCircle className="h-full w-full" />
              <span className="sr-only">Play Video</span>
            </Button>
            <p className="mt-4 text-2xl font-serif italic">
              CMMS FILM PRODUCTION
            </p>
          </div>
        </div>
      </section>

      {/* Cast/Crew Section */}
      <section className="w-full  bg-gray-100 dark:bg-gray-900">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 overflow-x-auto ">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center min-w-[120px] h-64  border "
            >
              <Image
                src={`/placeholder.svg?height=150&width=150&query=person headshot ${
                  i + 1
                }`}
                alt={`Cast Member ${i + 1}`}
                fill
                className="rounded-full object-cover aspect-square mb-2"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <IoStarSharp
                key={i}
                className="w-12 h-12 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-lg md:text-[25px] leading-relaxed text-gray-700 dark:text-gray-300 italic">
            When Sadness Lingers is a heart-wrenching drama that explores the
            devastating consequences of a family&apos;s disintegration in the
            face of mental illness. Agnes, a loving mother struggling with
            schizophrenia, is abandoned by her husband Alfred, who leaves her
            for another man.
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="w-full py-12 md:py-16  bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Thank You To Our Dear Sponsors
        </h2>

        <div className="px-4 md:px-6 lg:px-16 space-y-6 ">
          <div className="grid grid-cols-2 md:grid-cols-4  gap-8 items-center justify-center">
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=100&width=100&query=company logo ${
                  i + 1
                }`}
                alt={`Sponsor Logo ${i + 1}`}
                width={100}
                height={100}
                className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=100&width=100&query=company logo ${
                    i + 1
                  }`}
                  alt={`Sponsor Logo ${i + 1}`}
                  width={100}
                  height={100}
                  className="mx-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>

            <p className=" text-center text-lg font-medium">
              ABC Company - CDE Company - EFG Company - HIJ Company - KLM
              Company
            </p>
          </div>
        </div>
      </section>

      {/* Our Beneficiaries Section */}
      <section className="w-full py-12 md:py-16  bg-black text-white">
        <div className="container px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Beneficiaries
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mditems-start">
            <div className="flex flex-row gap-2">
              <div className="w-36 bg-white">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Green Ribbon Icon"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col items-center text-center space-y-6 w-full">
                <h3 className="text-2xl font-bold">
                  &quot;No One Should Suffer Alone&quot;
                </h3>
                <h4 className="text-xl font-semibold text-green-600">
                  Supporting Mental Health Initiatives
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When Sadness Lingers and the WSL Movement proudly partner with
                  mental health initiatives to ensure no one faces their
                  struggles without support. A portion of proceeds from the film
                  will directly benefit Philippine-based mental health crisis
                  lines, helping them sustain and expand their life-saving
                  services.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="w-36  bg-white">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Green Ribbon Icon"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col items-center text-center space-y-6 w-full">
                <h3 className="text-2xl font-bold">
                  &quot;Healing Should Be Accessible to All&quot;
                </h3>
                <h4 className="text-xl font-semibold text-red-600">
                  Supporting Free Mental Health Clinics
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ">
                  When Sadness Lingers and the WSL Movement are committed to
                  breaking down barriers to mental healthcare. Through our
                  partnership with Happy Heart [Clinic Name], a free mental
                  health clinic providing professional care to underserved
                  Filipino communities.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 underline text-white cursor-pointer font-bold py-7 px-8 rounded-full text-lg uppercase"
            >
              Buy Tickets
            </Button>
          </div>
        </div>
      </section>

      {/* About WSL Movement Section */}
      <section className="w-full py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About WSL Movement
          </h2>

          <div className="grid md:grid-cols-4 gap-12 items-center">
            <div className="flex justify-center md:justify-end col-span-1">
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="WSL Movement Logo"
                width={250}
                height={250}
                className="h-64 w-64 object-contain"
              />
            </div>
            <div className="space-y-6 text-center md:text-left col-span-3">
              <h3 className="text-2xl font-bold">
                "When Sadness Lingers" is more than a film—it’s a movement.
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 italic">
                &quot;The WSL Movement is a Filipino advocacy group dedicated to
                breaking the silence around mental health through the powerful
                medium of storytelling. Drawing inspiration from the powerful
                narrative of When Sadness Lingers, our mission is to foster
                understanding, reduce stigma, and provide accessible resources
                for individuals and families facing mental health
                challenges.&quot;
              </p>

              <h3 className="text-2xl font-bold">Join Us</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether you&apos;re a survivor, supporter, or advocate, you
                belong here. Together, we can turn sadness into strength—one
                conversation at a time. &quot;Hindi ka nag-iisa. You are not
                alone.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
