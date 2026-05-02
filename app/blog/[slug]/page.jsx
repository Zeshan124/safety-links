import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/Blog/BlogPost";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(/** @type {{ params: { slug: string } }} */ { params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Safety Links Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostPage(/** @type {{ params: { slug: string } }} */ { params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
    </div>
  );
}
