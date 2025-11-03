  interface CredentialIDProps{
  params: Promise<{ workflowIDs : string}>
}

const WorkflowId = async ({params}:CredentialIDProps) => {

  const {workflowIDs } = await params;

  return (
    <div>
        <p> Workflow id :{workflowIDs } </p>
    </div>
  )
}

export default WorkflowId
