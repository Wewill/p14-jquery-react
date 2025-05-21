# @wewiil/datatable

Un composant React de tableau de données (DataTable) moderne, basé sur [@tanstack/react-table](https://tanstack.com/table), avec recherche globale, tri, pagination et typage TypeScript.

## Fonctionnalités

- Pagination côté client
- Recherche globale
- Tri par colonne
- Entièrement typé TypeScript
- Facile à intégrer dans vos applications React

## Installation

```bash
npm install @wewiil/datatable
# ou
yarn add @wewiil/datatable
# ou
pnpm add @wewiil/datatable
```

## Utilisation

```tsx
import Datatable from "@wewiil/datatable";

// Exemple de colonnes
const columns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Nom" },
  { key: "email", header: "Email" },
];

// Exemple de data
const data = [
  { id: "1", name: "Alice", email: "alice@email.com" },
  { id: "2", name: "Bob", email: "bob@email.com" },
  // ...
];

export default function App() {
  return <Datatable data={data} columns={columns} />;
}
```

## Props

| Nom     | Type                                      | Description             |
| ------- | ----------------------------------------- | ----------------------- |
| data    | `Array<{ id: string \| null, ... }>`      | Les données à afficher  |
| columns | `Array<{ key: keyof D, header: string }>` | Les colonnes à afficher |

## Dépendances

- React >= 18
- @tanstack/react-table >= 8

## Personnalisation

Vous pouvez personnaliser le style du tableau via vos propres classes CSS ou frameworks (ex: TailwindCSS).

## Licence

MIT
