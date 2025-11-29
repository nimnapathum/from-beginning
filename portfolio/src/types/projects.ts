export interface ProjectProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    technologies: string[];
};

export interface ProjectsSectionProps {
    projects: ProjectProps[];
};

export interface BlogProps {
    id: string;
    title: string;
    content: string;
    summary: string;
    imageUrl: string;
    blogUrl: string;
    publishedDate: string;
    references: string[];
};

export interface BlogsSectionProps {
    blogs: BlogProps[];
};
