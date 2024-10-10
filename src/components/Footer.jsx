import Button from "./Button";

function Footer({ contact }) {
  return (
    <footer className="w-full py-12 bg-white text-[#333333] shadow-inner font-inter">
      <div className="max-w-[1024px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="bg-[#f0f0f0] rounded-xl p-8 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
          <div className="text-left">
            <h2 className="text-3xl font-medium mb-2">
              {contact.contact_text}
            </h2>
            <p className="text-base leading-relaxed">
              {contact.contact_description}
            </p>
          </div>
          <Button
            label={contact.button_label}
            href={`mailto:${contact.email}`}
            primary
          />
        </div>
        <div className="text-center mb-8">
          <p className="text-sm font-medium">{contact.footer_note}</p>
        </div>
        <div className="flex justify-center gap-4">
          <a href={`mailto:${contact.email}`}>
            <img
              src="https://img.icons8.com/ios-filled/50/333333/email.png"
              alt="Email"
              className="w-6 h-6 hover:opacity-70 transition duration-300"
            />
          </a>
          <a href={contact.linkedin_url}>
            <img
              src="https://img.icons8.com/ios-filled/50/333333/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-70 transition duration-300"
            />
          </a>
          <a href={contact.github_url}>
            <img
              src="https://img.icons8.com/ios-filled/50/333333/github.png"
              alt="GitHub"
              className="w-6 h-6 hover:opacity-70 transition duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
