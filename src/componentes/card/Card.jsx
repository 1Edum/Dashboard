import PropTypes from 'prop-types';
import './card.scss'

// Definição do componente Card
function Card({ children, title }) {
  return (
    <div className='card'>
        <h2>{title}</h2>
        {children}
    </div>
  );
}

// Definição dos propTypes
Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Card;
