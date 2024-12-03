import useSWR from "swr";


async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

function UpdatedAt() {
  const {isLoading, data} = useSWR("api/v1/status", fetchAPI, {
    refreshInterval: 4000,
  });
  let updatedAtText = 'Carregando...'

  if(!isLoading && data) {
    updatedAtText = new Date().toLocaleString('pt-BR')
  }
  return <div>Última Atualização: {updatedAtText} </div>
}

function MaxConnections(){
  const {isLoading, data} = useSWR("api/v1/status", fetchAPI, {
    refreshInterval: 4000,
  });
  let maxConnections = 'Carregando ...'
  let openedConnections = 'Carregando ...'
  let postgresVersion = 'Carregando ...'
  
  if(!isLoading && data) {
    maxConnections = data.dependencies.database.max_connections
    openedConnections = data.dependencies.database.opened_connections
    postgresVersion = data.dependencies.database.version
  }
  return (
  <>
  <div>Conexões Máximas: {maxConnections}</div>
  <div>Conexões Abertas: {openedConnections}</div>
  <div>Versão: {postgresVersion}</div>
  </>
  )
}


export default function StatusPage() {
  
  return (
    <div>
      <h1>Status Page</h1>
      <UpdatedAt/>
      <MaxConnections/>
    </div>
  )
}