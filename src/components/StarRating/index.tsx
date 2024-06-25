import * as S from './styles'

type StarRatingProps = {
  rating: number
}

const StarRating = ({ rating }: StarRatingProps) => (
  <S.Wrapper>
    {[...Array(rating)].map((star, index) => {
      const currentRating = index + 1

      return (
        <label key={index}>
          <S.Star
            className="star"
            style={{
              color: '#ffc107'
            }}
          >
            &#9733;
          </S.Star>
        </label>
      )
    })}
  </S.Wrapper>
)
export default StarRating
