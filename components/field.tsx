export default function Field({
  label,
  name,
  type,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  const formControlClassName = `bg-transparent border border-gray-500 py-3 px-6 w-full ${className}}`;

  const addClassName = className ? `${className}` : "";
  return (
    <div className="mb-6">
      <label className="block mb-1 text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === "textarea" && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}
