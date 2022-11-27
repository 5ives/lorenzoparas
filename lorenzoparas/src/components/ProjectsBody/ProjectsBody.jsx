import { AiOutlineCode } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';
import { ProjectsBodyContainer } from "./ProjectsBodyStyles";

const ProjectsBody = () => (
        <ProjectsBodyContainer>
            <h3>The <AiOutlineCode /> icon is a link to the project's live website. (if it exists)</h3>
            <h3>The <FaGithub /> icon is a link to the project's code.</h3>
        </ProjectsBodyContainer>
);

export default ProjectsBody;
