import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>My Project</span>,
	project: {
		link: "https://github.com/attlr-ui/docs",
	},
	// chat: {
	// 	link: "https://discord.com",
	// },
	docsRepositoryBase: "https://github.com/attlr-ui/docs",
	footer: {
		component: <div>Axole</div>,
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s – Attlr UI Docs",
			description: "Documentation for Attlr UI",
			openGraph: {
				siteName: "Attlr UI Docs",
				title: "Attlr UI Docs",
				description: "Documentation for Attlr UI",
				locale: "en_US",
			},
		};
	},
	primaryHue: {
		dark: 500,
		light: 530,
	},
};

export default config;
