  interface CredentialIDProps{
  params: Promise<{ credentialID : string}>
}

const CredentialID = async ({params}:CredentialIDProps) => {

  const {credentialID} = await params;

  return (
    <div>
        <p> Credentials id :{credentialID} </p>
    </div>
  )
}

export default CredentialID
