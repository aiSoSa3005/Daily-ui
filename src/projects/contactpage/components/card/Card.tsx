import './Card.css'

interface Props{
    title: string
    description: string
    email: string
}

const Card = ({title,description,email}:Props) => {
  return (
    <article className="card">
      <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <a href="">{email}</a>
      
    </article>
  )
}

export default Card
