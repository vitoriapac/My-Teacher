import { useState } from "react";
import { Professor } from "../../@types/professor";

export function useIndex(){
  const [listaProfessores, setListaProfessores] = useState<Professor[]>(
    [
      {
        id: 1,
        nome: 'João Pessoa',
        descricao: 'Descrição Professor 1',
        valor_horas: 100,
        foto: 'https://xsgames.co/randomusers/assets/avatars/male/25.jpg'
      },
      {
        id: 2,
        nome: 'Sue Yates',
        descricao: 'Descrição Professor 2',
        valor_horas: 150,
        foto: 'https://xsgames.co/randomusers/assets/avatars/female/15.jpg'
      },
      {
        id: 3,
        nome: 'Trevor Wong',
        descricao: 'Descrição Professor 3',
        valor_horas: 200,
        foto: 'https://xsgames.co/randomusers/assets/avatars/male/9.jpg'
      },
      {
        id: 4,
        nome: 'Inez Stone',
        descricao: 'Descrição Professor 4',
        valor_horas: 300,
        foto: 'https://xsgames.co/randomusers/assets/avatars/female/19.jpg'
      }
    ]
  )

  return {
    listaProfessores
  }
}