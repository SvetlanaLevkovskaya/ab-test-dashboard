import axios from 'axios'

import { Site, Test } from '../types'

export const fetchABTests = async (): Promise<Test[]> => {
  const [testsResponse, sitesResponse] = await Promise.all([
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/tests`),
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/sites`),
  ])

  const tests: Test[] = testsResponse.data
  const sites: Site[] = sitesResponse.data

  const siteMap = new Map(sites.map((site) => [site.id, site]))

  return tests.map((test) => ({
    ...test,
    site: siteMap.get(test.siteId),
  }))
}
