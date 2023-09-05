import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList,
    }
  }

  toggleAnsVisibility = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaq => {
        if (id === eachFaq.id) {
          return {...eachFaq, isAnsVisible: !eachFaq.isAnsVisible}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
        <div className="faqCont">
          <h1 className="faqs-title"> FAQs </h1>
          <ul className='faqs-list'>
            {faqsList.map(eachFaq => (
              <FaqItem
                faqItem={eachFaq}
                key={eachFaq.id}
                toggleAnsVisibility={this.toggleAnsVisibility}
              />
            ))}
          </ul>
        </div>
    )
  }
}

export default Faqs
