# Guida Deployment su Google Cloud Run

## Preparazione Files

Il progetto include già tutti i file necessari per il deployment:
- `Dockerfile` - Configurazione container Docker
- `.dockerignore` - File da escludere dal build
- `cloudbuild.yaml` - Configurazione Cloud Build automatico
- `app.yaml` - Configurazione App Engine (alternativa)

## Metodo 1: Deploy Diretto con gcloud CLI

### 1. Installa Google Cloud CLI
```bash
# Su macOS
brew install google-cloud-sdk

# Su Ubuntu/Debian
curl https://sdk.cloud.google.com | bash
exec -l $SHELL
```

### 2. Configurazione iniziale
```bash
gcloud init
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

### 3. Deploy su Cloud Run
```bash
# Deploy diretto dal codice sorgente
gcloud run deploy betting-app \
    --source . \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --port 8080 \
    --memory 2Gi \
    --cpu 2
```

## Metodo 2: Deploy con Docker

### 1. Build locale dell'immagine
```bash
docker build -t betting-app .
```

### 2. Tag per Google Container Registry
```bash
docker tag betting-app gcr.io/YOUR_PROJECT_ID/betting-app
```

### 3. Push su GCR
```bash
docker push gcr.io/YOUR_PROJECT_ID/betting-app
```

### 4. Deploy su Cloud Run
```bash
gcloud run deploy betting-app \
    --image gcr.io/YOUR_PROJECT_ID/betting-app \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated
```

## Metodo 3: Deploy automatico con Cloud Build

### 1. Connetti repository GitHub
- Vai su Google Cloud Console
- Cloud Build > Triggers
- Connect Repository

### 2. Crea trigger automatico
- Usa il file `cloudbuild.yaml` incluso
- Deploy automatico ad ogni push

## Configurazione Variabili d'Ambiente

### Variabili richieste per Cloud Run:
```bash
gcloud run services update betting-app \
    --set-env-vars="DATABASE_URL=your_database_url" \
    --set-env-vars="SESSION_SECRET=your_session_secret" \
    --set-env-vars="STRIPE_SECRET_KEY=your_stripe_key" \
    --set-env-vars="VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key" \
    --set-env-vars="SENDGRID_API_KEY=your_sendgrid_key" \
    --set-env-vars="REPLIT_DOMAINS=your-app.run.app"
```

## Database Setup

### 1. Cloud SQL (Raccomandato)
```bash
# Crea istanza PostgreSQL
gcloud sql instances create betting-db \
    --database-version=POSTGRES_15 \
    --tier=db-f1-micro \
    --region=us-central1

# Crea database
gcloud sql databases create betting_app --instance=betting-db

# Ottieni connection string
gcloud sql instances describe betting-db
```

### 2. Neon Database (Alternativa)
- Vai su https://neon.tech
- Crea nuovo progetto PostgreSQL
- Copia connection string

## Monitoraggio e Logs

### Visualizza logs in tempo reale:
```bash
gcloud run services logs tail betting-app --region=us-central1
```

### Monitoring su Cloud Console:
- Cloud Run > betting-app > Logs
- Cloud Run > betting-app > Metrics

## Scalabilità Automatica

Il servizio si scala automaticamente:
- Min instances: 0 (costo zero quando inattivo)
- Max instances: 100
- Concurrency: 80 richieste per istanza
- CPU: 2 vCPU
- Memory: 2GB

## Sicurezza

### HTTPS automatico:
- Certificati SSL automatici
- HTTP redirect a HTTPS

### Variabili sicure:
```bash
# Usa Secret Manager per dati sensibili
gcloud secrets create stripe-secret --data-file=-
echo "your_stripe_key" | gcloud secrets create stripe-secret --data-file=-
```

## Costi Stimati

### Cloud Run (pay-per-use):
- CPU: $0.000024 per vCPU-secondo
- Memory: $0.0000025 per GB-secondo
- Requests: $0.40 per milione
- Free tier: 2 milioni richieste/mese

### Esempio mensile per 10k utenti:
- ~$20-50/mese per applicazione media
- Database Cloud SQL: ~$7-25/mese

## Troubleshooting

### Container non si avvia:
```bash
# Verifica logs
gcloud run services logs tail betting-app

# Test locale
docker run -p 8080:8080 betting-app
```

### Errori di build:
- Verifica Dockerfile
- Controlla dipendenze in package.json
- Test build locale: `docker build .`

### Database connection:
- Verifica connection string
- Controlla Cloud SQL Auth Proxy
- Test connessione locale

## Custom Domain

### 1. Aggiungi dominio personalizzato:
```bash
gcloud run domain-mappings create \
    --service betting-app \
    --domain your-domain.com \
    --region us-central1
```

### 2. Configura DNS:
- Aggiungi record CNAME al tuo DNS provider
- Punta a: ghs.googlehosted.com