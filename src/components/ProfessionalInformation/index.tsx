import StarRating from 'components/StarRating'
import * as S from './styles'
import { useEffect } from 'react'

export type ProfessionalInformationProps = {
  id: number
  avatar: string
  name: string
  title: string
  location: string
  reviewNote: number
  numbersReviews: number
  value: number
  duration: number
  description: string
}

const ProfessionalInformation = ({
  avatar,
  description,
  location,
  name,
  numbersReviews,
  reviewNote,
  duration,
  title,
  value
}: ProfessionalInformationProps) => {
  return (
    <S.Wrapper>
      <S.Information>
        <S.Image src={avatar} alt={`A Photo of ${name}`} />
        <S.Text>
          <S.ProfessionalName>{name}</S.ProfessionalName>
          <S.Role>{title}</S.Role> | {location}
          <S.ReviewInformation>
            <StarRating rating={reviewNote} />{' '}
            <span>({numbersReviews} reviews)</span>
          </S.ReviewInformation>
          <S.Price>R${value}</S.Price> / <S.Time>{duration} MINUTES</S.Time>
        </S.Text>
      </S.Information>
      <S.Description>
        <p>{description}</p>
      </S.Description>
    </S.Wrapper>
  )
}
export default ProfessionalInformation
