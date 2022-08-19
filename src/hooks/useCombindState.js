import { useEffect, useState } from "react";

export const useCombindState = (defaultValue, valueInitializer = () => {}) => {
    const [state, setState] = useState(defaultValue);

	useEffect(() => {
		valueInitializer();
	},[]);

	const mergeState = (newState) => {
		setState(mergeObject(state, newState));
	}
	return [state, mergeState];
}

const mergeObject = (oldObject, newObject) => {
	const mergedObject = {...oldObject};
	for (const [key, value] of Object.entries(newObject)) {
		if (typeof mergedObject[key] === 'object' && typeof value === 'object') {
			mergedObject[key] = mergeObject(mergedObject[key], value);
		} else {
			mergedObject[key] = value;
		}
	}
	return mergedObject;
}