import * as zod from 'zod'

export const formSchema = zod.object({
  lastApointment: zod.coerce.date(),
  nextApointment: zod.coerce.date(),
  treatmentType: zod.string().min(1, { message: 'Treatment is required' }),
  treatmentStart: zod.coerce.date(),
  treatmentEnd: zod.coerce.date().optional().or(zod.literal('')),
  userName: zod.string().min(1, 'User name is required').max(100).trim(),
  userID: zod.string().min(1, 'User id is required').max(11).trim(),
  userDocument: zod.string().min(1, 'User document is required').max(9).trim(),
  userBirthdate: zod.coerce.date(),
  userAge: zod.coerce
    .number()
    .min(1, { message: 'User age is required' })
    .int()
    .positive(),
  userPhone: zod.string().trim().optional(),
  userCelPhone: zod.string().trim().optional(),
  userEmail: zod
    .string()
    .nonempty('O email é obrigatório')
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase()
    .min(1, { message: 'Email is required' })
    .trim(),
  userAddress: zod.string().min(1, { message: 'User address is required' }),
  userAddressNumber: zod.coerce
    .number()
    .min(1, { message: 'User address number is required' })
    .int()
    .positive(),
  userAddressComplement: zod.string().trim().optional().or(zod.literal('')),
  userAddressCity: zod
    .string()
    .min(1, { message: 'User address city is required' })
    .trim(),
  userAddressUF: zod
    .string()
    .toLowerCase()
    .min(2, { message: 'User address UF is required' })
    .max(2)
    .trim(),
  userAddressCEP: zod.coerce
    .number()
    .min(1, { message: 'User address number is required' })
    .int()
    .positive(),
  medicineObservations: zod.string().trim().optional(),
  observations: zod.string().trim().optional(),
})

export type FormData = zod.infer<typeof formSchema>

export const defaultFormValues = {
  lastApointment: new Date(),
  nextApointment: new Date(),
  treatmentType: '',
  treatmentStart: new Date(),
  treatmentEnd: '',
  userName: '',
  userID: '',
  userDocument: '',
  userBirthdate: new Date(),
  userAge: 0,
  userPhone: '',
  userCelPhone: '',
  userEmail: '',
  userAddress: '',
  userAddressNumber: 0,
  userAddressComplement: '',
  userAddressCity: '',
  userAddressUF: '',
  userAddressCEP: 0,
  medicineObservations: '',
  observations: '',
}
