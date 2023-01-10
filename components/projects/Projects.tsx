import ProjectItem from "./projectitem";

export default function ProjectSec() {
  return (
    <section className="py-20 bg-background" id="project">
      <div className="container mx-auto 2xl:p-0">
        <h2 className="text-2xl font-mono font-semibold text-center text-white">
          <span className="text-purple-500">03.</span> Project
        </h2>
        <p className="text-lg mt-4 text-grey-600 font-sans text-center text-white text-opacity-60">
          things i've built with technologies{" "}
        </p>

        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              image="/hasten.png"
              title="Hasten"
              desc="Hasten is a web application that helps you to manage your task. Hasten is built with NextJS, TailwindCSS, and Firebase. Hasten is still in development. You can check the progress on Github."
            />
          </div>
          <div className="px-4 pb-8 md:w-6/12 w-full">
            <ProjectItem
              image="/resources.png"
              title="Resources"
              desc="Resources is a web application that helps you to manage your task. Hasten is built with NextJS, TailwindCSS, and Firebase. Hasten is still in development. You can check the progress on Github."
            />
          </div>
          <div className="px-4 pb-8 md:w-6/12 w-full">
            <ProjectItem
              image="/resources.png"
              title="Resources"
              desc="Resources is a web application that helps you to manage your task. Hasten is built with NextJS, TailwindCSS, and Firebase. Hasten is still in development. You can check the progress on Github."
            />
          </div>
          <div className="px-4 pb-8 md:w-6/12 w-full">
            <ProjectItem
              image="/resources.png"
              title="Resources"
              desc="Resources is a web application that helps you to manage your task. Hasten is built with NextJS, TailwindCSS, and Firebase. Hasten is still in development. You can check the progress on Github."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
