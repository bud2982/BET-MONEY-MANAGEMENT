# Guida Upload su GitHub

## Passo 1: Preparazione File
1. Scarica il file `betting-app-final-corrected-v2.1.zip`
2. Estrai la cartella sul tuo computer
3. Rimuovi la cartella `node_modules` se presente

## Passo 2: Creazione Repository GitHub
1. Vai su https://github.com
2. Clicca "New repository" (+ in alto a destra)
3. Nome repository: `betting-money-management`
4. Descrizione: `Advanced Money Management System with Beat the Delay Strategy`
5. Seleziona "Public" o "Private"
6. NON aggiungere README, .gitignore, o license (li hai già)
7. Clicca "Create repository"

## Passo 3: Upload Codice

### Metodo 1: GitHub Web Interface (Più Semplice)
1. Nella pagina del nuovo repository, clicca "uploading an existing file"
2. Trascina tutti i file della cartella estratta
3. Scrivi commit message: "Initial commit - Money Management App v2.1"
4. Clicca "Commit new files"

### Metodo 2: Git Command Line
```bash
# Nella cartella del progetto estratto
git init
git add .
git commit -m "Initial commit - Money Management App v2.1"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/betting-money-management.git
git push -u origin main
```

## Passo 4: Deploy su Vercel
1. Vai su https://vercel.com
2. Registrati con GitHub
3. Clicca "New Project"
4. Seleziona il tuo repository `betting-money-management`
5. Configurazioni:
   - Framework Preset: `Vite`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Aggiungi Environment Variables:
   - `DATABASE_URL`: URL del database esterno
   - `STRIPE_SECRET_KEY`: Chiave Stripe
   - `VITE_STRIPE_PUBLIC_KEY`: Chiave pubblica Stripe
7. Clicca "Deploy"

## Risultato
- URL pubblico tipo: `https://betting-money-management.vercel.app`
- Deploy automatico ad ogni push su GitHub
- HTTPS gratuito
- CDN globale