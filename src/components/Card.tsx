import "./Card.scss"
import { NewsType } from "../types/globalTypes"

type Props = {
  newsItem: NewsType
  children?: React.ReactNode
}
const Card: React.FC<Props> = ({ newsItem, children }) => {
  const test = () => {
    window.open(newsItem.url)
  }
  return (
    <div className="card" onClick={test}>
      {children}
    </div>
  )
}

export default Card
