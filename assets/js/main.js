
(async () => {
    const profileData = await fetchProfileData()
    console.log(profileData)
    const profileName = await profile.name
    document.innerText.name = profileName
    console.log(profileName)
})()