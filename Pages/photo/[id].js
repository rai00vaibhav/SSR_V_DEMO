import { useRouter } from 'next/router'

const Details = () => {
  const router = useRouter()
  const {id} = router.query

  return <div>Details: {id}</div>
}
export default Details;