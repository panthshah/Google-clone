function Avatar({ url }) {
    return (
    <img 
    loading="lazy"
    className="rounded-lg h-10"
    src={url}
    alt="profile picture"   
    />
    );
}

export default Avatar;