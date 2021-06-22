/* eslint-disable import/no-anonymous-default-export */
export const hasObjectValue = (obj: any, key: string) => {
	return key.split('.').every((x: any) => {
		if (typeof obj !== 'object' || obj === null || !(x in obj)) return false;
		obj = obj[x];
		return true;
	});
};

export const hasValue = (val: any, key: string) => {
	return key in val;
};

export default {
	hasObjectValue,
	hasValue,
};
