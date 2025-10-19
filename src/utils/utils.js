export function formatDate(timestamp, options = {}) {
	// Return empty string for falsy timestamps
	if (!timestamp) return '';

	const date = new Date(timestamp);

	// Default formatting: "Oct 19, 2025, 02:23 PM" (locale-aware)
	const defaultOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	};

	const formatter = new Intl.DateTimeFormat(undefined, { ...defaultOptions, ...options });
	return formatter.format(date);
}