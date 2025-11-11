# Limbo.club

Projet configuré avec Claude Code et les serveurs MCP.

## Configuration Claude

La configuration Claude se trouve dans le dossier `.claude/`. Consultez [.claude/README.md](.claude/README.md) pour plus d'informations.

## Premiers pas

1. Installer les dépendances si nécessaire
2. Configurer les clés API dans `.claude/mcp_config.json` (voir [.claude/README.md](.claude/README.md))
3. Commencer à développer avec l'assistance de Claude

## Structure du projet

```
limbo.club/
├── .claude/              # Configuration Claude et MCP
│   ├── mcp_config.json   # Vos clés API (ignoré par Git)
│   ├── mcp_config.example.json  # Template de configuration
│   └── README.md         # Documentation Claude
├── .gitignore
└── README.md
```

## Développement

Ce projet utilise Claude Code avec les capacités suivantes :
- Agents intelligents pour les tâches complexes
- Serveurs MCP pour l'accès au filesystem, recherche web, et GitHub
- Gestion automatisée des tâches

## Licence

À définir
