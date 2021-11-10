function Storage(props) {
  const LocalStorage = ({ type, keys, value, onLocalStorage }) => {
    switch (type) {
      case "set":
        keys !== undefined && localStorage.setItem(keys, value);
        break;
      case "get":
        keys !== undefined && onLocalStorage(localStorage.getItem(keys));
        break;
      case "remove":
        keys !== undefined && localStorage.removeItem(keys);
        break;
      case "clear":
        keys !== undefined && localStorage.clear();
        break;
      default:
        alert("localStorage type undefined");
        break;
    }
  };

  return <div>{LocalStorage(props)}</div>;
}

export default Storage;
