function Header({ contact, user }) {
  return (
    <header className="sticky top-0 left-0 w-full bg-white py-6 shadow-lg z-50 font-inter">
      <nav className="w-full px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        <h1 className="text-2xl text-[#333333] font-semibold">{user.name}</h1>
        <div className="flex items-center gap-x-4">
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
      </nav>
    </header>
  );
}

export default Header;
