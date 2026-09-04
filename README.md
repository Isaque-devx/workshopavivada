# Workshop de Louvor & Adoração — Landing Page

Landing page oficial de divulgação e inscrição do **Workshop de Louvor & Adoração com Nívea Izabella**, realizado pela **Igreja Cristã Avivada** e pelo **Ministério Palavra Viva**, em Timóteo - MG.

## Sobre o evento

| | |
|---|---|
| **Evento** | Workshop de Louvor & Adoração com Nívea Izabella |
| **Data** | 26 de setembro de 2026 (sábado) |
| **Horário** | 15h às 18h |
| **Local** | Igreja Cristã Avivada — Rua 95, nº 2, bairro João XXIII, Timóteo - MG |
| **Investimento** | R$ 39,90 — 2º lote |
| **Ministração** | Nívea Izabella — cantora, professora de canto e instrutora ministerial |
| **Realização** | Igreja Cristã Avivada e Ministério Palavra Viva |

## Sobre o workshop

O workshop foi apresentado como um encontro para quem deseja **crescer em seu chamado e servir ao Senhor com excelência, caráter e propósito**.

A programação destaca a música como expressão de fé, além de aprendizado, comunhão e alinhamento ministerial para músicos e ministros de louvor.

As vagas são limitadas e as inscrições são realizadas pelo link oficial do evento.

## Sobre a ministra

**Nívea Izabella** é apresentada no site como cantora, professora de canto e instrutora ministerial.

Entre os destaques informados na página estão:

- Mais de **27 anos de experiência**
- Mais de **1.000 igrejas ministradas**
- Mais de **1.000 alunos capacitados**
- Experiência em **3 continentes**
- Vencedora do **Dom Reality 2**
- Trabalhos pela **Sony Music**

## Inscrições

As inscrições são realizadas pela plataforma **e-inscrição**, através do link oficial:

https://www.e-inscricao.com/igreja-crist-avivada/workshopniveaisabella

O valor informado atualmente na landing page é de **R$ 39,90 (2º lote)**.

Para dúvidas sobre pagamento e vagas, o site disponibiliza o Instagram **@igrejacristaavivada**.

## Localização

**Igreja Cristã Avivada**

Rua 95, nº 2, bairro João XXIII  
Timóteo - MG

A página também possui um botão para abrir a localização no Google Maps.

## Tecnologias

O projeto é um site estático desenvolvido com:

- **HTML5**
- **CSS3**, sem frameworks ou pré-processadores
- **JavaScript puro (ES6+)**, sem bibliotecas ou dependências externas

Não há etapa de build e não existe `package.json`. O projeto pode ser aberto diretamente no navegador.

## Estrutura do projeto

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── hero-art.jpg
│   │   ├── hero-bg-poster.jpg
│   │   └── og-workshop.jpg
│   ├── videos/
│   │   ├── hero-bg.mp4
│   │   └── hero-bg-mobile.mp4
│   ├── logos/
│   │   └── logo-icon.svg
│   └── fonts/
│       ├── hero-new-regular.woff
│       ├── hero-new-medium.woff
│       ├── hero-new-semibold.woff
│       ├── hero-new-bold.woff
│       └── hero-new-extrabold.woff
├── 404.html
├── robots.txt
└── README.md
```

### Principais arquivos

- `index.html` — estrutura, conteúdo, SEO, Open Graph e dados estruturados do evento.
- `css/style.css` — estilos, responsividade e identidade visual.
- `js/script.js` — interações e carregamento otimizado do vídeo.
- `assets/images/` — imagens utilizadas no site, incluindo a imagem específica para compartilhamento social.
- `assets/videos/` — versões desktop e mobile do vídeo de fundo do Hero.
- `assets/logos/` — elementos de identidade visual.
- `assets/fonts/` — arquivos da fonte Hero New.
- `404.html` — página personalizada para URLs inexistentes.
- `robots.txt` — orientação básica para rastreadores.

## SEO e compartilhamento

A versão atual inclui otimizações específicas para mecanismos de busca e compartilhamento:

- **Canonical** apontando para a URL oficial da landing page:
  `https://workshopniveaizabella.netlify.app/`
