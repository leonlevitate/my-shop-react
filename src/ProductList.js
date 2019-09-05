import React from "react";
class ProductList extends React.Component {
  render() {
    return (
      <ul>
        <h3>Traditional Merlot</h3>
        <p>
          A bottle of middle weight wine, lower in tannins (smoother), with a
          more red-fruited flavor profile.
        </p>
        <h3>Classic Chianti</h3>
        <p>
          A medium-bodied wine characterized by a marvelous freshness with a
          lingering, fruity finish
        </p>
        <h3>Chardonnay</h3>
        <p>
          A dry full-bodied white wine with spicy, bourbon-y notes in an elegant
          bottle
        </p>
        <h3>Brunello di Montalcino</h3>
        <p>
          A bottle red wine with exceptionally bold fruit flavors, high tannin,
          and high acidity
        </p>
      </ul>
    );
  }
}
export default ProductList;
