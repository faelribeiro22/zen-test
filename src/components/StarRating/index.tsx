import * as S from './styles'

type StarRatingProps = {
  rating: number
}

const StarRating = ({ rating }: StarRatingProps) => (
  <S.Wrapper>
    {[...Array(rating)].map((star, index) => {
      return (
        <label key={index}>
          <S.Star
            data-testid="star"
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
