# Site Arianne Costa

Código novo em HTML, CSS e JavaScript, inspirado em https://ariannecosta.com.br/, consultado em 30/09/2026. Inclui as três fotos, fontes locais, layout responsivo, menu acessível e botões de WhatsApp e Instagram.

## Publicar pelo GitHub e Vercel (sem programar)

1. Extraia o ZIP no computador.
2. No GitHub, clique em **New repository**, dê o nome `arianne-costa-site` e crie o repositório.
3. Clique em **Add file → Upload files**. Arraste os ARQUIVOS e as pastas de dentro de `arianne-costa-site`, incluindo `assets`. O `index.html` precisa ficar na raiz do repositório, sem uma pasta acima dele. Faça o **Commit changes**.
4. Na Vercel, entre com sua conta do GitHub. Clique em **Add New → Project**, escolha esse repositório e clique em **Import**.
5. Escolha **Framework Preset: Other**. Deixe **Root Directory** na raiz, **Build Command** sem comando e **Output Directory** vazio ou `.`. Não precisa de comando de instalação, variável de ambiente, API ou banco de dados.
6. Clique em **Deploy**. A Vercel cria um endereço público para o site.
7. Para atualizar, edite os arquivos no GitHub e faça um novo commit. A Vercel publica novamente automaticamente quando a integração estiver conectada.

## O que editar

- `index.html`: nome, textos e seções.
- `styles.css`: cores, tamanhos e layout.
- `config.js`: WhatsApp, mensagem inicial e Instagram.
- `assets/images/`: fotos; mantenha os nomes ou altere os caminhos no HTML.
- `fonts.css` e `assets/fonts/`: fontes DM Sans e Playfair Display, incluídas localmente (licenças OFL incluídas).
- `vercel.json`: configuração de hospedagem.

O número de WhatsApp foi preservado exatamente do site de referência: `554187357456`. Confira se esse contato continua correto antes de publicar. Os botões abrem o WhatsApp; não há formulário nem armazenamento de dados.

## Ver no computador

Abra `index.html` no navegador. Se tiver Python, também pode executar `python -m http.server 8000` dentro da pasta e abrir http://localhost:8000.

## Imagens e conteúdo

As imagens e textos vieram do site informado. Publique esse material apenas com autorização de sua titular. O projeto contém código próprio, sem o bundle compilado original e sem dependências de Replit. Não inclui painel administrativo, agenda ou servidor, pois a página de referência funciona como página de apresentação e contato.
