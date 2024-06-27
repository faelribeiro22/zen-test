import SchedulerHeader from 'components/SchedulerHeader'
import * as S from './styles'
import SchedulerBody, { SchedulerBodyProps } from 'components/SchedulerBody'

const ProfessionalScheduler = ({ schedulerHours }: SchedulerBodyProps) => {
  return (
    <S.Wrapper>
      <SchedulerHeader />
      <SchedulerBody schedulerHours={schedulerHours} />
    </S.Wrapper>
  )
}
export default ProfessionalScheduler
