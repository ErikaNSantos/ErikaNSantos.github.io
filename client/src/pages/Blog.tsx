import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { getAllBlogPosts } from "@/blog/posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const { language, t } = useLanguage();
  const posts = getAllBlogPosts();

  return (
    <Layout>
      <section className="py-20 container">
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            {language === 'pt' ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'pt' 
              ? 'Artigos sobre Cloud Engineering, Python, Dados e Transição de Carreira.'
              : 'Articles about Cloud Engineering, Python, Data, and Career Transition.'}
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <a className="group glass-effect-dark rounded-2xl p-6 md:p-8 hover:glass-effect-strong transition-all duration-300 block">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                          {language === 'pt' ? post.title : post.titleEn}
                        </h2>
                        <p className="text-muted-foreground mt-2">
                          {language === 'pt' ? post.description : post.descriptionEn}
                        </p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} {language === 'pt' ? 'min' : 'min'}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(language === 'pt' ? post.tags : post.tagsEn).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
