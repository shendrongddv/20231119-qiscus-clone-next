import { StorySlides } from "./story-slides";

const Stories = () => {
  return (
    <section className="pt-24 md:px-4">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="h2 text-center max-md:px-4 md:w-3/5">
          Kisah Sukses Perusahaan yang Telah Gunakan Qiscus
        </h2>

        {/* Row */}
        <StorySlides />
      </div>
    </section>
  );
};

export default Stories;
