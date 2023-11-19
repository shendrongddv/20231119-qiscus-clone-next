import { ReviewSlides } from "./review-slides";

const FreeTrial = () => {
  return (
    <section className="bg-slate-100 px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center md:w-3/5">
          <h2 className="h2 text-center">
            Dapatkan Free Trial dan Demo Solusi dari Qiscus
          </h2>
          <p className="text-lg font-medium text-foreground">
            Isi form berikut ini dan kami akan segera hubungi Anda untuk atur
            jadwal demo. Tim kami akan tunjukkan kepada Anda bagaimana Qiscus
            dapat membantu bisnis Anda terus berkembang.
          </p>
        </div>

        {/* Row */}
      </div>
    </section>
  );
};

export default FreeTrial;
