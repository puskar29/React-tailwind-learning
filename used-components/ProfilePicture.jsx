function ProfilePicture(){
    const imageUrl = './src/assets/profile.png';

    const handleClick = (e) => e.target.style.display = "none"

    return(
        <>
        <img src={imageUrl} className="images1" onClick={(e) => handleClick(e)} alt="Profile" />
        </>
    )
}

export default ProfilePicture