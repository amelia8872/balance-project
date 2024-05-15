function ListEntries({entries, type, onDelete}) {
  return (
    <div>
      <h2>{type}</h2>
      {entries.map((entry, index) =>
          <div key={index}>
            <span>{entry.description}</span>
            <span>{entry.amount}</span>
            <button onClick={() => onDelete(type, entry.id)}>Delete</button>
          </div>
      )}

      <div>Total: ${entries.reduce((acc, curr) => acc + curr.amount, 0)}</div>
    </div>
  )
}

export default ListEntries;