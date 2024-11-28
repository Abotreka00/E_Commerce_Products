import image from "../assets/images/author.jpg"; // Replace with your image path

function Contact() {
  return (
    <div className="bg-gray-100">
      {/* create h2 contact me */}
      <h2 className="text-3xl font-bold text-center text-gray-800 uppercase pt-5">
        contact me
      </h2>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center">
        <div className="w-full md:w-1/2 flex flex-row items-center gap-5 md:flex-col">
          <a
            href="https://github.com/Abotreka00"
            className="cursor-pointer text-2xl font-bold hover:text-blue-600 duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/saleh.hossam.988/"
            className="cursor-pointer text-2xl font-bold hover:text-blue-600 duration-300"
          >
            facebook
          </a>
          <a
            href="201011073975"
            className="cursor-pointer text-2xl font-bold hover:text-blue-600 duration-300"
          >
            WhatsApp
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Contact Us"
            className="rounded-lg shadow-md mx-auto mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
