import { RouteProps } from 'react-router-dom'

import { DashboardPage } from '@pages/Dashboard/DashboardPage.tsx'
import { FinalizePage } from '@pages/Finalize/FinalizePage.tsx'
import { ResultsPage } from '@pages/Results/ResultsPage.tsx'

export enum AppRoutes {
  DASHBOARD = 'dashboard',
  FINALIZE = 'finalize',
  RESULTS = 'results',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.DASHBOARD]: '/',
  [AppRoutes.RESULTS]: '/results/:testId',
  [AppRoutes.FINALIZE]: '/finalize/:testId',
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
}
