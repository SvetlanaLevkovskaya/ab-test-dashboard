import axios from 'axios'

import { Site, Test } from '../types'

const fetchSiteById = async (siteId: number): Promise<Site> => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/sites/${siteId}`)
  return response.data
}

export const fetchABTests = async (): Promise<Test[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/tests`)
  const tests: Test[] = response.data

  return await Promise.all(
    tests.map(async (test) => {
      const site = await fetchSiteById(test.siteId)
      return { ...test, site }
    })
  )
}
