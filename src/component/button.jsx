import '../styles/button.css'

const Button = ({handleClick}) => {
    return (
        <button onClick={handleClick} className='load-button'>Load More</button>
    )
}

export default Button