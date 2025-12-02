import './ReportesResumen.css'

function ReportesResumen() {
  const reportes = [
    { id: '001', prioridad: 'Media', estatus: 'En proceso' },
    { id: '002', prioridad: 'Alta', estatus: 'En proceso'},
    { id: '003', prioridad: 'Baja', estatus: 'En proceso' }
  ]

  return (
    <div className="resumen-reportes">
      {reportes.map((r) => (
        <div key={r.id} className="reporte-card">
          <h3>Reporte #{r.id}</h3>
          <p>Prioridad: {r.prioridad}</p>
          {r.estatus && <p>Estatus: {r.estatus}</p>}
        </div>
      ))}
    </div>
  )
}

export default ReportesResumen
