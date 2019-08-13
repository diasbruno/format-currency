exports.formatCurrency = (value, decimalChar, fractionChar, decimalPlaces) => {
	decimalChar = decimalChar || ".";
	fractionChar = fractionChar || ",";
	decimalPlaces = decimalPlaces || 2;
	const normalized = parseFloat(value).toFixed(decimalPlaces);
	const pointIndex = normalized.indexOf('.');
	const decimal = normalized.slice(0, pointIndex);
	const fraction = normalized.slice(pointIndex + 1, normalized.length);
	const offset = decimal.length % 3;
	const punct = decimal.length > 3;
	let res = !punct ? decimal : decimal.slice(0, offset);
	for (let i = offset; decimal.length > 3 && i < decimal.length; i += 3) {
		res += (i == 0 ? '' : decimalChar) + decimal.slice(i, i + 3);
	}
	res += fractionChar + fraction;
	return res;
};
