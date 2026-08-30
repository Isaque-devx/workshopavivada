# Workshop de Louvor & Adoração — Landing Page

Landing page de divulgação e inscrição do **Workshop de Louvor & Adoração**, com ministração de **Nívea Izabella**, realizado pela **Igreja Cristã Avivada**.

## Sobre o evento

| | |
|---|---|
| **Data** | 26 de setembro de 2026 (sábado) |
| **Horário** | 15h às 18h |
| **Local** | Igreja Cristã Avivada — Rua 95, nº 21, João XXIII, Timóteo - MG |
| **Investimento** | R$ 40,00 |
| **Ministração** | Nívea Izabella — cantora, professora de canto e instrutora ministerial |

## Tecnologias

Site estático, construído apenas com:

- HTML5
- CSS3 (sem frameworks ou pré-processadores)
- JavaScript puro (ES6+), sem dependências

Não há etapa de build, nem `package.json`, nem servidor — o projeto é feito para ser aberto direto no navegador.

## Estrutura do projeto

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── hero-art.jpg          # arte oficial de divulgação
│   │   └── hero-bg-poster.jpg    # frame do vídeo do Hero (fallback)
│   ├── videos/
│   │   └── hero-bg.mp4           # vídeo de fundo do Hero
│   ├── logos/
│   │   └── logo-icon.svg         # ícone da marca (nota + play)
│   └── fonts/                    # reservado para a fonte oficial (ver abaixo)
└── README.md
```

## Como executar

Não é necessário instalar nada.

1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` no navegador.

## Identidade visual

- **Cores:** `#7B4FF5`, `#560FF3`, `#FFFFFF`, `#5D5C66`, definidas como variáveis CSS em `:root` no início de `style.css`.
- **Tipografia:** a fonte oficial da marca é a **Hero New**. Como os arquivos dela ainda não foram disponibilizados, o projeto usa **Plus Jakarta Sans** (Google Fonts) como substituta temporária. A estrutura `@font-face` já está pronta e comentada no topo do `style.css` — basta adicionar os `.woff2` em `assets/fonts/` e descomentar o bloco quando a fonte chegar.
- **Vídeo do Hero:** vídeo de fundo em loop, sem áudio, levemente escurecido. É pausado automaticamente quando sai da tela e não é reproduzido caso o usuário tenha ativado a preferência de redução de movimento no sistema.

## Funcionalidades

- Header que ganha fundo com blur ao rolar a página
- Menu mobile acessível, com fechamento por `Esc` ou clique em item
- Contagem regressiva até o evento, no Hero (dias, horas, minutos e segundos)
- Acordeão de perguntas frequentes (FAQ), navegável por teclado
- Animações de entrada dos elementos ao rolar a página
- Respeita a preferência do sistema por menos animação (`prefers-reduced-motion`)

## Acessibilidade e performance

- HTML semântico, com um único `<h1>` por página
- Navegação por teclado com foco visível e *skip link* para o conteúdo principal
- Imagens com `alt` descritivo; ícones decorativos marcados como `aria-hidden`
- Imagem principal com `preload`; demais imagens carregadas com `loading="lazy"`
- Script carregado com `defer`

## Pendências antes da publicação

Os campos abaixo aparecem como placeholder no código e precisam ser preenchidos:

| Placeholder | Onde encontrar |
|---|---|
| `[LINK DE INSCRIÇÃO]` | Botões de inscrição (header, hero, seção de inscrição, FAQ, CTA final) e `<link rel="canonical">` |

Vale conferir também se o Instagram `@igrejacristaavivada`, usado como contato, está correto.

## Possíveis melhorias futuras

- Trocar a Plus Jakarta Sans pela fonte oficial Hero New, assim que os arquivos estiverem disponíveis
- Substituir o ícone SVG redesenhado pelo arquivo vetorial original, se houver
- Incorporar um mapa (Google Maps) na seção de local
