# Guida Completa Setup SendGrid per Invio Email Demo

## Passo 1: Creazione Account SendGrid

1. **Vai su SendGrid.com**
   - Apri il browser e vai su: https://sendgrid.com/
   - Clicca su "Start for Free" o "Get Started"

2. **Registrazione Account**
   - Inserisci la tua email aziendale (preferibilmente)
   - Crea una password sicura
   - Inserisci il tuo nome e cognome
   - Scegli il tipo di account: "Developer" o "Marketing"
   - Compila le informazioni richieste

3. **Verifica Email**
   - Controlla la tua email per il messaggio di verifica
   - Clicca sul link di verifica

## Passo 2: Configurazione Account

1. **Accesso al Dashboard**
   - Fai login su https://app.sendgrid.com/
   - Completa il setup iniziale se richiesto

2. **Verifica Sender Identity (IMPORTANTE)**
   - Vai su Settings > Sender Authentication
   - Clicca "Verify a Single Sender"
   - Inserisci un indirizzo email che controlli (es: noreply@tuodominio.com)
   - Compila tutti i campi richiesti
   - Clicca "Create"
   - Verifica l'email che riceverai

## Passo 3: Creazione API Key

1. **Naviga alle API Keys**
   - Nel menu laterale, vai su "Settings"
   - Clicca su "API Keys"

2. **Crea Nuova API Key**
   - Clicca "Create API Key"
   - Nome: "Betting App Demo Invites"
   - Permessi: Seleziona "Restricted Access"

3. **Configura Permessi**
   - Espandi "Mail Send"
   - Seleziona "Full Access" per Mail Send
   - Tutti gli altri permessi possono rimanere "No Access"
   - Clicca "Create & View"

4. **Copia la API Key**
   - La chiave apparirà UNA SOLA VOLTA
   - Inizia con "SG."
   - Copiala immediatamente e salvala in modo sicuro

## Passo 4: Configurazione nell'App

1. **Aggiunta Secret Key**
   - Quando richiesto, incolla la chiave API
   - Formato: `SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

2. **Aggiorna Sender Email**
   - Nel codice server, modifica l'email sender:
   - Cambia `noreply@bettingapp.com` con l'email verificata

## Risoluzione Problemi Comuni

### Problema: Email non arrivano
**Soluzione:**
- Verifica che il sender email sia stato verificato
- Controlla la cartella spam
- Assicurati che l'API key abbia i permessi corretti

### Problema: Errore "Forbidden"
**Soluzione:**
- L'email sender non è verificata
- I permessi dell'API key sono insufficienti
- Ri-verifica l'email sender

### Problema: Dominio personalizzato
**Soluzione:**
- Per domini personalizzati, usa "Domain Authentication"
- Aggiungi i record DNS richiesti
- Aspetta la propagazione DNS (24-48h)

## Piano Gratuito Limitazioni

- 100 email/giorno per sempre
- Supporto base
- Logo SendGrid nelle email

## Alternative se SendGrid non funziona

1. **Gmail SMTP** (per test)
2. **Mailgun** (simile a SendGrid)
3. **AWS SES** (più complesso)
4. **Sistema interno** (senza email esterne)

## Contatti Supporto

- Documentazione: https://docs.sendgrid.com/
- Supporto: https://support.sendgrid.com/