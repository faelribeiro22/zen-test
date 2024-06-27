import ProfessionalInformation, {
  ProfessionalInformationProps
} from 'components/ProfessionalInformation'
import * as S from './styles'
// import ProfessionalScheduler from 'components/ProfessionalScheduler'

type ProfissionalProps = {
  profissional: ProfessionalInformationProps
  // schedulerHours: string[]
}

const Professional = ({ profissional }: ProfissionalProps) => {
  return (
    <S.Wrapper>
      <ProfessionalInformation {...profissional} />
      {/* <ProfessionalScheduler schedulerHours={schedulerHours} /> */}
    </S.Wrapper>
  )
}
export default Professional
