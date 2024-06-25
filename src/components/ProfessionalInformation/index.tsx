import StarRating from 'components/StarRating'
import * as S from './styles'

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
}: ProfessionalInformationProps) => (
  <S.Wrapper>
    <img src={avatar} alt={`A Photo of ${name}`} />
    <S.ProfessionalName>{name}</S.ProfessionalName>
    <S.Role>{title}</S.Role> | {location}
    <StarRating rating={reviewNote} /> ({numbersReviews} reviews)
    <S.Price>R${value}</S.Price> / <S.Time>{duration} MINUTES</S.Time>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)
export default ProfessionalInformation
