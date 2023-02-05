import "./Card.scss"
import { NewsType } from "../types/globalTypes"

type Props = {
  newsItem: NewsType
  children?: React.ReactNode
}
const Card: React.FC<Props> = ({ newsItem, children }) => {
  const redirectToWebPage = () => {
    window.open(newsItem.url)
  }
  return (
    <div className="card" onClick={redirectToWebPage}>
      {children}
    </div>
  )
}

export default Card
