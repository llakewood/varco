const GlobalProps = {
	app: {
		title: 'The Variables Co.',
		description: 'Because websites are more than just content on a page.'
	},
	navMain : [
		{ id: 3, name: "Design Thinking", to: "/thinking" },
		{ id: 1, name: "Tech Services", to: "/services" },
		{ id: 4, name: "Proof of Work", to: "/proof" }
  ],
	services : [
		{ id: 3, name: "Teams", to: "/people", description:"Putting humans at the center of your strategy.", children: [
			{ id: 1, name: "Career mentorship", to: "/services/career-mentorship", description:""  },
			{ id: 2, name: "Fit-gap analysis", to: "/services/fit-gap", description:""},
			{ id: 3, name: "Leadership alignment", to: "/services/leadership-alignment", description:""  },
			{ id: 4, name: "Team strategy", to: "/services/team-strategy", description:""  },
		] },
		{ id: 1, name: "Process", to: "/process", description:"New ways of working that enable transparency.", children: [
			{ id: 1, name: "Compliance", to: "/services/compliance", description:"Are your services accessible to everyone? Are you keeping transparent records? Compliance is no joke." },
			{ id: 2, name: "Digital Transformation", to: "/services/digital-transformation", description:"" },
			{ id: 3, name: "Project management", to: "/services/work-management", description:""  },
			{ id: 4, name: "Work management", to: "/services/work-management", description:""  },
		]  },
		{ id: 4, name: "Tech", to: "/technology", description:"Shift your investment from upkeep to innovation.", children: [
			{ id: 21, name: "DevSecOps", to: "/services/devsecops", description:"" },
			{ id: 22, name: "Infrastructure", to: "/services/infrastructre", description:"" },
			{ id: 23, name: "Modernization", to: "/services/infrastructre", description:"" },
			{ id: 24, name: "Web & Application Development", to: "/services/development", description:"" },
		]  },
		{ id: 5, name: "UX", to: "/experience", description:"Usability, usefulness, and desirability provided in your products and services.", children: [
			{ id: 1, name: "Accessibility", to: "/services/accessibility", description:"", },
			{ id: 2, name: "Creative Technology", to: "/services/infrastructre", description:"" },
			{ id: 3, name: "Design", to: "/services/user-experience", description:"" },
			{ id: 4, name: "Training", to: "/services/training", description:""  },

		]  },
  ],
	proof: [
		{
			id: 1,
			name: "Not for profit developers overwhelmed with support tasks",
			to: "/proof/nfp-support",
			description:"A not-for-profit community welfare organization needed help with expansion and implementation of product development, research, and app releases​. We worked closely with the team web applications and content management. The small team noted that their request intake workflow consisted of inbound emails and a spreadsheet. The spreadsheet, a 3-month-old initiative spearheaded by the team to organize incoming requests, quickly became a crucial tool for the team to communicate status and demand. The technology team created a solution to help manage their workflow. It was embraced, and bridged a gap, but it was not resolving problems with workload management, quality assurance, or customer support...",
			bumper: "Read how creative workshops led to game changing discussions",
			pillar: "experience",
			thumbnail: "matthew-waring-MJAoiige14E-unsplash.jpg"
		},
		{
			id: 2,
			name: "Blockchain full-stack bottleneck",
			to: "/proof/blockchain-bottleneck",
			description:"A highly technical team needed help to gain velocity in their product development.",
			bumper: "See how a fit-gap analysis and accessibility audit led to strategic resourcing",
			pillar: "process",
			thumbnail: "aron-visuals-BXOXnQ26B7o-unsplash.jpg"
		},
		{
			id: 6,
			name: "Leading with accessibility got this product team in the driver seat",
			to: "/proof/accessibile-design",
			description:"A cutting-edge technology incorporated WCAG compliance and went from consuming their design system to leading a global product design effort.",
			bumper: "Read how our accessiblity recommendations got this team recognized as global leaders",
			pillar: "process",
			thumbnail: "aron-visuals-BXOXnQ26B7o-unsplash.jpg"
		},
		{
			id: 3,
			name: "Digital agency saves time & money",
			to: "/proof/time-is-money-managed-services",
			description:"When ",
			bumper: "See how managed services and automation saved this company a senior salary",
			pillar: "technology",
			thumbnail: "morgan-housel-X_fbh4Utwk4-unsplash.jpg"
		},
		{
			id: 4,
			name: "Strategy took this start-up from skeleton crew to Round 1 funding",
			to: "/proof/time-is-money-automation",
			bumper: "See how a design exercise led to a development larger team",
			pillar: "people",
			description:"When ",
			thumbnail: "sam-power-tX5yF0fjVsQ-unsplash.jpg"
		},
		{
			id: 5,
			name: "Mentoring the next generation of leaders",
			to: "/proof/time-is-money-automation",
			bumper: "Learn how career guidance put these young professionals on track",
			pillar: "people",
			description:"When ",
			thumbnail: "markus-spiske-4PG6wLlVag4-unsplash.jpg"
		},
	]
};

export default GlobalProps;