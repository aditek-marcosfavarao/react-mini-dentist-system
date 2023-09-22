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
import { useState, useEffect, useContext, useRef } from 'react'
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
    lastEdition: new Date('01/12/1899 - 00:00 hrs'),
    allergy: true,
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
    cpf: '111.000.896-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: true,
    allergyType: 'Alergia a Dorflex',
    description: 'Mentira, tem não',
    address: {
      place: 'Av. Manoel Pedrosa Filho',
      number: '245',
      city: 'Luiz Antônio',
      state: 'SP',
      zipCode: '14210000',
    },
  },
  {
    id: 2,
    name: 'José',
    fullName: 'José Paula Berigo e Silva',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 3,
    name: 'Antônio',
    fullName: 'Antônio Antônio',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 4,
    name: 'Vinicius',
    fullName: 'Vinicius Vinicius',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 5,
    name: 'Ermindo',
    fullName: 'Ermindo Ermindo',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 6,
    name: 'Fred',
    fullName: 'Fred Fred',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 7,
    name: 'Maria',
    fullName: 'Maria Maria',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 8,
    name: 'Madalena',
    fullName: 'Madalena Aparecida',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 9,
    name: 'Godofredo',
    fullName: 'Godofredo Berigo e Silva',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 10,
    name: 'Natália',
    fullName: 'Natália Silva',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 11,
    name: 'Nirvana',
    fullName: 'Nirvana Rockeira',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 12,
    name: 'Afonso',
    fullName: 'Afonso de Jesus',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 13,
    name: 'Jesus',
    fullName: 'Jesus Cristo',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 14,
    name: 'Banana',
    fullName: 'Banana Frita',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 15,
    name: 'Sushi',
    fullName: 'Sushi dos Cria',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 16,
    name: 'Pizza',
    fullName: 'Pizza Steve',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 15,
    name: 'Sushi',
    fullName: 'Sushi dos Cria',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 16,
    name: 'Pizza',
    fullName: 'Pizza Steve',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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
  {
    id: 16,
    name: 'Pizza',
    fullName: 'Pizza Steve',
    email: 'ana.berigo@aditek.com.br',
    cpf: '000.000.000-00',
    rg: '12.345.255-0',
    birth: new Date(),
    age: '24',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
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

  const divElementRef = useRef<HTMLDivElement | null>(null)

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
          <div className="canseiDessaVida">
            <Avatar>
              <h1>{targetUser.name.substring(0, 1)}</h1>
            </Avatar>
          </div>

          <Info>
            <h1>{targetUser.fullName}</h1>
            <h2>Tratamento {targetUser.type}</h2>
            <h3>
              Próxima consulta: {formatDate(targetUser.nextConsult, 'complete')}
            </h3>
            <div>
              <h3>
                {targetUser.address && targetUser.address.place},{' '}
                {targetUser.address && targetUser.address.number}
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
              localStorage.setItem('user', JSON.stringify(targetUser))
              navigate('/edition')
            }}
          />
        </DisplayHeader>
      )
    }
  }

  const handleLeftClick = () => {
    if (typeof divElementRef !== 'undefined') {
      divElementRef.current!.scrollLeft -= divElementRef.current!.offsetWidth
    }
  }

  const handleRightClick = () => {
    divElementRef.current!.scrollLeft += divElementRef.current!.offsetWidth
  }

  const hasUsersList = !users.length

  return (
    <DashboardContainer>
      <DashboardNavbar hasHeaderContent={hasUsersList}>
        <CaretLeft
          className="buttonNavigate"
          weight="bold"
          onClick={() => {
            handleLeftClick()
          }}
        />

        <UsersAligment className="divElementRef" ref={divElementRef}>
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

        <CaretRight
          className="buttonNavigate"
          weight="bold"
          onClick={() => {
            handleRightClick()
          }}
        />
      </DashboardNavbar>

      {CardPatient()}
    </DashboardContainer>
  )
}
