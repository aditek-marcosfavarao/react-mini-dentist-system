import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CaretLeft,
  CaretRight,
  FileX,
  PencilSimpleLine,
} from '@phosphor-icons/react'

import { api } from '../../services/api'
// import { formatDate } from '../../common/utils'

import { Popup } from '../../components/Popup'

import { Profile } from '../../@types/profiles'

import {
  DashboardContainer,
  IconPatient,
  NamePatient,
  DashboardNavbar,
  DisplayHeader,
  Info,
  UsersAligment,
  ModalContent,
} from './styles'

import { Avatar } from '../../components/Avatar'

export function Dashboard() {
  const navigate = useNavigate()
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
    const profileList = profilesList
    const currentProfile = profile
    const deletedUser = profileList.filter(
      (profile) => profile.id !== currentProfile.id,
    )
    setProfilesList(deletedUser)
    setProfile({} as Profile)
    setIsPopupVisible(false)
  }

  function Profile(_profile: Profile) {
    const profileLetter = getProfileNameLetter(_profile.user.name)
    const profileName = getProfileFirstAndLastName(_profile.user.name)

    return (
      <>
        <IconPatient onClick={() => handleSelectProfile(_profile)}>
          <Avatar
            contentLetter={profileLetter}
            hasMargin={true}
            variantSize={'small'}
            variantFontSize={'small'}
            variantColorBackground={'gray'}
            variantColorBorder={'gray'}
            variantColorLetter={'green'}
          />
          <NamePatient>{profileName}</NamePatient>
        </IconPatient>
      </>
    )
  }

  function goToEditionPage() {
    const targetProfile = profile
    navigate('/edition', { state: targetProfile })
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
          <Avatar
            contentLetter={avatarLetter}
            hasMargin={true}
            variantSize={'large'}
            variantFontSize={'large'}
            variantColorBackground={'gray'}
            variantColorBorder={'green'}
            variantColorLetter={'green'}
          />
          <Info>
            {isDataEmpty && <h1>Não há pacientes cadastrados ainda</h1>}
            {hasProfileData && <h1>Clique em um paciente</h1>}

            {isProfileSelected && (
              <>
                <h1>{profile.user.name}</h1>
                <h2>Tratamento {profile.treatment.treatmentType}</h2>
                <h3>Próxima consulta: 00</h3>
                <div className="aligment">
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

          {isProfileSelected && (
            <div className="icons">
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
                onClick={goToEditionPage}
              />
            </div>
          )}
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

  return (
    <DashboardContainer>
      <DashboardNavbar hasHeaderContent={hasProfilesInList}>
        <CaretLeft onClick={handleLeftClick} />

        <UsersAligment
          className="divElementRef"
          ref={divElementRef}
          hasManyProfiles={hasManyProfiles}
        >
          {profilesList &&
            profilesList.map((_profile) => {
              return <Profile key={_profile.id} {..._profile} />
            })}
        </UsersAligment>

        <CaretRight onClick={handleRightClick} />
      </DashboardNavbar>

      <CardPatient />

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
