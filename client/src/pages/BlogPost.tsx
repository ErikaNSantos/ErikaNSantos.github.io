import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { getBlogPostById } from "@/blog/posts";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Streamdown } from "streamdown";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { language } = useLanguage();
  const [match, params] = useRoute("/blog/:id");
  
  if (!match) return <NotFound />;
  
  const post = getBlogPostById(params?.id);
  
  if (!post) return <NotFound />;

  const content = language === 'pt' ? post.content : post.contentEn;
  const title = language === 'pt' ? post.title : post.titleEn;
  const tags = language === 'pt' ? post.tags : post.tagsEn;

  return (
    <Layout>
      <article className="py-20 container">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                {language === 'pt' ? 'Voltar ao Blog' : 'Back to Blog'}
              </a>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
              {title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} {language === 'pt' ? 'minutos de leitura' : 'min read'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">{language === 'pt' ? 'Por' : 'By'} {post.author}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <Streamdown>{content}</Streamdown>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="glass-effect-dark rounded-2xl p-8">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-muted-foreground text-sm">
                    {language === 'pt' 
                      ? 'Cloud Engineer & Data Analyst'
                      : 'Cloud Engineer & Data Analyst'}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-center">
              <Link href="/blog">
                <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
                  {language === 'pt' ? 'Ver mais artigos' : 'Read more articles'}
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </a>
              </Link>
            </div>
          </motion.footer>
        </div>
      </article>
    </Layout>
  );
}
