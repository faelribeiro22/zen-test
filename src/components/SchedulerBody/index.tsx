import { useCallback, useMemo } from 'react'
import * as S from './styles'
import { scheduler } from 'timers/promises'

export type SchedulerBodyProps = {
  [key: string]: string[]
}

const SchedulerBody = ({ schedulerHours }: SchedulerBodyProps) => {
  const maxQuantityHoursDay = useMemo(() => {
    console.log('hours', schedulerHours)
    const allQuantity: number[] = []
    for (let i = 0; i < 4; i++) {
      if (schedulerHours[i]?.length) {
        allQuantity.push(schedulerHours[i].length)
      }
    }
    const maxQuantity = Math.max(...allQuantity)
    return maxQuantity
  }, [schedulerHours])

  const renderColumn = useCallback(
    (column) => {
      const columnBoardValue = new Array(maxQuantityHoursDay)
      for (let i = 0; i < maxQuantityHoursDay; i++) {
        if (!!column[i]) {
          columnBoardValue[i] = '-'
        } else {
          columnBoardValue[i] = column[i]
        }
      }

      const columnBoardView = []
      columnBoardValue.forEach((col, index) =>
        columnBoardView.push(<div key={`${index}-${col}`}>{col}</div>)
      )
      return columnBoardValue
    },
    [maxQuantityHoursDay]
  )

  const renderBoard = useCallback(() => {}, [])

  // schedulerHours.map((scheduler) => console.log('heyyy', scheduler))
  console.log('schedulerHours', schedulerHours)

  return (
    <S.Wrapper>
      {/* {schedulerHours.map((scheduler) => console.log('heyyy', scheduler))} */}
      {schedulerHours.length &&
        schedulerHours.map((scheduler, index) => (
          <div key={`${index}-${Math.random()}`}>{renderBoard(scheduler)}</div>
        ))}
    </S.Wrapper>
  )
}
export default SchedulerBody
