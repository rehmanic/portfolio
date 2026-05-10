import { Eye, Github, Files } from "lucide-react";
import Tooltip from "../utilities/Tooltip";

export default function ProjectCard({ projects }) {
    return (
        <main className="w-[90%] md:w-[85%] lg:w-[75%] h-auto mt-[10vh] flex flex-col mb-20 rounded-2xl shadow-lg text-white mx-auto">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="flex flex-col lg:flex-row backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg mt-8"
                >
                    {/* Details Section */}
                    <div className="w-full lg:w-[50%] p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-4 text-white">{project.title}</h1>
                            <p className="text-sm md:text-base text-gray-200">{project.description}</p>
                        </div>

                        <div className="mt-6 md:mt-8">
                            <h1 className="text-lg md:text-xl font-semibold mb-2 text-indigo-200">Tools & Tech</h1>
                            <div className="flex flex-wrap items-center gap-4">
                                {project.tech.map((tech, techIndex) => (
                                    <img
                                        key={techIndex}
                                        className="w-6 h-6"
                                        src={tech.logo}
                                        alt={tech.name}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ))}
                            </div>
                        </div>

                        <hr className="mt-8 border-white/10" />

                        <div className="mt-6 md:mt-8 flex items-center gap-6">
                            {project.links.live && project.links.live !== "#" && (
                                <Tooltip title="Demo">
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                        <Eye className="w-6 h-6 cursor-pointer" />
                                    </a>
                                </Tooltip>
                            )}
                            {project.links.github && project.links.github !== "#" && (
                                <Tooltip title="Code">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-6 h-6 cursor-pointer" />
                                    </a>
                                </Tooltip>
                            )}
                            {project.links.files && project.links.files !== "#" && (
                                <Tooltip title="Docs">
                                    <a href={project.links.files} target="_blank" rel="noopener noreferrer">
                                        <Files className="w-6 h-6 cursor-pointer" />
                                    </a>
                                </Tooltip>
                            )}
                        </div>
                    </div>

                    {/* Media Section */}
                    <div className="w-full lg:w-[50%] bg-white/10 flex items-center justify-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
                        <img
                            className="p-6 md:p-8 max-w-full h-auto object-contain"
                            src={project.media}
                            alt={`${project.title} Media`}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            ))}
        </main>
    );
}
