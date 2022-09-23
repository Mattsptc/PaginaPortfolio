
function updateProfileInfo(profileData) {
    const photo = document.querySelector('#profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    const name = document.querySelector('#profile.name')
    const job = document.querySelector('#profile.job')
    const location = document.querySelector('#profile.location')
    const phone = document.querySelector('#profile.phone')
    const email = document.querySelector('#profile.email')

}
(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()