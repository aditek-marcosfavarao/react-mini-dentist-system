import {
  DashboardContainer,
  IconPatient,
  CirclePatient,
  NamePatient,
  DashboardNavbar,
  DisplayHeader,
  Avatar,
  Info,
  UsersAligment,
} from './styles'
import {
  CaretLeft,
  CaretRight,
  FileX,
  PencilSimpleLine,
} from '@phosphor-icons/react'
import { Popup } from '../../components/Popup'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserType } from '../../types/user'
import { ThemeContext } from 'styled-components'
import { formatDate } from '../../common/utils'

type ClickType = true | false

const users: UserType[] = [
  {
    id: 0,
    name: 'Marcos ',
    fullName: 'Marcos Adriano Lorencini Favarão',
    email: 'marcos.favarao@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date('12/01/1997'),
    age: '26',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date('01/12/1899 - 00:00 hrs'),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Ernesto Benfodini de Morães',
      number: '512',
      city: 'Ribeirão Preto',
      state: 'SP',
      zipCode: '14210000',
    },
  },
  {
    id: 1,
    name: 'Ana Paula',
    fullName: 'Ana Paula Berigo e Silva',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Av. Manoel Pedrosa Filho',
      number: '245',
      city: 'Luiz Antônio',
      state: 'SP',
      zipCode: '14210000',
    },
  },
]

export function Dashboard() {
  const [isPopupVisible, setIsPopupVisible] = useState<ClickType>(false)
  const navigate = useNavigate()

  const theme = useContext(ThemeContext)

  const [targetUser, setTargetUser] = useState<UserType>({} as UserType)

  useEffect(() => {}, [])

  function saveUser(user: UserType) {
    setTargetUser(user)
  }

  const CardPatient = () => {
    if (!users.length) {
      return (
        <DisplayHeader>
          <Avatar />
          <Info>
            <h1>Não há pacientes cadastrados ainda</h1>
          </Info>
        </DisplayHeader>
      )
    } else if (targetUser.id == null) {
      return (
        <DisplayHeader>
          <Avatar />
          <Info>
            <h1>Clique em um paciente</h1>
          </Info>
        </DisplayHeader>
      )
    } else {
      return (
        <DisplayHeader>
          <Avatar />
          <Info>
            <h1>{targetUser.fullName}</h1>
            <h2>Tratamento {targetUser.type}</h2>
            <h3>
              Próxima consulta: {formatDate(targetUser.nextConsult, 'complete')}
            </h3>
            <div>
              <h3>
                {targetUser.address && targetUser.address.place},
                {targetUser.address && targetUser.address.number}{' '}
              </h3>
              <h3>
                {targetUser.address && targetUser.address.city} /{' '}
                {targetUser.address && targetUser.address.state}
              </h3>
            </div>
          </Info>

          <FileX
            className="iconDeletCard"
            weight="bold"
            size={23}
            onClick={() => {
              return setIsPopupVisible(true)
            }}
          />
          {isPopupVisible && (
            <Popup
              title="Ação Necessária"
              nameButton="Confirmar"
              buttonColorVariant={'red'}
              onClose={() => setIsPopupVisible(false)}
              id="modal"
            >
              <p>
                A ação{' '}
                <span style={{ color: theme?.['danger-500'] }}>não poderá</span>{' '}
                ser desfeita. Deseja continuar?
              </p>
            </Popup>
          )}
          <PencilSimpleLine
            className="iconEditCard"
            weight="bold"
            size={23}
            onClick={() => {
              navigate('/edition')
            }}
          />
        </DisplayHeader>
      )
    }
  }

  // useEffect(() => {
  //   CardPatient()
  // }, [targetUser, users])

  console.log('targetuser true ou false', targetUser.id !== null)
  console.log('users true ou false', !users.length)
  console.log('users', users)
  console.log('targetuser', targetUser)

  return (
    <DashboardContainer>
      <DashboardNavbar>
        <CaretLeft className="buttonNavigate" weight="bold" />

        <UsersAligment>
          {users &&
            users.map((user) => {
              return (
                <>
                  <IconPatient key={user.id} onClick={() => saveUser(user)}>
                    <CirclePatient>
                      <h1>{user.name.substring(0, 1)}</h1>
                    </CirclePatient>
                    <NamePatient>{user.name}</NamePatient>
                  </IconPatient>
                </>
              )
            })}
        </UsersAligment>

        <CaretRight className="buttonNavigate" weight="bold" />
      </DashboardNavbar>
      {CardPatient()}
      {/* <DisplayHeader>
        <Avatar />
        <Info>
          <h1>{targetUser && targetUser.fullName}</h1>
          <h2>Tratamento {targetUser && targetUser.type}</h2>
          <h3>
            Próxima consulta: {formatDate(targetUser.nextConsult, 'complete')}
          </h3>
          <div>
            <h3>Rua Ernesto Benfodini de Morães, 512</h3>
            <h3>Ribeirão Preto / SP</h3>
          </div>
        </Info>

        <FileX
          className="iconDeletCard"
          weight="bold"
          size={23}
          onClick={() => {
            return setIsPopupVisible(true)
          }}
        />
        {isPopupVisible && (
          <Popup
            title="Ação Necessária"
            nameButton="Confirmar"
            buttonColorVariant={'red'}
            onClose={() => setIsPopupVisible(false)}
            id="modal"
          >
            <p>
              A ação{' '}
              <span style={{ color: theme?.['danger-500'] }}>não poderá</span>{' '}
              ser desfeita. Deseja continuar?
            </p>
          </Popup>
        )}
        <PencilSimpleLine
          className="iconEditCard"
          weight="bold"
          size={23}
          onClick={() => {
            navigate('/edition')
          }}
        />
      </DisplayHeader> */}
    </DashboardContainer>
  )
}
