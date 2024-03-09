import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
	logo: (
		<Image
			src="/images/logo.png"
			alt="Hello"
			width={50}
			height={50}
		/>
	),
	project: {
		link: "https://github.com/attlr-ui/docs",
	},
	// chat: {
	// 	link: "https://discord.com",
	// },
	docsRepositoryBase: "https://github.com/attlr-ui/docs",
	footer: {
		text: (
			<span>
				MIT {new Date().getFullYear()} ©{" "}
				<a
					href="https://nextra.site"
					target="_blank"
				>
					Nextra
				</a>
				.
			</span>
		),
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
	faviconGlyph: "📚",
	logoLink: "/",
};

export default config;
