import '../../App.css';
import { ListItem, TPropsListItem } from '../ListItem';

type TProps = {
  items: TPropsListItem[] | [];
};

export const Listing = ({ items = [] }: TProps) => {
  return (
    <div className="item-list">
      {items.map((el: TPropsListItem) => 
        <ListItem 
          listing_id={el.listing_id}
          key={el.listing_id}
          url={el.url}
          title={el.title}
          price={el.price}
          quantity={el.quantity}
          currency_code={el.currency_code}
          MainImage={el.MainImage} 
        />
      )}
    </div>
  )
};
