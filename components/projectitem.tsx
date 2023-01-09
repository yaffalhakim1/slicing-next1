export default function ProjectItem({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <article className="text-center">
      <img src={image} className="w-full rounded-lg" alt="" />
      <h3 className="text-2xl font-semibold mb-1 text-gray-600 mt-4">
        {title}
      </h3>
      <p className="text-lg text-gray-400">{desc}</p>
    </article>
  );
}
