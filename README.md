# I3SN — Institut Supérieur des Sciences de la Santé de Ngong

Bienvenue sur le dépôt du site web de l'**Institut Supérieur des Sciences de la Santé de Ngong (I3SN)**. Ce projet est une application web moderne conçue pour présenter l'institut, ses programmes de formation médicale, et faciliter la communication avec les étudiants et le public.

Devise : **Probitas • Scientiarum • Excellentiam**

## 🚀 Technologies Utilisées

Ce projet est développé avec les technologies web modernes :

- **[Next.js 15+](https://nextjs.org/)** : Framework React pour le rendu côté serveur (SSR) et la génération de sites statiques (SSG).
- **[React 19](https://react.dev/)** : Bibliothèque JavaScript pour la création d'interfaces utilisateurs.
- **[Tailwind CSS v4](https://tailwindcss.com/)** : Framework CSS utilitaire pour un design rapide, moderne et responsif.
- **[TypeScript](https://www.typescriptlang.org/)** : Superset typé de JavaScript pour un code robuste.
- **[Lucide React](https://lucide.dev/)** : Bibliothèque d'icônes élégantes et open-source.
- **[Swiper](https://swiperjs.com/)** : Carrousels tactiles modernes pour la galerie et les bannières.
- **[XLSX](https://sheetjs.com/)** : Outil pour traiter les fichiers Excel (utilisé pour parser les données).

## 📂 Structure du Projet

Le projet suit la structure standard de l'App Router de Next.js (`app/`) :

```
site_i3sn/
├── app/                  # Routes principales de l'application (Pages, Layouts, globals.css)
├── components/           # Composants React réutilisables
│   ├── home/             # Composants spécifiques à la page d'accueil (Hero, Stats, etc.)
│   ├── layout/           # Composants de mise en page globale (Navbar, Footer)
│   └── ui/               # Composants d'interface génériques (Boutons, Cartes)
├── config/               # Fichiers de configuration globaux
├── data/                 # Données statiques JSON ou TypeScript (programmes, actualités)
├── docs/                 # Documentation supplémentaire (ex: Google Apps Script)
├── parse_data/           # Scripts de traitement de données (ex: Excel vers JSON)
├── public/               # Fichiers statiques (images, favicons, logos)
└── README.md             # Ce fichier
```

## ⚙️ Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure recommandée)
- **npm**, **yarn**, **pnpm** ou **bun** (gestionnaire de paquets)

## 🛠️ Installation et Lancement

1. **Cloner le dépôt et installer les dépendances :**

```bash
npm install
# ou
yarn install
```

2. **Lancer le serveur de développement :**

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat. Le site se mettra à jour automatiquement au fur et à mesure de vos modifications.

## 📝 Guide de Maintenance

Pour assurer la longévité et la qualité du code de ce projet, voici quelques bonnes pratiques à respecter :

### 1. Ajout de nouveaux composants
- Créez toujours vos composants dans le dossier `components/` en respectant la catégorisation (`ui/`, `layout/`, ou spécifique à une fonctionnalité).
- Utilisez **TypeScript** pour typer rigoureusement les *props* de vos composants.
- Privilégiez les classes **Tailwind CSS** pour le style. Si des styles personnalisés complexes sont requis, étendez la configuration de Tailwind ou ajoutez-les dans `app/globals.css`.

### 2. Gestion des données statiques
- Les données qui alimentent le site (formations, statistiques, professeurs, actualités) devraient être isolées dans le dossier `data/` afin d'être modifiables sans toucher à la structure des composants React.
- Si le projet utilise des données provenant de fichiers Excel (`parse_data/`), assurez-vous d'exécuter les scripts de parsing pour générer le JSON à jour avant de "build" le projet en production.

### 3. SEO et Métadonnées
- Le SEO est géré au niveau des fichiers `page.tsx` et `layout.tsx` via l'API `Metadata` de Next.js.
- Pensez à mettre à jour les balises `<title>`, `description`, et `openGraph` lors de l'ajout de nouvelles pages.

### 4. Scripts Utiles
- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile le projet pour la production.
- `npm run start` : Lance le projet en mode production (nécessite un `build` préalable).
- `npm run lint` : Vérifie le code via ESLint pour repérer les potentielles erreurs.

## 🚀 Déploiement

Le moyen le plus simple de déployer ce projet Next.js est d'utiliser la plateforme [Vercel](https://vercel.com/new).

1. Poussez votre code sur GitHub/GitLab/Bitbucket.
2. Connectez le dépôt à Vercel.
3. Vercel détectera automatiquement Next.js et gérera le build et le déploiement continu à chaque *push* sur la branche principale.

Pour en savoir plus, consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
