  interface CredentialIDProps{
  params: Promise<{ executionID : string}>
}

const ExecutionID = async ({params}:CredentialIDProps) => {

  const {executionID} = await params;

  return (  
    <div>
        <p> Execution id :{executionID} </p>
    </div>
  )
}

export default ExecutionID
