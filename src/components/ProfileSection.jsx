function ProfileSection({ user, texts }) {
  return (
    <section
      id="profile"
      className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 py-24 font-inter flex flex-col lg:flex-row items-center justify-between gap-16"
    >
      <div className="lg:w-1/2 text-left">
        <h1 className="text-6xl font-bold text-[#333333] mb-6 leading-tight">
          {texts.profile_greeting}
        </h1>
        <p className="text-xl text-[#4d4d4d] leading-relaxed">{user.bio}</p>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={user.avatar_url}
          className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full object-cover border-4 border-[#e6e6e6] shadow-lg"
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default ProfileSection;
