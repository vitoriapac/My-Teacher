import type { NextPage } from 'next'
import { Box } from '@mui/material'
import Lista from '../src/components/Lista/Lista'
import { Professor } from '../src/@types/professor'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'João Pessoa',
      descricao: 'Descrição Professor 1',
      valor_horas: 100,
      foto: 'http://github.com/vitoriapac.png'
    },
    {
      id: 2,
      nome: 'Professor 2',
      descricao: 'Descrição Professor 2',
      valor_horas: 150,
      foto: 'http://github.com/vitoriapac.png'
    },
    {
      id: 3,
      nome: 'Professor 3',
      descricao: 'Descrição Professor 3',
      valor_horas: 200,
      foto: 'http://github.com/vitoriapac.png'
    },
    {
      id: 4,
      nome: 'Professor 4',
      descricao: 'Descrição Professor 4',
      valor_horas: 300,
      foto: 'http://github.com/vitoriapac.png'
    }
  ]

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={professores}></Lista>
      </Box>
    </>
  )
}

export default Home
