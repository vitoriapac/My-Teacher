import { Button } from '@mui/material'
import { Professor } from '../../@types/professor'
import {
  Valor,
  Nome,
  Informacoes,
  Foto,
  ItemLista,
  ListaStyled,
  Descrição,
  ListaVazia
} from './Lista.style'

interface ListaProps {
  professores: Professor[]
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map(professor => (
            // eslint-disable-next-line react/jsx-key
            <ItemLista key={professor.id}>
              <Foto src={professor.foto}></Foto>
              <Informacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>
                  {professor.valor_horas.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </Valor>
                <Descrição>{professor.descricao}</Descrição>
                <Button sx={{ width: '70%' }}>
                  Marcar Aula com {professor.nome}
                </Button>
              </Informacoes>
            </ItemLista>
          ))}
        </ListaStyled>
      ) : (
        <ListaVazia>Nenhum item encontrado</ListaVazia>
      )}
    </div>
  )
}

export default Lista
