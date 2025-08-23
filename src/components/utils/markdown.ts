import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "markdown/blogs");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}
export type Post = {
  slug?: string;
  title?: string;
  date?: string;
  excerpt?: string;
  coverImage?: string;
  author?: string;
  authorImage?: string;
  content?: string;
  tag?: string;
  detail?: string;
  metadata?: Record<string, unknown>;
};

export function getPostBySlug(slug: string, fields: (keyof Post)[] = []): Post {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post = {};

  function processImages(content: string) {
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  // Cast the data object to a more specific type
  const postData = data as Post;

  fields.forEach((field) => {
    if (field === "slug") {
      items.slug = realSlug;
      return;
    }
    if (field === "content") {
      items.content = processImages(content);
      return;
    }
    if (field === "metadata") {
      items.metadata = { ...postData, coverImage: postData.coverImage || null };
      return;
    }

    // Check if the property exists on the postData object before assigning it
    if (postData[field]) {
      items[field] = postData[field];
    }
  });

  return items;
}

export function getAllPosts(fields: (keyof Post)[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      // Handle cases where date is undefined
      const date1 = post1.date || '0';
      const date2 = post2.date || '0';

      return date1 > date2 ? -1 : 1;
    });

  return posts;
}