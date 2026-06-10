export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  date: string;
  readTime: number;
  tags: string[];
  tagsEn: string[];
  content?: string;
  contentEn?: string;
  author?: string;
}

// Aqui você adicionará os seus posts do blog no futuro
const posts: BlogPost[] = [
  // Modelo de post — descomente e edite quando publicar o primeiro artigo:
  // {
  //   id: "meu-primeiro-post",
  //   title: "Título em português",
  //   titleEn: "Title in English",
  //   description: "Descrição curta.",
  //   descriptionEn: "Short description.",
  //   date: "2026-06-09",
  //   readTime: 5,
  //   tags: ["Dados"],
  //   tagsEn: ["Data"],
  //   content: "Conteúdo em português...",
  //   contentEn: "Content in English..."
  // }
];

// Função que o Blog.tsx está tentando importar
export function getAllBlogPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Possivelmente você também precisará desta função para a página BlogPost.tsx
export function getBlogPostById(id: string): BlogPost | undefined {
  return posts.find(post => post.id === id);
}
