import React from 'react'
import {
  CaretLeft,
  CaretRight,
  FileX,
  PencilSimpleLine,
} from '@phosphor-icons/react'

import { api } from '../../services/api'
import { formatDate } from '../../common/utils'

import { Popup } from '../../components/Popup'

import { Profile } from '../../@types/profiles'

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
  CardInfoIcons,
  ModalContent,
  Card,
  DashboardContent,
} from './styles'

export function Dashboard() {
  const navbarElementsCapacity = 10

  const divElementRef = React.useRef<HTMLDivElement | null>(null)

  const [profilesList, setProfilesList] = React.useState<Profile[]>([])
  const [profile, setProfile] = React.useState<Profile>({} as Profile)
  const [isPopupVisible, setIsPopupVisible] = React.useState(false)

  function handleLeftClick() {
    if (typeof divElementRef === 'undefined') return
    divElementRef.current!.scrollLeft -= divElementRef.current!.offsetWidth
  }

  function handleRightClick() {
    divElementRef.current!.scrollLeft += divElementRef.current!.offsetWidth
  }

  function handleSelectProfile(_profile: Profile) {
    setProfile(_profile)
  }

  function getProfileFirstAndLastName(name: string) {
    const splittedName = name.split(' ')
    return splittedName[0] + ' ' + splittedName[splittedName.length - 1]
  }

  const getProfileNameLetter = (name: string) => {
    return name.substring(0, 1)
  }

  const onDeletePatient = () => {
    // const data = userList
    // const targetUserToDelete = data.filter((user) => user.id !== targetUser.id)
    // setUserList(targetUserToDelete)
    // setTargetUser({} as UserType)
    // setIsPopupVisible(false)
  }

  function Profile(_profile: Profile) {
    const profileLetter = getProfileNameLetter(_profile.user.name)
    const profileName = getProfileFirstAndLastName(_profile.user.name)

    return (
      <>
        <IconPatient onClick={() => handleSelectProfile(_profile)}>
          <CirclePatient contentLetter={profileLetter} />
          <NamePatient>{profileName}</NamePatient>
        </IconPatient>
      </>
    )
  }

  const CardPatient = () => {
    const isDataEmpty = !profilesList.length
    const isProfileSelected = !!Object.keys(profile).length
    const hasProfileData = !isDataEmpty && !isProfileSelected

    const avatarLetter = isProfileSelected
      ? getProfileNameLetter(profile.user.name)
      : ''

    const renderElement = (
      <>
        <DisplayHeader>
          <Avatar contentLetter={avatarLetter} />

          <Info>
            {isDataEmpty && <h1>Não há pacientes cadastrados ainda</h1>}
            {hasProfileData && <h1>Clique em um paciente</h1>}

            {isProfileSelected && (
              <>
                <h1>{profile.user.name}</h1>
                <h2>Tratamento: {profile.treatment.treatmentType}</h2>
                <h3>Próxima consulta: 0</h3>
                <div>
                  <h3>
                    {profile.user.address.address &&
                      profile.user.address.address}
                    ,{' '}
                    {profile.user.address.number && profile.user.address.number}
                  </h3>
                  <h3>
                    {profile.user.address.city && profile.user.address.city} /{' '}
                    {profile.user.address.uf && profile.user.address.uf}
                  </h3>
                </div>
              </>
            )}
          </Info>
          {/* <Info>
            {isDataEmpty && <h1>Não há pacientes cadastrados ainda</h1>}

            {hasUsersData && <h1>Clique em um paciente</h1>}

            {hasUserSelected && (
              <>
                <h1>{profile.user.name}</h1>
                <h2>Tratamento: {profile.treatment.treatmentType}</h2>
                <h3>Próxima consulta: {nextAppointment}</h3>
                <div>
                  <h3>
                    {profile.user.address.address &&
                      profile.user.address.address}
                    ,{' '}
                    {profile.user.address.number && profile.user.address.number}
                  </h3>
                  <h3>
                    {profile.user.address.city && profile.user.address.city} /{' '}
                    {profile.user.address.uf && profile.user.address.uf}
                  </h3>
                </div>

                <CardInfoIcons>
                  <FileX
                    className="iconDeletCard"
                    onClick={() => {
                      return setIsPopupVisible(true)
                    }}
                  />

                  <PencilSimpleLine
                    className="iconEditCard"
                    // onClick={() => {
                    //   localStorage.setItem('user', JSON.stringify(targetUser))
                    //   navigate('/edition')
                    // }}
                  />
                </CardInfoIcons>
              </>
            )}
          </Info> */}
        </DisplayHeader>
      </>
    )

    return renderElement
  }

  React.useEffect(() => {
    ;(async function () {
      try {
        const response = await api.get('/profiles')
        setProfilesList(response.data.profiles)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const hasProfilesInList = !profilesList.length
  const hasManyProfiles = profilesList.length > navbarElementsCapacity

  const avatarLetter = 'M'
  return (
    <DashboardContainer>
      <DashboardNavbar hasHeaderContent={hasProfilesInList}>
        <CaretLeft onClick={handleLeftClick} />

        <UsersAligment ref={divElementRef} hasManyProfiles={hasManyProfiles}>
          {profilesList &&
            profilesList.map((_profile) => {
              return <Profile key={_profile.id} {..._profile} />
            })}
        </UsersAligment>

        <CaretRight onClick={handleRightClick} />
      </DashboardNavbar>

      <DashboardContent></DashboardContent>

      {/* modal */}
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
            <ModalContent>
              <p>
                A ação <span>não poderá</span> ser desfeita. Deseja continuar?
              </p>
            </ModalContent>
          </Popup>
        )}
      </>
    </DashboardContainer>
  )
}
