import {useState} from "react"

export function useFocus()
{
	const [focusedItem, setFocusedItem] = useState(null)

	const isItemFocused = (item) => focusedItem === item

	const isOtherItemFocused = (item) =>
	{
		if (focusedItem === null)
			return false

		return focusedItem !== item
	}

	const assignFocus = (item) => setFocusedItem(item)
	const unassignFocus = (item) =>
	{
		if (focusedItem === item)
		{
			setFocusedItem(null)
		}
	}

	return {
		getFocusedItem: () => focusedItem,
		isItemFocused,
		isOtherItemFocused,
		assignFocus,
		unassignFocus,
	}
}
