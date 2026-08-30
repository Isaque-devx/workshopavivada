# Workshop de Louvor & Adoração com Nívea Izabella

Landing Page para divulgação e captação de inscrições do **Workshop de Louvor & Adoração**, com ministração de **Nívea Izabella**, promovido pela **Igreja Cristã Avivada** (identidade visual assinada por **Ministério Palavra Viva**).

## Objetivo

Apresentar o evento de forma profissional e impactante, reforçando a identidade visual oficial (tons de roxo, tipografia geométrica, motivo de nota musical/play), e direcionar o visitante para a inscrição.

## Tecnologia

Projeto feito **exclusivamente** com HTML5, CSS3 e JavaScript puro (ES6+), sem frameworks, sem bibliotecas externas de UI e sem etapa de build. Basta abrir `index.html` no navegador.

## Estrutura de arquivos

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── hero-art.jpg      → arte oficial enviada (V3_INSCRICAO.png), otimizada para JPEG
│   │   └── hero-bg-poster.jpg → frame estático do vídeo de fundo, já escurecido (fallback / prefers-reduced-motion)
│   ├── videos/
│   │   └── hero-bg.mp4       → vídeo de fundo do Hero (enviado pelo usuário), recortado, sem áudio e escurecido
│   ├── logos/
│   │   └── logo-icon.svg     → ícone (nota + play) redesenhado em vetor a partir da identidade visual do PDF
│   └── fonts/                → vazio (ver seção "Tipografia")
└── README.md
```

## Como executar

1. Baixe/copie a pasta completa do projeto.
2. Dê duplo clique em `index.html` (ou abra pelo navegador).
3. Não é necessário Node.js, npm, servidor local ou qualquer build.

## Identidade visual utilizada

Fonte: PDF de identidade visual fornecido + arte oficial `V3_INSCRICAO.png`.

- **Cores oficiais:** `#7B4FF5`, `#560FF3`, `#FFFFFF`, `#5D5C66` — usadas como variáveis CSS (`:root`) e como base de gradientes, glows e sombras derivados.
- **Logo:** o PDF traz o símbolo em formato de imagem não vetorizável (raster incorporado como máscara). O ícone foi **redesenhado em SVG** (`assets/logos/logo-icon.svg`) reproduzindo fielmente a composição descrita e visualizada no material (triângulo "play" + nota musical), para uso nítido em qualquer resolução. Caso exista o arquivo vetorial original (.svg/.ai/.eps), recomenda-se substituí-lo diretamente.
- **Arte principal:** a imagem `V3_INSCRICAO.png` enviada foi usada como imagem do Hero e da seção de Ministração, sem cortes destrutivos, apenas otimizada para JPEG (`hero-art.jpg`) visando performance.
- **Vídeo de fundo do Hero:** vídeo enviado pelo usuário (registro ao vivo do ministério), usado como plano de fundo em loop da seção Hero, substituindo o gradiente roxo estático. Processamento aplicado com `ffmpeg`:
  - recorte dos primeiros 16s (ponto de início e fim com enquadramento parecido, para o loop ficar suave);
  - remoção total do áudio (`-an`) — o vídeo é puramente decorativo;
  - leve escurecimento e dessaturação (`eq=brightness=-0.08:contrast=1.05:saturation=0.95`);
  - reencode em H.264/yuv420p com `+faststart`, ~2,8 MB para 16s, para não pesar o carregamento do Hero.
  - Por cima do vídeo, uma camada escura (`.hero__scrim`) e o glow roxo original (`.hero__glow`) garantem contraste do texto e mantêm a identidade visual, independentemente do brilho do trecho do vídeo.
  - `assets/images/hero-bg-poster.jpg` é usado como `poster` do vídeo (primeiro frame, já escurecido) — aparece enquanto o vídeo carrega e substitui o vídeo por completo quando o sistema do usuário pede `prefers-reduced-motion: reduce` (nesse caso o JavaScript pausa o vídeo e remove o autoplay).
  - O vídeo é pausado automaticamente via `IntersectionObserver` quando o Hero sai da viewport, para economizar performance/bateria ao rolar a página.

