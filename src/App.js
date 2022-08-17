import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Кросівки дитячі Clibee",
          img: "cros1.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 32-37",
          category: "Sneakers",
          price: "300 грн ",
        },
        {
          id: 2,
          title: "Кросівки дитячі Clibee",
          img: "cros2.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 27-35",
          category: "Sneakers",
          price: "290 грн ",
        },
        {
          id: 3,
          title: "Кросівки дитячі Clibee",
          img: "cros3.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 30-37",
          category: "Sneakers",
          price: "270 грн ",
        },
        {
          id: 4,
          title: "Кросівки дитячі Clibee",
          img: "cros4.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 22-27",
          category: "Sneakers",
          price: "230 грн ",
        },
        {
          id: 5,
          title: "Кросівки дитячі Clibee",
          img: "cros5.png",
          desc: "Кросівки дитячі на хлобчика розмір 22-30",
          category: "Sneakers",
          price: "250 грн ",
        },
        {
          id: 6,
          title: "Кросівки дитячі Clibee",
          img: "cros6.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 33-37",
          category: "Sneakers",
          price: "350 грн ",
        },
        {
          id: 7,
          title: "Кросівки дитячі Clibee",
          img: "cros7.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 25-29",
          category: "Sneakers",
          price: "280 грн ",
        },
        {
          id: 8,
          title: "Кросівки дитячі Clibee",
          img: "cros8.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 32-37",
          category: "Sneakers",
          price: "260 грн ",
        },
        {
          id: 9,
          title: "Кросівки дитячі Clibee",
          img: "cros9.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 22-30",
          category: "Sneakers",
          price: "220 грн ",
        },
        {
          id: 10,
          title: "Кросівки дитячі Clibee",
          img: "cros10.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 32-37",
          category: "Sneakers",
          price: "320 грн ",
        },
        {
          id: 11,
          title: "Кросівки дитячі Clibee",
          img: "cros1.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 32-37",
          category: "Sneakers",
          price: "300 грн ",
        },
        {
          id: 12,
          title: "Кеди дитячі Clibee",
          img: "cros12.jpg",
          desc: "Кросівки дитячі на хлобчика розмір 22-37",
          category: "Loafers",
          price: "250 грн ",
        },
        {
          id: 13,
          title: "Джегінси жіночі 25-40",
          img: "dj1.jpg",
          desc: "Джегінси жіночі 25-40 модель 5037",
          category: "Pants",
          price: "430 грн ",
        },
        {
          id: 14,
          title: "Джегінси жіночі 28-42",
          img: "dj2.jpg",
          desc: "Джегінси жіночі 28-42 модель 5332",
          category: "Pants",
          price: "300 грн ",
        },
        {
          id: 15,
          title: "Джегінси жіночі 25-36",
          img: "dj3.jpg",
          desc: "Джегінси жіночі 25-36 модель 5135",
          category: "Pants",
          price: "300 грн ",
        },
        {
          id: 16,
          title: "Джинси чоловічі 36-46",
          img: "dj4.jpg",
          desc: "Джинси чоловічі 36-46 сіри потерті",
          category: "Jeans",
          price: "299 грн ",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}

        <Footer />
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
