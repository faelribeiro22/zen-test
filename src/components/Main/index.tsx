import Professional from 'components/Professional'
import * as S from './styles'
import { HomeProps } from 'pages'
import { useCallback, useEffect } from 'react'
import Link from 'next/link'

const Main = ({ professionals }: HomeProps) => {
  const renderList = useCallback(() => {
    return (
      <ul>
        <h2>Lista profissionais</h2>
        {professionals.map((professional) => (
          <li key={professional.id}>
            <Link href={`/professional/${professional.id}`}>
              {professional.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  }, [professionals])

  return <S.Wrapper>{renderList()}</S.Wrapper>
}

export default Main
