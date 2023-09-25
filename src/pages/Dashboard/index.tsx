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
    cpf: '17.394.588-0',
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
    birth: new Date('29/01/1999'),
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
    fullName: 'José Miranda',
    email: 'jose.miranda@aditek.com.br',
    cpf: '815.969.580-22',
    rg: '12.011.115-9',
    birth: new Date('16/09/1998'),
    age: '25',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Aristides França',
      number: '292',
      city: 'São José dos Pinhais',
      state: 'PR',
      zipCode: '83035170',
    },
  },
  {
    id: 3,
    name: 'Antônio',
    fullName: 'Antônio Santos',
    email: 'antonio.santos@aditek.com.br',
    cpf: '623.534.700-68',
    rg: '46.019.262-0',
    birth: new Date('16/07/2000'),
    age: '23',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Presidente Epitácio da Silva Pessoa',
      number: '856',
      city: 'Pelotas',
      state: 'RS',
      zipCode: '96045550',
    },
  },
  {
    id: 4,
    name: 'Vinicius',
    fullName: 'Vinicius Amorim',
    email: 'vinicius.amorim@aditek.com.br',
    cpf: '221.512.180-74',
    rg: '15.193.040-5',
    birth: new Date('01/08/1994'),
    age: '29',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Angelina Neiva de Góes',
      number: '412',
      city: 'Boa Vista',
      state: 'RR',
      zipCode: '69314660',
    },
  },
  {
    id: 5,
    name: 'Ermindo',
    fullName: 'Ermindo Castro',
    email: 'ermindo.castro@aditek.com.br',
    cpf: '681.457.470-58',
    rg: '32.473.534-0',
    birth: new Date('31/08/1996'),
    age: '27',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Avenida Manoel Ribas',
      number: '595',
      city: 'Curitiba',
      state: 'PR',
      zipCode: '14210000',
    },
  },
  {
    id: 6,
    name: 'Fred',
    fullName: 'Fred Mercury',
    email: 'fred.mercury@aditek.com.br',
    cpf: '514.474.710-83',
    rg: '22.165.080-5',
    birth: new Date('17/03/1991'),
    age: '32',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Treze de Abril',
      number: '843',
      city: 'Araguaína',
      state: 'TO',
      zipCode: '77823150',
    },
  },
  {
    id: 7,
    name: 'Maria',
    fullName: 'Maria Gabriella',
    email: 'maria.gabriela@aditek.com.br',
    cpf: '896.089.020-02',
    rg: '21.091.621-7',
    birth: new Date('14/07/1986'),
    age: '37',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Servidão Sebastiana Dalva de Jesus',
      number: '269',
      city: 'Petrópolis',
      state: 'RJ',
      zipCode: '25650065',
    },
  },
  {
    id: 8,
    name: 'Madalena',
    fullName: 'Madalena Aparecida',
    email: 'madalena.aparecida@aditek.com.br',
    cpf: '261.687.190-40',
    rg: '37.045.119-3',
    birth: new Date('13/02/1995'),
    age: '28',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Araparí',
      number: '875',
      city: 'Serra',
      state: 'ES',
      zipCode: '29179256',
    },
  },
  {
    id: 9,
    name: 'Godofredo',
    fullName: 'Godofredo Josias',
    email: 'godofredo.josias@aditek.com.br',
    cpf: '633.843.270-71',
    rg: '14.443.451-9',
    birth: new Date('05/08/1974'),
    age: '49',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Cinquenta e Sete',
      number: '843',
      city: 'Varginha',
      state: 'MG',
      zipCode: '37056355',
    },
  },
  {
    id: 10,
    name: 'Natália',
    fullName: 'Natália Silva',
    email: 'natalia.silva@aditek.com.br',
    cpf: '891.923.300-45',
    rg: '27.385.529-3',
    birth: new Date('30/12/1997'),
    age: '25',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua São Paulo',
      number: '265',
      city: 'Imperatriz',
      state: 'MA',
      zipCode: '65903080',
    },
  },
  {
    id: 11,
    name: 'Nirvana',
    fullName: 'Nirvana Rockeira',
    email: 'nirvana.rockeira@aditek.com.br',
    cpf: '011.200.330-39',
    rg: '40.880.769-6',
    birth: new Date('31/03/1989'),
    age: '34',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Travessa Nicolau Hostman',
      number: '431',
      city: 'Boa Vista',
      state: 'RR',
      zipCode: '69304542',
    },
  },
  {
    id: 12,
    name: 'Afonso',
    fullName: 'Afonso de Jesus',
    email: 'afonso.jesus@aditek.com.br',
    cpf: '957.197.610-55',
    rg: '39.685.322-5',
    birth: new Date('29/07/1964'),
    age: '59',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Avenida Antônio Rodrigues',
      number: '205',
      city: 'Gurupi',
      state: 'TO',
      zipCode: '77420180',
    },
  },
  {
    id: 13,
    name: 'Jesus',
    fullName: 'Jesus Cristo',
    email: 'jesus.cristo@aditek.com.br',
    cpf: '471.155.620-67',
    rg: '47.197.935-1',
    birth: new Date('09/02/1982'),
    age: '41',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Altevir Baptista de Lara',
      number: '751',
      city: 'Curitiba',
      state: 'PR',
      zipCode: '82710100',
    },
  },
  {
    id: 14,
    name: 'Banana',
    fullName: 'Banana Frita',
    email: 'banana.frita@aditek.com.br',
    cpf: '842.908.870-90',
    rg: '27.583.812-2',
    birth: new Date('31/07/1989'),
    age: '34',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Travessa Vitória',
      number: '182',
      city: 'Fortaleza',
      state: 'CE',
      zipCode: '60342013',
    },
  },
  {
    id: 15,
    name: 'Sushi',
    fullName: 'Sushi dos Cria',
    email: 'sushi.doscria@aditek.com.br',
    cpf: '055.069.090-55',
    rg: '42.453.605-5',
    birth: new Date('03/02/1968'),
    age: '55',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Andorinhas',
      number: '318',
      city: 'Ariquemes',
      state: 'RO',
      zipCode: '76873264',
    },
  },
  {
    id: 16,
    name: 'Pizza',
    fullName: 'Pizza Steve',
    email: 'pizza.steve@aditek.com.br',
    cpf: '711.871.570-07',
    rg: '39.747.800-8',
    birth: new Date('20/01/1963'),
    age: '60',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua João Barbosa Farias',
      number: '284',
      city: 'Cuiabá',
      state: 'MT',
      zipCode: '78015245',
    },
  },
  {
    id: 15,
    name: 'Milagre',
    fullName: 'Milagre Milagroso',
    email: 'milagre.milagroso@aditek.com.br',
    cpf: '705.443.720-93',
    rg: '13.390.158-0',
    birth: new Date('28/02/1964'),
    age: '59',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Alberto Luizari',
      number: '814',
      city: 'Ji-Paraná',
      state: 'RO',
      zipCode: '76906540',
    },
  },
  {
    id: 16,
    name: 'Mathias',
    fullName: 'Mathias Monteiro',
    email: 'mathias.monteiro@aditek.com.br',
    cpf: '488.526.490-18',
    rg: '32.003.792-7',
    birth: new Date('16/04/1980'),
    age: '43',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua Maria Alcione',
      number: '115',
      city: 'Caucaia',
      state: 'CE',
      zipCode: '61651010',
    },
  },
  {
    id: 16,
    name: 'Beatriz',
    fullName: 'Beatriz Bezerra',
    email: 'beatriz.bezerra@aditek.com.br',
    cpf: '768.725.740-54',
    rg: '40.869.334-4',
    birth: new Date('02/03/1993'),
    age: '30',
    type: 'Completo',
    nextConsult: new Date(),
    lastConsult: new Date(),
    lastEdition: new Date(),
    allergy: false,
    allergyType: '',
    description: '',
    address: {
      place: 'Rua dos Beijos',
      number: '229',
      city: 'Belo Horizonte',
      state: 'MG',
      zipCode: '31998520',
    },
  },
]

