import { dummyBenefits } from "@/config/dummy";

const Benefits = () => {
  return (
    <section className="bg-[#2f80ed] px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="h2 text-center !text-white md:w-3/5">
          Solusi Qiscus Terbukti Mampu Bantu Tingkatkan Performa Bisnis
        </h2>

        {/* Row */}
        <ul className="grid w-full grid-cols-2 gap-2 md:grid-cols-3 md:gap-8">
          {dummyBenefits?.map((item) => (
            // Col
            <li
              key={item.id}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-white/25 p-4 text-center md:justify-start md:p-6"
            >
              <h3 className="h2 !text-white">{item.title}</h3>
              <p className="text-xs font-medium text-white md:text-lg md:leading-tight">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
