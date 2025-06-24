# Railway Deploy - Guida Completa

## Passo 1: Upload su GitHub

### Metodo Semplice (Web Interface)
1. Vai su **github.com**
2. Clicca **"New repository"** (pulsante verde)
3. Nome repository: `money-management-app`
4. Descrizione: `Advanced Money Management System with Beat the Delay Strategy`
5. Seleziona **"Public"** (necessario per Railway free)
6. NON aggiungere README o .gitignore
7. Clicca **"Create repository"**

8. Nella pagina vuota del repository:
   - Clicca **"uploading an existing file"**
   - Estrai il file `betting-app-final-corrected-v2.1.zip`
   - Trascina TUTTI i file nella finestra GitHub
   - Commit message: `Initial commit - Money Management App v2.1`
   - Clicca **"Commit new files"**

## Passo 2: Deploy su Railway

### Setup Account
1. Vai su **railway.app**
2. Clicca **"Login with GitHub"**
3. Autorizza Railway ad accedere ai tuoi repository

### Deploy Automatico
1. Clicca **"New Project"**
2. Seleziona **"Deploy from GitHub repo"**
3. Scegli `money-management-app`
4. Railway rileva automaticamente:
   - Node.js project
   - Package.json
   - Start command: `npm run dev`

### Configurazione Automatica
Railway configurerà automaticamente:
- ✅ Backend Express su porta dinamica
- ✅ Database PostgreSQL integrato
- ✅ Variabili ambiente
- ✅ SSL/HTTPS automatico

## Passo 3: Configurazione Database

### Aggiungi PostgreSQL
1. Nel dashboard Railway, clicca **"+ New"**
2. Seleziona **"Database" → "PostgreSQL"**
3. Il database si collega automaticamente al tuo backend

### Variabili Ambiente (Auto-generate)
Railway genera automaticamente:
- `DATABASE_URL`
- `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`

### Aggiungi Variabili Manuali
Nel tab "Variables" aggiungi:
- `SESSION_SECRET`: genera una stringa casuale
- `STRIPE_SECRET_KEY`: la tua chiave Stripe
- `VITE_STRIPE_PUBLIC_KEY`: chiave pubblica Stripe

## Passo 4: Deploy e Test

### Build Automatico
1. Railway esegue automaticamente:
   ```bash
   npm install
   npm run build  # se necessario
   npm run dev    # avvia il server
   ```

2. Ottieni URL pubblico: `https://money-management-app-production.up.railway.app`

### Verifica Funzionamento
- ✅ Frontend accessibile
- ✅ Backend API funzionante
- ✅ Database connesso
- ✅ Autenticazione attiva

## Risultato Finale

**URL Pubblico:** Condivisibile con chiunque
**Costo:** Completamente gratuito per 2-3 mesi
**Funzionalità:** Identiche a Replit, zero modifiche codice
**Performance:** Superiore a molti hosting gratuiti

## Risoluzione Problemi

### Se Build Fallisce
1. Verifica che `package.json` sia presente
2. Controlla che `node_modules` NON sia incluso nel repository
3. Railway logs mostrano errori specifici

### Se Database Non Si Connette
1. Verifica che `DATABASE_URL` sia settato automaticamente
2. Controlla che il database PostgreSQL sia "Running"
3. Railway auto-configura tutto, raramente problemi

## Monitoraggio

**Dashboard Railway:**
- Logs in tempo reale
- Metriche utilizzo
- Deploy history
- Database management

**Free Tier Limits:**
- $5 crediti/mese
- Circa 500 ore utilizzo
- Database illimitato in dimensioni