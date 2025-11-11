# Configuration Resend pour le formulaire de soumission d'événements

## Étape 1 : Créer un compte Resend (gratuit)

1. Va sur [resend.com](https://resend.com)
2. Clique sur "Start Building for Free"
3. Crée un compte (avec GitHub ou email)

## Étape 2 : Obtenir ta clé API

1. Une fois connecté, va dans **API Keys** dans le menu latéral
2. Clique sur **Create API Key**
3. Donne-lui un nom (ex: "Limbo Production")
4. Sélectionne les permissions : **Full Access** (recommandé) ou **Sending access**
5. Copie la clé API (elle commence par `re_...`)

⚠️ **Important** : Cette clé ne sera affichée qu'une seule fois !

## Étape 3 : Configurer le fichier .env

Ouvre le fichier `.env` à la racine du projet et remplace :

```env
NUXT_RESEND_API_KEY=your-resend-api-key-here
```

Par ta vraie clé :

```env
NUXT_RESEND_API_KEY=re_123abc456def789ghi...
```

## Étape 4 : Configurer l'email de réception

Dans le même fichier `.env`, configure l'email où tu veux recevoir les soumissions :

```env
NUXT_CONTACT_EMAIL=ton-email@example.com
```

## Étape 5 : Tester localement

1. Redémarre le serveur Nuxt :
   ```bash
   npm run dev
   ```

2. Va sur http://localhost:3000/proposer-un-evenement

3. Remplis le formulaire et soumets-le

4. Tu devrais recevoir un email à l'adresse configurée ! 📧

## Limites du plan gratuit

Le plan gratuit de Resend offre :
- **3,000 emails/mois**
- Envoi depuis `onboarding@resend.dev` (domaine par défaut)
- Parfait pour commencer !

## (Optionnel) Utiliser ton propre domaine

Pour envoyer des emails depuis `contact@limbo.club` au lieu de `onboarding@resend.dev` :

1. Va dans **Domains** sur Resend
2. Clique sur **Add Domain**
3. Entre ton domaine : `limbo.club`
4. Ajoute les enregistrements DNS fournis chez ton hébergeur
5. Une fois vérifié, mets à jour le fichier [server/api/events/submit.post.ts](server/api/events/submit.post.ts) ligne 51 :

```typescript
from: 'Limbo <contact@limbo.club>', // Au lieu de onboarding@resend.dev
```

## Troubleshooting

### Erreur : "Missing API key"
- Vérifie que tu as bien redémarré le serveur après avoir modifié `.env`
- Vérifie que la clé commence par `re_`

### Email non reçu
- Vérifie tes spams
- Vérifie que l'email de réception est correct dans `.env`
- Regarde les logs dans la console Resend : https://resend.com/logs

### Erreur 403 Forbidden
- Ta clé API n'a peut-être pas les bonnes permissions
- Recrée une clé avec "Full Access"

## Support

- Documentation Resend : https://resend.com/docs
- Issues Limbo : https://github.com/jaimepaslart/limbo.club/issues
