# GitHub Desktop - Procedura Completa

## Passo 1: Preparazione File
1. Scarica `betting-app-railway-ready.zip`
2. Estrai la cartella sul desktop
3. Rinomina la cartella in `money-management-app`

## Passo 2: GitHub Desktop - Metodo Alternativo

### Opzione A: Se non riesci a creare repository
1. Apri **GitHub Desktop**
2. Clicca **"Add an Existing Repository from your hard drive"**
3. Clicca **"Choose..."**
4. Seleziona la cartella `money-management-app` estratta dal zip
5. GitHub Desktop dirà "This directory does not appear to be a Git repository"
6. Clicca **"create a repository"**

### Opzione B: Drag & Drop
1. Apri **GitHub Desktop**
2. Trascina la cartella `money-management-app` direttamente nella finestra
3. Scegli **"Add this repository"**

## Passo 3: Copiare File
1. GitHub Desktop ha creato una cartella vuota
2. Apri la cartella `money-management-app` appena creata
3. Copia TUTTI i file dalla cartella estratta dal zip
4. Incolla nella cartella del repository GitHub Desktop
5. Sovrascrivi il README.md se chiesto

## Passo 4: Commit e Push
1. Torna su GitHub Desktop
2. Vedrai tutti i file nella sezione "Changes"
3. Nel campo **"Summary"** scrivi: `Initial commit - Money Management App v2.1`
4. Clicca **"Commit to main"**
5. Clicca **"Publish repository"**
6. Configurazione publish:
   - **Name**: `money-management-app`
   - **Description**: `Advanced Money Management System`
   - **Keep this code private**: ❌ Deseleziona (deve essere pubblico per Railway free)
7. Clicca **"Publish Repository"**

## Passo 5: Verifica su GitHub.com
1. Vai su github.com
2. Dovresti vedere il repository `money-management-app`
3. Verifica che tutti i file siano presenti

## Passo 6: Deploy Railway
1. Vai su **railway.app**
2. **"Login with GitHub"**
3. **"New Project"** → **"Deploy from GitHub repo"**
4. Seleziona `money-management-app`
5. Railway configurazione automatica:
   - Rileva Node.js
   - Configura build automatico
   - Aggiunge database PostgreSQL

## Passo 7: Configurazione Database
1. Nel dashboard Railway, clicca **"+ New"**
2. **"Database"** → **"PostgreSQL"**
3. Il database si collega automaticamente

## Passo 8: Variabili Ambiente
Nel tab "Variables" di Railway aggiungi:
- `SESSION_SECRET`: `your-secret-key-here-123456789`
- `STRIPE_SECRET_KEY`: (la tua chiave Stripe se ce l'hai)
- `VITE_STRIPE_PUBLIC_KEY`: (la tua chiave pubblica Stripe)

## Risultato Finale
- Repository GitHub pubblico
- App deployed su Railway
- URL pubblico condivisibile
- Hosting gratuito per 2-3 mesi
- Database PostgreSQL incluso

## Aggiornamenti Futuri
Per aggiornare l'app:
1. Modifica file nella cartella locale
2. GitHub Desktop rileva modifiche automaticamente
3. Commit → Push
4. Railway fa deploy automatico della nuova versione