- Meta tags **Open Graph** com URLs absolutas.
- **Twitter Card** com imagem e texto alternativos.
- Imagem dedicada de compartilhamento social em `assets/images/og-workshop.jpg`, no formato **1200×630**.
- Dados estruturados **JSON-LD do tipo Event**, com data, horário, local, organizador e link de inscrição.
- `preconnect` para o domínio externo utilizado no processo de inscrição.

O canonical identifica a landing page como URL preferencial para indexação; o link da e-inscrição continua sendo utilizado somente como destino das inscrições.

## Funcionalidades

- Header que recebe fundo e efeito de blur ao rolar a página.
- Menu mobile com abertura e fechamento.
- Fechamento do menu mobile pelo botão, por `Esc` ou ao selecionar um link.
- Contagem regressiva para o início do evento.
- Links de inscrição direcionando para a página oficial do e-inscrição.
- Link para localização no Google Maps.
- FAQ em formato de acordeão, mantendo apenas uma pergunta aberta por vez.
- Animações de entrada dos elementos conforme aparecem na tela.
- Pausa do vídeo do Hero quando ele deixa de estar visível.
- Respeito à preferência do sistema por redução de movimento (`prefers-reduced-motion`).
- CTA de inscrição integrado às seções da página, **sem botão flutuante/fixo no mobile**, preservando uma interface mais limpa.

## Contagem regressiva

A contagem regressiva é configurada para:

**26 de setembro de 2026, às 15h, horário de Brasília (UTC-3).**

Quando o evento chega ao horário configurado, o contador é zerado automaticamente.

## Identidade visual

A landing page utiliza uma identidade visual baseada principalmente em tons de roxo, branco e cinza.

As cores e demais estilos estão definidos no `css/style.css`.

A tipografia principal utilizada é a **Hero New**, disponibilizada localmente pelos arquivos `.woff` presentes em `assets/fonts/`.

## Vídeo do Hero e performance

O Hero utiliza um vídeo de fundo em loop e sem áudio, acompanhado de uma imagem de fallback (`hero-bg-poster.jpg`).

A estratégia atual utiliza duas versões do vídeo:

- `hero-bg.mp4` — versão principal para telas maiores.
- `hero-bg-mobile.mp4` — versão otimizada para dispositivos móveis, mantendo 1280×720 para preservar nitidez em telas de alta densidade.

A versão mobile foi reprocessada em 1280×720 com compressão H.264 ajustada para priorizar qualidade sem aumentar desnecessariamente o peso. O JavaScript escolhe a versão adequada ao viewport e somente inicia o carregamento quando o Hero está próximo da área visível. Quando o Hero sai da área visível, o vídeo é pausado.

Também são respeitados:

- `prefers-reduced-motion`, evitando a reprodução quando o usuário prefere menos movimento.
- Carregamento tardio do vídeo para evitar uma requisição pesada desnecessária antes do uso.
- Imagem de poster para manter o Hero visualmente pronto enquanto o vídeo não foi carregado.

## Acessibilidade e performance

O projeto inclui recursos básicos de acessibilidade e otimização, como:

- HTML semântico.
- Um único `<h1>` na página.
- Navegação por teclado.
- Foco visível.
- Skip link para o conteúdo principal.
- Atributos `alt` nas imagens.
- Ícones decorativos marcados com `aria-hidden`.
- Carregamento `lazy` para imagens secundárias.
- Script JavaScript carregado com `defer`.
- Suporte à preferência de redução de movimento.
- Layout responsivo sem duplicação de HTML para mobile.
- Proteções contra overflow horizontal em telas pequenas.
- Botões e áreas de toque dimensionados para uso em dispositivos móveis.

## Como executar

Não é necessário instalar nenhuma dependência.

1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` no navegador.

Como o projeto é estático e não possui processo de build, ele pode ser executado diretamente.

## Contatos e links

- **Site:** https://workshopniveaizabella.netlify.app/
- **Inscrições:** https://www.e-inscricao.com/igreja-crist-avivada/workshopniveaisabella
- **Instagram:** https://instagram.com/igrejacristaavivada
- **Localização:** link do Google Maps disponível no botão "Ver no mapa" da página.

---

**© 2026 Igreja Cristã Avivada. Todos os direitos reservados.**
