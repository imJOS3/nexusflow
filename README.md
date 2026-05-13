# NexusFlow

Plataforma SaaS modular para gestión empresarial. CRM, reservas, inventario, analytics y automatizaciones en un solo lugar.

## Stack

| Capa          | Tecnología                                      |
| ------------- | ----------------------------------------------- |
| Frontend      | Next.js 14, TypeScript, Tailwind CSS, shadcn/ui |
| Backend       | NestJS, TypeScript                              |
| Base de datos | PostgreSQL, Prisma ORM                          |
| Cache         | Redis                                           |
| Infra         | Docker, GitHub Actions                          |
| Monorepo      | Turborepo + pnpm workspaces                     |

## Estructura

nexusflow/
├── apps/
│ ├── api/ # Backend NestJS (puerto 3001)
│ └── web/ # Frontend Next.js (puerto 3000)
├── packages/
│ ├── ui/ # Componentes compartidos
│ ├── database/ # Prisma client y tipos
│ └── shared/ # Utilidades y tipos comunes
└── docker-compose.yml

## Levantar el proyecto

### Requisitos

- Node.js 20+
- pnpm 9+
- Docker Desktop

### Instalación

```bash
git clone https://github.com/tu-usuario/nexusflow
cd nexusflow
pnpm install
```

### Desarrollo

```bash
pnpm dev          # Levanta web + api en paralelo
pnpm lint         # Corre ESLint
pnpm format       # Formatea con Prettier
```

### Con Docker (base de datos)

```bash
docker compose up -d    # Levanta PostgreSQL + Redis
pnpm dev
```

## Módulos

- **Auth** — Autenticación JWT, roles, RBAC
- **CRM** — Clientes, leads, pipeline Kanban
- **Bookings** — Reservas, calendario, disponibilidad
- **Analytics** — Gráficos, KPIs, exportación
- **Inventory** — Stock, movimientos, alertas
- **Finance** — Ingresos, gastos, reportes
- **Support** — Tickets, estados, SLA
- **Automation** — Reglas, triggers, acciones

## Variables de entorno

Copia `.env.example` a `.env` en cada app:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```
