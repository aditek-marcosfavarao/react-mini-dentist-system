import { v4 as uuidv4 } from 'uuid'
import { Client } from '../@types/clients'

export const clients: Client[] = [
  {
    id: String(uuidv4()),
    appointment: {
      lastApointment: new Date(),
      nextApointment: new Date(),
    },
    treatment: {
      treatmentType: '',
      treatmentEnd: new Date(),
      treatmentStart: new Date(),
    },
    user: {
      name: 'Marcos Adriano Lorencini Favarão',
      id: '44313182856',
      document: '499630028',
      birthdate: new Date(),
      age: 28,
      phone: '1632346556',
      celphone: '16998744536',
      email: 'marcos.favarao@aditek.com.br',
      address: {
        address: 'Rua Tamoios',
        number: 235,
        complement: '',
        city: 'Ribeirão Preto',
        uf: 'SP',
        cep: '14031070',
      },
    },
    medicineObservations: '',
    observations: '',
  },
  {
    id: String(uuidv4()),
    appointment: {
      lastApointment: new Date(),
      nextApointment: new Date(),
    },
    treatment: {
      treatmentType: '',
      treatmentEnd: new Date(),
      treatmentStart: new Date(),
    },
    user: {
      name: 'Maria de Lurdes do Calcário',
      id: '01987654321',
      document: '123456789',
      birthdate: new Date(),
      age: 186,
      phone: '1634455667',
      celphone: '16991223344',
      email: '',
      address: {
        address: 'Rua Eliseu Guimarães',
        number: 180,
        complement: '',
        city: 'Leais Paulista',
        uf: 'SP',
        cep: '3450687',
      },
    },
    medicineObservations: '',
    observations: '',
  },
  {
    id: String(uuidv4()),
    appointment: {
      lastApointment: new Date(),
      nextApointment: new Date(),
    },
    treatment: {
      treatmentType: '',
      treatmentEnd: new Date(),
      treatmentStart: new Date(),
    },
    user: {
      name: 'Solange Aparecida',
      id: '01987654321',
      document: '123456789',
      birthdate: new Date(),
      age: 186,
      phone: '1634455667',
      celphone: '16991223344',
      email: '',
      address: {
        address: 'Rua Eliseu Guimarães',
        number: 180,
        complement: '',
        city: 'Leais Paulista',
        uf: 'SP',
        cep: '3450687',
      },
    },
    medicineObservations: '',
    observations: '',
  },
]
