import Button from "./Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ repo }) {
  return (
    <div className="rounded-lg p-6 w-full backdrop-blur-md transition duration-300 bg-[#f0f0f0] flex flex-col justify-between hover:bg-[#e6e6e6]/80 shadow-md max-w-sm mx-auto">
      <img
        src="https://via.placeholder.com/600x300"
        className="w-full h-48 rounded-lg object-cover mb-4"
        alt="Illustration"
      />
      <div className="flex flex-col items-start mb-4">
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
          {repo.name.replaceAll("-", " ")}
        </h3>
        <div className="flex gap-2 flex-wrap mb-4 w-full justify-start">
          {repo.languages.map((language, index) => (
            <span
              key={index}
              className="text-sm px-4 py-1 text-[#1a1a1a] font-semibold bg-[#e6e6e6]/20 border border-[#333333] rounded-xl"
            >
              {language}
            </span>
          ))}
        </div>
        <p className="max-w-[90ch] font-semibold text-sm text-[#4d4d4d] text-left mb-4">
          {repo.description}
        </p>
      </div>
      <div className="flex gap-4 mt-auto">
        <Button
          label="GitHub"
          href={repo.html_url}
          primary
          icon={<FaGithub />}
        />
        {repo.live_demo_url && (
          <Button
            label="Demo"
            href={repo.live_demo_url}
            icon={<FaExternalLinkAlt />}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
