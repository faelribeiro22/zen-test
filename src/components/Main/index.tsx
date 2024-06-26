import * as S from './styles'
import { HomeProps } from 'pages'
import { useCallback } from 'react'

const Main = ({ professionals }: HomeProps) => {
  const renderList = useCallback(() => {
    return (
      <ul>
        <h2>Lista profissionais</h2>
        {professionals.map((professional) => (
          <li key={professional.id}>
            <S.ProfessionalLink href={`/professional/${professional.id}`}>
              {professional.name}
            </S.ProfessionalLink>
          </li>
        ))}
      </ul>
    )
  }, [professionals])

  return <S.Wrapper>{renderList()}</S.Wrapper>
}

export default Main
