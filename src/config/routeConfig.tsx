import { RouteProps } from 'react-router-dom'

import { DashboardPage } from '@pages/Dashboard/DashboardPage.tsx'
import { FinalizePage } from '@pages/Finalize/FinalizePage.tsx'
import { NotFoundPage } from '@pages/NotFound/NotFoundPage.tsx'
import { ResultsPage } from '@pages/Results/ResultsPage.tsx'

export enum AppRoutes {
  DASHBOARD = 'dashboard',
  FINALIZE = 'finalize',
  RESULTS = 'results',
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.DASHBOARD]: '/',
  [AppRoutes.RESULTS]: '/results/:testId',
  [AppRoutes.FINALIZE]: '/finalize/:testId',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.DASHBOARD]: {
    path: RoutePath.dashboard,
    element: <DashboardPage />,
  },
  [AppRoutes.RESULTS]: {
    path: RoutePath.results,
    element: <ResultsPage />,
  },
  [AppRoutes.FINALIZE]: {
    path: RoutePath.finalize,
    element: <FinalizePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
}