## Tipografia

A identidade visual especifica a fonte **Hero New** (ExtraBold/Bold/SemiBold/Medium/Regular). Os arquivos da fonte **não foram enviados** neste projeto.

- A estrutura `@font-face` já está preparada e comentada no topo de `css/style.css` — basta adicionar os arquivos `.woff2` em `assets/fonts/` e descomentar o bloco.
- Enquanto isso, o projeto usa **Plus Jakarta Sans** (Google Fonts) como fonte substituta, por ter personalidade geométrica/arredondada semelhante à Hero New.
- A hierarquia de pesos e tamanhos (H1 34pt ExtraBold, H2 22pt Bold, H3 18pt SemiBold, Body 14pt Medium, Description 14pt Regular) foi respeitada nas variáveis `--fs-h1` a `--fs-desc` (com escala responsiva via `clamp()`).

## Informações ainda não fornecidas (placeholders)

Os itens abaixo aparecem como placeholder no código e **precisam ser substituídos** antes da publicação:

| Placeholder | Onde aparece |
|---|---|
| `[LINK DE INSCRIÇÃO]` | Botões de CTA (header, hero, seção de inscrição, FAQ, CTA final) e `<link rel="canonical">` |
| `[VALOR]` | Seção "Inscrição" e FAQ |
| `[WHATSAPP]` | Seção "Inscrição", rodapé e FAQ |

O Instagram foi preenchido como `@igrejacristaavivada`, conforme indicado nas instruções do projeto — confirme se o handle está correto antes de publicar.

Nenhum depoimento, número de vagas, cronograma, benefício ou dado de contato adicional foi inventado: o que não constava nos arquivos enviados foi deixado como placeholder ou omitido.

## Seções implementadas

Header · Hero · Sobre o Workshop · Ministração (Nívea Izabella) · Data/Horário/Local · Inscrição · FAQ · CTA final · Footer.

As seções "Para quem é" e "Experiência/Conteúdo" sugeridas no briefing **não foram criadas**, pois nenhuma informação real sobre público-alvo ou conteúdo programático foi fornecida — evitando textos fictícios apenas para preencher espaço.

## Funcionalidades JavaScript

- Menu mobile acessível (`button`, `aria-expanded`, `aria-controls`, fecha com `Esc`).
- Header que muda de aparência ao rolar a página.
- Barra de progresso de leitura no topo (elemento de assinatura visual, remete a uma "trilha").
- Acordeão de FAQ acessível via teclado (`aria-expanded`, `role="region"`).
- Animações de entrada (`fade-up`/`scale`) via `IntersectionObserver`.
- Respeita `prefers-reduced-motion: reduce` (desativa animações e scroll suave).

## Acessibilidade e performance

- HTML5 semântico (`header`, `nav`, `main`, `section`, `footer`), único `<h1>`.
- Navegação por teclado, foco visível (`:focus-visible`), skip link para o conteúdo principal.
- `alt` descritivo nas imagens, ícones decorativos com `aria-hidden`.
- Imagem do Hero convertida para JPEG otimizado, com `preload` (acima da dobra) e `loading="lazy"` na imagem repetida abaixo da dobra.
- `defer` no JavaScript, sem bibliotecas externas de UI.

## Dependências externas

- Google Fonts (Plus Jakarta Sans) — único recurso externo carregado, apenas como fonte substituta temporária da Hero New. Nenhuma chave de API, token ou credencial é utilizada em nenhum momento.

## Possíveis melhorias futuras

- Substituir Plus Jakarta Sans pelos arquivos oficiais da fonte Hero New.
- Substituir o ícone SVG redesenhado pelo arquivo vetorial original da marca, se disponível.
- Adicionar mapa incorporado (iframe) do Google Maps na seção de local, quando permitido.
- Adicionar contagem regressiva até o evento (26/09/2026), caso desejado.
- Formulário de inscrição embutido, caso a inscrição não seja feita por link externo.
