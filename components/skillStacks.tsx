export default function Stacks({
  stacks,
  level,
  image,
  imageClassName,
}: {
  stacks: string;
  level: string;
  image: string;
  imageClassName?: string;
}) {
  const addImageClassName = imageClassName ? `${imageClassName}` : "";
  return (
    <div className="bg-white shadow-skill  rounded-lg p-6 flex items-center">
      <img src={image} alt="" className={`mr-6  ${addImageClassName}`} />
      <div>
        <h4 className="text-lg font-semibold font-mono text-gray-600">
          {stacks}
        </h4>
        <p className="text-sm font-sans text-gray-400 font-semibold mt-2">
          {level}
        </p>
      </div>
    </div>
  );
}
