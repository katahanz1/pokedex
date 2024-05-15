import '../styles/menu.css'

const elements = [{
    name: 'Home',
    url: '#'
},
{   
    name: 'Otra',
    url: '#'
}];

const Menu = () => {
    return (
        <nav>
            {elements.map((element, index) => (
                <a href={element.url} key={index}>
                    {element.name}
                </a>
            ))}
        </nav>
    );
};

export default Menu;
