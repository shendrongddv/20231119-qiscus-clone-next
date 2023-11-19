import { ReviewSlides } from "./review-slides";

const Reviews = () => {
  return (
    <section className="bg-slate-100 py-24 md:px-4">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="h2 text-center md:w-3/5">Testimoni Pengguna Qiscus</h2>

        {/* Row */}
        <ReviewSlides />
      </div>
    </section>
  );
};

export default Reviews;
