import Button from "../button";

export default function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto 2xl:p-0 text-center">
        <h2 className="text-2xl font-mono font-semibold text-center text-white">
          <span className="text-purple-500">03.</span> Lets get in touch!
        </h2>
        <p className="text-lg mt-4 font-sans text-center text-white text-opacity-60">
          have an idea and wanna make it real? let's discuss!
        </p>

        <Button className="mt-10" variant="secondary" pill>
          Say Hello!
        </Button>
      </div>
    </section>
  );
}
