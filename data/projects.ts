// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "mizuki-blog",
		title: "博客主题 Mizuki 钟神秀自用",
		description:
			"融合Android原生质感与二次元美学：Material Design 3规范下的Astro博客主题",
		image: "https://img-zsx.oss-cn-shanghai.aliyuncs.com/QQ_1762056304268.jpg",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "in-progress",
		liveDemo: "https://blog.zsx815.top",
		sourceCode: "https://github.com/mcyzsx/mizuki", // 更改为GitHub链接
		visitUrl: "https://blog.zsx815.top", // 添加前往项目链接
		startDate: "2025-11-01",
		// endDate: "2024-06-01",
		featured: true,
		tags: ["Blog"],
	},
	{
		id: "umami",
		title: "Umami网站统计",
		description:
			"Personal portfolio website showcasing project experience and technical skills.",
		image: "https://img-zsx.oss-cn-shanghai.aliyuncs.com/umami.webp",
		category: "web",
		techStack: ["TypeScript", "CSS"],
		status: "completed",
		// liveDemo: "https://portfolio.example.com",
		sourceCode: "https://github.com/mcyzsx/umami",
		visitUrl: "https://umami.050815.xyz", // 添加前往项目链接
		startDate: "2025-11-05",
		endDate: "2025-11-08",
		featured: true,
		tags: ["umami", "analytics"],
	},
	// {
	// 	id: "task-manager-app",
	// 	title: "Task Manager App",
	// 	description:
	// 		"Cross-platform task management application supporting team collaboration and project management.",
	// 	image: "",
	// 	category: "mobile",
	// 	techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
	// 	status: "in-progress",
	// 	startDate: "2024-03-01",
	// 	tags: ["Mobile", "Productivity", "Team Collaboration"],
	// },
	// {
	// 	id: "data-visualization-tool",
	// 	title: "Data Visualization Tool",
	// 	description:
	// 		"Data visualization tool supporting multiple chart types and interactive analysis.",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["Vue.js", "D3.js", "TypeScript", "Node.js"],
	// 	status: "completed",
	// 	liveDemo: "https://dataviz.example.com",
	// 	visitUrl: "https://dataviz.example.com", // 添加前往项目链接
	// 	startDate: "2023-06-01",
	// 	endDate: "2023-11-01",
	// 	tags: ["Data Visualization", "Analytics", "Charts"],
	// },
	// {
	// 	id: "e-commerce-platform",
	// 	title: "E-commerce Platform",
	// 	description:
	// 		"Full-stack e-commerce platform including user management, product management, and order processing features.",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
	// 	status: "planned",
	// 	startDate: "2024-07-01",
	// 	tags: ["E-commerce", "Full Stack", "Payment Integration"],
	// },
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
