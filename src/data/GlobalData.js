const GlobalProps = {
	app: {
		title: 'Varco',
		description: 'Built with Svelte'
	},
	navMain : [
    { id: 1, name: "About", to: "/about" },
		{ id: 3, name: "Thinking", to: "/thinking" },
		{ id: 4, name: "Work", to: "/work" },
		{ id: 5, name: "Contact", to: "/contact" },
  ],
	services : [
    { id: 1, name: "Business", to: "/services/business", description:"", },
		{ id: 11, name: "Digital Transformation", to: "/services/digital-transformation", description:"", parent:1 },
		{ id: 12, name: "Work management", to: "/services/work-management", description:"" , parent:1 },
		{ id: 13, name: "Career mentorship", to: "/services/career-mentorship", description:"" , parent:1 },
		{ id: 2, name: "Technology", to: "/services/technology", description:"", },
		{ id: 21, name: "DevSecOps", to: "/services/devsecops", description:"" , parent:2 },
		{ id: 22, name: "Infrastructure", to: "/services/infrastructre", description:"", parent:2 },
		{ id: 23, name: "Creative Technology", to: "/services/infrastructre", description:"", parent:2 },
		{ id: 24, name: "Development", to: "/services/development", description:"", parent:2 },
		{ id: 25, name: "Skills assessment", to: "/services/skills-assessment", description:"", parent:2 },
		{ id: 3, name: "Experience", to: "/services/experience", description:""},
		{ id: 31, name: "Employee experience", to: "/services/employee-experience", description:"", parent:3 },
		{ id: 32, name: "User experience", to: "/services/user-experience", description:"", parent:3 },
  ],
};

export default GlobalProps;