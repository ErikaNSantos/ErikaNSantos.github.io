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
  content: string;
  contentEn: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "chemical-engineer-to-cloud",
    title: "De Engenheira Química para Cloud Engineer: Minha Jornada",
    titleEn: "From Chemical Engineer to Cloud Engineer: My Journey",
    description: "Como minha formação em Engenharia Química me preparou para Cloud Engineering e as lições que aprendi no caminho.",
    descriptionEn: "How my Chemical Engineering background prepared me for Cloud Engineering and the lessons I learned along the way.",
    date: "2024-12-11",
    readTime: 8,
    tags: ["Carreira", "Cloud", "Transição"],
    tagsEn: ["Career", "Cloud", "Transition"],
    author: "Érika Santos",
    image: "/images/blog-hero.png",
    content: `# De Engenheira Química para Cloud Engineer: Minha Jornada

Quando comecei minha carreira como Engenheira Química, nunca imaginei que terminaria trabalhando com infraestrutura em nuvem. Mas olhando para trás, vejo que o caminho fazia todo sentido.

## O Começo: Engenharia Química

Minha formação em Engenharia Química me deu uma base sólida em:
- **Análise de sistemas complexos** - entender como diferentes componentes interagem
- **Otimização de processos** - encontrar a forma mais eficiente de fazer algo
- **Resolução de problemas** - quando algo não funciona, você precisa investigar

Essas habilidades são **exatamente** o que você precisa em Cloud Engineering.

## O Pivot: Para Dados e Cloud

Enquanto trabalhava como Analista de Dados, percebi que:
1. Dados são criados por **sistemas** que precisam ser construídos
2. Esses sistemas precisam de **infraestrutura** para rodar
3. A infraestrutura em nuvem é a forma moderna de fazer isso

Comecei a estudar AWS, Docker e Terraform. E percebi que era como aprender uma nova "linguagem" para descrever sistemas - assim como em Química descrevemos reações com equações.

## As Transferências de Conhecimento

### 1. Pensamento Sistêmico
Em Química, você aprende que tudo é conectado. Uma mudança em um parâmetro afeta todo o sistema. Em Cloud, é a mesma coisa - uma mudança em uma variável de ambiente pode afetar toda a aplicação.

### 2. Otimização
Engenheiros Químicos são obcecados por eficiência. Em Cloud, isso se traduz em:
- Otimizar custos (não gastar mais do que precisa)
- Otimizar performance (aplicações rápidas)
- Otimizar segurança (menos vulnerabilidades)

### 3. Documentação e Comunicação
Em Química, você precisa documentar cada experimento para que outros possam reproduzir. Em Cloud, é a mesma coisa com Infrastructure as Code - você documenta sua infraestrutura para que seja reproduzível.

## O Que Aprendi

### Habilidades Técnicas
- **AWS**: EC2, Lambda, S3, RDS, VPC
- **Containerização**: Docker e Kubernetes
- **Infrastructure as Code**: Terraform
- **CI/CD**: GitHub Actions, GitLab CI
- **Programação**: Python, Bash, YAML

### Habilidades Soft
- **Paciência**: Aprender tecnologia nova leva tempo
- **Persistência**: Nem tudo funciona na primeira vez
- **Curiosidade**: A tecnologia muda rápido, você precisa estar sempre aprendendo
- **Humildade**: Não saber algo é uma oportunidade, não uma fraqueza

## Dicas para Quem Quer Fazer a Mesma Transição

1. **Comece com o básico**: Não tente aprender tudo de uma vez. Comece com Docker, depois Kubernetes, depois Terraform.

2. **Faça projetos**: A melhor forma de aprender é fazendo. Crie um projeto pessoal e implemente na nuvem.

3. **Leia documentação**: A documentação da AWS é excelente. Dedique tempo a entender os conceitos.

4. **Comunidade**: Participe de comunidades (Reddit, Discord, Meetups). Outras pessoas estão na mesma jornada.

5. **Seja consistente**: 1 hora por dia é melhor que 10 horas uma vez por semana.

## Conclusão

Minha jornada de Engenharia Química para Cloud Engineering não foi um salto aleatório. Foi uma evolução natural onde as habilidades que aprendi em um campo se aplicaram perfeitamente ao outro.

Se você tem background em uma área diferente e quer entrar em Cloud, saiba que suas habilidades anteriores são um ativo, não um obstáculo. O que importa é a capacidade de aprender, resolver problemas e persistir.

A tecnologia muda, mas o pensamento crítico permanece.`,
    contentEn: `# From Chemical Engineer to Cloud Engineer: My Journey

When I started my career as a Chemical Engineer, I never imagined I would end up working with cloud infrastructure. But looking back, I see that the path made perfect sense.

## The Beginning: Chemical Engineering

My Chemical Engineering background gave me a solid foundation in:
- **Analyzing complex systems** - understanding how different components interact
- **Process optimization** - finding the most efficient way to do something
- **Problem-solving** - when something doesn't work, you need to investigate

These skills are **exactly** what you need in Cloud Engineering.

## The Pivot: To Data and Cloud

While working as a Data Analyst, I realized that:
1. Data is created by **systems** that need to be built
2. These systems need **infrastructure** to run
3. Cloud infrastructure is the modern way to do this

I started studying AWS, Docker, and Terraform. And I realized it was like learning a new "language" to describe systems - just like in Chemistry we describe reactions with equations.

## Knowledge Transfers

### 1. Systems Thinking
In Chemistry, you learn that everything is connected. A change in one parameter affects the entire system. In Cloud, it's the same thing - a change in an environment variable can affect the entire application.

### 2. Optimization
Chemical Engineers are obsessed with efficiency. In Cloud, this translates to:
- Optimizing costs (not spending more than needed)
- Optimizing performance (fast applications)
- Optimizing security (fewer vulnerabilities)

### 3. Documentation and Communication
In Chemistry, you need to document every experiment so others can reproduce it. In Cloud, it's the same with Infrastructure as Code - you document your infrastructure so it's reproducible.

## What I Learned

### Technical Skills
- **AWS**: EC2, Lambda, S3, RDS, VPC
- **Containerization**: Docker and Kubernetes
- **Infrastructure as Code**: Terraform
- **CI/CD**: GitHub Actions, GitLab CI
- **Programming**: Python, Bash, YAML

### Soft Skills
- **Patience**: Learning new technology takes time
- **Persistence**: Not everything works the first time
- **Curiosity**: Technology changes fast, you need to keep learning
- **Humility**: Not knowing something is an opportunity, not a weakness

## Tips for Those Who Want to Make the Same Transition

1. **Start with the basics**: Don't try to learn everything at once. Start with Docker, then Kubernetes, then Terraform.

2. **Do projects**: The best way to learn is by doing. Create a personal project and deploy it to the cloud.

3. **Read documentation**: AWS documentation is excellent. Take time to understand the concepts.

4. **Community**: Participate in communities (Reddit, Discord, Meetups). Other people are on the same journey.

5. **Be consistent**: 1 hour per day is better than 10 hours once a week.

## Conclusion

My journey from Chemical Engineering to Cloud Engineering was not a random leap. It was a natural evolution where the skills I learned in one field applied perfectly to the other.

If you have a background in a different field and want to get into Cloud, know that your previous skills are an asset, not an obstacle. What matters is the ability to learn, solve problems, and persist.

Technology changes, but critical thinking remains.`,
  },
  {
    id: "docker-beginners",
    title: "Docker para Iniciantes: Guia Prático",
    titleEn: "Docker for Beginners: A Practical Guide",
    description: "Entenda Docker do zero: o que é, por que usar, e como começar com exemplos práticos.",
    descriptionEn: "Understand Docker from scratch: what it is, why use it, and how to get started with practical examples.",
    date: "2024-12-10",
    readTime: 10,
    tags: ["Docker", "DevOps", "Tutorial"],
    tagsEn: ["Docker", "DevOps", "Tutorial"],
    author: "Érika Santos",
    image: "/images/blog-hero.png",
    content: `# Docker para Iniciantes: Guia Prático

Docker é uma das ferramentas mais importantes em Cloud Engineering. Se você quer trabalhar com Cloud, precisa entender Docker. Vamos começar do zero.

## O Que é Docker?

Imagine que você tem uma aplicação Python que roda perfeitamente no seu computador. Você envia para um colega, e ele diz: "Não funciona aqui!"

Por quê? Porque:
- Ele tem uma versão diferente do Python
- As dependências estão em versões diferentes
- O sistema operacional é diferente

**Docker resolve isso** empacotando sua aplicação **junto com tudo que ela precisa** para rodar.

É como enviar uma caixa com:
- Seu código
- Python 3.11
- Todas as bibliotecas (pandas, numpy, etc.)
- Configurações do sistema

Quando alguém abre a caixa (container), tudo funciona exatamente como deveria.

## Conceitos Principais

### 1. Image (Imagem)
Uma imagem Docker é como um "molde" ou "blueprint". É um arquivo que contém:
- Sistema operacional mínimo (Linux)
- Seu código
- Dependências
- Configurações

### 2. Container (Contêiner)
Um container é uma **instância em execução** de uma imagem. É como:
- Imagem = classe em programação
- Container = objeto/instância

Você pode ter múltiplos containers rodando da mesma imagem.

### 3. Dockerfile
É um arquivo de texto que descreve como construir uma imagem. Exemplo:

\`\`\`dockerfile
FROM python:3.11
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
\`\`\`

Tradução:
- **FROM**: Use Python 3.11 como base
- **WORKDIR**: Crie um diretório /app
- **COPY**: Copie requirements.txt
- **RUN**: Instale as dependências
- **COPY**: Copie todo o código
- **CMD**: Execute app.py quando iniciar

## Por Que Usar Docker?

### 1. Consistência
Seu código roda igual em qualquer lugar:
- Seu laptop
- Servidor de produção
- Computador do colega

### 2. Isolamento
Cada container é isolado. Se um container quebra, os outros continuam rodando.

### 3. Escalabilidade
Precisa de 10 instâncias da sua app? Crie 10 containers da mesma imagem.

### 4. Facilita DevOps
Com Docker + Kubernetes, você consegue:
- Deploy automático
- Auto-scaling
- Rollback fácil

## Começando com Docker

### Instalação
Baixe Docker Desktop em: https://www.docker.com/products/docker-desktop

### Seu Primeiro Container

1. **Crie um Dockerfile**:
\`\`\`dockerfile
FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install flask
CMD ["python", "app.py"]
\`\`\`

2. **Crie um app.py**:
\`\`\`python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Olá do Docker!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
\`\`\`

3. **Construa a imagem**:
\`\`\`bash
docker build -t meu-app:1.0 .
\`\`\`

4. **Execute o container**:
\`\`\`bash
docker run -p 5000:5000 meu-app:1.0
\`\`\`

5. **Acesse**: http://localhost:5000

Pronto! Seu app está rodando em um container.

## Comandos Essenciais

\`\`\`bash
# Listar imagens
docker images

# Listar containers em execução
docker ps

# Listar todos os containers
docker ps -a

# Parar um container
docker stop <container-id>

# Remover um container
docker rm <container-id>

# Ver logs
docker logs <container-id>

# Entrar dentro de um container
docker exec -it <container-id> bash
\`\`\`

## Próximos Passos

1. **Docker Compose**: Para rodar múltiplos containers (ex: app + banco de dados)
2. **Docker Hub**: Para compartilhar suas imagens
3. **Kubernetes**: Para orquestrar containers em produção

## Conclusão

Docker é essencial em Cloud Engineering. Não é difícil, é só questão de praticar.

Comece criando um Dockerfile para um projeto pessoal. Depois, explore Docker Compose. Depois, Kubernetes.

A jornada de 1000 milhas começa com um único container.`,
    contentEn: `# Docker for Beginners: A Practical Guide

Docker is one of the most important tools in Cloud Engineering. If you want to work with Cloud, you need to understand Docker. Let's start from scratch.

## What is Docker?

Imagine you have a Python application that runs perfectly on your computer. You send it to a colleague, and they say: "It doesn't work here!"

Why? Because:
- They have a different version of Python
- Dependencies are in different versions
- The operating system is different

**Docker solves this** by packaging your application **together with everything it needs** to run.

It's like sending a box with:
- Your code
- Python 3.11
- All libraries (pandas, numpy, etc.)
- System configurations

When someone opens the box (container), everything works exactly as it should.

## Main Concepts

### 1. Image
A Docker image is like a "mold" or "blueprint". It's a file that contains:
- Minimal operating system (Linux)
- Your code
- Dependencies
- Configurations

### 2. Container
A container is a **running instance** of an image. It's like:
- Image = class in programming
- Container = object/instance

You can have multiple containers running from the same image.

### 3. Dockerfile
It's a text file that describes how to build an image. Example:

\`\`\`dockerfile
FROM python:3.11
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
\`\`\`

Translation:
- **FROM**: Use Python 3.11 as base
- **WORKDIR**: Create an /app directory
- **COPY**: Copy requirements.txt
- **RUN**: Install dependencies
- **COPY**: Copy all code
- **CMD**: Run app.py when starting

## Why Use Docker?

### 1. Consistency
Your code runs the same everywhere:
- Your laptop
- Production server
- Colleague's computer

### 2. Isolation
Each container is isolated. If one container breaks, the others keep running.

### 3. Scalability
Need 10 instances of your app? Create 10 containers from the same image.

### 4. Facilitates DevOps
With Docker + Kubernetes, you can:
- Automatic deployment
- Auto-scaling
- Easy rollback

## Getting Started with Docker

### Installation
Download Docker Desktop at: https://www.docker.com/products/docker-desktop

### Your First Container

1. **Create a Dockerfile**:
\`\`\`dockerfile
FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install flask
CMD ["python", "app.py"]
\`\`\`

2. **Create an app.py**:
\`\`\`python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from Docker!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
\`\`\`

3. **Build the image**:
\`\`\`bash
docker build -t my-app:1.0 .
\`\`\`

4. **Run the container**:
\`\`\`bash
docker run -p 5000:5000 my-app:1.0
\`\`\`

5. **Access**: http://localhost:5000

Done! Your app is running in a container.

## Essential Commands

\`\`\`bash
# List images
docker images

# List running containers
docker ps

# List all containers
docker ps -a

# Stop a container
docker stop <container-id>

# Remove a container
docker rm <container-id>

# View logs
docker logs <container-id>

# Enter a container
docker exec -it <container-id> bash
\`\`\`

## Next Steps

1. **Docker Compose**: To run multiple containers (ex: app + database)
2. **Docker Hub**: To share your images
3. **Kubernetes**: To orchestrate containers in production

## Conclusion

Docker is essential in Cloud Engineering. It's not difficult, it's just a matter of practice.

Start by creating a Dockerfile for a personal project. Then explore Docker Compose. Then Kubernetes.

A journey of a thousand miles begins with a single container.`,
  },
  {
    id: "terraform-iac",
    title: "Terraform: Infrastructure as Code Explicado",
    titleEn: "Terraform: Infrastructure as Code Explained",
    description: "Aprenda como descrever sua infraestrutura em nuvem como código com Terraform.",
    descriptionEn: "Learn how to describe your cloud infrastructure as code with Terraform.",
    date: "2024-12-09",
    readTime: 12,
    tags: ["Terraform", "IaC", "AWS"],
    tagsEn: ["Terraform", "IaC", "AWS"],
    author: "Érika Santos",
    image: "/images/blog-hero.png",
    content: `# Terraform: Infrastructure as Code Explicado

Infrastructure as Code (IaC) é um dos conceitos mais importantes em Cloud Engineering moderno. Terraform é a ferramenta mais popular para isso.

## O Que é Infrastructure as Code?

Tradicionalmente, você criava infraestrutura clicando em botões:
1. Abra AWS Console
2. Clique em "Create EC2 Instance"
3. Configure tudo manualmente
4. Pronto!

Problema: Se você precisa de 100 instâncias, você clica 100 vezes? Não.

**Infrastructure as Code** significa descrever sua infraestrutura em um arquivo de texto, como você faz com código.

Exemplo:
\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "meu-servidor"
  }
}
\`\`\`

Isso cria uma instância EC2. Simples assim.

## Por Que Usar Terraform?

### 1. Reprodutibilidade
Você descreve sua infraestrutura uma vez, e pode criar 100 ambientes idênticos.

### 2. Versionamento
Sua infraestrutura fica em Git. Você pode:
- Ver histórico de mudanças
- Fazer rollback
- Code review antes de aplicar

### 3. Automação
Não precisa clicar em botões. Terraform faz tudo automaticamente.

### 4. Documentação
Seu código é a documentação. Qualquer pessoa pode entender como é sua infraestrutura.

## Conceitos Principais

### 1. Provider
É o "plugin" que Terraform usa para falar com AWS, Azure, GCP, etc.

\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}
\`\`\`

### 2. Resource
É algo que você quer criar (EC2, S3, RDS, etc.)

\`\`\`hcl
resource "aws_s3_bucket" "meu_bucket" {
  bucket = "meu-bucket-unico"
}
\`\`\`

### 3. Variable
São parâmetros que você pode passar.

\`\`\`hcl
variable "instance_type" {
  type    = string
  default = "t2.micro"
}

resource "aws_instance" "web" {
  instance_type = var.instance_type
}
\`\`\`

### 4. Output
São valores que Terraform retorna após criar recursos.

\`\`\`hcl
output "instance_ip" {
  value = aws_instance.web.public_ip
}
\`\`\`

## Começando com Terraform

### 1. Instalação
Baixe em: https://www.terraform.io/downloads

### 2. Crie um arquivo main.tf

\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "meu-servidor"
  }
}

output "instance_ip" {
  value = aws_instance.web.public_ip
}
\`\`\`

### 3. Inicialize Terraform

\`\`\`bash
terraform init
\`\`\`

Isso baixa o provider AWS.

### 4. Veja o que será criado

\`\`\`bash
terraform plan
\`\`\`

Terraform mostra exatamente o que vai criar.

### 5. Crie a infraestrutura

\`\`\`bash
terraform apply
\`\`\`

Pronto! Sua instância EC2 foi criada.

### 6. Destrua (quando não precisar mais)

\`\`\`bash
terraform destroy
\`\`\`

## Boas Práticas

### 1. Use Variáveis
Não coloque valores fixos no código.

\`\`\`hcl
variable "environment" {
  type = string
}

variable "instance_count" {
  type = number
}
\`\`\`

### 2. Use Módulos
Agrupe recursos relacionados.

\`\`\`hcl
module "vpc" {
  source = "./modules/vpc"
  cidr   = "10.0.0.0/16"
}
\`\`\`

### 3. Use State File com Cuidado
O arquivo \`.tfstate\` contém informações sensíveis. Não coloque em Git público!

\`\`\`bash
# .gitignore
*.tfstate
*.tfstate.*
\`\`\`

### 4. Use Remote State
Para produção, armazene state em S3 ou Terraform Cloud.

\`\`\`hcl
terraform {
  backend "s3" {
    bucket = "meu-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}
\`\`\`

## Exemplo Prático: VPC + EC2 + RDS

\`\`\`hcl
# VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

# Subnet
resource "aws_subnet" "main" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}

# EC2
resource "aws_instance" "app" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main.id
}

# RDS
resource "aws_db_instance" "postgres" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "14.7"
  instance_class       = "db.t3.micro"
  username             = "admin"
  password             = random_password.db_password.result
  skip_final_snapshot  = true
}

# Gera senha aleatória
resource "random_password" "db_password" {
  length = 16
}
\`\`\`

## Conclusão

Terraform é essencial para Cloud Engineering moderno. Com ele, você:
- Descreve infraestrutura como código
- Versioná-la em Git
- Automatiza tudo
- Documenta sua arquitetura

Comece com um projeto simples (VPC + EC2), depois evolua para arquiteturas mais complexas.

Infrastructure as Code não é apenas uma ferramenta, é uma mentalidade.`,
    contentEn: `# Terraform: Infrastructure as Code Explained

Infrastructure as Code (IaC) is one of the most important concepts in modern Cloud Engineering. Terraform is the most popular tool for this.

## What is Infrastructure as Code?

Traditionally, you created infrastructure by clicking buttons:
1. Open AWS Console
2. Click "Create EC2 Instance"
3. Configure everything manually
4. Done!

Problem: If you need 100 instances, do you click 100 times? No.

**Infrastructure as Code** means describing your infrastructure in a text file, like you do with code.

Example:
\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "my-server"
  }
}
\`\`\`

This creates an EC2 instance. That simple.

## Why Use Terraform?

### 1. Reproducibility
You describe your infrastructure once, and you can create 100 identical environments.

### 2. Versioning
Your infrastructure lives in Git. You can:
- See history of changes
- Rollback
- Code review before applying

### 3. Automation
No need to click buttons. Terraform does everything automatically.

### 4. Documentation
Your code is the documentation. Anyone can understand how your infrastructure is set up.

## Main Concepts

### 1. Provider
It's the "plugin" that Terraform uses to talk to AWS, Azure, GCP, etc.

\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}
\`\`\`

### 2. Resource
It's something you want to create (EC2, S3, RDS, etc.)

\`\`\`hcl
resource "aws_s3_bucket" "my_bucket" {
  bucket = "my-unique-bucket"
}
\`\`\`

### 3. Variable
They are parameters you can pass.

\`\`\`hcl
variable "instance_type" {
  type    = string
  default = "t2.micro"
}

resource "aws_instance" "web" {
  instance_type = var.instance_type
}
\`\`\`

### 4. Output
They are values that Terraform returns after creating resources.

\`\`\`hcl
output "instance_ip" {
  value = aws_instance.web.public_ip
}
\`\`\`

## Getting Started with Terraform

### 1. Installation
Download at: https://www.terraform.io/downloads

### 2. Create a main.tf file

\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "my-server"
  }
}

output "instance_ip" {
  value = aws_instance.web.public_ip
}
\`\`\`

### 3. Initialize Terraform

\`\`\`bash
terraform init
\`\`\`

This downloads the AWS provider.

### 4. See what will be created

\`\`\`bash
terraform plan
\`\`\`

Terraform shows exactly what it will create.

### 5. Create the infrastructure

\`\`\`bash
terraform apply
\`\`\`

Done! Your EC2 instance was created.

### 6. Destroy (when you don't need it anymore)

\`\`\`bash
terraform destroy
\`\`\`

## Best Practices

### 1. Use Variables
Don't hardcode values in your code.

\`\`\`hcl
variable "environment" {
  type = string
}

variable "instance_count" {
  type = number
}
\`\`\`

### 2. Use Modules
Group related resources.

\`\`\`hcl
module "vpc" {
  source = "./modules/vpc"
  cidr   = "10.0.0.0/16"
}
\`\`\`

### 3. Use State File Carefully
The \`.tfstate\` file contains sensitive information. Don't put it in a public Git repo!

\`\`\`bash
# .gitignore
*.tfstate
*.tfstate.*
\`\`\`

### 4. Use Remote State
For production, store state in S3 or Terraform Cloud.

\`\`\`hcl
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}
\`\`\`

## Practical Example: VPC + EC2 + RDS

\`\`\`hcl
# VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

# Subnet
resource "aws_subnet" "main" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}

# EC2
resource "aws_instance" "app" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.main.id
}

# RDS
resource "aws_db_instance" "postgres" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "14.7"
  instance_class       = "db.t3.micro"
  username             = "admin"
  password             = random_password.db_password.result
  skip_final_snapshot  = true
}

# Generate random password
resource "random_password" "db_password" {
  length = 16
}
\`\`\`

## Conclusion

Terraform is essential for modern Cloud Engineering. With it, you:
- Describe infrastructure as code
- Version it in Git
- Automate everything
- Document your architecture

Start with a simple project (VPC + EC2), then evolve to more complex architectures.

Infrastructure as Code is not just a tool, it's a mindset.`,
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
