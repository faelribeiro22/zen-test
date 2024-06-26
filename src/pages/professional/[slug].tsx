import Professional from 'components/Professional'
import { ProfessionalInformationProps } from 'components/ProfessionalInformation'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export default function ProfissionalPage() {
  const router = useRouter()
  const { slug } = router.query
  const [professional, setProfessional] = useState({})

  const fetchProfessional = useCallback(async () => {
    console.log('olha o mirage')
    const res = await fetch(`http://localhost:3030/api/professional/${slug}`)
    const professionalsResponse = await res.json()
    console.log(professionalsResponse)
    setProfessional(professionalsResponse[0])
  }, [slug, setProfessional])

  useEffect(() => {
    if (slug) {
      fetchProfessional()
    }
  }, [slug, fetchProfessional])

  return (
    <Professional profissional={professional as ProfessionalInformationProps} />
  )
}
