import Main from 'components/Main'
import { ProfessionalInformationProps } from 'components/ProfessionalInformation'
import { useEffect, useState } from 'react'

export type HomeProps = {
  professionals: ProfessionalInformationProps[]
}

export default function Home() {
  const [professionals, setProfessionals] = useState([])

  useEffect(() => {
    fetch('http://localhost:3030/api/professionals')
      .then((res) => res.json())
      .then((json) => {
        setProfessionals(json)
      })
  }, [])

  return <Main professionals={professionals} />
}
