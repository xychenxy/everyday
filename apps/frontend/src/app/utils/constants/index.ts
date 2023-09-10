import {
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	threejs,
} from "@/app/assets";

import restaurant from "@/app/assets/images/project-restaurant.png";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Front end developer",
		company_name: "Mutinex Group",
		icon: "",
		iconBg: "#383E56",
		date: "June 2021 - October 2022",
		points: [
			"Built and maintained the frontend project",
			"Built dynamic data charts based on UI Prototypes",
			"Migrated python backend to node/express backend",
			"Built an internal CMS to update website contents immediately",
			"Built the official website",
			"Involved in API structure upgrading and maintaining",
			"Involved in integration testing by using playwright",
			"Code Refactoring",
		],
	},
	{
		title: "JavaScript developer",
		company_name: "Palette",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "August 2020 - March 2021",
		points: [
			"Processed eCommerce orders using the Shopify StoreFront API",
			"Tracked stock levels using the Dear Inventory System API",
			"Integrated delivery APIs on backend, including Australia Post, Uber, and Couriers Please",
			"Automated printing of shipping labels using a Python script after successful delivery booking",
		],
	},
	{
		title: "Research Assistant",
		company_name: "RMIT University",
		icon: shopify,
		iconBg: "#383E56",
		date: "October 2019 - December 2019",
		points: [
			"Creating pages by using bootstrap, jQuery to show application form and tracking all the applications",
		],
	},
];

const projects = [
	{
		name: "Pirate Restaurants",
		description:
			"Pirate food is an online reaturant, users can visit various restaurants to order their favorite foods. It includes key features, such as Categories page, Restaurants page, Checkout page, Success page.",
		tags: [
			{
				name: "React",
				color: "text-blue-200",
			},
			{
				name: "Vanilla-extract css",
				color: "text-green-200",
			},
			{
				name: "TypeScript",
				color: "text-pink-200",
			},
		],
		image: restaurant,
		source_code_link: "https://github.com/xychenxy/nextjs-restaurants",
		link: "https://nextjs-13-restaurants.vercel.app/",
	},
];

export { technologies, experiences, projects };
