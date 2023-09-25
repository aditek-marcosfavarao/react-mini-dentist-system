import { v4 as uuidv4 } from 'uuid'
import { Profile } from '../@types/profiles'

export const profiles: Profile[] = [
  {
    id: String(uuidv4()),
    appointment: {
      lastApointment: new Date(),
      nextApointment: new Date(),
    },
    treatment: {
      treatmentType: 'Alinhador de reposição',
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
      treatmentType: 'Self plan',
      treatmentEnd: new Date(),
      treatmentStart: new Date(),
    },
    user: {
      name: 'Maria de Lurdes do Calcário',
      id: '12345678901',
      document: '123456789',
      birthdate: new Date(),
      age: 186,
      phone: '1633334444',
      celphone: '16933334444',
      email: '',
      address: {
        address: 'Rua Guilheme Tinoco',
        number: 333,
        complement: '',
        city: 'Mineiro Verde',
        uf: 'MG',
        cep: '15333000',
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
      treatmentType: 'Print 3D',
      treatmentEnd: new Date(),
      treatmentStart: new Date(),
    },
    user: {
      name: 'Solange Aparecida',
      id: '10987654321',
      document: '109876543',
      birthdate: new Date(),
      age: 45,
      phone: '1633335555',
      celphone: '16933335555',
      email: '',
      address: {
        address: 'Rua Pontife Supremo',
        number: 777,
        complement: '',
        city: 'Bragança Paulista',
        uf: 'SP',
        cep: '15444000',
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
      treatmentType: 'Colagem indireta',
      treatmentEnd: new Date(),
      treatmentStart: new Date(),
    },
    user: {
      name: 'Ricardo Salles dos Santos',
      id: '11122233344',
      document: '111222333',
      birthdate: new Date(),
      age: 33,
      phone: '1633336666',
      celphone: '16933336666',
      email: '',
      address: {
        address: 'Rua Tinoco Cabraú',
        number: 666,
        complement: '',
        city: 'Rodovia 666',
        uf: 'SP',
        cep: '1566600',
      },
    },
    medicineObservations: '',
    observations: '',
  },
]
