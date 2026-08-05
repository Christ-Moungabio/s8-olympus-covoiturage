# Tokende — Covoiturage inter-quartiers, Brazzaville

> *« Tokende »* veut dire **on y va** en lingala.

Tokende met en relation des habitants de Brazzaville qui font le même trajet au même moment : un conducteur avec des places libres, et des passagers qui cherchent un trajet moins cher et plus flexible qu'un taxi.

Projet réalisé dans le cadre du **Sprint intégrateur S8** — Akieni Academy, Cohorte 02, Groupe **Olympus** (Groupe 1).

---

## Sommaire

- [L'équipe](#léquipe)
- [L'équipe derrière Tokende](#léquipe-derrière-tokende)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Installation et lancement](#installation-et-lancement)
- [Endpoints API](#endpoints-api)
- [Contribuer](#contribuer)
- [Données](#données)

---

## L'équipe

| Rôle projet | Nom | Parcours |
|---|---|---|
| Lead du groupe | Pauldy Malonga | Product Manager |
| Product Owner | Brege Ngoulou | Product Manager |
| Lead Business Analyst | Grâce Chatel Ndouolo | Business Analyst |
| Lead Data | Tresor Kitwanda | Data Scientist |
| Lead Fullstack | Berenis Massamba | Fullstack |
| Repo Admin | Christ-Henoc Moungabio | Fullstack |
| Lead Marketing & Communication | Rolexande Ibata Apendi | Digital Marketing |

**Équipe Data** : Edouarda Mandaka Marimpori, Duciel Enguela
**Équipe Fullstack** : Fresnel Oba Verchy, Dieu Merci Mbama-Kibangou, Danielle Benicia Akiana, Souveraine Mabelemo

---

## L'équipe derrière Tokende

Un projet né de la collaboration de 13 personnes, chacune portant une pierre essentielle à l'édifice — voici ce que chacun a apporté.

Le suivi du projet a été assuré via Trello, où chaque tâche a été suivie de sa création jusqu'à sa validation :
👉 [Tableau Trello — Olympus Covoiturage](https://trello.com/invite/b/6a6d3c56729590e39a5c2762/ATTI958cc60dd44ebee9abcdddc55ade9410A25BAD01/olympus-covoiturage)

### Pauldy Malonga — Product Manager, Lead du groupe
- Contribution à l'amélioration des livrables de la phase de Discovery
- Rappel de la vision du produit pour maintenir l'équipe alignée sur les objectifs
- Planification et coordination des différentes phases du projet
- Organisation et animation des réunions de suivi
- Suivi individuel des membres et rappels des tâches assignées
- Supervision de la préparation des livrables et de la présentation finale

### Brege Ngoulou — Product Manager, Product Owner
- Mise en place de la phase de discovery (identification des besoins, analyse des problèmes)
- Suivi des fonctionnalités développées afin de s'assurer qu'elles répondent aux besoins métier et aux exigences définies
- Coordination entre les membres et l'équipe
- Création des tickets et gestion des priorités sur Trello
- Communication régulière avec l'équipe sur l'état d'avancement du projet

### Grâce Chatel Ndouolo — Business Analyst
1. Analyse et formalisation des besoins métiers et utilisateurs afin de traduire les besoins du projet en exigences fonctionnelles
2. Élaboration et structuration du catalogue des exigences pour formaliser les fonctionnalités attendues de la plateforme
3. Rédaction des User Stories et critères d'acceptation à partir des besoins identifiés
4. Construction et priorisation du Product Backlog selon la méthode MoSCoW, organisation des fonctionnalités par sprint avec le PO
5. Rédaction et ajustement des FRD afin de fournir à l'équipe de développement des spécifications fonctionnelles exploitables
6. Participation à la clarification et à l'évolution des fonctionnalités du MVP, via les échanges avec les PM et l'équipe de développement
7. Assurance de la cohérence entre besoins, exigences, User Stories, backlog et spécifications fonctionnelles tout au long du projet

### Tresor Kitwanda — Lead Data
Sur le plan de la gestion d'équipe et de la collaboration, l'équipe Data a abordé ce projet comme une véritable startup. Face aux contraintes de temps, `logic.py` a été découpé en 4 zones de responsabilité distinctes, avec un workflow Git standardisé : **1 Fonction = 1 Issue = 1 Branche = 1 Commit = 1 Pull Request**. Chaque développeur a travaillé sur des branches dédiées (ex. `feature/filtrer-par-quartier-depart`), avec des commits conventionnels (`feat: implement <nom_fonction>()`). Pytest a servi d'arbitre central : aucune PR n'était fusionnée sur `main` sans que les tests associés soient à 100% verts. Chaque PR incluait `Closes #<Issue>` pour fermer automatiquement les tâches validées.

- Répartition : Duciel Enguela → zone A · Edouarda Mandaka Marimpori → zone B · Tresor Kitwanda → zones C et D
- Validation des Pull Requests

### Berenis Massamba — Lead Fullstack
- `frontend/accueil/index.html` + `accueil.css` — page d'accueil, hero + indicateurs clés
  - Fonctions : `compterTrajetsAujourdhui`, `formaterQuartierPrincipal`
- `frontend/inscription/inscription.html` + `inscription.css` et `frontend/login/login.html` + `login.css`
  - Fonctions : `validerFormulaireInscription`, `validerFormulaireLogin`
- Validation des Pull Requests

### Christ-Henoc Moungabio — Développeur Fullstack, Repo Admin
- Review code & Merge Pull Requests
- `frontend/recherche/recherche.html` + `recherche.css`
  - Fonctions : `filtrerParQuartierDepart`, `rechercherParMotCle`
- `frontend/dashboard/dashboard.html` + `dashboard.css`

### Danielle Akiana — Développeuse Fullstack
- `frontend/trajet/trajet.html` + `trajet.css` — détail d'un trajet
  - Fonctions : `formaterPrix`, `formaterHeure` *(à confirmer)*

### Dieu Merci Mbama-Kibangou — Développeur Fullstack
- Fonctions du tableau de bord : `calculerPourcentageOccupation`, `getBadgeDisponibilite`

### Fresnel Oba Verchy Alphonse — Développeur Fullstack
- `frontend/proposer/proposer.html` + `proposer.css` — formulaire conducteur
  - Fonctions : `validerFormulaireProposer`, `formaterMessageConfirmation`
- Ajout de la page confirmation
- Validation des Pull Requests

### Souveraine Mabelemo — Développeuse Fullstack
- `frontend/mes-trajets/mes-trajets.html` + `mes-trajets.css`
  - Fonctions : `filtrerReservationsParStatut`, `calculerTotalDepenseParPassager`

### Rolexande Ibata Apendi — Lead Marketing & Communication
- Fiche persona et proposition de valeur
- Copywriting et SEO

---

## Stack technique

- **Backend** : Python, Flask, `pytest` pour les tests
- **Frontend** : HTML / CSS / JavaScript vanilla (fonctions pures, pas de framework)
- **Données** : fichier JSON statique (`backend/data/trajets.json`)
- **Style commun** : `frontend/layout.css` (variables de thème, composants partagés)

---

## Structure du projet

```
s8-tokende-covoiturage/
├── backend/
│   ├── app.py              # NE PAS MODIFIER — point d'entrée Flask
│   ├── controllers.py       # NE PAS MODIFIER — routes API
│   ├── logic.py             # 17 fonctions métier (Data Science)
│   └── data/
│       └── trajets.json     # NE PAS MODIFIER — jeu de données
├── frontend/
│   ├── layout.css           # styles partagés (couleurs, boutons, thème)
│   ├── functions.js         # NE PAS MODIFIER la structure — fonctions pures JS
│   ├── main.js               # NE PAS MODIFIER — câblage dynamique
│   ├── functions.test.html   # tests des fonctions JS (27 tests)
│   ├── accueil/
│   ├── recherche/
│   ├── trajet/
│   ├── proposer/
│   ├── mes-trajets/
│   ├── dashboard/
│   ├── confirmation/
│   ├── inscription/
│   └── login/
└── README.md
```

Chaque page a son propre dossier avec un fichier CSS dédié. Les IDs marqués **"NE PAS MODIFIER"** dans le HTML sont le câblage vers `main.js` — ne pas les renommer, sinon les données ne s'affichent plus.

---

## Installation et lancement

### 1. Démarrer l'API (un seul terminal, à laisser ouvert)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

L'API tourne sur `http://localhost:5000`.

### 2. Ouvrir le site

Ouvre les fichiers HTML directement, ou utilise l'extension **Live Server** de VS Code (clic droit sur le fichier HTML → *Open with Live Server*).

Tant que `python app.py` tourne, n'importe quelle page peut appeler l'API normalement.

### 3. Lancer les tests

**Backend** :
```bash
cd backend
python -m pytest -v
```

**Frontend** : ouvrir `frontend/functions.test.html` dans le navigateur.

---

## Endpoints API

```
GET  /api/trajets
GET  /api/trajets/<id>
GET  /api/dashboard
GET  /api/quartiers
GET  /api/reservations/<telephone>
POST /api/inscription   { "nom": "...", "telephone": "...", "mot_de_passe": "..." }
POST /api/login          { "telephone": "...", "mot_de_passe": "..." }
```

---

## Contribuer

Le workflow Git complet (branches, convention de commits, process de Pull Request, review) est détaillé dans le **[Guide Git & Workflow d'équipe](./Guide_Git_Tokende.docx)**.

En résumé :
- Branche `main` protégée, tout passe par une PR vers `develop`
- Branches : `feature/<nom-court>` ou `fix/<nom-court>`
- Commits : `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`
- Voir aussi le [guide de contribution](https://github.com/akieni-academy-c2/.github/blob/main/CONTRIBUTING.md) et le [code de conduite](https://github.com/akieni-academy-c2/.github/blob/main/CODE_OF_CONDUCT.md) de l'organisation Akieni Academy.

---

## Données

Le jeu de données couvre **8 quartiers** de Brazzaville (Bacongo, Poto-Poto, Moungali, Talangaï, Mfilou, Makélékélé, Ouenzé, Kintélé), avec **8 conducteurs**, **15 trajets** et **20 réservations**, principalement sur les créneaux du matin (7h–9h) et du soir (17h–19h).

---

*Groupe Olympus — Akieni Academy, Projet S8*
