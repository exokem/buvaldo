// 1. Import utilities from `astro:content`
import {defineCollection, getCollection, getEntry, z} from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

const creditSectionSchema = z.object({
	title: z.string().optional(),
	credits: z.record(z.string(), z.string()),
})

const projectImagesSchema = z.array(z.object({
	folder: z.string().optional(),
	name: z.string(),
	description: z.string().optional().nullable().default(null),
	credit: z.string().optional(),
})).optional().default([])

export type ProjectImagesArray = z.infer<typeof projectImagesSchema>

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
		roles: z.string().optional().default(""),
		duration: z.object({
			hours: z.number().optional().default(0),
			minutes: z.number().optional().default(0),
			seconds: z.number().optional().default(0),
		}).optional().default({
			hours: 0,
			minutes: 0,
			seconds: 0,
		}),
		credits: z.record(z.string(), creditSectionSchema).optional().default({}),
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
	socials: z.object({
		youtube: z.string().optional(),
		imdb: z.string().optional(),
		instagram: z.string().optional(),
		linkedin: z.string().optional(),
		letterboxd: z.string().optional(),
	}).optional().default({}),
	awards: z.array(z.object({
		laurel: z.string()
	})).optional().default([]),
	page: z.object({
		folder: z.string(),
		trailer: z.string().optional(),
		presskit: z.string().optional(),
		stills: z.object({
			images: projectImagesSchema
		}),
		bts: z.object({
			images: projectImagesSchema
		}),
		extras: z.object({
			background: z.string(),
			images: projectImagesSchema
		}),
		credits: z.object({
			background: z.string(),
		})
	}).optional(),
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

export async function getProject(name: string): Promise<Project> {
	const project = await getEntry("projects", name);
	return project!.data as Project;
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
