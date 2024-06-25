import Main from 'components/Main'
import ProfessionalInformation, {
  ProfessionalInformationProps
} from 'components/ProfessionalInformation'
import { useEffect, useState } from 'react'

export type HomeProps = {
  professionals: ProfessionalInformationProps[]
}

export default function Home(props: HomeProps) {
  const [professionals, setProfessionals] = useState([])

  useEffect(() => {
    fetch('/api/professionals')
      .then((res) => res.json())
      .then((json) => {
        console.log('prof', json.professionals)
        setProfessionals(json.professionals)
      })
  }, [])

  return professionals.length > 0 ? (
    <Main professionals={professionals} />
  ) : null
}
