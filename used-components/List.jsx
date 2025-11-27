import PropTypes from 'prop-types'

function List(props) {

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order 
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical order 
    // fruits.sort((a,b) => a.calories - b.calories) //Numeric order
    // fruits.sort((a,b) => b.calories - a.calories) //Reverse Numeric order
    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); //Below than 100
    // const HighCalFruit = fruits.filter(fruit => fruit.calories >= 100); //Is equal to 100 or more than 100

    const category = props.category || List.defaultProps.category;
    const itemList = props.items || List.defaultProps.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp; <b>{item.calories}</b>
    </li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
        name : PropTypes.string,
        calories : PropTypes.number
    }))

}

List.defaultProps = {
    category : "Category",
    items: [],
}
export default List

//   const fruits = [{id: 1, name: "apple", calories: "apple" },
//   {id: 2, name: "orange", calories: 30 },
//   {id: 3, name: "banana", calories: 160 },
//   {id: 4, name: "coconut", calories: 70 }
//   ];

//   const vegetables = [{id: 5, name: "onion", calories: 100 },
//   {id: 6, name: "garlic", calories: 90 },
//   {id: 7, name: "pumpkin", calories: 110 },
//   {id: 8, name: "cauliflower", calories: 120 }
//   ];

//   return (
//     <>
//       {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      
//       {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
//     </>
//   )