import Button from "./button";
import ContactItem from "./contactitem";
import Field from "./field";

export default function ContactSec() {
  return (
    <section className="bg-white-800 mx-auto container 2xl:p-0" id="contact">
      <div className="bg-gray-100  flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-gray-500 border-b">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <h2 className="text-2xl font-mono font-semibold  text-black">
              Contact
            </h2>
            <p className="text-lg mt-4 text-grey-600 font-sans  text-gray-600">
              Wanna know more?
            </p>
            <ContactItem
              label="Email"
              value="yafi.tamfan08@gmail.com"
              icon="/mail.svg"
              className="mt-10"
            />
            <ContactItem
              label="Phone"
              value="08xxxxxx"
              icon="/phone.svg"
              className="mt-6"
            />
            <ContactItem
              label="Twitter"
              value="@pengenradiant"
              icon="/twitter.svg"
              className="mt-6"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form action="" className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap  -mx-4">
              <div className="lg:w-6/12 px-4 w-full">
                <Field label="Name" name="name" type="text" />
              </div>
              <div className="lg:w-6/12 px-4 w-full">
                <Field label="email" name="email" type="text" />
              </div>
            </div>
            <Field label="subject" name="subject" type="text" />
            <Field
              label="message"
              name="message"
              type="textarea"
              className="h-40"
            />

            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
