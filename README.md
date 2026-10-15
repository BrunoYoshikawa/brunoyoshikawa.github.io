# Site do Casamento — Bruno & Elizabete

Site do casamento de Bruno & Elizabete (01/11/2026, Fazenda Fagundes — Mairiporã/SP), publicado em **[brunoelizabete.com](https://brunoelizabete.com)** via GitHub Pages.

É um site estático (HTML + CSS + JavaScript puro, sem build e sem dependências para instalar), com:

- **Página principal** com informações do casamento, local, traje e mapa;
- **Confirmação de presença (RSVP)** salva no Firebase Firestore, com aviso por e-mail;
- **Lista de presentes** com pagamento via Pix (QR Code + copia e cola) ou cartão (Stripe);
- **Painel administrativo** para acompanhar as confirmações e gerenciar a lista de convidados;
- **Convite digital** com geração de PDF;
- Suporte a **dois idiomas** (português e inglês).

## Estrutura do projeto

```
.
├── index.html            # Redireciona para home.html
├── home.html             # Página principal: casamento, local, traje e formulário de RSVP
├── presentes.html        # Lista de presentes (Pix / cartão + mensagem para os noivos)
├── admin-rsvp.html       # Painel de gestão de RSVP e convidados (login Google, só admins)
├── script.js             # Configuração do casamento, traduções (PT/EN), RSVP, Pix e presentes
├── styles.css            # Estilos do site
├── assets/               # Imagens (fotos dos presentes, bandeiras, ícones)
├── Convite/
│   ├── index.html        # Convite digital
│   └── gerar-pdf.html    # Gera o PDF do convite (html2canvas + jsPDF)
├── server/
│   ├── firebase-config.js  # Configuração pública do Firebase e chave do App Check
│   ├── firebase-db.js      # Acesso ao Firestore (RSVP, convidados) e login Google
│   └── firestore.rules     # Regras de segurança do Firestore
├── CNAME                 # Domínio personalizado do GitHub Pages
└── .vscode/launch.json   # Abre o Chrome em http://localhost:8080 para depuração
```

## Como funciona

### Configuração do casamento

Os dados principais ficam no início de [`script.js`](script.js), no objeto `WEDDING_CONFIG`:

| Campo | Descrição |
| --- | --- |
| `coupleNames`, `date`, `time` | Nomes do casal, data e horário exibidos no site |
| `venueName`, `venueAddress`, `mapsQuery` | Local da festa e busca usada no Google Maps |
| `pixKey`, `pixReceiverName`, `pixReceiverCity` | Dados usados para gerar o código Pix dos presentes |
| `web3formsKey` | Chave do [Web3Forms](https://web3forms.com) para receber e-mails de RSVP e mensagens |
| `rsvpEmail` | E-mail de fallback para os RSVPs |

Os textos traduzíveis ficam no objeto `I18N` (chaves `pt` e `en`) do mesmo arquivo. Nos HTMLs, os elementos com `data-i18n="chave"` recebem o texto do idioma selecionado.

### RSVP

1. O convidado preenche o formulário em `home.html`.
2. `script.js` carrega `server/firebase-db.js` e grava a resposta na coleção `respostas` do Firestore. O ID do documento é o e-mail, então só é possível confirmar uma vez por e-mail.
3. Uma notificação é enviada por e-mail via Web3Forms.

### Painel administrativo (`admin-rsvp.html`)

- Login com conta Google. Só os e-mails listados na função `isAdmin()` de [`server/firestore.rules`](server/firestore.rules) conseguem ler e editar os dados.
- Mostra as respostas do RSVP em tempo real e permite editar/remover.
- Gerencia a coleção `convidados`, incluindo **importação de CSV** exportado da aba "Lista de Convidados" do Google Sheets (a importação faz merge, então importar o mesmo arquivo de novo não duplica registros).

### Presentes (`presentes.html`)

Cada presente tem um botão **Pix** (gera QR Code e código copia e cola com o valor do presente) e um botão **Cartão** (link de pagamento do Stripe). Nos dois casos o convidado pode deixar uma mensagem para os noivos.

Para adicionar ou alterar um presente, edite o `<article>` correspondente em `presentes.html`: `data-title` (nome sem acentos, usado no Pix), `data-amount` (valor em reais) e `data-link` (link do Stripe).

### Segurança

- A configuração do Firebase em `firebase-config.js` é pública por natureza; a proteção dos dados vem das **regras do Firestore** (`server/firestore.rules`), que só permitem ao público **criar** respostas válidas e restringem leitura/edição aos admins.
- O **Firebase App Check** (reCAPTCHA Enterprise) bloqueia chamadas ao Firestore que não vêm do site.

## Como rodar localmente

Como o projeto usa módulos ES (`import`), as páginas precisam ser servidas por um servidor HTTP — abrir o arquivo direto no navegador (`file://`) não funciona para o RSVP e o painel admin.

Pré-requisito: Python 3 (já vem no macOS) **ou** Node.js.

1. Clone o repositório:

   ```bash
   git clone https://github.com/BrunoYoshikawa/brunoyoshikawa.github.io.git
   ```

2. Dentro da pasta do projeto, suba um servidor na porta 8080 (escolha uma das opções):

   ```bash
   python3 -m http.server 8080
   ```

   ```bash
   npx serve -l 8080
   ```

3. Acesse [http://localhost:8080](http://localhost:8080).

   No VS Code, também é possível usar a configuração **"Launch Chrome against localhost"** (`.vscode/launch.json`) para abrir o Chrome com o depurador já conectado.

### App Check em ambiente local

Em `localhost`, o App Check usa um **token de depuração**. Sem ele, o envio do RSVP e o painel admin são bloqueados pelo Firebase.

1. Abra o site localmente e o console do navegador (F12). Na primeira vez, o SDK mostra um token de depuração no console.
2. Cadastre esse token em **Firebase Console → App Check → Gerenciar tokens de depuração**.
3. Para reutilizar sempre o mesmo token, rode no console do navegador:

   ```js
   localStorage.setItem("appCheckDebugToken", "<token>")
   ```

O token não deve ser colocado no código: quem tem o token passa pelo App Check.

## Deploy

O site é publicado automaticamente pelo **GitHub Pages** a partir da branch `main`. Basta fazer commit e push:

```bash
git push origin main
```

O domínio personalizado é definido no arquivo `CNAME`.

Ao alterar `styles.css` ou `script.js`, atualize o parâmetro de versão (`?v=...`) nas tags `<link>`/`<script>` dos HTMLs para evitar que os navegadores usem a versão antiga em cache.

### Regras do Firestore

As regras em `server/firestore.rules` **não** são publicadas pelo GitHub Pages. Depois de alterá-las (por exemplo, para adicionar um novo admin), copie o conteúdo para **Firebase Console → Firestore Database → Regras** e clique em **Publicar**.
