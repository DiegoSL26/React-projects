import { FACTS_RANDOM_URL } from './../Constants'

export const getRandomFact = async () => {
  const res = await fetch(FACTS_RANDOM_URL)
  const data = await res.json()
  const { fact } = data
  return fact
}