export function Dashboard() {
  const [isPopupVisible, setIsPopupVisible] = useState<ClickType>(false)
  const navigate = useNavigate()

  const divElementRef = useRef<HTMLDivElement | null>(null)

  const theme = useContext(ThemeContext)

  const [targetUser, setTargetUser] = useState<UserType>({} as UserType)
  const [apiData, setApiData] = useState<UserType[]>(users)
  useEffect(() => {}, [])

  function saveUser(user: UserType) {
    setTargetUser(user)
  }

  const userNameLetter = (name: string) => {
    return name.substring(0, 1)
  }

  const onDeletePatient = () => {
    const data = apiData
    const targetUserToDelete = data.filter((user) => user.id !== targetUser.id)
    setApiData(targetUserToDelete)

    setTargetUser({} as UserType)
    setIsPopupVisible(false)
  }

  const CardPatient = () => {
    const isDataEmpty = !apiData.length
    const hasUsersData = !isDataEmpty && targetUser.id == null
    const hasUserSelected = !isDataEmpty && targetUser.id !== null

    console.log('isDataEmpty', isDataEmpty)
    console.log('hasUsersData', hasUsersData)
    console.log('hasUserSelected', hasUserSelected)

    const element = (
      <>
        <DisplayHeader>
          <Avatar contentLetter="" />
          <Info>
            {isDataEmpty && <h1>Não há pacientes cadastrados ainda</h1>}
            {hasUsersData && <h1>Clique em um paciente</h1>}
            {hasUserSelected && (
              <>
                <h1>{targetUser.fullName}</h1>
                <h2>Tratamento {targetUser.type}</h2>
                <h3>
                  Próxima consulta:{' '}
                  {formatDate(targetUser.nextConsult, 'complete')}
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
              </>
            )}
          </Info>
        </DisplayHeader>
      </>
    )

    return (
      element || (
        <>
          <h1>hi</h1>
        </>
      )
    )

    if (isDataEmpty) {
      return (
        <DisplayHeader>
          <Avatar contentLetter="" />
          <Info>
            <h1>Não há pacientes cadastrados ainda</h1>
          </Info>
        </DisplayHeader>
      )
    }

    if (hasUsersData) {
      return (
        <DisplayHeader>
          <Avatar contentLetter="" />
          <Info>
            <h1>Clique em um paciente</h1>
          </Info>
        </DisplayHeader>
      )
    } else {
      return (
        <DisplayHeader>
          <Avatar contentLetter={userNameLetter(targetUser.name)} />

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
          {apiData &&
            apiData.map((user) => {
              return (
                <>
                  <IconPatient key={user.id} onClick={() => saveUser(user)}>
                    <CirclePatient contentLetter={userNameLetter(user.name)} />
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

      <>
        {isPopupVisible && (
          <Popup
            title="Ação Necessária"
            nameButton="Confirmar"
            buttonColorVariant={'red'}
            onClose={() => setIsPopupVisible(false)}
            id="modal"
            onHandleAction={() => onDeletePatient()}
          >
            <p>
              A ação{' '}
              <span style={{ color: theme?.['danger-500'] }}>não poderá</span>{' '}
              ser desfeita. Deseja continuar?
            </p>
          </Popup>
        )}
      </>
    </DashboardContainer>
  )
}
