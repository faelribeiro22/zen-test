import Professional from 'components/Professional'
import { ProfessionalInformationProps } from 'components/ProfessionalInformation'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export default function ProfissionalPage() {
  const router = useRouter()
  const { slug } = router.query
  const [professional, setProfessional] = useState({})
  const [scheduler, setScheduler] = useState({})

  const fetchProfessional = useCallback(async () => {
    const res = await fetch(`http://localhost:3030/api/professional/${slug}`)
    const professionalsResponse = await res.json()
    console.log('eeeeee', professionalsResponse[0])
    setProfessional(professionalsResponse[0])
  }, [slug, setProfessional])

  const fetchScheduler = useCallback(async () => {
    const res = await fetch(
      `http://localhost:3030/api/profissional/scheduler/${slug}`
    )
    const schedulerResponse = await res.json()
    setScheduler(schedulerResponse)
  }, [slug, setScheduler])

  useEffect(() => {
    if (slug) {
      fetchProfessional()
      fetchScheduler()
    }
  }, [slug, fetchProfessional, fetchScheduler])

  return (
    <Professional
      profissional={professional as ProfessionalInformationProps}
      schedulerHours={scheduler}
    />
  )
}
