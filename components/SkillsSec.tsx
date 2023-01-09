import Stacks from "./skillStacks";

export default function Skills() {
  return (
    <section className="bg-gray-100 py-28" id="skill">
      <div>
        <div className="container mx-auto 2xl:p-0">
          <h2 className="text-2xl font-mono font-semibold text-center text-black">
            Skills
          </h2>
          <p className="text-lg mt-4 text-grey-600 font-sans text-center text-gray-600">
            Tech stacks i use
          </p>
          <div className="flex -mx-4 mt-20 flex-wrap">
            <div className="md:w-4/12 w-full px-4 pb-8">
              <Stacks
                image="/nextjs.svg"
                level="beginner"
                stacks="NextTS"
                imageClassName="h-16 rounded-full"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <Stacks
                image="/flutter.svg"
                level="beginner"
                stacks="Flutter"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <Stacks
                image="/react.svg"
                level="beginner"
                stacks="React"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <Stacks
                image="/nextjs.svg"
                level="beginner"
                stacks="NextTS"
                imageClassName="h-16 rounded-full"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <Stacks
                image="/flutter.svg"
                level="beginner"
                stacks="Flutter"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <Stacks
                image="/react.svg"
                level="beginner"
                stacks="React"
                imageClassName="h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
