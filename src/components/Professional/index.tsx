import { useEffect, useState } from 'react'
import ProfessionalInformation, {
  ProfessionalInformationProps
} from 'components/ProfessionalInformation'
import * as S from './styles'
import ProfessionalScheduler from 'components/ProfessionalScheduler'

type ProfissionalProps = {
  profissional: ProfessionalInformationProps
}

const Professional = ({ profissional }: ProfissionalProps) => {
  return (
    <S.Wrapper>
      <ProfessionalInformation {...profissional} />
      <ProfessionalScheduler />
    </S.Wrapper>
  )
}
export default Professional
