export const Photo = ( {authorName, link }) => {
  return <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <img style={{ width: '100%', height: '180px', objectFit: 'contain' }} alt={authorName} src={link} />
    <span>{authorName}</span>
  </div>
}