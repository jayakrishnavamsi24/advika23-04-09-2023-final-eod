import { Helmet } from "react-helmet";
import './index.css'

const FaqItem = props => {
  const {faqItem, toggleAnsVisibility} = props
  const {id, questionText, answerText, isAnsVisible} = faqItem

  const onToggleVisibility = () => {
    toggleAnsVisibility(id)
  }

  return (
    <li className="faq-item">
      <div className="question-cont">
        <h1 className="question-text"> {questionText} </h1>
        {!isAnsVisible && (
          <button className='faq-item-btn' type="button" onClick={onToggleVisibility}>
            <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
          </button>
        )}
        {isAnsVisible && (
          <button className='faq-item-btn' type="button" onClick={onToggleVisibility}>
                <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
          </button>
        )}
      </div>
      <div>
        {isAnsVisible && (
          <>
            <hr />
            <p className="answer-text">{answerText}</p>
          </>
        )}
      </div>
      <Helmet>
        {/* Ionicons ES Module */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        {/* Ionicons Nomodule */}
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Helmet>
    </li>
  )
}

export default FaqItem
