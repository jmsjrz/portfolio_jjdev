import ProjectCard from "./ProjectCard";

function ProjectSection({ userRepo, texts }) {
  return (
    <section
      id="projects"
      className="w-full max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 py-24 font-inter"
    >
      <div className="text-left mb-12">
        <h2 className="text-5xl font-bold text-[#333333] mb-6">
          {texts.projects_title}
        </h2>
        <p className="text-xl text-[#4d4d4d] leading-relaxed">
          {texts.projects_description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {userRepo.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
