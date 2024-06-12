export type TPropsListItem = {
  listing_id: number,
  url?: string,
  title?: string,
  MainImage?: {
    url_570xN: string,
  },
  currency_code?: string,
  price?: string,
  quantity?: number,
};

export const ListItem = (props: TPropsListItem) => {
  const { listing_id, url, price, quantity, MainImage } = props;
  let { currency_code, title } = props;

  if (!quantity || !title || !MainImage) {
    return null;
  };
  
  if (currency_code === 'USD') {
    currency_code = '$';
  } else if (currency_code === 'EUR') {
    currency_code = '€';
  };

  if (title.length > 50) {
    title = title.slice(0, 50) + '...';
  };

  const levelClass = quantity > 20 ? 'level-high' : (quantity > 10 ? 'level-medium' : 'level-low');

  return (
    <div data-item-id={listing_id} className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt="item"/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{currency_code}{price}</p>
        <p className={`item-quantity ${levelClass}`}>{quantity} left</p>
      </div>
    </div>
  )
};
