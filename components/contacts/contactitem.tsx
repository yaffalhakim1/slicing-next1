export default function ContactItem({
  label,
  value,
  icon,
  className,
}: {
  label: string;
  value: string;
  icon: string;
  className?: string;
}) {
  const addClassName = className ? `${className}` : "";
  return (
    <div className={`flex items-start ${addClassName}`}>
      <img src={icon} alt="" className="w-8" />
      <div className="ml-4">
        <div className="text-sm font-semibold mb-1 text-black">{label}</div>
        <div className="text-lg font-semibold  text-gray-700">{value}</div>
      </div>
    </div>
  );
}
