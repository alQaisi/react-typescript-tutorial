export type ProfileProps={
    name:string
}

function Profile({name}:ProfileProps) {
    return (
        <div>
            { name }
            Private Profile component
        </div>
    );
}

export default Profile;