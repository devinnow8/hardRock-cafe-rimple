import React from "react";
import FoodItem from "./FoodItem";

const MainBody = ({ foodItemsData, ontoggleAddItem, onaddItem, ontoggleRemoveItem, onbuttondisableItem, disableItem }) => {
	return (
		<div className="fooditem-container">
			{foodItemsData.map((item, index) => {
				const foodItem = onaddItem.find((x) => x.id === item.id);
				return (
					<FoodItem
						ontoggleAddItem={ontoggleAddItem}
						item={item}
						selectedItem={foodItem}
						index={index}
						image={item.image}
						title={item.title}
						ontoggleRemoveItem={ontoggleRemoveItem}
						onbuttondisableItem={onbuttondisableItem}
						ondisableItem={disableItem}
					/>
				);
			})}
		</div>
	);
};
export default MainBody;
