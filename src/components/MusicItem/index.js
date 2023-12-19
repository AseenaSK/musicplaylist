import './index.css'

const MusicItem = props => {
  const {musicitemDetails, deleteItem} = props
  const {imageUrl, name, genre, duration, id} = musicitemDetails
  const onClickDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <div className="image-name-con">
        <img src={imageUrl} alt="track" className="image" />
        <div className="name-genre-con">
          <p className="h1">{name}</p>
          <p className="p2">{genre}</p>
        </div>
      </div>
      <div className="time-delte-con">
        <p className="h1">{duration}</p>
        <button data-testId="delete" type="button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default MusicItem
