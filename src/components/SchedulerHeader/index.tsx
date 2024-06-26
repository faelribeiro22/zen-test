import { useCallback } from 'react'
import * as S from './styles'

const SchedulerHeader = () => {
  const maxDays = 4

  const renderDays = useCallback(() => {
    const today = new Date()
    const days = []
    for (let day = 1; day <= maxDays; day++) {
      console.log('dayyy', day)
      days.push(
        <S.Day>
          <S.DayOfWeek>
            {today.toLocaleString('en-us', { weekday: 'short' })}{' '}
          </S.DayOfWeek>
          <S.Date>
            {today.toLocaleString('en-us', { month: 'short' })}{' '}
            {today.getDate()}
          </S.Date>
        </S.Day>
      )
      today.setDate(today.getDate() + 1)
    }
    return days
  }, [])

  return <S.Wrapper>{renderDays()}</S.Wrapper>
}
export default SchedulerHeader
