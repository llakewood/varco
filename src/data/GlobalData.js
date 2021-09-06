const GlobalProps = {
	app: {
		title: 'The Variables Co.',
		description: 'Built with Svelte'
	},
	navMain : [
		{ id: 3, name: "Thinking", to: "/thinking" },
		{ id: 1, name: "Services", to: "/Services" },
		{ id: 4, name: "Proof", to: "/proof" },
		{ id: 5, name: "Contact", to: "/contact" },
  ],
	services : [
		{ id: 3, name: "People", to: "/services/people", children: [
			{ id: 25, name: "Fit-gap analysis", to: "/services/fit-gap", description:"", parent:2 },
			{ id: 13, name: "Career mentorship", to: "/services/career-mentorship", description:""  },
			{ id: 14, name: "Leadership alignment", to: "/services/leadership-alignment", description:""  },
		] },
		{ id: 1, name: "Process", to: "/services/process", children: [
			{ id: 11, name: "Digital Transformation", to: "/services/digital-transformation", description:"" },
			{ id: 12, name: "Work management", to: "/services/work-management", description:""  },
			{ id: 13, name: "Project management", to: "/services/work-management", description:""  },
		]  },
		{ id: 4, name: "Technology", to: "/services/technology", children: [
			{ id: 21, name: "DevSecOps", to: "/services/devsecops", description:"" },
			{ id: 22, name: "Infrastructure", to: "/services/infrastructre", description:"" },
			{ id: 24, name: "Development", to: "/services/development", description:"", parent:2 },
		]  },
		{ id: 5, name: "Experience", to: "/services/experience", children: [
			{ id: 1, name: "Accessibility", to: "/services/business", description:"", },
			{ id: 32, name: "User experience", to: "/services/user-experience", description:"", parent:3 },
			{ id: 23, name: "Creative Technology", to: "/services/infrastructre", description:"" },
		]  },
  ]
};

export default GlobalProps;