import { Site, Test } from '@type/index.ts'
import axios from 'axios'

const fetchSiteById = async (siteId: number): Promise<Site> => {
  const response = await axios.get(`http://localhost:3100/sites/${siteId}`)
  return response.data
}

export const fetchABTests = async (): Promise<Test[]> => {
  const response = await axios.get('http://localhost:3100/tests')
  const tests: Test[] = response.data

  return await Promise.all(
    tests.map(async (test) => {
      const site = await fetchSiteById(test.siteId)
      return { ...test, site }
    })
  )
}
