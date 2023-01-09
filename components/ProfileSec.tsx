export default function Profile() {
  return (
    <section className="py-28 bg-white " id="profile">
      <div className="container mx-auto 2xl:p-0">
        <h2 className="text-2xl font-mono font-semibold text-center text-gray-600">
          Profile
        </h2>
        <p className="text-lg mt-4 text-grey-600 font-sans text-center text-gray-600">
          Mengenai saya secara singkat
        </p>
        <div className="flex md:items-start lg:items-center mx-auto xl:w-9/12 mt-10 flex-wrap">
          <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
            <img src="/profile.png" className="w-full" />
          </div>
          <div className="md:w-7/12 w-full  px-10">
            <p className="text-lg leading-relaxed text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              asperiores dicta iure, id adipisci, rerum ullam suscipit eos
              aspernatur aut tempora veritatis, sequi cumque delectus fugit
              consectetur quod sunt dolore eveniet soluta ducimus ipsa illo
              praesentium quas. Ab id ea in minima nesciunt! Eos ullam sint,
              enim accusamus magnam quidem.
            </p>
            <p className="text-lg mt-8 leading-relaxed text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              architecto minus vitae harum officia porro doloremque quaerat
              itaque magnam autem laboriosam omnis, delectus hic quae esse
              tenetur corporis dicta perferendis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
