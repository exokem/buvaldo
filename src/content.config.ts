// 1. Import utilities from `astro:content`
import {defineCollection, getCollection, z} from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

const projectSchema = z.object({
	id: z.string(),
	metadata: z.object({
		title: z.string(),
		description: z.string(),
		year: z.string(),
		genre: z.string(),
		type: z.string(), // Editorial or directorial
		section: z.string(), // For page placement - hbo/narrative/etc.
		categories: z.array(z.string()),
		duration: z.object({
			hours: z.number().optional().default(0),
			minutes: z.number().optional().default(0),
			seconds: z.number().optional().default(0),
		}).optional(),
		credits: z.object({
			bryan: z.array(z.string()).optional(), // Bryan's roles
		}).optional()
	}),
	display: z.object({
		format: z.enum(['popup', 'page', 'external']),
		landscape: z.object({
			src: z.string(),
			alt: z.string().optional().default(''),
		}), // Landscape
		portrait: z.object({
			src: z.string(),
			alt: z.string().optional().default(''),
		}).optional(), // Portrait
		embed: z.object({
			type: z.enum(['youtube', 'dropbox', 'local']),
			src: z.string(),
			alt: z.string().optional().default(''),
		}).optional(),
	}),
})

// 3. Define your collection(s)
const projects = defineCollection({
	loader: glob({
		pattern: "**/*.toml",
		base: "./src/data/projects"
	}),
	schema: projectSchema
});

export type Project = z.infer<typeof projectSchema>

export async function getProjects() {
	const projects = await getCollection("projects");
	return projects.map(p => p.data) as Project[];
}

export async function getEditorialProjects(): Promise<Project[]> {
	const projects = await getProjects();
	return projects.filter(p => p.metadata.type === "editorial");
}

export async function getDirectorialProjects(): Promise<Project[]> {
	const projects = await getProjects();
	return projects.filter(p => p.metadata.type === "directorial");
}

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
