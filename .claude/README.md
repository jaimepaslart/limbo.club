# Configuration Claude pour Limbo.club

## Structure des fichiers

- `mcp_config.json` - Configuration des serveurs MCP avec vos clés API (ignoré par Git)
- `mcp_config.example.json` - Template de configuration (versionné dans Git)
- `README.md` - Cette documentation

## Serveurs MCP configurés

### 1. Filesystem
Permet à Claude d'accéder au système de fichiers du projet.
- **Commande**: `npx @modelcontextprotocol/server-filesystem`
- **Pas de configuration supplémentaire requise**

### 2. Brave Search
Permet à Claude d'effectuer des recherches sur le web.
- **Commande**: `npx @modelcontextprotocol/server-brave-search`
- **Configuration requise**: Définissez votre clé API Brave dans `BRAVE_API_KEY`
- **Obtenir une clé**: https://brave.com/search/api/

### 3. GitHub
Permet à Claude d'interagir avec GitHub (repos, issues, PRs).
- **Commande**: `npx @modelcontextprotocol/server-github`
- **Configuration requise**: Définissez votre token GitHub dans `GITHUB_PERSONAL_ACCESS_TOKEN`
- **Obtenir un token**: https://github.com/settings/tokens

### 4. Git
Permet à Claude d'effectuer des opérations Git sur le dépôt local.
- **Commande**: `npx @modelcontextprotocol/server-git`
- **Pas de configuration supplémentaire requise**

## Configuration des agents

### Agents intégrés Claude Code

Les agents suivants sont automatiquement disponibles dans Claude Code :
- **general-purpose**: Agent polyvalent pour les tâches complexes
- **Explore**: Agent spécialisé pour l'exploration du code
- **Plan**: Agent pour la planification de tâches

### Agents personnalisés

Les agents suivants sont configurés dans `.claude/agents/` :
- **seo-specialist**: Spécialiste SEO pour l'optimisation du référencement
- **design-aesthetic**: Expert en design et esthétique web
- **frontend-developer**: Développeur frontend spécialisé

## Installation et configuration

### Première installation

1. **Copier le fichier d'exemple**:
   ```bash
   cp .claude/mcp_config.example.json .claude/mcp_config.json
   ```

2. **Configurer les clés API** dans `mcp_config.json`:
   - Remplacez `/path/to/your/project` par le chemin de votre projet
   - Ajoutez votre `BRAVE_API_KEY` (optionnel) - [Obtenir une clé](https://brave.com/search/api/)
   - Ajoutez votre `GITHUB_PERSONAL_ACCESS_TOKEN` (optionnel) - [Créer un token](https://github.com/settings/tokens)

3. **Démarrer Claude Code**: Les serveurs MCP seront automatiquement chargés

4. **Utiliser les agents**: Claude utilisera automatiquement les agents appropriés pour vos tâches

### Note sur la sécurité

⚠️ Le fichier `mcp_config.json` contient vos clés API et est **ignoré par Git** pour votre sécurité.
✅ Le fichier `mcp_config.example.json` est versionné comme template pour les autres développeurs.

## Serveurs MCP supplémentaires disponibles

Vous pouvez ajouter d'autres serveurs MCP selon vos besoins :
- `@modelcontextprotocol/server-postgres` - Accès aux bases de données PostgreSQL
- `@modelcontextprotocol/server-sqlite` - Accès aux bases de données SQLite
- `@modelcontextprotocol/server-puppeteer` - Automatisation du navigateur
- Et bien d'autres sur https://github.com/modelcontextprotocol/servers

## Notes

- Les serveurs MCP s'exécutent via `npx` pour une installation automatique
- Assurez-vous d'avoir Node.js et npm installés
- Les variables d'environnement sensibles doivent être gardées sécurisées
