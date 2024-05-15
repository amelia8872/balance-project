function ListEntries({entries, type}) {
  return (
    <div>
      <h2>{type}</h2>
      {entries.map((entry, index) =>
          <div key={index}>
            <span>{entry.description}</span>
            <span>{entry.amount}</span>
          </div>
      )}
    </div>
  )
}

export default ListEntries;